'use strict';

// A digest is issued only after this invocation writes a complete observation.
// The final Pages gate checks the bytes after assembly, not just source freshness.
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');

const PUBLIC_PATH = 'public/api/automation-health.json';
const OUTPUT_NAME = 'snapshot_sha256';
const RECEIPT_ENV = 'AUTOMATION_HEALTH_ARTIFACT_SHA256';
const SCOPE = 'latest_production_pages_publisher_and_github_pages_configuration';
const WORKFLOWS = ['gh-pages.yml', 'static-deploy.yml', 'deploy-on-push.yml'];
const ACTIVE = new Set(['queued', 'requested', 'pending', 'waiting', 'in_progress']);
const FAILED = new Set(['failure', 'timed_out', 'action_required', 'startup_failure']);
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
const fail = (message) => { throw new Error('Pages automation health: ' + message); };
const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const isId = (value) => Number.isSafeInteger(value) && value > 0;

function validateSnapshot(report, { env = process.env, now = Date.now } = {}) {
  const repository = env.GITHUB_REPOSITORY || '';
  const maxAgeHours = env.AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS === undefined ||
    env.AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS === '' ? 24 : Number(env.AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS);
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository) ||
      !Number.isFinite(maxAgeHours) || maxAgeHours <= 0) fail('invalid validation configuration');
  if (!isObject(report) || report.schemaVersion !== 2 || report.scope !== SCOPE ||
      report.repository !== repository || report.branch !== 'main') fail('invalid schema or production scope');
  if (!['ok', 'pending', 'degraded'].includes(report.status) ||
      report.severity !== (report.status === 'ok' ? 'nominal' : report.status)) fail('incomplete observation status');
  const collection = report.collection;
  if (!isObject(collection) || collection.complete !== true || report.publicSnapshotUpdated !== true ||
      !Array.isArray(collection.errors) || collection.errors.length !== 0 ||
      collection.maxRunAgeHours !== maxAgeHours) fail('collection did not produce complete evidence');

  const nowMs = now();
  const date = (value) => {
    const parsed = typeof value === 'string' ? Date.parse(value) : NaN;
    if (!Number.isFinite(parsed) || new Date(parsed).toISOString() !== value) fail('invalid observation timestamp');
    return parsed;
  };
  const generated = date(report.generatedAt);
  const timestamp = date(report.timestamp);
  if (!Number.isFinite(nowMs) || generated > timestamp || timestamp > nowMs ||
      nowMs - generated > maxAgeHours * 3600000) fail('stale or future observation');
  if (!Array.isArray(collection.sources) || collection.sources.length < 5 ||
      !collection.sources.every((source) => {
        if (!isObject(source) || source.httpStatus !== 200 || source.errorCode) return false;
        let url;
        try { url = new URL(source.url); } catch { return false; }
        const checked = date(source.checkedAt);
        return url.origin === 'https://api.github.com' &&
          url.pathname.startsWith('/repos/' + repository + '/') &&
          checked >= generated && checked <= timestamp;
      })) fail('missing or invalid collection evidence');

  const publisher = report.publisher;
  if (!isObject(publisher) || !WORKFLOWS.includes(publisher.workflow) ||
      !isId(publisher.runId) || !isId(publisher.runAttempt) || !isId(publisher.workflowId) ||
      !/^[a-f0-9]{40}$/i.test(publisher.headSha || '') || publisher.branch !== 'main' ||
      publisher.runUrl !== 'https://github.com/' + repository + '/actions/runs/' + publisher.runId ||
      !(ACTIVE.has(publisher.status) && publisher.conclusion === null ||
        publisher.status === 'completed' && (publisher.conclusion === 'success' || FAILED.has(publisher.conclusion)))) {
    fail('invalid observed publisher');
  }
  // The collector observes the latest eligible publisher. Another uploader may
  // legitimately be newer than this run; do not require its run ID or SHA here.
  const created = date(publisher.createdAt);
  const updated = date(publisher.updatedAt);
  if (created > updated || updated > timestamp + 300000 ||
      nowMs - updated > maxAgeHours * 3600000) fail('stale or invalid publisher evidence');
  if (!isObject(report.details) || !isObject(report.checks)) fail('missing observed checks');
  const states = [];
  for (const name of ['build', 'deploy', 'pages']) {
    const detail = report.details[name];
    if (!isObject(detail) || !['passed', 'failed', 'pending'].includes(detail.state)) fail('unknown observed check');
    const healthy = detail.state === 'passed' ? true : detail.state === 'failed' ? false : null;
    if (detail.healthy !== healthy || report.checks[name] !== healthy) fail('inconsistent observed check');
    states.push(detail.state);
  }
  const failed = states.includes('failed') ||
    (publisher.status === 'completed' && FAILED.has(publisher.conclusion));
  const expectedStatus = failed ? 'degraded' :
    (ACTIVE.has(publisher.status) || states.includes('pending')) ? 'pending' : 'ok';
  if (report.status !== expectedStatus) fail('status does not match observed evidence');
  return report;
}

async function collectForPages({ cwd = process.cwd(), env = process.env, now = Date.now, ...options } = {}) {
  const { runCollector } = require('./generate-automation-health-snapshot.cjs');
  const result = await runCollector({ cwd, env, now, ...options });
  if (result.report.collection.complete !== true || result.report.publicSnapshotUpdated !== true) {
    return { ...result, receipt: null };
  }
  const bytes = fs.readFileSync(path.join(cwd, PUBLIC_PATH));
  const snapshot = JSON.parse(bytes.toString('utf8'));
  if (JSON.stringify(snapshot) !== JSON.stringify(result.report)) fail('public write differs from this collection');
  validateSnapshot(snapshot, { env, now });
  if (!env.GITHUB_OUTPUT) fail('missing collection output channel');
  const receipt = digest(bytes);
  fs.appendFileSync(env.GITHUB_OUTPUT, OUTPUT_NAME + '=' + receipt + '\n');
  return { ...result, receipt };
}

function verifyArtifact({ cwd = process.cwd(), env = process.env, now = Date.now,
  artifactPath = 'out/api/automation-health.json' } = {}) {
  const receipt = env[RECEIPT_ENV] || '';
  if (!/^[a-f0-9]{64}$/.test(receipt)) fail('missing receipt from this collection');
  const bytes = fs.readFileSync(path.resolve(cwd, artifactPath));
  if (digest(bytes) !== receipt) fail('final artifact differs from this collection');
  return validateSnapshot(JSON.parse(bytes.toString('utf8')), { env, now });
}

if (require.main === module) {
  (async () => {
    if (process.argv[2] === 'collect' && process.argv.length === 3) {
      const { report, exitCode, receipt } = await collectForPages();
      console.log(JSON.stringify({
        status: report.status, publicSnapshotUpdated: report.publicSnapshotUpdated,
        publisherRunId: report.publisher?.runId || null, artifactReceiptIssued: Boolean(receipt),
      }));
      // Preserve the collector's nonzero diagnostic for complete pending/degraded.
      // Only verify decides whether this complete observation may be published.
      process.exitCode = exitCode;
    } else if (process.argv[2] === 'verify' && process.argv.length <= 4) {
      const report = verifyArtifact({ artifactPath: process.argv[3] || 'out/api/automation-health.json' });
      console.log(JSON.stringify({ artifactHealthVerified: true, status: report.status,
        publisherRunId: report.publisher.runId, timestamp: report.timestamp }));
    } else {
      fail('expected collect or verify [artifact path]');
    }
  })().catch((error) => {
    console.error(error.message?.startsWith('Pages automation health:') ? error.message :
      'Pages automation health: collection, write or artifact validation failed.');
    process.exitCode = 1;
  });
}

module.exports = { collectForPages, verifyArtifact, validateSnapshot, OUTPUT_NAME, RECEIPT_ENV };
