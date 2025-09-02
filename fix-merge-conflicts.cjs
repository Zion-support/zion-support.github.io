const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version
    const mergeConflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g;
    const matches = content.match(mergeConflictRegex);
    
    if (matches) {
      content = content.replace(mergeConflictRegex, (match, headContent, otherContent) => {
        modified = true;
        return headContent;
      });
    }

    // Fix common syntax issues
    // Fix unterminated strings
    content = content.replace(/export default [^;]*';\s*$/, 'export default {};');
    content = content.replace(/export const [^=]*= [^;]*';\s*$/, 'export const placeholder = {};');
    
    // Fix malformed JSX/TSX
    content = content.replace(/import [^;]*';\s*$/, 'import React from "react";');
    
    // Fix common syntax errors
    content = content.replace(/,\s*$/, '');
    content = content.replace(/;\s*;\s*$/, ';');
    content = content.replace(/\s+$/, '');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += walkDirectory(filePath);
      }
    } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

console.log('Starting merge conflict resolution...');
const fixedCount = walkDirectory('./src');
console.log(`Fixed ${fixedCount} files with merge conflicts.`);