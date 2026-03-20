#!/usr/bin/env node
/**
 * Reusable GitHub issue dedupe for autonomous workflows.
 *
 * Env:
 *   ISSUE_TITLE        - Stable exact title for fingerprint (required)
 *   ISSUE_BODY_FILE    - Path to body markdown file (required)
 *   ISSUE_LABEL        - Label for new issues (default: bug)
 *   COOLDOWN_HOURS     - If open issue exists and was updated within this many hours, skip (default: 0 = still comment)
 *   SKIP_IF_OPEN       - If "1" or "true", skip create+comment when any open issue matches title search (default: false)
 *
 * Requires: gh CLI + GITHUB_TOKEN or GH_TOKEN in env (GitHub Actions sets these).
 */

const fs = require('fs');
const path = require('path');
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

function main() {
  const title = process.env.ISSUE_TITLE;
  const bodyFile = process.env.ISSUE_BODY_FILE;
  const label = process.env.ISSUE_LABEL || process.env.ISSUE_LABELS || 'bug';
  const cooldownHours = parseFloat(process.env.COOLDOWN_HOURS || '0', 10);
  const skipIfOpen = ['1', 'true', 'yes'].includes(String(process.env.SKIP_IF_OPEN || '').toLowerCase());

  if (!title || !bodyFile) {
    console.error('gh-issue-dedupe-or-create: ISSUE_TITLE and ISSUE_BODY_FILE are required.');
    process.exit(2);
  }

  const absBody = path.isAbsolute(bodyFile) ? bodyFile : path.join(process.cwd(), bodyFile);
  if (!fs.existsSync(absBody)) {
    console.error(`gh-issue-dedupe-or-create: body file not found: ${absBody}`);
    process.exit(2);
  }

  const listLimit = String(process.env.ISSUE_LIST_LIMIT || '200');

  const list = gh([
    'issue',
    'list',
    '--state',
    'open',
    '--json',
    'number,title,updatedAt',
    '--limit',
    listLimit,
  ]);

  if (!list.ok) {
    console.error('gh issue list failed:', list.stderr || list.stdout);
    process.exit(1);
  }

  let issues;
  try {
    issues = JSON.parse(list.stdout || '[]');
  } catch {
    issues = [];
  }

  const exact = issues.find((i) => i.title === title);

  if (exact) {
    const updated = new Date(exact.updatedAt).getTime();
    const ageHours = (Date.now() - updated) / 3600000;
    if (skipIfOpen) {
      console.log(`Open issue #${exact.number} matches title; SKIP_IF_OPEN set — skipping.`);
      process.exit(0);
    }
    if (cooldownHours > 0 && ageHours < cooldownHours) {
      console.log(
        `Cooldown active for issue #${exact.number} (updated ${ageHours.toFixed(2)}h ago < ${cooldownHours}h); skipping.`
      );
      process.exit(0);
    }
    const comment = gh(['issue', 'comment', String(exact.number), '--body-file', absBody]);
    if (!comment.ok) {
      console.error('gh issue comment failed:', comment.stderr);
      process.exit(1);
    }
    console.log(`Commented on existing issue #${exact.number}.`);
    process.exit(0);
  }

  const create = gh(
    ['issue', 'create', '--title', title, '--body-file', absBody, '--label', label],
    null
  );
  if (!create.ok) {
    console.error('gh issue create failed:', create.stderr);
    process.exit(1);
  }
  console.log(create.stdout || 'Issue created.');
  process.exit(0);
}

main();
