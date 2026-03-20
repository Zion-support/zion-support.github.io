#!/usr/bin/env node
/**
 * Reusable GitHub issue dedupe for autonomous workflows.
 *
 * Env:
 *   ISSUE_TITLE        - Stable exact title for dedupe (required)
 *   ISSUE_BODY_FILE    - Path to body markdown file (required)
 *   ISSUE_LABEL        - Label for new issues (default: bug)
 *   ISSUE_LABELS       - Comma-separated labels (e.g. bug,automation)
 *   ISSUE_FINGERPRINT  - Stable string; adds label automation-fp-<sha12> and matches open issues with that label first
 *   COOLDOWN_HOURS     - If matching issue was updated within this many hours, skip comment/create (default: 0)
 *   SKIP_IF_OPEN       - If "1" or "true", skip create+comment when a matching open issue exists (default: false)
 *   ISSUE_LIST_LIMIT   - Max open issues to scan for title match (default: 200)
 *
 * Requires: gh CLI + GITHUB_TOKEN or GH_TOKEN in env (GitHub Actions sets these).
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

function gh(args, input) {
  const res = spawnSync('gh', args, {
    encoding: 'utf8',
    input: input || undefined,
    env: process.env,
  });
  return {
    ok: res.status === 0,
    status: res.status,
    stdout: (res.stdout || '').trim(),
    stderr: (res.stderr || '').trim(),
  };
}

function parseLabels() {
  const raw = process.env.ISSUE_LABEL || process.env.ISSUE_LABELS || 'bug';
  return String(raw)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function fingerprintLabelName() {
  const fp = process.env.ISSUE_FINGERPRINT;
  if (!fp) return null;
  const hash = crypto.createHash('sha256').update(String(fp)).digest('hex').slice(0, 12);
  return `automation-fp-${hash}`;
}

function ensureFingerprintLabel(labelName) {
  const r = gh([
    'label',
    'create',
    labelName,
    '--color',
    'ededed',
    '--description',
    'Automation issue dedupe fingerprint',
  ]);
  if (!r.ok && !/already exists/i.test(r.stderr)) {
    console.warn('gh label create (non-fatal):', r.stderr || r.stdout);
  }
}

function findIssueByLabel(labelName) {
  const res = gh([
    'issue',
    'list',
    '--state',
    'open',
    '--label',
    labelName,
    '--json',
    'number,title,updatedAt',
    '--limit',
    '50',
  ]);
  if (!res.ok) {
    console.error('gh issue list by label failed:', res.stderr);
    return null;
  }
  try {
    const arr = JSON.parse(res.stdout || '[]');
    return arr[0] || null;
  } catch {
    return null;
  }
}

function listOpenIssues(limit) {
  const list = gh([
    'issue',
    'list',
    '--state',
    'open',
    '--json',
    'number,title,updatedAt',
    '--limit',
    String(limit),
  ]);
  if (!list.ok) {
    console.error('gh issue list failed:', list.stderr || list.stdout);
    process.exit(1);
  }
  try {
    return JSON.parse(list.stdout || '[]');
  } catch {
    return [];
  }
}

function main() {
  const title = process.env.ISSUE_TITLE;
  const bodyFile = process.env.ISSUE_BODY_FILE;
  const labelList = parseLabels();
  const cooldownHours = parseFloat(process.env.COOLDOWN_HOURS || '0') || 0;
  const skipIfOpen = ['1', 'true', 'yes'].includes(String(process.env.SKIP_IF_OPEN || '').toLowerCase());
  const listLimit = String(process.env.ISSUE_LIST_LIMIT || '200');

  if (!title || !bodyFile) {
    console.error('gh-issue-dedupe-or-create: ISSUE_TITLE and ISSUE_BODY_FILE are required.');
    process.exit(2);
  }

  const absBody = path.isAbsolute(bodyFile) ? bodyFile : path.join(process.cwd(), bodyFile);
  if (!fs.existsSync(absBody)) {
    console.error(`gh-issue-dedupe-or-create: body file not found: ${absBody}`);
    process.exit(2);
  }

  const fpLabel = fingerprintLabelName();
  if (fpLabel) {
    ensureFingerprintLabel(fpLabel);
  }

  let matched = null;
  if (fpLabel) {
    matched = findIssueByLabel(fpLabel);
  }

  const issues = listOpenIssues(listLimit);
  if (!matched) {
    matched = issues.find((i) => i.title === title);
  }

  if (matched) {
    const updated = new Date(matched.updatedAt).getTime();
    const ageHours = (Date.now() - updated) / 3600000;
    if (skipIfOpen) {
      console.log(`Open issue #${matched.number} matches; SKIP_IF_OPEN set — skipping.`);
      process.exit(0);
    }
    if (cooldownHours > 0 && ageHours < cooldownHours) {
      console.log(
        `Cooldown active for issue #${matched.number} (updated ${ageHours.toFixed(2)}h ago < ${cooldownHours}h); skipping.`
      );
      process.exit(0);
    }
    const comment = gh(['issue', 'comment', String(matched.number), '--body-file', absBody]);
    if (!comment.ok) {
      console.error('gh issue comment failed:', comment.stderr);
      process.exit(1);
    }
    console.log(`Commented on existing issue #${matched.number}.`);
    process.exit(0);
  }

  const createArgs = ['issue', 'create', '--title', title, '--body-file', absBody];
  const allLabels = [...new Set([...labelList, ...(fpLabel ? [fpLabel] : [])])];
  for (const l of allLabels) {
    createArgs.push('--label', l);
  }

  const create = gh(createArgs, null);
  if (!create.ok) {
    console.error('gh issue create failed:', create.stderr);
    process.exit(1);
  }
  console.log(create.stdout || 'Issue created.');
  process.exit(0);
}

main();
