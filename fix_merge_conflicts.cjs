#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Fix common syntax issues
    content = content.replace(/import React from "react\n/g, 'import React from "react";\n');
    content = content.replace(/import { Helmet }    from "react-helmet-async"\n/g, 'import { Helmet } from "react-helmet-async";\n');
    content = content.replace(/const AppPage = \(\) => \{\n/g, 'const AppPage = () => {\n');
    
    // Fix unterminated strings
    content = content.replace(/from "react-helmet-async"\n/g, 'from "react-helmet-async";\n');
    
    // Clean up extra whitespace and empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all files with merge conflicts
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixConflicts('/workspace');
console.log(`Fixed merge conflicts in ${fixedCount} files`);

console.log('Merge conflict resolution completed!');