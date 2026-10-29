'use strict';

// Read ONLY Git's tracked PATHS. Do not open, print, or upload credential contents.
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const REPORT_PATH = 'automation/reports/tracked-credential-paths-latest.json';
const MAX_REPORTED_PATHS = 100;
// Public gotenv v1.6.0 invalid-parser fixture, verified against upstream metadata:
// https://github.com/subosito/gotenv/tree/v1.6.0
// Both the exact path and Git blob ID must match. No fixture bytes are read.
const VERIFIED_UPSTREAM_FIXTURES = Object.freeze({
  'go/pkg/mod/github.com/subosito/gotenv@v1.6.0/.env.invalid':
    '016d5e0cea7ca6e81b046f18ef12bd14c76d66f0',
});

function classifyPath(name, objectId) {
  if (Object.hasOwn(VERIFIED_UPSTREAM_FIXTURES, name) &&
      VERIFIED_UPSTREAM_FIXTURES[name] === objectId) return 'verified-fixture';
  const p = String(name).replace(/\\/g, '/').replace(/^\.\/+/, '').toLowerCase();
  const basename = p.split('/').at(-1);
  if (!p || !basename) return null;
  // Private-key paths, machine authentication stores, environment files and
  // likely certificate bundles. A public SSH key (.pub) is not a private key.
  if (/(^|\/)\.ssh\/id_(rsa|dsa|ecdsa|ed25519|xmss)$/.test(p) ||
      /(^|\/)id_(rsa|dsa|ecdsa|ed25519|xmss)$/.test(p) ||
      /(^|\/)\.aws\/credentials$/.test(p) ||
      /(^|\/)\.kube\/config$/.test(p) ||
      /(^|\/)\.(netrc|pypirc)$/.test(p) ||
      /(^|\/)\.env(?:\.[^/]+)?$/.test(p) &&
        !/(^|\/)\.env\.(example|sample|template|dist)$/.test(p) ||
      /\.(?:p12|pfx)$/.test(basename) ||
      /\.tfstate(?:\.[^/]*)?$/.test(basename)) {
    return 'high';
  }
  // Review-only: these names may refer to harmless registry/certificate config.
  if (/(^|\/)\.npmrc$/.test(p) || /\.(?:pem|key)$/.test(basename)) {
    return 'review';
  }
  return null;
}

function scanPaths(paths, maxReported = MAX_REPORTED_PATHS, indexObjects = new Map()) {
  const high = [];
  const review = [];
  let verifiedFixtureCount = 0;
  for (const name of paths) {
    const risk = classifyPath(name, indexObjects.get(name));
    if (risk === 'verified-fixture') verifiedFixtureCount += 1;
    if (risk === 'high') high.push(name);
    else if (risk === 'review') review.push(name);
  }
  return {
    trackedFiles: paths.length,
    highRiskCount: high.length,
    reviewCount: review.length,
    verifiedFixtureCount,
    highRiskPaths: high.slice(0, maxReported),
    reviewPaths: review.slice(0, maxReported),
    truncated: high.length > maxReported || review.length > maxReported,
  };
}

function listTrackedPaths(cwd = process.cwd()) {
  const r = spawnSync('git', ['ls-files', '--cached', '-z', '--full-name'], {
    cwd, encoding: 'buffer', maxBuffer: 64 * 1024 * 1024,
  });
  if (r.error || r.status !== 0 || !Buffer.isBuffer(r.stdout)) {
    throw new Error('Unable to enumerate the Git index');
  }
  const paths = r.stdout.toString('utf8').split('\0').filter(Boolean);
  if (!paths.length) throw new Error('Empty tracked-file inventory');
  return paths;
}

function listFixtureObjectIds(cwd = process.cwd()) {
  const result = new Map();
  const r = spawnSync('git', [
    'ls-files', '--stage', '-z', '--', ...Object.keys(VERIFIED_UPSTREAM_FIXTURES),
  ], { cwd, encoding: 'buffer', maxBuffer: 64 * 1024 });
  // Missing or invalid metadata must not exempt any path.
  if (r.error || r.status !== 0 || !Buffer.isBuffer(r.stdout)) return result;
  for (const entry of r.stdout.toString('utf8').split('\0').filter(Boolean)) {
    const match = /^100644 ([0-9a-f]{40}) 0\t([^\0]+)$/.exec(entry);
    if (match && Object.hasOwn(VERIFIED_UPSTREAM_FIXTURES, match[2])) {
      result.set(match[2], match[1]);
    }
  }
  return result;
}

function safeAppend(file, value) {
  if (!file) return;
  fs.appendFileSync(file, value, { encoding: 'utf8' });
}

function run(cwd = process.cwd(), reportPath = process.env.CREDENTIAL_PATH_REPORT || REPORT_PATH) {
  let result;
  try {
    result = scanPaths(listTrackedPaths(cwd), MAX_REPORTED_PATHS, listFixtureObjectIds(cwd));
    result.status = result.highRiskCount > 0 ? 'blocked' : 'pass';
  } catch (_error) {
    result = {
      status: 'error', trackedFiles: 0, highRiskCount: 0,
      reviewCount: 0, verifiedFixtureCount: 0, highRiskPaths: [], reviewPaths: [],
      truncated: false, error: 'Git tracked-path inventory unavailable',
    };
  }
  const report = {
    schemaVersion: 1,
    checkedAt: new Date().toISOString(),
    inspection: 'tracked-filenames-and-Git-object-ids-only; no file contents read',
    ...result,
  };
  const dest = path.resolve(cwd, reportPath);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, JSON.stringify(report, null, 2) + '\n', { mode: 0o600 });
  console.log('Tracked credential-path audit: ' + report.status + '; ' + report.trackedFiles + ' paths; ' + report.highRiskCount + ' high; ' + report.reviewCount + ' review-only');
  if (report.highRiskCount) console.error('::error::Tracked high-risk credential filename(s) found. Revoke/rotate affected credentials and coordinate restricted history remediation. Do not expose file contents in CI.');
  if (report.status === 'error') console.error('::error::Git tracked-path inventory unavailable; failing closed.');
  if (report.reviewCount) console.warn('::warning::Review-only credential configuration filenames found; inspect privately for any actual tokens.');
  safeAppend(process.env.GITHUB_OUTPUT, 'high_risk_count=' + report.highRiskCount + '\nreview_count=' + report.reviewCount + '\n');
  safeAppend(process.env.GITHUB_STEP_SUMMARY, [
    '## Tracked credential filename audit',
    '',
    'Metadata only; no credential file contents were read.',
    '',
    '| Status | Tracked paths | High risk | Review only |',
    '|---|---:|---:|---:|',
    '| ' + report.status + ' | ' + report.trackedFiles + ' | ' + report.highRiskCount + ' | ' + report.reviewCount + ' |',
    '',
    'High risk requires restricted administrator incident handling. Deleting a tracked file in a new commit does **not** erase Git history.',
    '',
  ].join('\n'));
  return report.status === 'pass' ? 0 : 1;
}

if (require.main === module) process.exitCode = run();
module.exports = { classifyPath, scanPaths, listTrackedPaths, run };
