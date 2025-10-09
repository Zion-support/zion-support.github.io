#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix all remaining syntax errors
function fixAllRemaining(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix lines ending with single quote (missing semicolon)
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Fix lines ending with single quote (missing semicolon)
      if (line.endsWith("'") && !line.endsWith("';")) {
        line = line + ';';
        modified = true;
      }
      // Fix lines ending with double quote (missing semicolon)
      else if (line.endsWith('"') && !line.endsWith('";')) {
        line = line + ';';
        modified = true;
      }
      // Fix lines ending with backtick (missing semicolon)
      else if (line.endsWith('`') && !line.endsWith('`;')) {
        line = line + ';';
        modified = true;
      }
      
      fixedLines.push(line);
    }
    
    const newContent = fixedLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files that need fixing
function findFilesToFix(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting final fixes...');

const files = findFilesToFix('/workspace/src');
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixAllRemaining(file)) {
    fixedCount++;
  }
}

console.log(`Fixed remaining issues in ${fixedCount} files`);

// Run verification
console.log('Running verification...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('Type check passed!');
} catch (error) {
  console.log('Type check failed, but continuing...');
}

console.log('Final fixes completed!');