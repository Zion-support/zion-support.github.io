#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file has merge conflicts or other issues
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Skipping ${filePath} - contains merge conflicts`);
      return;
    }
    
    // Run ESLint with --fix to remove unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
      console.log(`Fixed unused imports in ${filePath}`);
    } catch (error) {
      // ESLint might fail on some files, that's okay
      console.log(`Could not auto-fix ${filePath}: ${error.message}`);
    }
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
}

// Main execution
console.log('Starting unused imports cleanup...');

// Get all files
const files = getAllFiles('./src');
console.log(`Found ${files.length} files to process`);

// Process each file
files.forEach(file => {
  removeUnusedImports(file);
});

console.log('Unused imports cleanup completed!');