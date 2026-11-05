'use strict';
// Exercise the actual Hermes shell with local fixtures. git is a rejecting mock.
// No network, restore, commit, push, payment, or email can occur in this test.
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { FILES } = require('./test-discovery-release-contract.cjs');
const ROOT = path.resolve(__dirname, '..');
const workflow = fs.readFileSync(path.join(ROOT, '.github/workflows/hermes-money-path-lock.yml'), 'utf8');
const marker = '        run: |\n';
assert.equal(workflow.split(marker).length, 2, 'Expected exactly one guarded shell block');
const script = workflow.split(marker)[1].split('      - name: Validate free Discovery\n')[0].split('\n').map(line => {
  assert.ok(!line || line.startsWith('          '), 'Unexpected YAML shell indentation');
  return line.slice(10);
}).join('\n');
assert.match(workflow, /name: Validate free Discovery\n(?:        #[^\n]*\n)?        if: always\(\)\n        run: node scripts\/test-discovery-release-contract\.cjs public/);
assert.doesNotMatch(script, /test-discovery-release-contract/);
assert.match(script, /for f in public\/plans\/index\.html plans\/index\.html; do/);
assert.doesNotMatch(script, /(?:check |for f in .*?)(?:public\/)?discovery\/index\.html/);
assert.match(workflow, /GOOD_BLOB: 4a3b859876c6854c53d204828457394d152e645a/);
assert.match(workflow, /PLINK: 7sY00k7JScFV99Bf044ZG06/);
assert.match(workflow, /MIN: 5120/);
const ci = fs.readFileSync(path.join(ROOT, '.github/workflows/money-paths-stub-guard.yml'), 'utf8');
for (const test of ['release-contract', 'runtime', 'money-lock']) {
  assert.ok(ci.includes(`node scripts/test-discovery-${test}.cjs`), `CI must run ${test}`);
}
assert.doesNotMatch(ci, /continue-on-error|\|\| true/);
assert.match(ci, /contents: read/);

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-discovery-money-lock-'));
const paid = '<!doctype html><html><body>7sY00k7JScFV99Bf044ZG06' + 'x'.repeat(6000) + '</body></html>';
const paidFiles = ['public/services/ai-automation/index.html', 'services/ai-automation/index.html', 'public/plans/index.html', 'plans/index.html'];
const write = (relative, text) => { const p = path.join(dir, relative); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, text); };
function setup() {
  for (const file of FILES) write('public/' + file, fs.readFileSync(path.join(ROOT, 'public', file)));
  write('scripts/test-discovery-release-contract.cjs', fs.readFileSync(path.join(ROOT, 'scripts/test-discovery-release-contract.cjs')));
  for (const file of paidFiles) write(file, paid);
  // Legacy non-published alias deliberately has no Starter payment link.
  write('discovery/index.html', '<h1>Legacy source, not the published questionnaire</h1>');
  write('git.log', '');
}
write('bin/git', '#!/bin/sh\nprintf "%s\\n" "$*" >> "$MOCK_GIT_LOG"\nif [ "$1" = "log" ]; then\n  case "$*" in\n    *%ae*) echo "${MOCK_AUTHOR_EMAIL:-developer@example.test}";;\n    *%an*) echo "Fixture Developer";;\n    *) echo "${MOCK_AUTHOR_SUBJECT:-fix: free Discovery}";;\n  esac\n  exit 0\nfi\n# Reject every write/history/network operation.\nexit 97\n');
fs.chmodSync(path.join(dir, 'bin/git'), 0o700);
write('guard.sh', script);
let scenarios = 0;
function run(label, mutate, expected, author = {}) {
  setup();
  if (mutate) mutate();
  const result = spawnSync('bash', ['guard.sh'], {
    cwd: dir,
    encoding: 'utf8',
    env: { ...process.env, PATH: path.join(dir, 'bin') + path.delimiter + process.env.PATH,
      MOCK_GIT_LOG: path.join(dir, 'git.log'), GOOD_BLOB: '4a3b859876c6854c53d204828457394d152e645a',
      PLINK: '7sY00k7JScFV99Bf044ZG06', MIN: '5120', ...author },
    timeout: 10000,
  });
  assert.ifError(result.error);
  // GitHub runs the validation step even when the previous recovery step fails.
  const validation = spawnSync(process.execPath, ['scripts/test-discovery-release-contract.cjs', 'public'], { cwd: dir, encoding: 'utf8', timeout: 10000 });
  assert.ifError(validation.error);
  const calls = fs.readFileSync(path.join(dir, 'git.log'), 'utf8');
  if (expected === 'healthy') {
    assert.equal(result.status, 0, label + ': ' + result.stdout + result.stderr);
    assert.equal(validation.status, 0, validation.stderr);
    assert.match(result.stdout, /Money paths healthy; no restore/);
    assert.doesNotMatch(calls, /cat-file|fetch|add|commit|push|config/);
  } else if (expected === 'discovery-failure') {
    assert.equal(result.status, 0, label + ': unrelated paid pages remain healthy');
    assert.notEqual(validation.status, 0, label);
    assert.match(validation.stderr, /Discovery release contract FAILED/);
    assert.doesNotMatch(calls, /cat-file|fetch|add|commit|push|config/, label + ': no paid restore for Discovery failure');
  } else {
    assert.notEqual(result.status, 0, label);
    if (expected === 'both-failures') assert.notEqual(validation.status, 0, label);
    else assert.equal(validation.status, 0, validation.stderr);
    assert.match(result.stdout, /Restoring ai-automation dual-path/);
    assert.match(calls, /cat-file/);
    assert.doesNotMatch(calls, /add|commit|push|config/);
  }
  for (const file of paidFiles) {
    if (!['paid-failure', 'both-failures'].includes(expected)) assert.equal(fs.readFileSync(path.join(dir, file), 'utf8'), paid);
  }
  scenarios++;
}
const edit = (relative, transform) => { const file = path.join(dir, relative); write(relative, transform(fs.readFileSync(file, 'utf8'))); };
try {
  const syntax = spawnSync('bash', ['-n', 'guard.sh'], { cwd: dir, encoding: 'utf8' });
  assert.equal(syntax.status, 0, syntax.stderr);
  run('valid free questionnaire without checkout', null, 'healthy');
  run('missing legacy alias does not affect published Discovery', () => fs.unlinkSync(path.join(dir, 'discovery/index.html')), 'healthy');
  run('missing questionnaire', () => fs.unlinkSync(path.join(dir, 'public/discovery/index.html')), 'discovery-failure');
  run('broken questionnaire', () => edit('public/discovery/index.html', s => s.replace('id="dform"', 'id="broken"')), 'discovery-failure');
  run('paid Discovery regression', () => edit('public/discovery/index.html', s => s + '<a href="https://buy.stripe.com/fixture">Pay</a>'), 'discovery-failure');
  run('missing translation', () => fs.unlinkSync(path.join(dir, 'public/pt/discovery/index.html')), 'discovery-failure');
  run('missing runtime', () => fs.unlinkSync(path.join(dir, 'public/assets/js/discovery-delivery.js')), 'discovery-failure');
  run('dishonest delivery status', () => edit('public/assets/js/discovery-delivery.js', s => s.replace('Inbox delivery is not yet confirmed', 'Results sent!')), 'discovery-failure');
  run('paid ai service still requires its link', () => edit(paidFiles[0], s => s.replace('7sY00k7JScFV99Bf044ZG06', 'missing')), 'paid-failure');
  run('paid plans still require their link', () => edit(paidFiles[2], s => s.replace('7sY00k7JScFV99Bf044ZG06', 'missing')), 'paid-failure');
  run('paid service stub still rejected', () => write(paidFiles[1], '<h1>Stub</h1>'), 'paid-failure');
  run('broken Discovery does not prevent paid recovery', () => { fs.unlinkSync(path.join(dir, 'public/pt/discovery/index.html')); write(paidFiles[0], '<h1>Stub</h1>'); }, 'both-failures');
  run('preserve inherited Hermes service-sync override', null, 'paid-failure', { MOCK_AUTHOR_EMAIL: 'hermes@ziontechgroup.com', MOCK_AUTHOR_SUBJECT: 'deploy: service pages' });
  console.log(`Discovery money-path isolation: ${scenarios} scenarios passed; all git writes/network rejected by mock.`);
} finally { fs.rmSync(dir, { recursive: true, force: true }); }
