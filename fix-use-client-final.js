#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix "use client" directive placement and syntax
function fixUseClient(content) {
  // First, remove any "use client" that's mixed with imports
  content = content.replace(/import\s*\{\s*'use client';\s*/g, '');
  content = content.replace(/import\s*\{\s*"use client";\s*/g, '');
  
  // Find "use client" directive
  const useClientMatch = content.match(/^['"]use client['"];?\s*$/m);
  
  if (!useClientMatch) {
    return content; // No "use client" directive found
  }
  
  // Remove the "use client" line
  content = content.replace(/^['"]use client['"];?\s*$/m, '');
  
  // Find the first import line
  const firstImportMatch = content.match(/^import\s+/m);
  
  if (firstImportMatch) {
    // Insert "use client" before the first import
    content = content.replace(/^(import\s+)/m, "'use client';\n$1");
  } else {
    // If no imports found, put it at the very top
    content = "'use client';\n" + content;
  }
  
  return content;
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
console.log('Starting final "use client" directive fixing...');

const files = [...findFiles('./app'), ...findFiles('./src')];
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);
console.log('Final "use client" directive fixing completed.');