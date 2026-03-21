#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PROD_REPORT = path.join(ROOT, process.env.PROD_REPORT || 'automation/reports/ai-lab-hub-links-smoke-prod.json');
const PREVIEW_REPORT = path.join(
  ROOT,
  process.env.PREVIEW_REPORT || 'automation/reports/ai-lab-hub-links-smoke-preview.json',
);
const OUT_REPORT = path.join(
  ROOT,
  process.env.OUT_REPORT || 'automation/reports/ai-lab-hub-links-smoke-compare-latest.json',
);

function readJsonSafe(p) {
  try {
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function failedSet(report) {
  const rows = Array.isArray(report?.results) ? report.results : [];
  return new Set(rows.filter((r) => r.ok !== true).map((r) => String(r.path)));
}

function main() {
  const prod = readJsonSafe(PROD_REPORT);
  const preview = readJsonSafe(PREVIEW_REPORT);
  const prodFailed = failedSet(prod);
  const previewFailed = failedSet(preview);

  const regressedInPreview = [...previewFailed].filter((p) => !prodFailed.has(p)).sort();
  const improvedInPreview = [...prodFailed].filter((p) => !previewFailed.has(p)).sort();
  const out = {
    generatedAt: new Date().toISOString(),
    prodPresent: Boolean(prod),
    previewPresent: Boolean(preview),
    prodFailedCount: prodFailed.size,
    previewFailedCount: previewFailed.size,
    regressedInPreview,
    improvedInPreview,
    ok: regressedInPreview.length === 0,
  };
  fs.mkdirSync(path.dirname(OUT_REPORT), { recursive: true });
  fs.writeFileSync(OUT_REPORT, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
  console.log(
    `[ai-lab-hub-links-compare] prodFailed=${out.prodFailedCount} previewFailed=${out.previewFailedCount} regressions=${out.regressedInPreview.length}`,
  );
  const failOn = String(process.env.AI_LAB_HUB_COMPARE_FAIL_ON_REGRESSION || '1') !== '0';
  if (failOn && out.regressedInPreview.length > 0) process.exit(1);
}

main();
