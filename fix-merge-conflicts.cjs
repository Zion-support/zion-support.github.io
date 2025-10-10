#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the newer version (after =======)
    let fixed = content
      // Remove everything from <<<<<<< HEAD to ======= (inclusive)
      .replace(/<<<<<<< HEAD[\s\S]*?=======\s*\n/g, '')
      // Remove the >>>>>>> branch-name line
      .replace(/>>>>>>> [^\n]+\n?/g, '')
      // Clean up any remaining conflict markers
      .replace(/<<<<<<< [^\n]+\n?/g, '')
      .replace(/=======\s*\n?/g, '')
      .replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any syntax issues that might have been left
    fixed = fixed
      // Fix common syntax issues
      .replace(/;\s*const/g, '\nconst')
      .replace(/;\s*function/g, '\nfunction')
      .replace(/;\s*export/g, '\nexport')
      .replace(/;\s*import/g, '\nimport')
      .replace(/;\s*\/\//g, '\n//')
      .replace(/;\s*\/\*/g, '\n/*')
      // Fix double semicolons
      .replace(/;;+/g, ';')
      // Fix missing spaces after semicolons
      .replace(/;([a-zA-Z])/g, '; $1')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim();
    
    fs.writeFileSync(filePath, fixed);
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
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
console.log('Finding files with merge conflicts...');

const filesWithConflicts = findFilesWithConflicts(appDir);
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors in ${errorCount} files`);

// Also check for any remaining conflicts
const remainingConflicts = findFilesWithConflicts(appDir);
if (remainingConflicts.length > 0) {
  console.log(`\nWarning: ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.slice(0, 10).forEach(file => console.log(`  ${file}`));
  if (remainingConflicts.length > 10) {
    console.log(`  ... and ${remainingConflicts.length - 10} more`);
  }
} else {
  console.log('\nAll merge conflicts resolved!');
}