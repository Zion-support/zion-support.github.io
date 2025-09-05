const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let foundEquals = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        foundEquals = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        foundEquals = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        foundEquals = false;
        continue;
      }
      
      if (inConflict && foundEquals) {
        fixedLines.push(line);
      } else if (!inConflict) {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
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
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories we don't want to process
        if (!['node_modules', '.git', '.next', 'out', 'dist', 'build', 'coverage'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if file has merge conflict markers
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
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

// Find and fix all files with merge conflicts
const filesWithConflicts = findFilesWithConflicts('/workspace');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);