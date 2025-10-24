#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix "use client" directive placement and syntax
function fixUseClient(content) {
  const lines = content.split('\n');
  
  // Find "use client" directive
  const useClientIndex = lines.findIndex(line => line.trim() === "'use client'" || line.trim() === '"use client"');
  
  if (useClientIndex === -1) {
    return content; // No "use client" directive found
  }
  
  // Remove the "use client" line from its current position
  const useClientLine = lines[useClientIndex];
  const otherLines = lines.filter((_, index) => index !== useClientIndex);
  
  // Find the first import line
  const firstImportIndex = otherLines.findIndex(line => line.trim().startsWith('import'));
  
  if (firstImportIndex >= 0) {
    // Insert "use client" before the first import
    otherLines.splice(firstImportIndex, 0, useClientLine);
  } else {
    // If no imports found, put it at the very top
    otherLines.unshift(useClientLine);
  }
  
  return otherLines.join('\n');
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix "use client" directive placement
    content = fixUseClient(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed use client: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive "use client" directive fixing...');

const files = [...findFiles('./app'), ...findFiles('./src')];
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);
console.log('Comprehensive "use client" directive fixing completed.');