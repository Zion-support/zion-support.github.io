#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to clean unused imports in a file
function cleanUnusedImports(filePath) {
  try {
    // Skip if file doesn't exist or is not a TypeScript/JavaScript file
    if (!fs.existsSync(filePath) || (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js'))) {
      return;
    }
    
    // Run ESLint with --fix to automatically remove unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
      console.log(`✓ Cleaned imports in: ${filePath}`);
    } catch {
      // ESLint might fail on some files, that's okay
      console.log(`⚠ Could not clean: ${filePath}`);
    }
  } catch (_error) {
    console.log(`⚠ Error processing ${filePath}: ${_error.message}`);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, dist, and other build directories
      if (!['node_modules', 'dist', '.next', 'out', 'build'].includes(file)) {
        findFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('🧹 Cleaning unused imports...\n');

const appDir = path.join(__dirname, '..', 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process\n`);

files.forEach(file => {
  cleanUnusedImports(file);
});

console.log('\n✨ Import cleaning completed!');