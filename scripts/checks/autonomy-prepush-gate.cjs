#!/usr/bin/env node
/**
 * Fast gate before autonomous content jobs.
 * Confirms the pipeline entrypoints exist. Does not build the site.
 */
'use strict';

const fs = require('fs');

const required = [
  'automation/ai-ideas-to-implementation-pipeline.cjs',
  'scripts/checks/secrets-preflight.cjs',
  'scripts/checks/autonomy-safe-release.cjs',
];

const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length > 0) {
  console.error(`autonomy:prepush-gate missing: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('autonomy:prepush-gate ok');
