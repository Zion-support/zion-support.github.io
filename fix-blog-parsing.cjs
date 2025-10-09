#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all blog files with parsing errors
function getBlogFilesWithErrors() {
  try {
    const output = execSync('cd /workspace && pnpm run lint 2>&1 | grep "Parsing error"', { encoding: 'utf8' });
    const files = output.split('\n')
      .filter(line => line.includes('Parsing error'))
      .map(line => line.split(':')[0])
      .filter(file => file);
    
    return files;
  } catch (error) {
    return [];
  }
}

// Fix a single blog file
function fixBlogFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file ends with }; instead of ); };
    if (content.trim().endsWith('};')) {
      // Find the last occurrence of '};' and replace it with '); };'
      const lastIndex = content.lastIndexOf('};');
      if (lastIndex !== -1) {
        content = content.substring(0, lastIndex) + '); };' + content.substring(lastIndex + 2);
        fs.writeFileSync(filePath, content);
        console.log(`Fixed parsing error in: ${filePath}`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing blog parsing errors...');

const files = getBlogFilesWithErrors();
let fixedCount = 0;

files.forEach(file => {
  if (fixBlogFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed parsing errors in ${fixedCount} files.`);