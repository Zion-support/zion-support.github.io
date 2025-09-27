#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common patterns to fix in merge conflicts
const fixes = [
  // Fix spacing issues in className attributes
  { pattern: /className="([^"]*?)([a-z])([A-Z])/g, replacement: 'className="$1$2 $3' },
  { pattern: /className="([^"]*?)([a-z])([0-9])/g, replacement: 'className="$1$2 $3' },
  { pattern: /className="([^"]*?)([0-9])([a-zA-Z])/g, replacement: 'className="$1$2 $3' },
  { pattern: /className="([^"]*?)([a-z])([a-z])([A-Z])/g, replacement: 'className="$1$2$3 $4' },
  
  // Fix common typos
  { pattern: /dar,k:/g, replacement: 'dark:' },
  { pattern: /disable,d:/g, replacement: 'disabled:' },
  { pattern: /font-mediumtransition-colors/g, replacement: 'font-medium transition-colors' },
  { pattern: /px-4py-2/g, replacement: 'px-4 py-2' },
  { pattern: /text-whitemb-/g, replacement: 'text-white mb-' },
  { pattern: /font-semiboldmb-/g, replacement: 'font-semibold mb-' },
  
  // Fix merge conflict markers
  { pattern: /<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> origin\/main/g, replacement: '$1' },
  { pattern: /<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> origin\/main/g, replacement: '$2' },
];

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Remove remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get list of files with conflicts
const { execSync } = require('child_process');
try {
  const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);
  
  console.log(`Found ${conflictedFiles.length} files with conflicts`);
  
  let fixedCount = 0;
  conflictedFiles.forEach(file => {
    if (resolveConflicts(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed conflicts in ${fixedCount} files`);
} catch (error) {
  console.error('Error getting conflicted files:', error.message);
}