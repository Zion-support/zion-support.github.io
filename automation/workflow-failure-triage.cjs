'use strict';
/**
 * Dependency-free, read-only GitHub Actions triage from `gh run list` samples.
 * Separates runner congestion from completed workflow failures. This is a bounded
 * sample, not a complete history, uptime metric, cost estimate, or release gate.
 */
const fs = require('node:fs');
const path = require('node:path');

const QUEUED = new Set(['queued', 'pending', 'waiting', 'requested']);
const WINDOW_MS = 24 * 60 * 60 * 1000;
const QUEUE_STALE_MINUTES = 45;

function nameFor(raw) {
  return String(raw || 'Unknown workflow').replace(/[\r\n|`<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 100) || 'Unknown workflow';
}
function validRun(run) {
  return run && typeof run === 'object' && !Array.isArray(run) &&
    Number.isSafeInteger(Number(run.databaseId)) && Number(run.databaseId) > 0;
}
function minutesAgo(raw, nowMs) {
  const when = Date.parse(raw || '');
  return Number.isFinite(when) ? Math.max(0, (nowMs - when) / 60000) : null;
}
function buildReport(recent, failures, now = new Date()) {
  if (!Array.isArray(recent) || !Array.isArray(failures)) throw new Error('invalid-run-samples');
  if (!recent.length && !failures.length) throw new Error('empty-run-samples');
  const nowMs = now.getTime();
  if (!Number.isFinite(nowMs)) throw new Error('invalid-clock');
  const uniq = new Map();
  for (const run of [...recent, ...failures]) {
    if (!validRun(run)) continue;
    const id = Number(run.databaseId);
    if (!uniq.has(id)) uniq.set(id, run);
    else if (run.status === 'completed') uniq.set(id, run);
  }
  if (!uniq.size) throw new Error('invalid-run-samples');
  const all = [...uniq.values()];
  const queued = recent.filter(r => validRun(r) && QUEUED.has(String(r.status || '')));
  const queuedAges = queued.map(r => minutesAgo(r.createdAt, nowMs)).filter(x => x !== null);
  const oldestQueueMinutes = queuedAges.length ? Math.round(Math.max(...queuedAges)) : 0;
  const staleQueued = queuedAges.filter(x => x >= QUEUE_STALE_MINUTES).length;
  const completedFailures = all.filter(r => {
    const age = minutesAgo(r.createdAt, nowMs);
    return String(r.status || '') === 'completed' && String(r.conclusion || '') === 'failure' && age !== null && age * 60000 <= WINDOW_MS;
  });
  const counts = new Map();
  for (const run of completedFailures) {
    const name = nameFor(run.workflowName);
    counts.set(name, (counts.get(name) || 0) + 1);
  }
  const topFailures = [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 12).map(([workflow, count]) => ({ workflow, count }));
  const cancelledSample = recent.filter(r => r.conclusion === 'cancelled').length;
  const skippedSample = recent.filter(r => r.conclusion === 'skipped').length;
  const criticalQueue = staleQueued >= 20 || oldestQueueMinutes >= 90;
  const warningQueue = staleQueued >= 5 || oldestQueueMinutes >= 45;
  const severity = criticalQueue || completedFailures.length >= 12 ? 'critical' :
    warningQueue || completedFailures.length >= 3 ? 'warning' : 'ok';
  const dominantSignal = criticalQueue || warningQueue ? 'runner-queue-pressure' :
    completedFailures.length ? 'completed-workflow-failures' : 'no-alert-in-sample';
  return {
    schema: 'zion.actions.failure-triage.readonly.v1', generatedAtUtc: now.toISOString(),
    status: severity, dominantSignal,
    sample: { recentRuns: recent.length, failureSearchRuns: failures.length, uniqueRuns: uniq.size },
    queuedInRecentSample: queued.length, staleQueuedInRecentSample: staleQueued,
    oldestQueuedMinutes: oldestQueueMinutes,
    completedFailuresIn24Hours: completedFailures.length,
    cancelledInRecentSample: cancelledSample, skippedInRecentSample: skippedSample,
    topFailures,
    limitations: 'Bounded GitHub run samples only. Queue counts may be understated, and failures are identified only from completed conclusion=failure runs within 24 hours. No code or CI mutations; no billed-minute estimates.'
  };
}
function writeReport(report, outputDir = path.join(__dirname, 'reports')) {
  fs.mkdirSync(outputDir, { recursive: true });
  const json = path.join(outputDir, 'workflow-failure-triage-latest.json');
  const md = path.join(outputDir, 'workflow-failure-triage-latest.md');
  const lines = [
    '# GitHub Actions failure triage (read-only)', '',
    `- Severity: **${report.status}**`,
    `- Dominant signal: **${report.dominantSignal}**`,
    `- Recent sample: **${report.sample.recentRuns}** runs`,
    `- Completed failures in the last 24 hours: **${report.completedFailuresIn24Hours}**`,
    `- Queued/pending in recent sample: **${report.queuedInRecentSample}**`,
    `- Queued 45+ minutes in recent sample: **${report.staleQueuedInRecentSample}**`,
    `- Oldest queued in recent sample: **${report.oldestQueuedMinutes} min**`,
    `- Cancelled/skipped are *not* counted as failures.`, '',
    '## Top failing workflows (24-hour sample)', '',
    ...(!report.topFailures.length ? ['- No completed failures found in the sample.'] :
      report.topFailures.map(x => `- ${x.workflow}: ${x.count}`)), '',
    `_${report.limitations}_`, ''
  ];
  fs.writeFileSync(json, JSON.stringify(report, null, 2) + '\n', 'utf8');
  fs.writeFileSync(md, lines.join('\n'), 'utf8');
  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join('\n') + '\n', 'utf8');
  }
  return { json, md };
}
function main() {
  if (process.argv.length !== 4) throw new Error('expected-two-input-files');
  const recent = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
  const failures = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
  const report = buildReport(recent, failures);
  writeReport(report);
  console.log(`Actions triage: ${report.status}; ${report.completedFailuresIn24Hours} confirmed failures/24h; ${report.staleQueuedInRecentSample} stale queued in sample`);
}
if (require.main === module) {
  try { main(); }
  catch (error) {
    console.error('::error title=Read-only Actions triage failed::' +
      (['invalid-run-samples','empty-run-samples','invalid-clock','expected-two-input-files'].includes(error.message) ? error.message : 'input-or-report-error'));
    process.exitCode = 1;
  }
}
module.exports = { nameFor, validRun, minutesAgo, buildReport, writeReport };
