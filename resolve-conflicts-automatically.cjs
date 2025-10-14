#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by choosing the PR branch version (HEAD)
function resolveConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version (PR branch)
  let resolved = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n?/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+/g, '$1');
  
  return resolved;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      const resolved = resolveConflicts(content);
      fs.writeFileSync(filePath, resolved);
      console.log(`Resolved conflicts in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  const files = [];
  
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!item.startsWith('.') && item !== 'node_modules' && item !== 'dist' && item !== '.next') {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir('.');
  return files;
}

// Main function
function main() {
  console.log('Starting automatic conflict resolution...');
  
  const files = findConflictedFiles();
  let resolvedCount = 0;
  
  files.forEach(file => {
    if (processFile(file)) {
      resolvedCount++;
    }
  });
  
  console.log(`\nCompleted! Resolved conflicts in ${resolvedCount} files.`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { resolveConflicts, processFile };