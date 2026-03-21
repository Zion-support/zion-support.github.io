#!/usr/bin/env node
/**
 * Summarize open GitHub issues that carry automation fingerprint labels (automation-fp-*).
 * Writes JSON + Markdown under automation/reports/ for humans and other agents.
 *
 * Env:
 *   GH_TOKEN / GITHUB_TOKEN — required on CI; if missing, writes empty digest and exits 0
 *   DIGEST_LIMIT — max issues to scan (default 300)
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = process.cwd();
const reportsDir = path.join(root, 'automation', 'reports');
const jsonPath = path.join(reportsDir, 'automation-fingerprint-incidents-latest.json');
const mdPath = path.join(reportsDir, 'automation-fingerprint-incidents-latest.md');

function gh(args) {
  return spawnSync('gh', args, {
    encoding: 'utf8',
    env: process.env,
  });
}

function main() {
  if (!process.env.GH_TOKEN && !process.env.GITHUB_TOKEN) {
    const stub = {
      generatedAt: new Date().toISOString(),
      skipped: true,
      reason: 'No GH_TOKEN/GITHUB_TOKEN; digest not generated locally.',
      issues: [],
    };
    fs.mkdirSync(reportsDir, { recursive: true });
    fs.writeFileSync(jsonPath, JSON.stringify(stub, null, 2));
    fs.writeFileSync(
      mdPath,
      '# Automation fingerprint incidents\n\n_Skipped: no GitHub token in environment._\n'
    );
    console.log('Digest skipped (no token).');
    process.exit(0);
  }

  const limit = String(process.env.DIGEST_LIMIT || '300');
  const list = gh([
    'issue',
    'list',
    '--state',
    'open',
    '--limit',
    limit,
    '--json',
    'number,title,labels,updatedAt,url',
  ]);

  if (list.status !== 0) {
    console.error('gh issue list failed:', list.stderr || list.stdout);
    process.exit(1);
  }

  let issues;
  try {
    issues = JSON.parse(list.stdout || '[]');
  } catch {
    issues = [];
  }

  const fpIssues = issues
    .map((issue) => {
      const fpLabels = (issue.labels || [])
        .map((l) => (typeof l === 'string' ? l : l.name))
        .filter((name) => name && name.startsWith('automation-fp-'));
      return fpLabels.length ? { ...issue, automationFpLabels: fpLabels } : null;
    })
    .filter(Boolean);

  const report = {
    generatedAt: new Date().toISOString(),
    openWithFingerprintLabel: fpIssues.length,
    issues: fpIssues.map((i) => ({
      number: i.number,
      title: i.title,
      url: i.url,
      updatedAt: i.updatedAt,
      automationFpLabels: i.automationFpLabels,
    })),
  };

  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));

  const lines = [
    '# Automation fingerprint incidents',
    '',
    `_Generated: ${report.generatedAt}_`,
    '',
    'Open issues with an `automation-fp-*` label: **' + fpIssues.length + '**',
    '',
  ];

  for (const i of report.issues) {
    lines.push(`- [#${i.number}](${i.url}) — ${i.title}`);
    lines.push(`  - Labels: ${i.automationFpLabels.join(', ')}`);
    lines.push(`  - Updated: ${i.updatedAt}`);
    lines.push('');
  }

  if (fpIssues.length === 0) {
    lines.push('_No open fingerprint-tagged incidents._');
    lines.push('');
  }

  fs.writeFileSync(mdPath, lines.join('\n'));
  console.log(`Wrote ${path.relative(root, jsonPath)} (${fpIssues.length} issue(s)).`);
}

main();
