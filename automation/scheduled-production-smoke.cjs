#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Scheduled sample of production smoke routes (HTTPS, no Playwright).
 * Writes automation/reports/scheduled-production-smoke-latest.json
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET = process.env.ZION_BASE_URL || 'https://ziontechgroup.com';
const ROUTES_FILE = process.env.SMOKE_ROUTES_FILE || path.join(ROOT, 'config', 'smoke-routes.txt');
const MAX_ROUTES = Math.min(20, Math.max(3, Number(process.env.SMOKE_SAMPLE_ROUTES || '5')));
const OUT = path.join(ROOT, 'automation', 'reports', 'scheduled-production-smoke-latest.json');
const FAIL = process.env.SMOKE_FAIL_ON_ERROR === '1' || process.env.SMOKE_FAIL_ON_ERROR === 'true';

function readRoutes() {
  if (!fs.existsSync(ROUTES_FILE)) {
    return ['/', '/ai-lab', '/contact', '/services', '/blog'];
  }
  return fs
    .readFileSync(ROUTES_FILE, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
    .slice(0, MAX_ROUTES);
}

function checkPath(p, redirectCount = 0) {
  return new Promise((resolve) => {
    const url = new URL(p, TARGET);
    const start = Date.now();
    const timeoutMs = Number(process.env.SMOKE_TIMEOUT_MS || 12000);
    const req = https.get(url, (res) => {
      const latency = Date.now() - start;
      const loc = res.headers.location;
      if (loc && res.statusCode >= 300 && res.statusCode < 400 && redirectCount < 5) {
        res.resume();
        const next = loc.startsWith('http') ? new URL(loc).pathname : new URL(loc, TARGET).pathname;
        checkPath(next, redirectCount + 1).then((r) => resolve({ ...r, path: p }));
        return;
      }
      res.resume();
      resolve({
        path: p,
        status: res.statusCode,
        ok: !!res.statusCode && res.statusCode >= 200 && res.statusCode < 300,
        latency,
      });
    });
    req.setTimeout(timeoutMs, () => req.destroy(new Error('timeout')));
    req.on('error', (err) => {
      resolve({ path: p, status: 0, ok: false, latency: Date.now() - start, error: err.message });
    });
  });
}

async function main() {
  const paths = readRoutes();
  const results = await Promise.all(paths.map((p) => checkPath(p)));
  const failed = results.filter((r) => !r.ok);
  const payload = {
    generatedAt: new Date().toISOString(),
    baseUrl: TARGET,
    sampleSize: paths.length,
    allOk: failed.length === 0,
    failedCount: failed.length,
    results,
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2));
  console.log(`Scheduled production smoke: ${payload.allOk ? 'OK' : 'FAIL'} (${OUT})`);
  if (FAIL && !payload.allOk) process.exit(1);
}

main();
