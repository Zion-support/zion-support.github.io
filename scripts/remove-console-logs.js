#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all TypeScript and JavaScript files
const findFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Remove console.log statements
const removeConsoleLogs = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log, console.warn, console.error, console.info statements
    // This regex matches console.method() calls including multi-line ones
    const consoleRegex = /console\.(log|warn|error|info|debug)\s*\([^;]*\);?\s*/g;
    content = content.replace(consoleRegex, '');
    
    // Remove standalone console statements
    const standaloneConsoleRegex = /^\s*console\.(log|warn|error|info|debug)\s*\([^;]*\);?\s*$/gm;
    content = content.replace(standaloneConsoleRegex, '');
    
    // Remove console statements that might be in template literals or complex expressions
    const complexConsoleRegex = /console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?\s*/g;
    content = content.replace(complexConsoleRegex, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned console statements from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const srcDir = path.join(__dirname, '..', 'src');
const appDir = path.join(__dirname, '..', 'app');

console.log('Starting console.log removal...');

// Find all files
const srcFiles = findFiles(srcDir);
const appFiles = findFiles(appDir);
const allFiles = [...srcFiles, ...appFiles];

console.log(`Found ${allFiles.length} files to process`);

let cleanedCount = 0;
for (const file of allFiles) {
  if (removeConsoleLogs(file)) {
    cleanedCount++;
  }
}

console.log(`Cleaned console statements from ${cleanedCount} files`);
console.log('Console.log removal completed!');