#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to clean console.log statements from a file
function cleanConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log, console.warn, console.error statements
    // But keep console.error in error boundaries and critical error handling
    const lines = content.split('\n');
    const cleanedLines = lines.map(line => {
      // Skip lines that are in error boundaries or critical error handling
      if (line.includes('ErrorBoundary') || 
          line.includes('ErrorHandler') || 
          line.includes('catch') ||
          line.includes('throw') ||
          line.includes('error') && line.includes('console.error')) {
        return line;
      }
      
      // Remove console.log and console.warn statements
      if (line.trim().startsWith('console.log') || 
          line.trim().startsWith('console.warn')) {
        return '';
      }
      
      // Remove console.log from multi-line statements
      if (line.includes('console.log') && !line.includes('ErrorBoundary')) {
        return line.replace(/console\.log\([^)]*\);?/g, '');
      }
      
      return line;
    });
    
    const cleanedContent = cleanedLines.join('\n');
    
    if (content !== cleanedContent) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Cleaned console logs from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
function main() {
  console.log('Starting console.log cleanup...');
  
  const sourceFiles = findSourceFiles('./app');
  let cleanedCount = 0;
  
  for (const file of sourceFiles) {
    if (cleanConsoleLogs(file)) {
      cleanedCount++;
    }
  }
  
  console.log(`Cleanup complete! Cleaned ${cleanedCount} files.`);
  
  // Also clean utility files
  const utilFiles = findSourceFiles('./utils');
  for (const file of utilFiles) {
    if (cleanConsoleLogs(file)) {
      cleanedCount++;
    }
  }
  
  console.log(`Total files cleaned: ${cleanedCount}`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { cleanConsoleLogs, findSourceFiles };