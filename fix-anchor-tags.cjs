#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Find all TypeScript/JavaScript files in app directory (excluding disabled dirs)
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', {
  ignore: ['**/node_modules/**', '**/app_disabled/**', '**/*.disabled/**']
});

let fixCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  
  // Fix anchor tags that have 'to' instead of 'href'
  // Look for <a ... to="..." patterns and change to href
  const anchorToPattern = /<a\s+([^>]*)to=/g;
  if (anchorToPattern.test(content)) {
    content = content.replace(/<a\s+([^>]*)to=/g, '<a $1href=');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixCount++;
  }
});

console.log(`\nTotal files fixed: ${fixCount}`);