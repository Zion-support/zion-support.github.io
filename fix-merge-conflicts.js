#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n([\s\S]*?)([\s\S]*?)    
    // Clean up any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Fix common JSX issues that might have been caused by merge conflicts
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*>\s*<\/\1>/g, ''); // Remove empty self-closing tags
    content = content.replace(/\s*<([A-Z][a-zA-Z0-9]*)\s*>\s*$/gm, ''); // Remove opening tags without content
    
    // Fix missing closing tags for common elements
    const openTags = content.match(/<([A-Z][a-zA-Z0-9]*)[^>]*>(?!.*<\/\1>)/g);
    if (openTags) {
      openTags.forEach(tag => {
        const tagName = tag.match(/<([A-Z][a-zA-Z0-9]*)/)[1];
        if (!content.includes(`</${tagName}>`)) {
          // Add closing tag at the end of the component
          content = content.replace(/(\s*)(<\/[A-Z][a-zA-Z0-9]*>\s*)$/, `$1</${tagName}>$2`);
        }
      });
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        searchDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDir(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
const conflictFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let fixedCount = 0;
conflictFiles.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} out of ${conflictFiles.length} files`);