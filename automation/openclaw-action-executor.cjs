#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT_PATH = path.join(ROOT, 'automation', 'reports', 'openclaw-autonomous-app-improver-latest.json');
const OUTPUT_PATH = path.join(ROOT, 'automation', 'reports', 'openclaw-action-queue-latest.json');

const CATEGORY_HINTS = [
  { category: 'quality', regex: /(lint|type|test|regression|typescript|eslint)/i, command: 'npm run app:improvement-cycle' },
  { category: 'performance', regex: /(performance|core web vitals|bundle|lcp|cls|fcp)/i, command: 'npm run perf:optimize' },
  { category: 'seo', regex: /(seo|metadata|schema|internal links|serp)/i, command: 'npm run seo:audit' },
  { category: 'automation', regex: /(workflow|automation|ci|pipeline|guard|watchdog)/i, command: 'npm run automation:audit-summary' },
];

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function categorize(text) {
  for (const hint of CATEGORY_HINTS) {
    if (hint.regex.test(text)) return hint;
  }
  return { category: 'general', command: 'npm run app:improve-summary' };
}

function main() {
  const report = readJson(REPORT_PATH);
  if (!report || !Array.isArray(report.lastResults)) {
    console.error('OpenClaw report is missing or invalid.');
    process.exit(1);
  }

  const now = new Date().toISOString();
  const queue = report.lastResults
    .filter((r) => r && r.ok)
    .map((r) => {
      const hint = categorize(r.snippet || '');
      return {
        id: `${hint.category}-${Math.random().toString(36).slice(2, 10)}`,
        createdAt: now,
        sourceWorker: r.worker,
        category: hint.category,
        recommendedCommand: hint.command,
        summary: (r.snippet || '').slice(0, 200),
        status: 'queued',
      };
    });

  const payload = {
    generatedAt: now,
    sourceReport: REPORT_PATH,
    totalQueued: queue.length,
    queue,
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`OpenClaw action queue generated: ${OUTPUT_PATH} (${queue.length} items)`);
}

main();
