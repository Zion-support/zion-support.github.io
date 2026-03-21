#!/usr/bin/env node
const { spawnSync } = require('child_process');

const RISK_LABELS = ['automation-risk-low', 'automation-risk-medium', 'automation-risk-high'];

function ghApi(method, pathUrl, bodyObj) {
  const args = method === 'GET' ? ['api', pathUrl] : ['api', '-X', method, pathUrl];
  if (bodyObj && method !== 'GET') args.push('--input', '-');
  const r = spawnSync('gh', args, {
    encoding: 'utf8',
    env: process.env,
    input: bodyObj ? JSON.stringify(bodyObj) : undefined,
  });
  if (r.status !== 0) return null;
  try {
    return JSON.parse(r.stdout || '{}');
  } catch {
    return null;
  }
}

function ensureRiskLabels() {
  const defs = [
    ['automation-risk-low', '0e8a16', 'Low automation/release risk'],
    ['automation-risk-medium', 'fbca04', 'Medium automation/release risk'],
    ['automation-risk-high', 'd93f0b', 'High automation/release risk'],
  ];
  for (const [name, color, description] of defs) {
    spawnSync('gh', ['label', 'create', name, '--color', color, '--description', description], {
      encoding: 'utf8',
      env: process.env,
    });
  }
}

function listPrFiles(repo, prNumber) {
  const files = [];
  for (let page = 1; page <= 10; page += 1) {
    const j = ghApi('GET', `/repos/${repo}/pulls/${prNumber}/files?per_page=100&page=${page}`);
    if (!Array.isArray(j) || j.length === 0) break;
    files.push(...j.map((x) => String(x.filename || '')).filter(Boolean));
    if (j.length < 100) break;
  }
  return files;
}

function getMainHealth(repo) {
  const j = ghApi('GET', `/repos/${repo}/contents/automation/reports/automation-health-latest.json?ref=main`);
  if (!j || !j.content) return null;
  try {
    return JSON.parse(Buffer.from(String(j.content).replace(/\n/g, ''), 'base64').toString('utf8'));
  } catch {
    return null;
  }
}

function scoreRisk(files, health) {
  let score = 0;
  const reasons = [];
  const sev = String(health?.severity || '');
  if (sev === 'critical') {
    score += 45;
    reasons.push('main automation health critical');
  } else if (sev === 'warning') {
    score += 25;
    reasons.push('main automation health warning');
  }

  const workflowCount = files.filter((f) => f.startsWith('.github/workflows/')).length;
  const automationCount = files.filter((f) => f.startsWith('automation/') || f.startsWith('scripts/automation/')).length;
  const appCount = files.filter((f) => f.startsWith('app/')).length;
  if (workflowCount > 0) score += 18;
  if (automationCount > 0) score += 16;
  if (appCount > 0) score += 10;
  if (files.length >= 35) score += 14;
  else if (files.length >= 15) score += 8;
  if (workflowCount > 0) reasons.push('workflow changes');
  if (automationCount > 0) reasons.push('automation changes');
  if (appCount > 0) reasons.push('app changes');
  if (files.length >= 15) reasons.push(`files=${files.length}`);

  if (score >= 60) return { label: 'automation-risk-high', score, reasons };
  if (score >= 28) return { label: 'automation-risk-medium', score, reasons };
  return { label: 'automation-risk-low', score, reasons };
}

function setSingleRiskLabel(repo, prNumber, targetLabel) {
  const existing = ghApi('GET', `/repos/${repo}/issues/${prNumber}/labels?per_page=100`);
  if (!Array.isArray(existing)) return false;
  const keep = existing.map((x) => x.name).filter((n) => !RISK_LABELS.includes(n));
  const labels = [...new Set([...keep, targetLabel])];
  return Boolean(ghApi('PUT', `/repos/${repo}/issues/${prNumber}/labels`, { labels }));
}

function upsertRiskComment(repo, prNumber, label, score, reasons) {
  const marker = '<!-- automation-risk-label -->';
  const body = `${marker}

### Automation risk label
- Label: \`${label}\`
- Score: **${score}**
- Signals: ${reasons.length ? reasons.join('; ') : 'baseline'}
`;
  const comments = ghApi('GET', `/repos/${repo}/issues/${prNumber}/comments?per_page=100`);
  if (Array.isArray(comments)) {
    const existing = comments.find((c) => String(c.body || '').includes(marker));
    if (existing?.id) {
      return Boolean(ghApi('PATCH', `/repos/${repo}/issues/comments/${existing.id}`, { body }));
    }
  }
  return Boolean(ghApi('POST', `/repos/${repo}/issues/${prNumber}/comments`, { body }));
}

function main() {
  const repo = process.env.GITHUB_REPOSITORY;
  const prNumber = process.env.PR_NUMBER;
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!repo || !prNumber || !token) {
    console.log('label-pr-automation-risk: missing env; skipping');
    process.exit(0);
  }
  ensureRiskLabels();
  const files = listPrFiles(repo, prNumber);
  if (!files.length) process.exit(0);
  const health = getMainHealth(repo);
  const { label, score, reasons } = scoreRisk(files, health);
  if (!setSingleRiskLabel(repo, prNumber, label)) process.exit(1);
  if (!upsertRiskComment(repo, prNumber, label, score, reasons)) process.exit(1);
  console.log(`label-pr-automation-risk: ${label} (${score})`);
}

main();
