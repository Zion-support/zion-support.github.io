'use strict';

// Inspect the exact directory produced by the canonical publisher. Never render
// extra pages into a QA-only artifact or submit forms / network requests.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');

function snapshot(output) {
  const root = path.resolve(output), files = new Map();
  assert(fs.existsSync(root) && fs.statSync(root).isDirectory(), 'Missing final publication tree');
  assert(!fs.lstatSync(root).isSymbolicLink(), 'Publication root must not be a symlink');
  function walk(directory) {
    for (const entry of fs.readdirSync(directory, {withFileTypes: true}).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(directory, entry.name);
      assert(!entry.isSymbolicLink(), 'Publication links are not allowed: ' + path.relative(root, file));
      if (entry.isDirectory()) walk(file);
      else {
        assert(entry.isFile(), 'Publication entry must be a regular file');
        files.set(path.relative(root, file), crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'));
      }
    }
  }
  walk(root);
  assert(files.size > 0, 'Publication tree must not be empty');
  return files;
}

function defaultChecks() {
  return [
    ['productivity-navigation', output => require('./productivity-qa-contract.cjs').verify(output)],
    ['field-evidence', output => execFileSync(process.execPath,
      [path.join(__dirname, 'test-field-evidence-release.cjs'), output, '--artifact-only'],
      {encoding: 'utf8', timeout: 60000})],
    ['catalog-routes', output => require('./verify-catalog-app-routes.cjs').verify(output)],
    ['operational-tools', output => require('./verify-operational-artifact.cjs').verifyArtifact(output)],
  ];
}

function verify(output, checks = defaultChecks()) {
  const before = snapshot(output), results = [];
  assert(checks.length > 0, 'At least one semantic check is required');
  for (const [name, check] of checks) {
    try {
      check(output);
      results.push({name, status: 'passed'});
    } catch (error) {
      // Continue collecting independent evidence; the final result remains a
      // failure if any check failed. Missing content cannot become a success.
      results.push({name, status: 'failed', error: String(error.stderr || error.message).trim()});
    }
  }
  try {
    assert.deepEqual(snapshot(output), before, 'Semantic validation must not change the publication bytes');
  } catch (error) {
    results.push({name: 'read-only-artifact', status: 'failed', error: error.message});
  }
  return {files: before.size, results, ok: results.every(result => result.status === 'passed')};
}

module.exports = {snapshot, defaultChecks, verify};
if (require.main === module) {
  try {
    assert(process.argv.length === 3, 'Supply exactly one assembled publication directory');
    const report = verify(process.argv[2]);
    console.log(JSON.stringify(report, null, 2));
    process.exitCode = report.ok ? 0 : 1;
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
