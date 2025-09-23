<<<<<<< HEAD
'use strict';

const fs = require('fs');
const path = require('path');

const CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const igUserId = process.env.IG_USER_ID || '';
const igToken = process.env.IG_ACCESS_TOKEN || '';
const DATA_DIR = path.join(__dirname, '..', 'data', 'marketing');
const POSTS_FILE = path.join(DATA_DIR, 'instagram-posts.json');

function log(message) {
  process.stdout.write(`[instagram-marketing] ${message}\n`);
}

if (!igUserId || !igToken) {
  log('Missing IG_USER_ID or IG_ACCESS_TOKEN. Skipping Instagram post.');
  process.exit(0);
}

let caption = '';
try {
  const { posts } = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));
  if (Array.isArray(posts) && posts.length) {
    const pickIndex = Math.floor(Math.random() * posts.length);
    caption = posts[pickIndex].caption || '';
  }
} catch {}

if (!caption) caption = `Explore our latest features: ${CANONICAL_URL}`;

log(`Would post to Instagram user ${igUserId}:\n${caption}`);

process.exit(0);
=======
#!/usr/bin/env node

const path = require('path');
const { spawnSync } = require('child_process');

function run(relPath, args = []) {
  const abs = path.join(__dirname, 'instagram-agents', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'inherit' }).status || 0;
}

const mode = process.argv[2] || 'once';

if (mode === 'once') {
  process.exit(run('post-latest.cjs'));
}

console.log('Usage: node automation/instagram-marketing-orchestrator.cjs [once]');
process.exit(1);
>>>>>>> origin/auto/autonomy-17186719616


