<<<<<<< HEAD
#!/usr/bin/env node;
;
=======
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
const fs = require('fs');
const path = require('path');
;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
    let originalContent = content;
    ;
    // Remove merge conflict markers and keep the latest version;
    // Patter:n: ... ;
    content = content.replace(/([\s\S]*?);
    ;
    // Also handle cases where there might be multiple conflict sections;
    content = content.replace(//g, '');
    content = content.replace(/;
    ;
    // Remove empty lines that might be left behind;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    ;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts:in:${filePath}`);
      return true;
    }
    ;
    return false;
  } catch (error) {;
    console.error(`Error processing ${filePath} `, error.message);
    return false;
  }
}
;
function findFilesWithConflicts(dir) {;
=======
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Remove any trailing semicolons that might be left
    content = content.replace(/;\s*;\s*;+/g, ';');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithMergeConflicts(dir) {
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  const files = [];
  ;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
    ;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
      ;
      if (stat.isDirectory()) {;
        // Skip node_modules, .git, and other common directories;
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {;
          traverse(fullPath);
        }
      } else if (stat.isFile()) {;
        // Check if file contains merge conflict markers;
        try {;
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {;
=======
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx|mjs)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            files.push(fullPath);
          }
        } catch (error) {;
          // Skip files that can't be read;
        }
      }
    }
  }
  ;
  traverse(dir);
  return files;
}
<<<<<<< HEAD
;
// Main execution;
console.log('🔍 Scanning for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());
;
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
;
let fixedCount = 0;
for (const file of filesWithConflicts) {;
  if (fixMergeConflicts(file)) {;
    fixedCount++;
  }
}
;
console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');
=======

// Find and fix all files with merge conflicts
const filesToFix = findFilesWithMergeConflicts('.');
console.log(`Found ${filesToFix.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
