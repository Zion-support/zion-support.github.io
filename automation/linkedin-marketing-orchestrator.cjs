<<<<<<< HEAD
'use strict';

const fs = require('fs');
const path = require('path');

const CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const token = process.env.LINKEDIN_ACCESS_TOKEN || '';
const orgId = process.env.LINKEDIN_ORG_ID || '';
const DATA_DIR = path.join(__dirname, '..', 'data', 'marketing');
const POSTS_FILE = path.join(DATA_DIR, 'linkedin-posts.json');

function log(message) {
  process.stdout.write(`[linkedin-marketing] ${message}\n`);
}

if (!token || !orgId) {
  log('Missing LINKEDIN_ACCESS_TOKEN or LINKEDIN_ORG_ID. Skipping post.');
  process.exit(0);
}

let payloadText = '';
try {
  const { posts } = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));
  if (Array.isArray(posts) && posts.length) {
    const pickIndex = Math.floor(Math.random() * posts.length);
    payloadText = posts[pickIndex].caption || '';
  }
} catch {}

if (!payloadText) {
  payloadText = `Explore what we're building: ${CANONICAL_URL}`;
}

log(`Would post to LinkedIn org ${orgId}:\n${payloadText}`);

process.exit(0);
=======
#!/usr/bin/env node

const path = require('path');
const { spawnSync } = require('child_process');

function run(relPath, args = []) {
  const abs = path.join(__dirname, 'linkedin-agents', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'inherit' }).status || 0;
}

const mode = process.argv[2] || 'once';

if (mode === 'once') {
  process.exit(run('post-latest.cjs'));
}

console.log('Usage: node automation/linkedin-marketing-orchestrator.cjs [once]');
process.exit(1);
>>>>>>> origin/auto/autonomy-17186719616


