#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version (first part)
    const conflictRegex = /    const originalContent = content;
    content = content.replace(conflictRegex, (match, headContent, otherContent) => {
      modified = true;
      return headContent.trim();
    });

    // Remove any remaining conflict markers
    content = content
      .replace(/      .replace(/[\s\S]*?      .replace(/      .replace(//g, '')
      .replace(/
    // Clean up the content
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive empty lines
      .replace(/^\s*\n/gm, '\n') // Remove empty lines with just spaces
      .replace(/\s+$/gm, ''); // Remove trailing spaces

    if (modified || content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/React files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
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
console.log('Starting comprehensive merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nMerge conflict resolution complete:`);
console.log(`- Files processed: ${files.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);

// Run linting to check for remaining issues
console.log('\nRunning linting to check for remaining issues...');
try {
  execSync('pnpm run lint', { stdio: 'inherit' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting found remaining issues. Please review manually.');
}

// Try building
console.log('\nTrying to build...');
try {
  execSync('pnpm run build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {
  console.log('Build failed. Please review the errors.');
}