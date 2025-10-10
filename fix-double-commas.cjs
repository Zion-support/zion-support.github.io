#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix double commas in a file
function fixDoubleCommas(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix double commas
    const originalContent = content;
    content = content.replace(/,,/g, ',');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed double commas in: ${filePath}`);
      changed = true;
    }
    
    return changed;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function getAllFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting double comma fixing process...');

const allFiles = getAllFiles('/workspace');
let fixedCount = 0;

for (const file of allFiles) {
  if (fixDoubleCommas(file)) {
    fixedCount++;
  }
}

console.log(`Fixed double commas in ${fixedCount} files`);
console.log('Double comma fixing process completed!');