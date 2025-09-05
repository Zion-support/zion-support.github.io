#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
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
  const files = [];
  ;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
    ;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
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