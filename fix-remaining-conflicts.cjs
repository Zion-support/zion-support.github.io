#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflict markers in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n/g, '');
    content = content.replace(/
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n/g, '');
    content = content.replace(/
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Ignore permission errors
  }
  
  return files;
}

// Main execution
console.log('Fixing remaining merge conflict markers...');

const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      if (fixMergeConflicts(file)) {
        fixedCount++;
      } else {
        errorCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nFixed ${fixedCount} files with merge conflicts`);
if (errorCount > 0) {
  console.log(`Encountered errors in ${errorCount} files`);
}

// Also check for any remaining conflicts
try {
  const result = execSync('git status --porcelain', { encoding: 'utf8' });
  if (result.trim()) {
    console.log('\nRemaining uncommitted changes:');
    console.log(result);
  }
} catch (error) {
  console.log('Could not check git status');
}

console.log('\nDone!');