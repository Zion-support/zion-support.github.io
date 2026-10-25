'use strict';
/**
 * Read-only inventory of setup-node npm caching in GitHub Actions.
 * This is configuration evidence, not measured cache hit rate or billed minutes.
 * No network access, npm install, credentials or repository mutation.
 */
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');

function stepBlocks(yaml) {
  const lines = yaml.split(/\r?\n/);
  const steps = [];
  let active = null;
  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const start = line.match(/^(\s*)-\s+(?:name|uses|run|id)\s*:/);
    if (start && start[1].length >= 4) {
      if (active && start[1].length <= active.indent) {
        steps.push(active);
        active = null;
      }
      if (!active) active = { indent: start[1].length, lines: [] };
    }
    if (active) {
      const indent = (line.match(/^ */) || [''])[0].length;
      if (indent < active.indent && !start) {
        steps.push(active);
        active = null;
      }
    }
    if (active) active.lines.push(line);
  }
  if (active) steps.push(active);
  return steps.map(s => s.lines.join('\n'));
}

function scanWorkflow(yaml) {
  const blocks = stepBlocks(yaml);
  const setupNode = blocks.filter(s => /^\s*(?:-\s*)?uses:\s*actions\/setup-node@[^\s#]+/m.test(s));
  const cacheSteps = setupNode.filter(s => /^\s+cache\s*:\s*['"]?npm\b/m.test(s));
  const hasNpmCi = yaml.split(/\r?\n/).some(line => {
    const trimmed = line.trim();
    return !trimmed.startsWith('#') && /^(?:-\s*)?(?:run:\s*)?npm\s+ci(?:\s|$)/.test(trimmed);
  });
  return {
    hasNpmCi,
    setupNodeSteps: setupNode.length,
    cacheSteps: cacheSteps.length,
    cacheStepsWithoutExplicitPath: cacheSteps.filter(s => !/^\s+cache-dependency-path\s*:/m.test(s)).length,
  };
}

function inventory(dir = path.join(ROOT, '.github/workflows'), now = () => new Date().toISOString()) {
  const files = fs.readdirSync(dir).filter(f => /\.ya?ml$/i.test(f)).sort();
  if (!files.length) throw new Error('no workflow YAML files to audit');
  const findings = [];
  const totals = { workflowsScanned: files.length, npmCiWorkflows: 0, workflowsWithNpmCache: 0,
    npmCiWithoutDeclaredCache: 0, cachedStepsWithoutExplicitLockPath: 0 };
  for (const name of files) {
    const result = scanWorkflow(fs.readFileSync(path.join(dir, name), 'utf8'));
    if (result.hasNpmCi) totals.npmCiWorkflows++;
    if (result.cacheSteps) totals.workflowsWithNpmCache++;
    if (result.hasNpmCi && !result.cacheSteps) {
      totals.npmCiWithoutDeclaredCache++;
      findings.push({ file: name, code: 'npm-ci-without-declared-setup-node-cache', level: 'advisory' });
    }
    if (result.cacheStepsWithoutExplicitPath) {
      totals.cachedStepsWithoutExplicitLockPath += result.cacheStepsWithoutExplicitPath;
      findings.push({ file: name, code: 'npm-cache-implicit-lockfile-location', level: 'info' });
    }
  }
  return {
    schema: 'zion.actions.npm-cache-config.v1', generatedAtUtc: now(),
    ...totals, status: findings.length ? 'review-recommended' : 'ok',
    findings: findings.slice(0, 100), truncatedFindings: Math.max(0, findings.length - 100),
    limitations: 'Static YAML heuristics only. No actual cache hits, runner durations, GitHub Actions spend, invalid-path inference or billing claims. Missing cache is advisory, never a release gate.',
  };
}

function writeReport(report, reportPath = path.join(ROOT, 'automation/reports/gha-npm-cache-audit-latest.json')) {
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, [
      '## npm cache configuration inventory', '',
      `- Workflow YAML files: **${report.workflowsScanned}**`,
      `- Workflows invoking npm ci: **${report.npmCiWorkflows}**`,
      `- npm ci without declared setup-node npm cache: **${report.npmCiWithoutDeclaredCache}** (review only)`,
      `- Cache steps using default lockfile lookup: **${report.cachedStepsWithoutExplicitLockPath}** (review only)`,
      '', 'This report does not measure cache hit rates or billable minutes.', '',
    ].join('\n'), 'utf8');
  }
  return reportPath;
}

if (require.main === module) {
  try {
    const report = inventory();
    writeReport(report);
    console.log(`Npm cache audit: ${report.status}; ${report.workflowsScanned} workflows; ${report.npmCiWithoutDeclaredCache} advisory cache gaps`);
  } catch (error) {
    console.error(`::error title=npm cache audit failed::${error.code || 'invalid-workflow-data'}`);
    process.exitCode = 1;
  }
}
module.exports = { stepBlocks, scanWorkflow, inventory, writeReport };
