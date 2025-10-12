#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
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
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    console.log(`Fixing unused imports in: ${filePath}`);
    
    // Use ESLint to fix unused imports
    execSync(`npx eslint "${filePath}" --fix --quiet`, { 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    console.log(`✓ Fixed: ${filePath}`);
  } catch (error) {
    console.log(`⚠ Could not auto-fix: ${filePath}`);
  }
}

// Main execution
console.log('🔧 Fixing unused imports across all files...\n');

const files = getAllFiles('./app');
let fixedCount = 0;

for (const file of files) {
  try {
    fixUnusedImports(file);
    fixedCount++;
  } catch (error) {
    console.log(`❌ Error processing ${file}:`, error.message);
  }
}

console.log(`\n✅ Processed ${fixedCount} files`);
console.log('🎉 Unused imports fix completed!');