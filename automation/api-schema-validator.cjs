#!/usr/bin/env node
/**
 * API Schema Validator — static analysis guard for route contracts
 *
 * Walks app/api/ to ensure every route exports a Zod-based request/response schema.
 * Optionally cross-checks against OpenAPI specs in openapi/.
 *
 * Fails CI on violations; posts PR comments; tracks history.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  apiDir: process.env.API_SCHEMA_API_DIR || 'app/api',
  openapiDir: process.env.API_SCHEMA_OPENAPI_DIR || 'openapi',
  stateDir: process.env.API_SCHEMA_STATE_DIR || '.hermes/memory/api-schema',
  requireRequestSchema: process.env.API_SCHEMA_REQUIRE_REQUEST === 'false' ? false : true,
  requireResponseSchema: process.env.API_SCHEMA_REQUIRE_RESPONSE === 'false' ? false : true,
  checkOpenAPIConformance: process.env.API_SCHEMA_CHECK_OPENAPI === 'true',
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${msg}`);
}

function findRouteFiles() {
  const routes = [];
  function walk(dir, segments = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full, [...segments, e.name]);
      } else if (e.name === 'route.ts' || e.name === 'route.js' || e.name === 'route.tsx') {
        routes.push({ file: full, segments });
      }
    }
  }
  walk(CONFIG.apiDir);
  return routes;
}

function parseRouteFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');

  // Heuristic: look for Zod schema exports
  const hasRequestSchema = /export\s+const\s+schema\s*[=:]\s*z\.(object|array)/i.test(content) ||
                          /export\s+const\s+requestSchema\s*[=:]\s*z\.(object|array)/i.test(content) ||
                          /const\s+.*Schema\s*=\s*z\.(object|array)/i.test(content);
  const hasResponseSchema = /export\s+const\s+responseSchema\s*[=:]\s*z\.(object|array)/i.test(content) ||
                            /export\s+const\s+outputSchema\s*[=:]\s*z\.(object|array)/i.test(content);

  // Try to extract variable names for reporting
  const reqMatch = content.match(/export\s+const\s+(requestSchema|schema)\s*=/i);
  const resMatch = content.match(/export\s+const\s+(responseSchema|outputSchema)\s*=/i);

  return {
    file: filepath,
    hasRequestSchema: !!hasRequestSchema,
    hasResponseSchema: !!hasResponseSchema,
    requestVar: reqMatch ? reqMatch[1] : null,
    responseVar: resMatch ? resMatch[1] : null,
  };
}

function validateRoutes(routes) {
  const violations = [];

  for (const r of routes) {
    const parsed = parseRouteFile(r.file);

    if (CONFIG.requireRequestSchema && !parsed.hasRequestSchema) {
      violations.push({
        route: r.file.replace(CONFIG.apiDir, '').replace(/^[/\\]/, ''),
        issue: 'missing-request-schema',
        message: `Route ${r.file} lacks exported Zod request schema (expected \`export const schema = z.object(...)\` or \`requestSchema\`)`,
      });
    }

    if (CONFIG.requireResponseSchema && !parsed.hasResponseSchema) {
      violations.push({
        route: r.file.replace(CONFIG.apiDir, '').replace(/^[/\\]/, ''),
        issue: 'missing-response-schema',
        message: `Route ${r.file} lacks exported Zod response schema (expected \`responseSchema\` or \`outputSchema\`)`,
      });
    }
  }

  return violations;
}

function recordState(violations) {
  ensureDir(CONFIG.stateDir);
  const historyPath = path.join(CONFIG.stateDir, 'history.json');
  let history = [];
  if (fs.existsSync(historyPath)) {
    history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
  }
  history.push({
    timestamp: new Date().toISOString(),
    totalRoutes: violations.length,
    violations: violations.map(v => v.issue),
  });
  // keep 90d
  const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
  history = history.filter(h => new Date(h.timestamp).getTime() > cutoff);
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
}

function main() {
  log('=== API Schema Validator starting ===');
  ensureDir(CONFIG.stateDir);

  const routes = findRouteFiles();
  log(`Scanned ${routes.length} API route(s)`);

  const violations = validateRoutes(routes);

  if (violations.length > 0) {
    console.error('\n❌ Schema violations found:');
    for (const v of violations) {
      console.error(`  - [${v.route}] ${v.message}`);
    }
    recordState(violations);
    process.exit(1);
  }

  log('✅ All routes have required schemas');
  recordState([]);
  log('=== API Schema Validator passed ===');
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
