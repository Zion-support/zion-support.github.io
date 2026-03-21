#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Merges latest smoke, GHA npm-cache audit, route/sitemap drift, and (when present)
 * fingerprint incident digest / trend JSON into one digest for dashboards / agents.
 * Writes automation/reports/observability-digest-latest.json
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS = path.join(ROOT, 'automation', 'reports');
const OUT = path.join(REPORTS, 'observability-digest-latest.json');

function readJson(name) {
  const p = path.join(REPORTS, name);
  if (!fs.existsSync(p)) return { missing: true, path: name };
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return { error: true, path: name };
  }
}

function main() {
  const digest = {
    generatedAt: new Date().toISOString(),
    productionSmoke: readJson('scheduled-production-smoke-latest.json'),
    ghaNpmCacheAudit: readJson('gha-npm-cache-audit-latest.json'),
    routeSitemapDrift: readJson('app-route-sitemap-drift-latest.json'),
    automationFingerprintIncidents: readJson('automation-fingerprint-incidents-latest.json'),
    automationFingerprintTrend: readJson('automation-fingerprint-incidents-trend.json'),
    summary: {},
  };
  const sm = digest.productionSmoke;
  if (sm && !sm.missing && !sm.error) {
    digest.summary.productionSmokeOk = Boolean(sm.allOk);
    digest.summary.productionSmokeFailedCount = sm.failedCount;
  }
  const gha = digest.ghaNpmCacheAudit;
  if (gha && gha.count != null) digest.summary.ghaNpmCacheFindings = gha.count;
  const drift = digest.routeSitemapDrift;
  if (drift && drift.counts) {
    digest.summary.routeDriftInAppNotSitemap = drift.counts.inAppNotSitemap;
    digest.summary.routeDriftStatus = drift.status;
  }
  const fp = digest.automationFingerprintIncidents;
  if (fp && !fp.missing && !fp.error && !fp.skipped) {
    digest.summary.fingerprintDigestPresent = true;
    digest.summary.fingerprintDigestOpen = fp.openWithFingerprintLabel;
    digest.summary.fingerprintDigestSeverity = fp.escalationSeverity || null;
    digest.summary.fingerprintDigestGeneratedAt = fp.generatedAt || null;
  } else {
    digest.summary.fingerprintDigestPresent = false;
  }
  const tr = digest.automationFingerprintTrend;
  if (tr && !tr.missing && !tr.error && Array.isArray(tr.history) && tr.history.length) {
    const last = tr.history[tr.history.length - 1];
    digest.summary.fingerprintTrendLastOpen = last.open != null ? last.open : null;
    digest.summary.fingerprintTrendLastNewCount = last.newCount != null ? last.newCount : null;
    digest.summary.fingerprintTrendLastSeverity = last.severity || null;
    digest.summary.fingerprintTrendLastRegistryEma =
      last.registryEma != null && Number.isFinite(Number(last.registryEma)) ? Number(last.registryEma) : null;
  }
  fs.mkdirSync(REPORTS, { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(digest, null, 2));
  console.log(`Observability digest -> ${OUT}`);
}

main();
