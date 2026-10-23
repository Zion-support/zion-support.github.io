#!/usr/bin/env node
'use strict';

const { execFileSync } = require('node:child_process');
const fs = require('node:fs');

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

function fail(message, details = {}) {
  const payload = { ok: false, message, ...details };
  console.error(JSON.stringify(payload, null, 2));
  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Coalescer staging validation\n\n- Decision: **BLOCK**\n- ${message}\n`);
  }
  process.exit(1);
}

const branch = process.env.STAGING_BRANCH || '';
const group = process.env.POLICY_GROUP || '';
const base = process.env.BASE_REF || 'origin/main';

if (!branch.startsWith('automation/staging/') || !/^automation\/staging\/[a-z0-9][a-z0-9._-]{1,62}$/.test(branch)) {
  fail('staging_branch must match automation/staging/<safe-slug>', { branch });
}

const policies = {
  content: [/^public\/(blog|case-studies|industries|services|apps)\//, /^content\//],
  reports: [/^automation\/reports\//],
  docs: [/^docs\//, /^README\.md$/],
};

if (!Object.prototype.hasOwnProperty.call(policies, group)) {
  fail('Unsupported policy_group. Allowed: content, reports, docs.', { group });
}

const deny = [
  /^\.github\//,
  /^\.env(?:\.|$)/,
  /(?:^|\/)(?:secrets?|credentials?)(?:\/|\.|$)/i,
  /(?:^|\/)(?:payment|payments|billing|checkout|stripe)(?:\/|\.|-|$)/i,
  /(?:^|\/)discovery(?:\/|\.|-|$)/i,
  /(?:^|\/)managed-it-services(?:\/|$)/i,
  /^app\/api\//,
  /^api\//,
  /^functions\//,
  /^middleware\./,
  /^package(?:-lock)?\.json$/,
  /^scripts\//,
  /^automation\/(?!reports\/)/,
];

const head = git(['rev-parse', 'HEAD']);
const mergeBase = git(['merge-base', base, 'HEAD']);
const names = git(['diff', '--name-only', '--diff-filter=ACMRT', mergeBase, 'HEAD']);
const files = names ? names.split('\n').filter(Boolean) : [];

if (!files.length) fail('No staged changes found relative to main.', { branch, head, mergeBase });
if (files.length > 200) fail('Too many changed files for one coalesced PR.', { count: files.length });

const denied = files.filter((file) => deny.some((rule) => rule.test(file)));
if (denied.length) fail('Protected paths detected.', { denied });

const outside = files.filter((file) => !policies[group].some((rule) => rule.test(file)));
if (outside.length) fail('Files outside the selected policy group.', { group, outside });

const numstat = git(['diff', '--numstat', mergeBase, 'HEAD']);
let added = 0;
let deleted = 0;
for (const line of numstat.split('\n').filter(Boolean)) {
  const [a, d] = line.split('\t');
  if (a !== '-') added += Number(a || 0);
  if (d !== '-') deleted += Number(d || 0);
}
if (added + deleted > 12000) fail('Diff exceeds the 12,000-line coalescing safety budget.', { added, deleted });

const report = {
  ok: true,
  staging_branch: branch,
  policy_group: group,
  head,
  merge_base: mergeBase,
  changed_files: files,
  file_count: files.length,
  added_lines: added,
  deleted_lines: deleted,
  direct_main_push: false,
  auto_merge: false,
};

fs.mkdirSync('automation/reports', { recursive: true });
fs.writeFileSync('automation/reports/coalescer-validation-latest.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `head=${head}\nfile_count=${files.length}\nadded=${added}\ndeleted=${deleted}\n`);
}
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    `## Coalescer staging validation\n\n- Decision: **ALLOW DRAFT PR**\n- Policy: \`${group}\`\n- Files: **${files.length}**\n- Diff: **+${added} / -${deleted}**\n- Head: \`${head}\`\n`
  );
}
