#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting merge conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+.*?\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> .*?\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (item === 'node_modules' || item === '.git' || item === '.next') {
        continue;
      }
      try {
        totalFixed += processDirectory(fullPath);
      } catch (error) {
        console.log(`Skipping directory ${fullPath}: ${error.message}`);
      }
    } else if (stat.isFile()) {
      // Process JavaScript, TypeScript, and JSX files
      if (/\.(js|jsx|ts|tsx|json|css|html)$/.test(item)) {
        if (fixMergeConflicts(fullPath)) {
          totalFixed++;
        }
      }
    }
  }

  return totalFixed;
}

// Main execution
console.log('Starting merge conflict resolution...');
const totalFixed = processDirectory('.');
console.log(`\nResolved conflicts in ${totalFixed} files.`);
console.log('Merge conflict resolution complete!');