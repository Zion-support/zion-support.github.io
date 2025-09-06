#!/usr/bin/env node

const fs = require('fs');

// Read the file
let content = fs.readFileSync('eslint.config.js', 'utf8');

// Remove all merge conflict markers and keep the appropriate content
const fixes = [
  // Remove merge conflict markers and keep the content after =======
  { from: /<<<<<<< HEAD\n=======\n([\s\S]*?)>>>>>>> [^\n]+/g, to: '$1' },
  // Remove any remaining conflict markers
  { from: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, to: '' },
  { from: /<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, to: '' },
  { from: /=======[\s\S]*?>>>>>>> [^\n]+/g, to: '' },
];

// Apply fixes
fixes.forEach(fix => {
  content = content.replace(fix.from, fix.to);
});

// Write the fixed content back
fs.writeFileSync('eslint.config.js', content);

console.log('✅ Fixed merge conflicts in eslint.config.js');