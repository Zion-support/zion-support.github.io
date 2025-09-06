const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
    let headLines = [];
    let separatorFound = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        headLines = [];
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        separatorFound = true;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = null;
        separatorFound = false;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        }
        // Skip lines from other branches
        continue;
      }
      
      // Add non-conflict lines
      fixedLines.push(line);
    }
    
    // Write the fixed content
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check for merge conflict markers
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read as text
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Scanning for files with merge conflicts...');

const conflictedFiles = findFilesWithConflicts(workspaceDir);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);