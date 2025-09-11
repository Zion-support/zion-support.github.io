#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Resolving yarn.lock merge conflicts...');

const yarnLockPath = path.join(__dirname, 'yarn.lock');
let content = fs.readFileSync(yarnLockPath, 'utf8');

// Remove all merge conflict markers and keep the content
let resolved = content
  .replace(/  .replace(/  .replace(/[\s\S]*?  .replace(/  .replace(/[\s\S]*?
// Clean up any remaining merge markers
resolved = resolved
  .replace(/  .replace(/[\s\S]*?/g, '')
  .replace(/
// Remove empty lines that might be left
resolved = resolved.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync(yarnLockPath, resolved);
console.log('yarn.lock conflicts resolved successfully!');