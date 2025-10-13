#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Run ESLint with --fix to automatically remove unused imports
    execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
    
    console.log(`Fixed unused imports in: ${filePath}`);
  } catch (error) {
    // Ignore files that can't be fixed automatically
    console.log(`Skipped ${filePath}: ${error.message.split('\n')[0]}`);
  }
};

// Main execution
const files = getAllFiles('./app');
console.log(`Found ${files.length} files to process...`);

files.forEach(fixUnusedImports);

console.log('Unused imports fix completed!');