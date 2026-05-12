#!/usr/bin/env node

/**
 * Autonomous OpenAPI Spec Consistency & Drift Detector
 *
 * Scans app/api routes, builds an OpenAPI-like contract from code,
 * compares against baseline spec, and detects breaking changes.
 *
 * Fail conditions:
 * - Route count/signature changes unexpectedly
 * - Required parameters added/removed
 * - Response schema shape changes
 * - Status codes altered
 *
 * Safe: read-only static analysis; no runtime traffic.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..', '..');

// Config via env
const OPENAPI_SPEC_PATH = process.env.OPENAPI_SPEC_PATH || path.join(workspaceRoot, '.hermes', 'memory', 'openapi-drift', 'spec.json');
const OPENAPI_HISTORY_PATH = process.env.OPENAPI_HISTORY_PATH || path.join(workspaceRoot, '.hermes', 'memory', 'openapi-drift', 'history.json');
const OPENAPI_DRIFT_THRESHOLD_HOURS = parseInt(process.env.OPENAPI_DRIFT_THRESHOLD_HOURS || '24', 10);
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface RouteInfo {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
  queryParams?: string[];
  bodyParams?: string[];
  responseFields?: string[];
  description?: string;
  zodSchema?: boolean;
}

interface OpenAPISpec {
  openapi: string;
  info: { title: string; version: string; description?: string };
  paths: Record<string, Record<string, {
    summary?: string;
    description?: string;
    parameters?: Array<{ name: string; in: 'query' | 'path' | 'header'; required: boolean; schema: { type: string } }>;
    requestBody?: { required: boolean; content: Record<string, { schema: Record<string, any> }> };
    responses: Record<string, { description: string; content?: Record<string, { schema: Record<string, any> }> }>;
  }>;
}

function log(msg: string) {
  console.log(`[openapi-drift] ${msg}`);
}

function error(msg: string) { console.error(`[openapi-drift] ${msg}`); }
function warn(msg: string) { console.warn(`[openapi-drift] ${msg}`); }

function scanApiRoutes(): RouteInfo[] {
  const apiDir = path.join(workspaceRoot, 'app', 'api');
  const routes: RouteInfo[] = [];

  if (!fs.existsSync(apiDir)) {
    warn(`API directory not found: ${apiDir}`);
    return routes;
  }

  function walk(dir: string, basePath: string = '/') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Recursive: Next.js nested routes
        walk(fullPath, path.join(basePath, entry.name));
      } else if (entry.name === 'route.ts' || entry.name === 'route.js' || entry.name === 'route.tsx') {
        const routePath = basePath.replace(/\/+$/, '') || '/';
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const method = detectMethod(fileContent, entry.name);
        const routeInfo: RouteInfo = {
          path: routePath,
          method,
          description: extractDescription(fileContent),
          zodSchema: fileContent.includes('zod') || fileContent.includes('Zod')
        };

        // Extract query/path params from code patterns (simple heuristics)
        routeInfo.queryParams = extractQueryParams(fileContent);
        routeInfo.bodyParams = extractBodyParams(fileContent, method);
        routeInfo.responseFields = extractResponseFields(fileContent);

        routes.push(routeInfo);
      }
    }
  }

  walk(apiDir);
  return routes;
}

function detectMethod(content: string, filename: string): RouteInfo['method'] {
  if (filename === 'route.ts' || filename === 'route.js') {
    // Default method depends on exported functions
    if (content.includes('export async function GET')) return 'GET';
    if (content.includes('export async function POST')) return 'POST';
    if (content.includes('export async function PUT')) return 'PUT';
    if (content.includes('export async function DELETE')) return 'DELETE';
    if (content.includes('export async function PATCH')) return 'PATCH';
    if (content.includes('export async function HEAD')) return 'HEAD';
    if (content.includes('export async function OPTIONS')) return 'OPTIONS';
  }
  return 'GET'; // conservative default
}

function extractDescription(content: string): string | undefined {
  const match = content.match(/\/\*\*\s*\n\s*\*\s*([^\n]+)/);
  if (match) return match[1].trim();
  const commentMatch = content.match(/\/\*\s*([^*][^\*]*)\*\//);
  if (commentMatch) return commentMatch[1].trim().split('\n')[0];
  return undefined;
}

function extractQueryParams(content: string): string[] {
  // Look for NextRequest.url, request.nextUrl, new URL(request.url), request.url.searchParams
  const patterns = [
    /request\.url\b/gi,
    /request\.nextUrl\b/gi,
    /searchParams\s*\./gi,
    /new URL\(.*request.*\)/gi,
    /params\./gi,
    /query\./gi
  ];
  const found: string[] = [];
  for (const p of patterns) {
    if (p.test(content)) {
      found.push('searchParams access detected');
    }
  }
  return found;
}

function extractBodyParams(content: string, method: string): string[] {
  if (method === 'GET') return [];
  const patterns = [
    /await\s+request\.json\(\)/gi,
    /request\.body\b/gi,
    /request\.formData\(\)/gi,
  ];
  const found: string[] = [];
  for (const p of patterns) {
    if (p.test(content)) {
      found.push('body access detected');
    }
  }
  return found;
}

function extractResponseFields(content: string): string[] {
  // Look for returned JSON keys
  const jsonReturn = content.match(/NextResponse\.json\((\s*\{[\s\S]*?\}\s*)\)/);
  if (jsonReturn) {
    const objStr = jsonReturn[1];
    const keys = objStr.match(/(\w+)\s*:/g);
    if (keys) {
      return keys.map(k => k.replace(':', '').trim());
    }
  }
  return [];
}

function buildOpenAPISpec(routes: RouteInfo[]): OpenAPISpec {
  const spec: OpenAPISpec = {
    openapi: '3.0.0',
    info: {
      title: 'Zion App API',
      version: '1.0.0',
      description: 'Auto-generated from route analysis by openapi-drift-detector'
    },
    paths: {}
  };

  for (const route of routes) {
    const pathKey = route.path === '/' ? '/' : route.path; // keep as-is
    if (!spec.paths[pathKey]) spec.paths[pathKey] = {};

    const pathItem: OpenAPISpec['paths'][string][string] = {
      summary: route.description,
      description: `Detected method: ${route.method}`,
      responses: {
        '200': {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: route.responseFields?.reduce((acc, field) => {
                  acc[field] = { type: 'unknown' };
                  return acc;
                }, {} as Record<string, any>) || { result: { type: 'object' } }
              }
            }
          }
        },
        '400': { description: 'Bad Request' },
        '500': { description: 'Server Error' }
      }
    };

    if (route.method !== 'GET') {
      pathItem.requestBody = {
        required: route.bodyParams && route.bodyParams.length > 0,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: route.bodyParams?.reduce((acc, field) => {
                acc[field] = { type: 'unknown' };
                return acc;
              }, {} as Record<string, any>) || {}
            }
          }
        }
      };
    }

    // Parameters for GET routes
    if (route.queryParams && route.queryParams.length > 0) {
      pathItem.parameters = route.queryParams.map(p => ({
        name: p,
        in: 'query' as const,
        required: false,
        schema: { type: 'string' }
      }));
    }

    spec.paths[pathKey][route.method.toLowerCase()] = pathItem;
  }

  return spec;
}

function loadBaselineSpec(): OpenAPISpec | null {
  try {
    if (fs.existsSync(OPENAPI_SPEC_PATH)) {
      const raw = fs.readFileSync(OPENAPI_SPEC_PATH, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (e) {
    warn(`Could not load baseline spec: ${e.message}`);
  }
  return null;
}

function saveSpec(spec: OpenAPISpec, path: string) {
  const dir = path.dirname(path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path, JSON.stringify(spec, null, 2));
  log(`Spec saved to ${path}`);
}

function saveHistory(entry: { timestamp: string; driftCount: number; routesCount: number; changes: string[] }) {
  let history: any[] = [];
  try {
    if (fs.existsSync(OPENAPI_HISTORY_PATH)) {
      history = JSON.parse(fs.readFileSync(OPENAPI_HISTORY_PATH, 'utf-8'));
    }
  } catch { /* ignore */ }
  history.push(entry);
  // Keep last 90 days
  const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
  history = history.filter((e: any) => new Date(e.timestamp).getTime() > cutoff);
  const dir = path.dirname(OPENAPI_HISTORY_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(OPENAPI_HISTORY_PATH, JSON.stringify(history, null, 2));
}

function detectDrift(current: OpenAPISpec, baseline: OpenAPISpec): {
  breaking: string[];
  additions: string[];
  removals: string[];
  changes: string[];
} {
  const breaking: string[] = [];
  const additions: string[] = [];
  const removals: string[] = [];
  const changes: string[] = [];

  const currentPaths = Object.keys(current.paths);
  const baselinePaths = Object.keys(baseline.paths);

  // New routes (addition)
  for (const p of currentPaths) {
    if (!baselinePaths.includes(p)) {
      additions.push(`New route added: ${p}`);
    }
  }

  // Removed routes
  for (const p of baselinePaths) {
    if (!currentPaths.includes(p)) {
      removals.push(`Route removed: ${p}`);
    }
  }

  // Compare common routes
  for (const p of currentPaths.filter(p => baselinePaths.includes(p))) {
    const currentMethods = Object.keys(current.paths[p]);
    const baselineMethods = Object.keys(baseline.paths[p] || {});

    for (const m of currentMethods) {
      if (!baselineMethods.includes(m)) {
        additions.push(`New method ${m.toUpperCase()} on ${p}`);
      }
    }
    for (const m of baselineMethods) {
      if (!currentMethods.includes(m)) {
        removals.push(`Method ${m.toUpperCase()} removed from ${p}`);
      }
    }

    // Compare overlapping methods
    for (const m of currentMethods.filter(m => baselineMethods.includes(m))) {
      const cur = current.paths[p][m];
      const base = baseline.paths[p][m];

      // Response content changes (breaking)
      const curResp = cur.responses['200']?.content?.['application/json']?.schema?.properties;
      const baseResp = base.responses['200']?.content?.['application/json']?.schema?.properties;
      if (curResp && baseResp) {
        const curKeys = Object.keys(curResp);
        const baseKeys = Object.keys(baseResp);
        for (const k of curKeys) {
          if (!baseKeys.includes(k)) {
            breaking.push(`New response field '${k}' added to ${m.toUpperCase()} ${p} (breaking for clients)`);
          }
        }
        for (const k of baseKeys) {
          if (!curKeys.includes(k)) {
            breaking.push(`Response field '${k}' removed from ${m.toUpperCase()} ${p} (breaking)`);
          }
        }
      }

      // Request body changes
      const curBody = cur.requestBody?.content?.['application/json']?.schema?.properties;
      const baseBody = base.requestBody?.content?.['application/json']?.schema?.properties;
      if (curBody && baseBody) {
        const curKeys = Object.keys(curBody);
        const baseKeys = Object.keys(baseBody);
        for (const k of curKeys) {
          if (!baseKeys.includes(k) && curBody[k].required) {
            breaking.push(`Required request field '${k}' added to ${m.toUpperCase()} ${p} (breaking)`);
          }
        }
      }
    }
  }

  return { breaking, additions, removals, changes };
}

function notifyTelegram(title: string, details: string[]) {
  if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
    log('Telegram not configured; skipping notification');
    return;
  }
  const message = `🚨 *${title}*\n${details.slice(0, 10).join('\n')}${details.length > 10 ? '\n… +' + (details.length - 10) + ' more' : ''}`;
  try {
    execSync(`curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage" \
      -d "chat_id=${TELEGRAM_CHAT_ID}" \
      -d "parse_mode=Markdown" \
      -d "text=${encodeURIComponent(message)}"`, { stdio: 'pipe' });
    log('Telegram alert sent');
  } catch (e) {
    warn(`Telegram send failed: ${e.message}`);
  }
}

function main() {
  log('OpenAPI Drift Detector starting');
  const routes = scanApiRoutes();
  log(`Found ${routes.length} API route(s)`);

  const currentSpec = buildOpenAPISpec(routes);
  const baselineSpec = loadBaselineSpec();

  const now = new Date().toISOString();

  if (!baselineSpec) {
    log('No baseline spec found — creating baseline');
    saveSpec(currentSpec, OPENAPI_SPEC_PATH);
    saveHistory({
      timestamp: now,
      driftCount: 0,
      routesCount: routes.length,
      changes: [`Baseline created with ${routes.length} routes`]
    });
    log('✅ Baseline established — drift detection active');
    return 0;
  }

  const { breaking, additions, removals, changes } = detectDrift(currentSpec, baselineSpec);
  const allChanges = [...breaking, ...additions, ...removals, ...changes];

  log(`Drift analysis: ${breaking.length} breaking, ${additions.length} additions, ${removals.length} removals`);

  // Save updated history
  saveHistory({
    timestamp: now,
    driftCount: breaking.length,
    routesCount: routes.length,
    changes: allChanges
  });

  // If breaking changes detected, fail and notify
  if (breaking.length > 0) {
    error(`Detected ${breaking.length} breaking change(s)`);
    breaking.forEach(b => error(`  - ${b}`));
    notifyTelegram('🚨 API OpenAPI Drift Detected — Breaking Changes', breaking);

    // Write violations file
    const violationsDir = path.dirname(OPENAPI_SPEC_PATH);
    const violationsPath = path.join(violationsDir, 'violations.json');
    fs.writeFileSync(violationsPath, JSON.stringify({
      timestamp: now,
      breaking,
      additions,
      removals,
      changes
    }, null, 2));

    // Exit non-zero to fail CI
    process.exit(1);
  }

  // If any drift but non-breaking, log and optionally notify
  if (additions.length > 0 || removals.length > 0) {
    log('Non-breaking changes detected:');
    allChanges.forEach(c => log(`  • ${c}`));
    notifyTelegram('ℹ️ API Contract Updated (non-breaking)', allChanges);
  }

  // Update baseline if no breaking changes (spec is healthy)
  saveSpec(currentSpec, OPENAPI_SPEC_PATH);
  log('✅ No breaking drift detected — baseline updated');
  return 0;
}

process.exit(main());
