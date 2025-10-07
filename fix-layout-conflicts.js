#!/usr/bin/env node

import fs from 'fs';

console.log('🔧 Fixing merge conflicts in Layout.tsx...');

// Read the file
let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// Remove all merge conflict markers and keep only the HEAD version
content = content
  .replace(/<<<<<<< HEAD:.*?\n/g, '')
  .replace(/=======.*?\n/g, '')
  .replace(/  .replace(/<<<<<<< HEAD\n/g, '')
  .replace(/=======\n/g, '')
  .replace(/
// Fix any remaining issues with href/to attributes
content = content
  .replace(/href='([^']*)'\s+to='([^']*)'/g, "href='$1'")
  .replace(/to='([^']*)'\s+href='([^']*)'/g, "href='$2'");

// Write the fixed content back
fs.writeFileSync('src/components/Layout.tsx', content);

console.log('✅ Fixed merge conflicts in Layout.tsx');