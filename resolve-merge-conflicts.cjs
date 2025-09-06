const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Remove any remaining merge conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Remove any trailing semicolons that might be left
    content = content.replace(/;\s*;\s*;+/g, ';');
    
    fs.writeFileSync(filePath, content);
    console.log(`Resolved merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

function findAndResolveConflicts(dir) {
  let resolvedCount = 0;
  let errorCount = 0;
  
  function walkDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (['node_modules', '.git', '.next', 'dist', 'build', 'coverage'].includes(file)) {
          continue;
        }
        walkDirectory(filePath);
      } else if (stat.isFile()) {
        // Check if file has merge conflicts
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
            if (resolveMergeConflicts(filePath)) {
              resolvedCount++;
            } else {
              errorCount++;
            }
          }
        } catch (error) {
          console.error(`Error reading ${filePath}:`, error.message);
          errorCount++;
        }
      }
    }
  }
  
  walkDirectory(dir);
  
  console.log(`\nResolved merge conflicts in ${resolvedCount} files`);
  if (errorCount > 0) {
    console.log(`Errors encountered in ${errorCount} files`);
  }
  
  return { resolvedCount, errorCount };
}

// Start resolving conflicts
console.log('Starting merge conflict resolution...');
const result = findAndResolveConflicts('.');
console.log(`\nCompleted! Resolved ${result.resolvedCount} files with merge conflicts.`);