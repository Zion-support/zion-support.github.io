#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { AUTONOMY_AGENT_CONFIG } = require('./autonomy-agent-config.cjs');

const cfg = AUTONOMY_AGENT_CONFIG.queueGuard;
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const repository = process.env.GITHUB_REPOSITORY || '';
const [owner, repo] = repository.split('/');
const currentRunId = process.env.GITHUB_RUN_ID || '';
const branch = process.env.QUEUE_GUARD_BRANCH || 'main';
const strict = process.argv.includes('--strict');
const reportDir = path.join(process.cwd(), 'automation', 'reports');
const jsonReport = path.join(reportDir, 'autonomous-writer-queue-guard-latest.json');
const mdReport = path.join(reportDir, 'autonomous-writer-queue-guard-latest.md');

async function api(pathname) {
  const response = await fetch(`https://api.github.com${pathname}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'zion-autonomous-writer-queue-guard',
    },
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API ${response.status}: ${body.slice(0, 200)}`);
  }
  return response.json();
}

function isLikelyWriter(run) {
  const lower = `${run.name || ''} ${run.path || ''}`.toLowerCase();
  return cfg.writerWorkflowKeywords.some((keyword) => lower.includes(keyword));
}

function toMarkdown(report) {
  const lines = [];
  lines.push('# Autonomous Writer Queue Guard');
  lines.push('');
  lines.push(`- Generated at: \`${report.generatedAt}\``);
  lines.push(`- Branch: \`${report.branch}\``);
  lines.push(`- Writer runs active: \`${report.activeWriterRuns.length}\``);
  lines.push(`- Allowed max: \`${report.thresholds.maxConcurrentWriters}\``);
  lines.push(`- Severity: \`${report.severity}\``);
  lines.push('');
  if (report.activeWriterRuns.length) {
    lines.push('## Active writer runs');
    lines.push('');
    for (const run of report.activeWriterRuns) {
      lines.push(`- ${run.name} (#${run.run_number}, ${run.status})`);
    }
  }
  return `${lines.join('\n')}\n`;
}

async function main() {
  if (!token) throw new Error('GITHUB_TOKEN or GH_TOKEN is required');
  if (!owner || !repo) throw new Error('GITHUB_REPOSITORY must be set');

  const runsData = await api(
    `/repos/${owner}/${repo}/actions/runs?branch=${encodeURIComponent(branch)}&per_page=100`,
  );
  const allRuns = runsData.workflow_runs || [];
  const activeRuns = allRuns.filter((run) => ['queued', 'in_progress'].includes(run.status));
  const activeWriterRuns = activeRuns
    .filter((run) => isLikelyWriter(run))
    .filter((run) => String(run.id) !== String(currentRunId));

  const violation = activeWriterRuns.length >= cfg.maxConcurrentWriters;
  const report = {
    generatedAt: new Date().toISOString(),
    repository,
    branch,
    activeRunCount: activeRuns.length,
    activeWriterRuns,
    severity: violation ? 'warning' : 'ok',
    thresholds: {
      maxConcurrentWriters: cfg.maxConcurrentWriters,
    },
  };

  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(jsonReport, JSON.stringify(report, null, 2));
  fs.writeFileSync(mdReport, toMarkdown(report));
  console.log(`Queue guard report written to ${jsonReport}`);

  if (strict && violation) process.exit(1);
}

main().catch((error) => {
  console.error(`[autonomous-writer-queue-guard] ${error.message}`);
  process.exit(1);
});
