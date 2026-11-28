'use strict';

const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {snapshot, defaultChecks, verify} = require('./verify-productivity-publication.cjs');

function fixture(t) {
  const output = fs.mkdtempSync(path.join(os.tmpdir(), 'publication-read-only-'));
  t.after(() => fs.rmSync(output, {recursive: true, force: true}));
  fs.writeFileSync(path.join(output, 'index.html'), '<html>synthetic artifact</html>');
  return output;
}

test('all four original semantic scopes remain mandatory', () => {
  assert.deepEqual(defaultChecks().map(([name]) => name),
    ['productivity-navigation', 'field-evidence', 'catalog-routes', 'operational-tools']);
});

test('success requires all independent checks and unchanged artifact bytes', t => {
  const output = fixture(t), calls = [];
  const result = verify(output, ['navigation', 'field', 'catalog', 'operational'].map(name =>
    [name, directory => {assert.equal(directory, output); calls.push(name);}]));
  assert.equal(result.ok, true);
  assert.equal(result.files, 1);
  assert.deepEqual(calls, ['navigation', 'field', 'catalog', 'operational']);
});

test('a failing semantic check remains failure and does not hide later evidence', t => {
  const output = fixture(t), calls = [];
  const result = verify(output, [
    ['navigation', () => {calls.push('navigation'); throw new Error('missing locale fixture');}],
    ['field', () => {calls.push('field');}],
  ]);
  assert.equal(result.ok, false);
  assert.deepEqual(calls, ['navigation', 'field']);
  assert.equal(result.results[0].status, 'failed');
  assert.match(result.results[0].error, /missing locale/);
});

for (const mutation of ['modify', 'add', 'remove']) {
  test('rejects a semantic validator that would ' + mutation + ' published bytes', t => {
    const output = fixture(t);
    const result = verify(output, [['mutation', directory => {
      if (mutation === 'modify') {
        fs.appendFileSync(path.join(directory, 'index.html'), 'changed');
      }
      if (mutation === 'add') {
        fs.writeFileSync(path.join(directory, 'extra.html'), 'unexpected');
      }
      if (mutation === 'remove') {
        fs.unlinkSync(path.join(directory, 'index.html'));
      }
    }]]);
    assert.equal(result.ok, false);
    assert.equal(result.results.at(-1).name, 'read-only-artifact');
  });
}

test('empty / missing trees and an empty validation set cannot pass', t => {
  const output = fixture(t);
  assert.throws(() => verify(output, []), /At least one/);
  fs.unlinkSync(path.join(output, 'index.html'));
  assert.throws(() => snapshot(output), /empty/);
  assert.throws(() => snapshot(path.join(output, 'missing')), /Missing/);
});

test('a symlink cannot stand in for published content', t => {
  const output = fixture(t);
  fs.symlinkSync(path.join(output, 'index.html'), path.join(output, 'alias.html'));
  assert.throws(() => snapshot(output), /links are not allowed/);
});
