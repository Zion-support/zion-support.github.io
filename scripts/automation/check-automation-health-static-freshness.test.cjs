'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { evaluatePublishedSnapshot } = require('./check-automation-health-static-freshness.cjs');

const NOW = Date.parse('2026-11-14T18:00:00.000Z');
const URL = 'https://ziontechgroup.com/api/automation-health.json';
const reply = (data, status = 200) => async (url, options) => {
  assert.equal(url, URL);
  assert.equal(options.headers['Cache-Control'], 'no-cache');
  return { ok: status === 200, status, url: URL, json: async () => data };
};
const check = request => evaluatePublishedSnapshot({ request, url: URL, nowMs: NOW, limitHours: 24 });
const alertDecision = report => ({
  escalate: report.staticHealthFresh !== 'true',
  closeOnRecovery: report.staticHealthFresh === 'true',
});

test('recent published snapshot: healthy freshness, no escalation, recovery eligible', async () => {
  const report = await check(reply({ timestamp: new Date(NOW - 60 * 60e3).toISOString(), status: 'degraded' }));
  assert.equal(report.staticHealthFresh, 'true');
  assert.equal(report.staticHealthValid, true);
  assert.equal(report.coreStatus, 'degraded');
  assert.deepEqual(alertDecision(report), { escalate: false, closeOnRecovery: true });
});

test('stale published snapshot: raises freshness alert, never auto-closes', async () => {
  const report = await check(reply({ timestamp: new Date(NOW - 25 * 36e5).toISOString(), status: 'ok' }));
  assert.equal(report.staticHealthFresh, 'false');
  assert.equal(report.staticHealthValid, true);
  assert.ok(report.staticHealthAgeHours > 24);
  assert.deepEqual(alertDecision(report), { escalate: true, closeOnRecovery: false });
});

test('invalid published snapshot (missing timestamp): raises alert', async () => {
  const report = await check(reply({ status: 'ok' }));
  assert.equal(report.staticHealthFresh, 'false');
  assert.equal(report.staticHealthValid, false);
  assert.match(report.error, /timestamp/);
  assert.deepEqual(alertDecision(report), { escalate: true, closeOnRecovery: false });
});

test('invalid published snapshot (malformed JSON): raises alert', async () => {
  const request = async () => ({ ok: true, status: 200, url: URL, json: async () => { throw new SyntaxError('bad JSON'); } });
  const report = await check(request);
  assert.equal(report.staticHealthFresh, 'false');
  assert.equal(report.staticHealthValid, false);
  assert.deepEqual(alertDecision(report), { escalate: true, closeOnRecovery: false });
});

test('unavailable published snapshot (HTTP 503): raises alert', async () => {
  const report = await check(reply(null, 503));
  assert.equal(report.staticHealthFresh, 'false');
  assert.match(report.error, /HTTP 503/);
  assert.deepEqual(alertDecision(report), { escalate: true, closeOnRecovery: false });
});

test('unavailable published snapshot (network error): raises alert', async () => {
  const report = await check(async () => { throw new Error('network unreachable'); });
  assert.equal(report.staticHealthFresh, 'false');
  assert.match(report.error, /network unreachable/);
  assert.deepEqual(alertDecision(report), { escalate: true, closeOnRecovery: false });
});

test('future snapshot timestamp is invalid and triggers an alert', async () => {
  const report = await check(reply({ timestamp: new Date(NOW + 60e3).toISOString(), status: 'ok' }));
  assert.equal(report.staticHealthFresh, 'false');
  assert.equal(report.staticHealthValid, false);
  assert.deepEqual(alertDecision(report), { escalate: true, closeOnRecovery: false });
});

test('workflow contract: published check precedes generation; stale alert not skipped', () => {
  const workflow = readFileSync(resolve(__dirname, '../../.github/workflows/ai-automation-health-static-freshness-guard.yml'), 'utf8');
  const checkStep = workflow.indexOf('      - name: Evaluate published health snapshot before refreshing');
  const alertStep = workflow.indexOf('      - name: Escalate stale static health snapshot');
  const generateStep = workflow.indexOf('      - name: Refresh snapshot from actual production observations');
  const publishStep = workflow.indexOf('      - name: Persist and publish the measured snapshot');
  assert.ok(checkStep >= 0 && checkStep < alertStep && alertStep < generateStep && generateStep < publishStep);
  assert.match(workflow, /id: freshness\n\s+continue-on-error: true/);
  assert.match(workflow, /if: steps\.freshness\.outputs\.static_health_fresh != 'true'/);
  assert.match(workflow, /if: steps\.freshness\.outputs\.static_health_fresh == 'true'/);
  assert.match(workflow, /steps\.refresh\.outcome == 'success'/);
  assert.match(workflow, /name: Fail when the previously published snapshot was stale/);
});
