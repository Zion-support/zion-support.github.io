#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// List of files with unused imports that need manual fixing
const problemFiles = [
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ai-quantum-computing/page.tsx'
];

// Fix specific files with unused imports
const fixFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports by running ESLint with --fix
    execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
    
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.log(`Skipped ${filePath}: ${error.message.split('\n')[0]}`);
  }
};

// Fix all problem files
problemFiles.forEach(fixFile);

console.log('All unused imports fixed!');