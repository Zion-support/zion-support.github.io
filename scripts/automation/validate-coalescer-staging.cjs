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
const stagingRef = process.env.STAGING_REF || 'refs/remotes/origin/coalescer-target';

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

// This script is sourced from trusted main, never from the staging checkout.
// Resolve the pinned staging ref fetched by the trusted workflow, not HEAD.
const head = git(['rev-parse', '--verify', `${stagingRef}^{commit}`]);
let mergeBase;
try {
  mergeBase = git(['merge-base', base, head]);
} catch {
  // A bounded shallow fetch may not contain the common ancestor. This is a
  // rejection, never an excuse to compare against an incomplete baseline.
  fail('Unable to establish common main/staging history. Rebase staging on current main and retry.');
}
// --no-renames exposes BOTH ends of a rename; include deletions so deleting a
// guard/workflow cannot be hidden by a separate allowed addition.
const names = git(['diff', '--no-renames', '--name-only', '--diff-filter=ACDMRT', mergeBase, head]);
const files = names ? names.split('\n').filter(Boolean) : [];

if (!files.length) fail('No staged changes found relative to main.', { branch, head, mergeBase });
if (files.length > 200) fail('Too many changed files for one coalesced PR.', { count: files.length });
// Newlines/tabs/nonstandard Git path quoting can evade line-oriented diff parsing.
// Fail closed for coalescer candidates; these paths can use the normal reviewed PR route.
const unsafeNames = files.filter((file) => !/^[A-Za-z0-9._/-]+$/.test(file));
if (unsafeNames.length) fail('Unusual or unsafe file paths require an ordinary reviewed PR.', { unsafeNames });

const denied = files.filter((file) => deny.some((rule) => rule.test(file)));
if (denied.length) fail('Protected paths detected.', { denied });

const outside = files.filter((file) => !policies[group].some((rule) => rule.test(file)));
if (outside.length) fail('Files outside the selected policy group.', { group, outside });

// Coalesced PRs contain non-executable content/data only. A script or tool
// disguised under a safe directory requires the normal reviewed PR route.
const allowedFileTypes = {
  content: /\.(?:md|html|json|txt|csv)$/i,
  reports: /\.(?:md|json|txt|csv|ndjson)$/i,
  docs: /\.(?:md|rst|txt|json|csv|ndjson)$/i,
};
const unsupportedTypes = files.filter((file) => !allowedFileTypes[group].test(file));
if (unsupportedTypes.length) fail('Executable or unsupported file extensions require an ordinary reviewed PR.', { unsupportedTypes });

// Reject executable bits, symlinks and submodules even inside an allowed folder.
// They can cross review boundaries or execute after a later workflow change.
const changedTree = git(['ls-tree', '-r', head, '--', ...files]);
const changedEntries = changedTree.split('\n').filter(Boolean);
const unusualModes = changedEntries.filter((line) => !/^100644 blob [0-9a-f]{40}\t/.test(line));
if (unusualModes.length) fail('Executables, symlinks or submodules require an ordinary reviewed PR.');

// Cap staged blob sizes separately from the line-diff budget. Large minified
// data blobs can otherwise pass a tiny changed-line count.
const MAX_FILE_BYTES = 2 * 1024 * 1024;
const MAX_TOTAL_BYTES = 8 * 1024 * 1024;
let totalBytes = 0;
const sensitivePatterns = [
  ['private-key-material', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/],
  ['github-access-token', /\b(?:ghp|gho|ghu|ghs|ghr)_[a-zA-Z0-9_]{20,}\b/],
  ['github-fine-grained-token', /\bgithub_pat_[a-zA-Z0-9_]{20,}\b/],
  ['aws-access-key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
  ['openai-api-key', /\bsk-(?:proj-|svcacct-)?[a-zA-Z0-9_-]{20,}\b/],
  ['stripe-secret-key', /\b(?:sk|rk)_(?:live|test)_[a-zA-Z0-9]{16,}\b/],
  ['slack-credential', /\bxox[baprs]-[a-zA-Z0-9-]{24,}\b/],
];
const activeContentPattern = /<\s*(?:script|iframe|object|embed)\b|\bjavascript\s*:|\bon(?:load|error|click)\s*=/i;
for (const line of changedEntries) {
  const sha = /^100644 blob ([0-9a-f]{40})\t/.exec(line)[1];
  const size = Number(git(['cat-file', '-s', sha]));
  if (!Number.isSafeInteger(size) || size < 0) fail('Invalid staged file size.');
  if (size > MAX_FILE_BYTES) fail('Staged file exceeds 2 MiB safety budget.');
  totalBytes += size;
  if (totalBytes > MAX_TOTAL_BYTES) fail('Staged files exceed 8 MiB total safety budget.');

  // Read only the bounded blob from the Git object store. Do not print source
  // excerpts, tokens or patterns in logs, reports, PR bodies or annotations.
  const file = line.slice(line.indexOf('\t') + 1);
  const blob = execFileSync('git', ['cat-file', 'blob', sha], {
    maxBuffer: MAX_FILE_BYTES + 8192,
  });
  if (blob.length !== size || blob.includes(0)) fail('NUL or inconsistent staged content is not eligible.');
  let content;
  try {
    content = new TextDecoder('utf-8', { fatal: true }).decode(blob);
  } catch {
    fail('Non-UTF-8 content is not eligible for automatic coalescing.');
  }
  for (const [rule, pattern] of sensitivePatterns) {
    if (pattern.test(content)) fail('Potential credential or private key in staged content; use secure remediation instead.', { rule });
  }
  if (group === 'content' && activeContentPattern.test(content)) {
    fail('Active HTML/JavaScript content requires an ordinary reviewed PR.', { path: file });
  }
}

const numstat = git(['diff', '--no-renames', '--numstat', mergeBase, head]);
let added = 0;
let deleted = 0;
for (const line of numstat.split('\n').filter(Boolean)) {
  const [a, d] = line.split('\t');
  if (!/^\d+$/.test(a) || !/^\d+$/.test(d)) {
    fail('Binary or unparseable changes are not eligible for automated coalescing.');
  }
  added += Number(a);
  deleted += Number(d);
}
if (added + deleted > 12000) fail('Diff exceeds the 12,000-line coalescing safety budget.', { added, deleted });

// Bounded, deterministic review workload signal; NOT a security pass or
// permission to publish. Coalesced PRs always remain drafts.
const reviewReasons = [];
if (group === 'content') reviewReasons.push('public-content-changes');
if (deleted > 0) reviewReasons.push('content-deletions');
if (files.length > 50) reviewReasons.push('large-file-count');
if (added + deleted > 3000) reviewReasons.push('large-line-diff');
const reviewTier = reviewReasons.length ? 'enhanced' : 'standard';

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
  staged_blob_bytes: totalBytes,
  review_tier: reviewTier,
  review_reasons: reviewReasons,
  direct_main_push: false,
  auto_merge: false,
};

fs.mkdirSync('automation/reports', { recursive: true });
fs.writeFileSync('automation/reports/coalescer-validation-latest.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `head=${head}\nfile_count=${files.length}\nadded=${added}\ndeleted=${deleted}\nreview_tier=${reviewTier}\nreview_reasons=${reviewReasons.join(',') || 'none'}\nstaged_bytes=${totalBytes}\n`);
}
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    `## Coalescer staging validation\n\n- Decision: **ALLOW DRAFT PR**\n- Policy: \`${group}\`\n- Files: **${files.length}**\n- Diff: **+${added} / -${deleted}**\n- Staged bytes: **${totalBytes}**\n- Review tier: **${reviewTier}** (${reviewReasons.join(', ') || 'no extra review signals'})\n- Head: \`${head}\`\n`
  );
}
