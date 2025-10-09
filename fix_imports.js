#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has imports in wrong places
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    let hasImportsInWrongPlace = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('import ') && i > 10) {
        // Import statement found after line 10, likely in wrong place
        hasImportsInWrongPlace = true;
        importLines.push(line);
      } else if (line.trim().startsWith('import ')) {
        importLines.push(line);
      } else {
        otherLines.push(line);
      }
    }
    
    if (hasImportsInWrongPlace && importLines.length > 0) {
      console.log(`Fixing imports in: ${filePath}`);
      
      // Remove duplicate imports
      const uniqueImports = [...new Set(importLines)];
      
      // Combine imports and other lines
      const fixedLines = [...uniqueImports, '', ...otherLines];
      
      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing imports in ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixAllImports(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.next' || file === 'build') {
        continue;
      }
      fixedCount += fixAllImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting import fixes...');
const fixedCount = fixAllImports('/workspace/src');
console.log(`Fixed imports in ${fixedCount} files.`);