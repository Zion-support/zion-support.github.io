#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function cleanConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log statements (but keep console.error and console.warn for debugging)
    const consoleLogRegex = /^\s*console\.log\([^)]*\);\s*$/gm;
    if (consoleLogRegex.test(content)) {
      content = content.replace(consoleLogRegex, '');
      modified = true;
    }
    
    // Remove console.log from multi-line statements
    const multiLineConsoleLogRegex = /^\s*console\.log\(\s*[^)]*\s*\);\s*$/gm;
    if (multiLineConsoleLogRegex.test(content)) {
      content = content.replace(multiLineConsoleLogRegex, '');
      modified = true;
    }
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned console.log statements in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let cleanedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      cleanedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (cleanConsoleLogs(filePath)) {
        cleanedCount++;
      }
    }
  }
  
  return cleanedCount;
}

console.log('🧹 Starting console.log cleanup...');
const cleanedCount = processDirectory('./app');
console.log(`✅ Cleaned console.log statements in ${cleanedCount} files`);