#!/usr/bin/env node
'use strict';

// Read-only check of tracked source code. Never mutate source files, generate fixes,
// publish pages or treat an empty/failed git scan as successful.
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const SOURCE_EXTENSIONS = [
  'js', 'jsx', 'ts', 'tsx', 'mjs', 'cjs', 'json', 'yml', 'yaml',
  'css', 'scss', 'html', 'mdx', 'vue', 'py', 'sh', 'rb', 'go', 'rs'
];
const SOURCE_PATHS = SOURCE_EXTENSIONS.map(ext => `:(glob)**/*.${ext}`);
const GREP_ARGS = [
  'grep', '--cached', '-n', '-I', '-E', '-o',
  '-e', '^<{7}([[:space:]]|$)',
  '-e', '^={7}$',
  '-e', '^>{7}([[:space:]]|$)',
  '--', ...SOURCE_PATHS
];
const MAX_BYTES = 32 * 1024 * 1024;
const MAX_EVIDENCE = 100;
const MAX_CLASSIFIED_PATHS = 250;
const MAX_SOURCE_SIZE = 512 * 1024;
// Advisory only: these patterns flag review; never extract or publish actual values.
const CURRENCY_TOKEN = /(?:\b(?:USD|BRL|EUR|GBP)\s*\d|R\$\s*\d|\$\s*\d|€\s*\d|£\s*\d)/i;
const CHECKOUT_OR_BOOKING = /\b(?:stripe|checkout|calendly|payment[- ]?link)\b/i;

function git(root, args) {
  return spawnSync('git', args, {
    cwd: root, encoding: 'utf8', timeout: 90000, maxBuffer: MAX_BYTES,
    env: { ...process.env, GIT_OPTIONAL_LOCKS: '0' }
  });
}
function sanitized(message) {
  return String(message || '').replace(/[\x00-\x1f\x7f`<>\[\]]/g, '_').slice(0, 200);
}
function markerKind(marker) {
  if (marker.startsWith('<<<<<<<')) return 'START';
  if (marker.startsWith('>>>>>>>')) return 'END';
  return 'DIVIDER';
}
function evaluate(root) {
  const result = {
    schema: 'zion.ci.tracked-merge-markers.v1',
    generatedAtUtc: new Date().toISOString(),
    commitSha: process.env.GITHUB_SHA || null,
    status: 'ERROR', scannedTrackedSourceFiles: 0,
    markerCount: 0, affectedFiles: 0, affectedSourcePaths: [], affectedPathsTruncated: false,
    commercialReviewFiles: 0, commercialReviewPaths: [], bookingReviewFiles: 0,
    bookingReviewPaths: [], unclassifiedFiles: 0, unclassifiedPaths: [],
    commercialClassificationIsAdvisory: true,
    samples: [], truncated: false,
    problem: null,
    scope: 'Tracked source/config extensions only; no documents, binary files or untracked local files',
    sourceSnippetStored: false
  };
  const files = git(root, ['ls-files', '--cached', '-z', '--', ...SOURCE_PATHS]);
  if (files.error || files.status !== 0 || files.signal) {
    result.problem = 'GIT_INDEX_UNAVAILABLE: ' + sanitized(files.error?.message || files.stderr);
    return result;
  }
  result.scannedTrackedSourceFiles = (files.stdout.match(/\0/g) || []).length;
  if (!result.scannedTrackedSourceFiles) {
    result.problem = 'NO_TRACKED_SOURCE_FILES';
    return result;
  }
  const matches = git(root, GREP_ARGS);
  if (matches.error || matches.signal || ![0, 1].includes(matches.status)) {
    result.problem = 'GIT_GREP_ERROR: ' + sanitized(matches.error?.message || matches.stderr);
    return result;
  }
  if (matches.status === 1) {
    result.status = 'PASS';
    return result;
  }
  const affected = new Set();
  for (const line of matches.stdout.split('\n')) {
    if (!line) continue;
    const hit = /^(.*):([0-9]+):([<=>]{7})[ \t]*$/.exec(line);
    if (!hit) {
      result.problem = 'UNPARSEABLE_GIT_GREP_OUTPUT';
      return result;
    }
    const file = hit[1];
    const number = Number(hit[2]);
    if (!file || !Number.isSafeInteger(number) || number < 1) {
      result.problem = 'INVALID_MATCH_LOCATION';
      return result;
    }
    result.markerCount += 1;
    affected.add(file);
    if (result.samples.length < MAX_EVIDENCE) {
      result.samples.push({ path: sanitized(file), line: number, marker: markerKind(hit[3]) });
    }
  }
  if (!result.markerCount) {
    result.problem = 'GIT_GREP_MATCH_WITHOUT_EVIDENCE';
    return result;
  }
  result.affectedFiles = affected.size;
  const orderedPaths = [...affected].sort();
  result.affectedSourcePaths = orderedPaths.slice(0, MAX_CLASSIFIED_PATHS).map(sanitized);
  result.affectedPathsTruncated = affected.size > MAX_CLASSIFIED_PATHS;
  // Only read already-conflicted Git-index source: do not run the files, change them,
  // or write any prices, emails, credentials, source snippets or URLs into evidence.
  for (const file of orderedPaths.slice(0, MAX_CLASSIFIED_PATHS)) {
    const indexed = git(root, ['show', ':' + file]);
    if (indexed.error || indexed.signal || indexed.status !== 0 ||
        indexed.stdout.length > MAX_SOURCE_SIZE) {
      result.unclassifiedFiles++;
      result.unclassifiedPaths.push(sanitized(file));
      continue;
    }
    if (CURRENCY_TOKEN.test(indexed.stdout)) {
      result.commercialReviewFiles++;
      result.commercialReviewPaths.push(sanitized(file));
    }
    if (CHECKOUT_OR_BOOKING.test(indexed.stdout)) {
      result.bookingReviewFiles++;
      result.bookingReviewPaths.push(sanitized(file));
    }
  }
  result.unclassifiedFiles += Math.max(0, orderedPaths.length - MAX_CLASSIFIED_PATHS);
  result.truncated = result.markerCount > MAX_EVIDENCE;
  result.status = 'FAIL';
  return result;
}
function writeEvidence(result, root, out = 'automation/reports/merge-conflict-markers-latest.json') {
  const file = path.resolve(root, out);
  const dir = path.dirname(file);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(result, null, 2) + '\n', 'utf8');
  const summary = [
    `### Tracked merge-marker audit: ${result.status}`,
    '',
    `- Tracked source files scanned: ${result.scannedTrackedSourceFiles}`,
    `- Marker lines: ${result.markerCount}`,
    `- Affected source files: ${result.affectedFiles}`,
    `- Files requiring Commercial review for currency tokens: ${result.commercialReviewFiles}`,
    `- Files mentioning booking/checkout: ${result.bookingReviewFiles}`,
    `- Files not classified (manual review required): ${result.unclassifiedFiles}`,
    '- Commercial flags are advisory. No prices, customer details or source contents are stored.',
    '- Conflicting service content must not be published without technical and Commercial approval.',
    '',
    ...result.samples.slice(0, 20).map(x => `- \`${x.path}:${x.line}\` (${x.marker})`),
    result.truncated ? '- Additional findings omitted from summary; inspect JSON artifact.' : ''
  ].filter(Boolean).join('\n') + '\n';
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  return { file, summary };
}
if (require.main === module) {
  try {
    const root = path.resolve(process.argv[2] || process.cwd());
    const report = evaluate(root);
    const output = writeEvidence(report, root);
    console.log(report.status + ': ' + report.markerCount + ' markers across ' + report.affectedFiles +
      ' files (' + report.scannedTrackedSourceFiles + ' tracked source files). Evidence: ' +
      path.relative(root, output.file));
    for (const x of report.samples.slice(0, 15)) console.log(x.path + ':' + x.line + ' ' + x.marker);
    if (report.problem) console.error('::error::' + sanitized(report.problem));
    if (report.status !== 'PASS') process.exitCode = report.status === 'FAIL' ? 1 : 2;
  } catch (e) {
    console.error('::error::Merge marker scanner failed: ' + sanitized(e.message));
    process.exitCode = 2;
  }
}
module.exports = { evaluate, writeEvidence, SOURCE_EXTENSIONS };
