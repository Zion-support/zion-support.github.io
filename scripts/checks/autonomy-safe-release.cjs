#!/usr/bin/env node
/**
 * Publish only when the working tree has changes.
 * A clean tree (placeholder pipelines) exits 0 and does not push.
 */
'use strict';

const { execSync } = require('child_process');

function git(args) {
  return execSync(`git ${args}`, { encoding: 'utf8' }).trim();
}

const status = git('status --porcelain');
if (!status) {
  console.log('autonomy:safe-release clean tree, nothing to publish');
  process.exit(0);
}

const message = (process.env.COMMIT_MESSAGE || '').trim();
if (!message) {
  console.error('autonomy:safe-release dirty tree but COMMIT_MESSAGE is empty');
  process.exit(1);
}

const branch = (process.env.TARGET_BRANCH || 'main').trim();
git('config user.email "41898282+github-actions[bot]@users.noreply.github.com"');
git('config user.name "github-actions[bot]"');
git('add -A');
execSync(`git commit -m ${JSON.stringify(message)}`, { stdio: 'inherit' });

const retries = Number(process.env.PUSH_RETRIES || '3');
let lastError = null;
for (let attempt = 1; attempt <= retries; attempt += 1) {
  try {
    execSync(`git push origin HEAD:${branch}`, { stdio: 'inherit' });
    console.log(`autonomy:safe-release pushed to ${branch}`);
    process.exit(0);
  } catch (error) {
    lastError = error;
    console.error(`autonomy:safe-release push attempt ${attempt} failed`);
  }
}

console.error(lastError && lastError.message ? lastError.message : 'push failed');
process.exit(1);
