#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript and JavaScript files
const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let totalRemoved = 0;

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove console.log, console.warn, console.error statements
  const originalContent = content;
  content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g, '');

  // Remove empty lines that might be left behind
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    const removed = (originalContent.match(/console\.(log|warn|error|info|debug)/g) || []).length;
    totalRemoved += removed;
    console.log(`Removed ${removed} console statements from ${file}`);
  }
}

console.log(`\nTotal console statements removed: ${totalRemoved}`);