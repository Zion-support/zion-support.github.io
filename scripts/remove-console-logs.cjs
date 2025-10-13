#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const glob = require('glob');

// Function to remove console statements from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log, console.warn, console.error statements
    content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g, '');
    
    // Remove console statements that span multiple lines
    content = content.replace(/console\.(log|warn|error|info|debug)\(\s*[\s\S]*?\);\s*/g, '');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Cleaned console statements from: ${filePath}`);
      return true;
    }
    
    return false;
=======
const { execSync } = require('child_process');

// Function to remove console.log statements from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log, console.warn, console.error statements
    const consoleRegex = /^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm;
    const originalContent = content;
    content = content.replace(consoleRegex, '');
    
    // Remove multi-line console statements
    const multiLineConsoleRegex = /^\s*console\.(log|warn|error|info|debug)\(\s*[\s\S]*?\);\s*$/gm;
    content = content.replace(multiLineConsoleRegex, '');
    
    // Remove commented console statements that are clearly for debugging
    const commentedConsoleRegex = /^\s*\/\/\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm;
    content = content.replace(commentedConsoleRegex, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
      console.log(`Cleaned console statements from: ${filePath}`);
    }
    
    return modified;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-15aa
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Find all TypeScript and JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let cleanedCount = 0;

console.log('🧹 Removing console statements from production build...\n');

files.forEach(file => {
  const fullPath = path.resolve(file);
  if (removeConsoleLogs(fullPath)) {
    cleanedCount++;
  }
});

console.log(`\n✨ Cleaned ${cleanedCount} files`);
console.log('🎉 Console statement removal complete!');
=======
// Function to find all TypeScript and JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, dist, build directories
        if (!['node_modules', 'dist', 'build', '.git', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Function to process all files
function processFiles() {
  const srcDir = path.join(process.cwd(), 'src');
  const appDir = path.join(process.cwd(), 'app');
  
  let allFiles = [];
  
  if (fs.existsSync(srcDir)) {
    allFiles = allFiles.concat(findFiles(srcDir));
  }
  
  if (fs.existsSync(appDir)) {
    allFiles = allFiles.concat(findFiles(appDir));
  }
  
  let totalFiles = 0;
  let modifiedFiles = 0;
  
  allFiles.forEach(file => {
    totalFiles++;
    if (removeConsoleLogs(file)) {
      modifiedFiles++;
    }
  });
  
  console.log(`\nProcessed ${totalFiles} files`);
  console.log(`Modified ${modifiedFiles} files`);
  console.log('Console log removal completed!');
}

// Run the script
processFiles();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-15aa
