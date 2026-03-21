#!/usr/bin/env node
/**
 * Generate a compact automation health snapshot used by homepage and AI lab views.
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS = path.join(ROOT, 'automation', 'reports');
const OUT = path.join(REPORTS, 'automation-health-latest.json');

function readJson(name) {
  try {
    return JSON.parse(fs.readFileSync(path.join(REPORTS, name), 'utf8'));
  } catch {
    return null;
  }
}

function sev(ema, unhealthy, fp) {
  if (ema >= 6 || unhealthy > 2 || fp >= 8) return 'critical';
  if (ema >= 4 || unhealthy > 0 || fp >= 4) return 'warning';
  return 'nominal';
}

function main() {
  const reg = readJson('incident-suppression-registry-latest.json');
  const dep = readJson('deploy-status-latest.json');
  const smoke = readJson('netlify-preview-smoke-latest.json');
  const idx = readJson('automation-open-issues-index-latest.json');
  const ema = Number(reg?.noise?.emaOpenIncidents ?? 0);
  const unhealthy = Number(smoke?.unhealthyCount ?? 0);
  const fp = Number(idx?.openAutomationFingerprintIssues ?? 0);
  const payload = {
    generatedAt: new Date().toISOString(),
    severity: sev(ema, unhealthy, fp),
    emaOpenIncidents: ema,
    previewUnhealthyCount: unhealthy,
    openFingerprintIssues: fp,
    deployStatus: dep?.status || 'unknown',
    deploySha: dep?.sha || null,
    netlifyDeployUrl: dep?.netlifyDeployUrl || null,
  };
  fs.mkdirSync(REPORTS, { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log('Wrote', OUT);
}

main();
