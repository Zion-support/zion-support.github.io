#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/JavaScript files in src directory
const srcDir = path.join(__dirname, 'src');
const files = [];

function getAllFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
}

getAllFiles(srcDir);

console.log(`Found ${files.length} files to process`);

// Run ESLint with --fix to automatically remove unused imports
try {
  execSync('npx eslint src/ --ext .ts,.tsx,.js,.jsx --fix --max-warnings 0', { 
    stdio: 'inherit',
    cwd: __dirname 
  });
  console.log('ESLint fix completed successfully');
} catch (error) {
  console.log('ESLint fix completed with warnings/errors');
}

// Also run TypeScript check
try {
  execSync('npx tsc --noEmit -p tsconfig.src.json', { 
    stdio: 'inherit',
    cwd: __dirname 
  });
  console.log('TypeScript check passed');
} catch (error) {
  console.log('TypeScript check found errors');
}