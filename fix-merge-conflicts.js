#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common merge conflict patterns
    // Pattern 1: Keep the HEAD version (first part before )
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Pattern 2: Remove any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Pattern 3: Fix common JSX issues
    content = content.replace(/<div><\/Suspense>/g, '<div></div></Suspense>');
    content = content.replace(/<div><\/div><\/Suspense>/g, '<div></div></Suspense>');
    
    // Pattern 4: Fix malformed JSX closing tags
    content = content.replace(/<\/a>\s*<\/a>/g, '</a>');
    content = content.replace(/<a[^>]*>\s*<\/a>\s*([^<]+)\s*<\/a>/g, '<a$1</a>');
    
    // Pattern 5: Fix missing closing braces in JSX
    content = content.replace(/(\w+)\s*=\s*\{([^}]*)\s*$/gm, '$1={$2}');
    
    // Pattern 6: Fix unterminated strings
    content = content.replace(/(\w+)\s*=\s*"([^"]*)\s*$/gm, '$1="$2"');
    content = content.replace(/(\w+)\s*=\s*'([^']*)\s*$/gm, "$1='$2'");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(fullPath);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js'))) {
      if (fixMergeConflicts(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Process the workspace
console.log('Starting merge conflict resolution...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);