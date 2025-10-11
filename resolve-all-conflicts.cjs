#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all TypeScript/TSX files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (err) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDir(dir);
  return files;
}

// Resolve merge conflicts by choosing HEAD version
function resolveConflicts(content) {
  let resolved = content;
  
  // Pattern 1: Choose HEAD version for most conflicts
  resolved = resolved.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
  
  // Pattern 2: Handle cases where there might be multiple conflict markers
  resolved = resolved.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
  
  // Pattern 3: Clean up any remaining conflict markers
  resolved = resolved.replace(/<<<<<<< [^\n]*\n/g, '');
  resolved = resolved.replace(/=======\n/g, '');
  resolved = resolved.replace(/>>>>>>> [^\n]*\n/g, '');
  
  return resolved;
}

// Main function
function main() {
  const appDir = './app';
  console.log('Finding files with merge conflicts...');
  
  const files = findFilesWithConflicts(appDir);
  console.log(`Found ${files.length} files with merge conflicts`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      console.log(`Processing: ${file}`);
      const content = fs.readFileSync(file, 'utf8');
      const resolved = resolveConflicts(content);
      
      if (resolved !== content) {
        fs.writeFileSync(file, resolved, 'utf8');
        console.log(`  ✓ Fixed merge conflicts`);
        fixedCount++;
      } else {
        console.log(`  - No changes needed`);
      }
    } catch (err) {
      console.error(`  ✗ Error processing ${file}:`, err.message);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  
  // Check if there are still conflicts
  const remainingFiles = findFilesWithConflicts(appDir);
  if (remainingFiles.length > 0) {
    console.log(`\nRemaining files with conflicts: ${remainingFiles.length}`);
    remainingFiles.forEach(file => console.log(`  - ${file}`));
  } else {
    console.log('\n✓ All merge conflicts resolved!');
  }
}

if (require.main === module) {
  main();
}

module.exports = { findFilesWithConflicts, resolveConflicts };