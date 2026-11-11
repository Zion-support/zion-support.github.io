'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const {patchSource} = require('./patch-jest-coverage-errors.cjs');
test('unknown reporter versions fail closed', () => {
  assert.throws(() => patchSource('', '99.0.0'), /Unsupported/);
});
test('modified reporter source fails closed', () => {
  assert.throws(() => patchSource('unexpected source', '30.4.1'), /Unrecognized/);
});
