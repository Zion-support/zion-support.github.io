#!/usr/bin/env node
// AI App Improvement — daily quick pipeline.
// Lightweight, zero-dependency pass executed on pushes to main by
// .github/workflows/ai-app-improvement-on-push.yml.
//
// What it does (safe, read-mostly):
//  1. Verifies the production homepage responds with HTTP 200.
//  2. Verifies key money URLs respond (/en/plans/, /discovery/, /ops/comms/).
//  3. Writes a compact report to automation/reports/ and exits non-zero only
//     on hard failures (site down). Never commits when AUTO_COMMIT is unset.
const https = require('https');
const fs = require('fs');
const path = require('path');

const URLS = [
  'https://ziontechgroup.com/',
  'https://ziontechgroup.com/en/plans/',
  'https://ziontechgroup.com/discovery/',
  'https://ziontechgroup.com/ops/comms/',
];

function check(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 15000 }, (res) => {
      res.resume();
      resolve({ url, status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 400 });
    });
    req.on('timeout', () => { req.destroy(); resolve({ url, status: 0, ok: false }); });
    req.on('error', () => resolve({ url, status: 0, ok: false }));
  });
}

(async () => {
  const results = [];
  for (const u of URLS) results.push(await check(u));
  const failed = results.filter((r) => !r.ok);
  const report = {
    generatedAt: new Date().toISOString(),
    pipeline: 'ai-app-improvement-daily-quick',
    results,
    failed: failed.map((f) => f.url),
  };
  try {
    const dir = path.join(__dirname, 'reports');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'daily-quick-latest.json'), JSON.stringify(report, null, 2));
  } catch (e) {
    console.log('report write skipped:', e.message);
  }
  for (const r of results) console.log(`${r.ok ? 'OK ' : 'FAIL'} ${r.status} ${r.url}`);
  if (failed.length > 0) {
    console.error(`daily quick pipeline: ${failed.length} URL(s) failing`);
    process.exit(1);
  }
  console.log('daily quick pipeline: all checks passed');
})();
