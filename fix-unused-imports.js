#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's not a TypeScript/JavaScript file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js')) {
      return;
    }
    
    // Skip test files for now
    if (filePath.includes('__tests__') || filePath.includes('.test.')) {
      return;
    }
    
    console.log(`Processing: ${filePath}`);
    
    // Use ESLint to fix unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --ext .ts,.tsx,.js,.jsx`, { stdio: 'pipe' });
      console.log(`✓ Fixed unused imports in ${filePath}`);
    } catch (error) {
      console.log(`⚠ ESLint had issues with ${filePath}: ${error.message}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findTsFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting unused imports cleanup...');

const tsFiles = findTsFiles('/workspace');
console.log(`Found ${tsFiles.length} TypeScript/JavaScript files`);

// Process each file
for (const file of tsFiles) {
  removeUnusedImports(file);
}

console.log('Unused imports cleanup completed!');