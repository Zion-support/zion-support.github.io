#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any double semicolons or other artifacts
    content = content.replace(/;;+/g, ';');
    content = content.replace(/;\s*;/g, ';');
    
    // Clean up any malformed JSX/TSX syntax
    content = content.replace(/<([^>]+)>\s*;/g, '<$1>');
    content = content.replace(/;\s*<\/([^>]+)>/g, '</$1>');
    content = content.replace(/;\s*\/>/g, '/>');
    
    // Remove any standalone semicolons that shouldn't be there
    content = content.replace(/\n\s*;\s*\n/g, '\n');
    content = content.replace(/^\s*;\s*$/gm, '');
    
    // Fix any malformed JSX attributes
    content = content.replace(/(\w+)=\{([^}]+)\}\s*;/g, '$1={$2}');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Finding files with merge conflicts...');

const conflictedFiles = findFilesWithConflicts(workspaceDir);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Files with errors: ${errorCount}`);
console.log(`- Total processed: ${conflictedFiles.length}`);

if (errorCount === 0) {
  console.log('\nAll merge conflicts have been resolved!');
} else {
  console.log('\nSome files had errors and may need manual review.');
}