#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const INPUT = path.join(ROOT, 'automation', 'reports', 'openclaw-autonomous-app-improver-latest.json');
const OUTPUT = path.join(ROOT, 'automation', 'reports', 'openclaw-prompt-quality-score-latest.json');

function safeRead(file) {
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return null;
  }
}

function scoreSnippet(snippet) {
  if (!snippet) return 0;
  let score = 0;
  if (/npm run|node |pm2 |workflow/i.test(snippet)) score += 25;
  if (/prioritized|concrete|step|action|checklist/i.test(snippet)) score += 25;
  if (/risk|safe|reversible|guard/i.test(snippet)) score += 20;
  if (/metric|impact|performance|conversion|seo|accessibility/i.test(snippet)) score += 20;
  if (snippet.length > 120) score += 10;
  return Math.min(100, score);
}

function main() {
  const report = safeRead(INPUT);
  if (!report || !Array.isArray(report.lastResults)) {
    console.error('Cannot score prompts: report missing or invalid.');
    process.exit(1);
  }

  const workers = report.lastResults.map((r) => ({
    worker: r.worker,
    ok: r.ok,
    score: scoreSnippet(r.snippet || ''),
  }));

  const successWorkers = workers.filter((w) => w.ok);
  const avgScore = successWorkers.length
    ? Math.round(successWorkers.reduce((acc, w) => acc + w.score, 0) / successWorkers.length)
    : 0;

  const payload = {
    generatedAt: new Date().toISOString(),
    sourceReport: INPUT,
    successRate: report.promptsSent ? Number((report.successes / report.promptsSent).toFixed(2)) : 0,
    averageQualityScore: avgScore,
    workers,
    recommendation:
      avgScore >= 75
        ? 'Prompt quality is strong; increase cadence or worker count cautiously.'
        : 'Prompt quality is moderate; refine worker prompts and enforce more actionable outputs.',
  };

  fs.writeFileSync(OUTPUT, JSON.stringify(payload, null, 2));
  console.log(`OpenClaw prompt quality score generated: ${OUTPUT}`);
}

main();
