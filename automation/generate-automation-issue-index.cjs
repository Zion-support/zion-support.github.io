#!/usr/bin/env node
/**
 * Builds a lightweight index of open GitHub issues that carry automation fingerprint labels.
 * For dashboards and RCA cross-navigation (no issue spam).
 */
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'reports', 'automation-open-issues-index-latest.json');

function ghJson(args) {
  const res = spawnSync('gh', args, { encoding: 'utf8', env: process.env });
  if (res.status !== 0) {
    console.error('gh failed:', res.stderr || res.stdout);
    return null;
  }
  try {
    return JSON.parse(res.stdout || '[]');
  } catch {
    return null;
  }
}

function main() {
  const rows = ghJson([
    'issue',
    'list',
    '--state',
    'open',
    '--json',
    'number,title,url,labels,updatedAt',
    '--limit',
    '300',
  ]);
  if (!rows) {
    process.exit(1);
  }

  const fpPrefix = 'automation-fp-';
  const indexed = rows
    .map((row) => {
      const fpLabels = (row.labels || [])
        .map((l) => l.name)
        .filter((n) => typeof n === 'string' && n.startsWith(fpPrefix));
      if (fpLabels.length === 0) {
        return null;
      }
      return {
        number: row.number,
        title: row.title,
        url: row.url,
        updatedAt: row.updatedAt,
        fingerprintLabels: fpLabels,
      };
    })
    .filter(Boolean);

  const payload = {
    generatedAt: new Date().toISOString(),
    openAutomationFingerprintIssues: indexed.length,
    issues: indexed,
    githubIssuesQueryHint:
      'is:open label:bug automation OR is:open label:automation (adjust per repo conventions)',
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log('Wrote', OUT, 'count=', indexed.length);
}

main();
