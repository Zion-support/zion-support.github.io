#!/usr/bin/env node
/**
 * Smoke-test a few routes on NETLIFY_DEPLOY_URL (preview deploy hostname).
 * Writes automation/reports/netlify-preview-smoke-latest.json
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ROUTES_FILE = path.join(process.cwd(), 'config', 'smoke-routes.txt');
const OUT = path.join(process.cwd(), 'automation', 'reports', 'netlify-preview-smoke-latest.json');

function fetchStatus(urlStr) {
  return new Promise((resolve) => {
    const u = new URL(urlStr);
    const lib = u.protocol === 'https:' ? https : http;
    const req = lib.request(
      urlStr,
      { method: 'GET', timeout: 12_000 },
      (res) => {
        res.resume();
        resolve(res.statusCode || 0);
      },
    );
    req.on('error', () => resolve(0));
    req.on('timeout', () => {
      req.destroy();
      resolve(0);
    });
    req.end();
  });
}

async function main() {
  const base = (process.env.NETLIFY_DEPLOY_URL || '').trim().replace(/\/$/, '');
  const maxRoutes = Math.min(12, Math.max(1, Number(process.env.SMOKE_NETLIFY_MAX_ROUTES || 6)));
  if (!base || !base.startsWith('http')) {
    const payload = {
      generatedAt: new Date().toISOString(),
      skipped: true,
      reason: 'NETLIFY_DEPLOY_URL not set or invalid',
    };
    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
    console.log('smoke-netlify-deploy-preview: skip');
    process.exit(0);
  }

  let routes = ['/'];
  if (fs.existsSync(ROUTES_FILE)) {
    routes = fs
      .readFileSync(ROUTES_FILE, 'utf8')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'))
      .slice(0, maxRoutes);
  }

  const results = [];
  for (const p of routes) {
    const pathPart = p.startsWith('/') ? p : `/${p}`;
    const url = `${base}${pathPart}`;
    const code = await fetchStatus(url);
    results.push({ path: pathPart, status: code, ok: code >= 200 && code < 400 });
  }

  const failed = results.filter((r) => !r.ok).length;
  const payload = {
    generatedAt: new Date().toISOString(),
    baseUrl: base,
    unhealthyCount: failed,
    routes: results,
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log('smoke-netlify-deploy-preview: wrote', OUT, 'failed=', failed);
  process.exit(failed > 0 ? 1 : 0);
}

main();
