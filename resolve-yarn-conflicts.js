#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Resolving yarn.lock merge conflicts...');

const yarnLockPath = path.join(__dirname, 'yarn.lock');
let content = fs.readFileSync(yarnLockPath, 'utf8');

// Remove all merge conflict markers and keep the content
let resolved = content
  .replace(/<<<<<<< HEAD[\s\S]*?[\s\S]*?>>>>>>> [^\n]+/g, '')
  .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '')
  .replace(/[\s\S]*?>>>>>>> [^\n]+/g, '')
  .replace(/<<<<<<< HEAD[\s\S]*?/g, '')
  .replace(/[\s\S]*?>>>>>>> [^\n]+/g, '');

// Clean up any remaining merge markers
resolved = resolved
  .replace(/<<<<<<< HEAD[\s\S]*?/g, '')
  .replace(/[\s\S]*?/g, '')
  .replace(/>>>>>>> [^\n]+/g, '');

// Remove empty lines that might be left
resolved = resolved.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync(yarnLockPath, resolved);
console.log('yarn.lock conflicts resolved successfully!');