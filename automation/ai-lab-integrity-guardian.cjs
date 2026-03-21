#!/usr/bin/env node

/**
 * AI Lab Integrity Guardian
 *
 * Validates app/ai-lab tool catalog integrity:
 * - Every tool href in app/ai-lab/ai-lab-tools.ts has a corresponding page.tsx
 * - All missing pages are reported to automation/reports/ai-lab-integrity-latest.json
 *
 * Env:
 *   CONTINUOUS_MODE=true
 *   INTERVAL_MINUTES=120
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TOOLS_PATH = path.join(ROOT, 'app', 'ai-lab', 'ai-lab-tools.ts');
const REPORT_PATH = path.join(ROOT, 'automation', 'reports', 'ai-lab-integrity-latest.json');
const CONTINUOUS = process.env.CONTINUOUS_MODE === 'true' || process.env.CONTINUOUS_MODE === '1';
const INTERVAL_MINUTES = Math.max(15, parseInt(process.env.INTERVAL_MINUTES || '120', 10));

function log(msg) {
  console.log(`[AILabIntegrity] ${new Date().toISOString()} | ${msg}`);
}

function ensureDir(p) {
  const d = path.dirname(p);
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

function parseToolHrefs(ts) {
  const hrefs = [];
  for (const m of ts.matchAll(/href:\s*'([^']+)'/g)) {
    const href = m[1];
    if (href.startsWith('/ai-lab/') && href !== '/ai-lab') hrefs.push(href);
  }
  return [...new Set(hrefs)].sort();
}

function checkOnce() {
  ensureDir(REPORT_PATH);
  if (!fs.existsSync(TOOLS_PATH)) {
    const report = { ok: false, error: 'missing_tools_file', at: new Date().toISOString() };
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
    return report;
  }

  const toolsRaw = fs.readFileSync(TOOLS_PATH, 'utf8');
  const hrefs = parseToolHrefs(toolsRaw);
  const missing = [];
  const healthy = [];

  for (const href of hrefs) {
    const rel = href.replace(/^\/ai-lab\//, '');
    const pagePath = path.join(ROOT, 'app', 'ai-lab', rel, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      healthy.push(href);
    } else {
      missing.push({ href, expectedPagePath: path.relative(ROOT, pagePath) });
    }
  }

  const report = {
    at: new Date().toISOString(),
    ok: missing.length === 0,
    totalTools: hrefs.length,
    healthy: healthy.length,
    missingCount: missing.length,
    missing,
  };
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  log(`ok=${report.ok} healthy=${report.healthy}/${report.totalTools} missing=${report.missingCount}`);
  return report;
}

async function main() {
  if (!CONTINUOUS) {
    const r = checkOnce();
    process.exit(r.ok ? 0 : 1);
  }

  log(`Continuous mode: every ${INTERVAL_MINUTES} minutes`);
  for (;;) {
    checkOnce();
    await new Promise((r) => setTimeout(r, INTERVAL_MINUTES * 60 * 1000));
  }
}

main().catch((e) => {
  log(`Fatal: ${e.message}`);
  process.exit(1);
});
