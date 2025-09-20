#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax error patterns to fix
const fixes = [
  // Fix semicolons in wrong places
  { pattern: /;\s*$/gm, replacement: '' },
  { pattern: /{\s*;/g, replacement: '{' },
  { pattern: /;\s*}/g, replacement: '}' },
  { pattern: /;\s*,/g, replacement: ',' },
  { pattern: /,\s*;/g, replacement: ',' },
  
  // Fix double braces
  { pattern: /{{/g, replacement: '{' },
  { pattern: /}}/g, replacement: '}' },
  
  // Fix missing commas in object literals
  { pattern: /}\s*{/g, replacement: '}, {' },
  { pattern: /}\s*queries:/g, replacement: '}, queries:' },
  { pattern: /}\s*mutations:/g, replacement: '}, mutations:' },
  
  // Fix function declarations
  { pattern: /function\s*{/g, replacement: 'function() {' },
  { pattern: /=>\s*{/g, replacement: '() => {' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files in src directory
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);