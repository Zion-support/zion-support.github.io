#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Pattern to match merge conflicts with multiple sections
    const conflictPattern = /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g;
    
    // Replace conflicts with the version after =======
    content = content.replace(conflictPattern, (match, afterEquals) => {
      return afterEquals.trim();
    });
    
    // Handle conflicts without ======= (just <<<<<<< HEAD ... >>>>>>> branch)
    const simpleConflictPattern = /<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g;
    content = content.replace(simpleConflictPattern, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up extra whitespace and empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  
  let fixedCount = 0;
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('<<<<<<< HEAD')) {
        if (fixMergeConflicts(file)) {
          fixedCount++;
        }
      }
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
}

// Start fixing conflicts
console.log('Starting merge conflict resolution...');
findAndFixConflicts('.');
console.log('Merge conflict resolution complete!');
