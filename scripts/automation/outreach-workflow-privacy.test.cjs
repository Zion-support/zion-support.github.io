'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const workflowPath = path.resolve(__dirname, '../../.github/workflows/outreach-live-llm-tailoring.yml');
const workflow = fs.readFileSync(workflowPath, 'utf8');

test('existing five-minute cadence and dry-run control are retained', () => {
  assert.match(workflow, /cron:\s*["']\*\/5 \* \* \* \*["']/);
  assert.match(workflow, /OUTREACH_DRY_RUN:\s*\$\{\{ secrets\.OUTREACH_DRY_RUN \|\| '1' \}\}/);
  assert.match(workflow, /timeout-minutes:\s*25/);
});

test('worker has a single serialized concurrency group but PR tests use separate group', () => {
  assert.match(workflow, /concurrency:\s*\n\s*group:\s*outreach-live-llm-tailoring-/);
  assert.match(workflow, /cancel-in-progress:\s*false/);
  assert.match(workflow, /github\.event_name == 'pull_request' && 'contract' \|\| 'worker'/);
});

test('pull request changes only run offline contract, never the outreach worker', () => {
  assert.match(workflow, /pull_request:\s*\n\s*paths:\s*\n/);
  assert.match(workflow, /privacy-contract:\s*\n\s*if:\s*github\.event_name == 'pull_request'/);
  assert.match(workflow, /\n  outreach:\s*\n\s*if:\s*github\.event_name != 'pull_request'/);
  assert.match(workflow, /node --test scripts\/automation\/outreach-workflow-privacy\.test\.cjs/);
});

test('private worker stdout and stderr cannot reach Actions logs', () => {
  assert.match(workflow, /python scripts\/outreach\/outreach_worker_automation\.py > \/dev\/null 2>&1/);
  assert.doesNotMatch(workflow, /\btee\b/);
  assert.doesNotMatch(workflow, /outreach_run\.log/);
  assert.match(workflow, /if:\s*steps\.outreach-worker\.outcome == 'failure'/);
});

test('artifact uploader contains only a redacted health summary', () => {
  const start = workflow.indexOf('- name: Upload redacted health summary only');
  const end = workflow.indexOf('- name: Propagate outreach worker failure', start);
  assert.ok(start >= 0 && end > start);
  const upload = workflow.slice(start, end);
  assert.match(upload, /path:\s*outreach-health-summary\.json/);
  assert.match(upload, /if-no-files-found:\s*error/);
  assert.doesNotMatch(upload, /outreach_monitor|sent_ledger|hot_followup|dry_run_report|llm_tailoring_readiness|outreach_run/);
});

test('health-report generator never prints raw source files or exception details', () => {
  assert.match(workflow, /worker_step_outcome/);
  assert.match(workflow, /gmail_auth_error_present/);
  assert.doesNotMatch(workflow, /_head['"]/);
  assert.doesNotMatch(workflow, /print\(json\.dumps\(report/);
  assert.doesNotMatch(workflow, /print\('AUTH_FAIL'/);
  assert.doesNotMatch(workflow, /head = p\.read_text/);
});

test('GitHub permissions are read-only and official actions are commit-pinned', () => {
  assert.match(workflow, /\npermissions:\s*\n\s*contents:\s*read/);
  assert.doesNotMatch(workflow, /\n\s*issues:\s*write/);
  const actions = [...workflow.matchAll(/^\s*uses:\s*([^\s#]+)/gm)].map(m => m[1]);
  assert.ok(actions.length >= 4);
  for (const action of actions) {
    assert.match(action, /@[a-fA-F0-9]{40}$/);
  }
});

test('health-report JSON contains only fixed Boolean/status fields', () => {
  assert.match(workflow, /'sent_ledger_present':\s*\(base \/ 'sent_ledger\.jsonl'\)\.is_file\(\)/);
  assert.match(workflow, /'gmail_token_present':\s*None/);
  assert.match(workflow, /'gmail_auth_error_present':\s*None/);
  assert.doesNotMatch(workflow, /'llm_readiness':\s*r/);
});
