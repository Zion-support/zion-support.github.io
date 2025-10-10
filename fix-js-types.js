#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to find all JavaScript files
function findJSFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        files = files.concat(findJSFiles(fullPath));
      }
    } else if (item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix TypeScript annotations in JavaScript files
function fixJSTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove TypeScript type annotations from JavaScript files
    const fixes = [
      // Remove type annotations from function parameters
      {
        pattern: /(\w+)\s*:\s*([A-Za-z][A-Za-z0-9]*)\s*[,)]/g,
        replacement: (match, param, type) => {
          if (type === 'string' || type === 'number' || type === 'boolean' || type === 'object' || type === 'any' || type === 'void' || type === 'Function' || type === 'Array' || type === 'Promise') {
            return param;
          }
          return match;
        }
      },
      // Remove type annotations from variable declarations
      {
        pattern: /(\w+)\s*:\s*([A-Za-z][A-Za-z0-9]*)\s*=/g,
        replacement: (match, varName, type) => {
          if (type === 'string' || type === 'number' || type === 'boolean' || type === 'object' || type === 'any' || type === 'void' || type === 'Function' || type === 'Array' || type === 'Promise') {
            return `${varName} =`;
          }
          return match;
        }
      },
      // Remove return type annotations
      {
        pattern: /\)\s*:\s*([A-Za-z][A-Za-z0-9]*)\s*{/g,
        replacement: (match, type) => {
          if (type === 'string' || type === 'number' || type === 'boolean' || type === 'object' || type === 'any' || type === 'void' || type === 'Function' || type === 'Array' || type === 'Promise') {
            return ') {';
          }
          return match;
        }
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed TypeScript annotations in: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing types in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting TypeScript annotation fixes in JavaScript files...');

const files = findJSFiles('/workspace');
let fixedCount = 0;

for (const file of files) {
  // Skip certain files
  if (file.includes('node_modules') || file.includes('.git') || file.includes('dist')) {
    continue;
  }
  
  const hasTypeIssues = fixJSTypes(file);
  if (hasTypeIssues) fixedCount++;
}

console.log(`\nFixed ${fixedCount} files with TypeScript annotations`);
console.log('TypeScript annotation fixes completed!');