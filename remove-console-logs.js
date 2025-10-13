#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/JavaScript files
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let totalRemoved = 0;

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove console.log, console.warn, console.error statements
  const originalContent = content;
  content = content.replace(/console\.(log|warn|error)\([^)]*\);?\s*/g, '');
  
  // Remove empty lines that might be left behind
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    const removed = (originalContent.match(/console\.(log|warn|error)/g) || []).length;
    totalRemoved += removed;
    console.log(`Removed ${removed} console statements from ${file}`);
  }
});

console.log(`\nTotal console statements removed: ${totalRemoved}`);