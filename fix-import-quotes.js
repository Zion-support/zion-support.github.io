
const fs = require('fs');
const path = require('path');

// Function to fix import statement quotes
function fixImportQuotes(content) {
  let fixed = content;
  
  // Fix unterminated string literals in import statements
  // Pattern: import React from 'react (missing closing quote)'
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+'([^']*?)(?<!')$/gm, (match, p1, p2) => {
    return `import ${p1} from '${p2}'`;
  });
  
  // Fix unterminated string literals in import statements with destructuring
  // Pattern: import { something } from 'module (missing closing quote)'
  fixed = fixed.replace(/import\s+\{([^}]*?)\}\s+from\s+'([^']*?)(?<!')$/gm, (match, p1, p2) => {
    return `import {${p1}} from '${p2}'`;
  });
  
  // Fix unterminated string literals in import statements with default and named imports
  // Pattern: import React, { something } from 'module (missing closing quote)'
  fixed = fixed.replace(/import\s+(\w+),\s*\{([^}]*?)\}\s+from\s+'([^']*?)(?<!')$/gm, (match, p1, p2, p3) => {
    return `import ${p1}, {${p2}} from '${p3}'`;
  });
  
  // Fix any remaining unterminated single quotes in import statements
  fixed = fixed.replace(/from\s+'([^']*?)(?<!')$/gm, (match, p1) => {
    return `from '${p1}'`;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImportQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {

    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .next directories
        if (item === 'node_modules' || item === '.next' || item === 'dist') {
          continue;
        }
        fixedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting import quote fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
