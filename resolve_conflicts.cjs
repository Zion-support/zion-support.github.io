const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictBuffer = [];
    let hasSeenEquals = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictBuffer = [];
        hasSeenEquals = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        hasSeenEquals = true;
        conflictBuffer = [];
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        // Keep the content from the last section (after =======)
        if (hasSeenEquals) {
          resolvedLines.push(...conflictBuffer);
        }
        conflictBuffer = [];
        hasSeenEquals = false;
        continue;
      }
      
      if (inConflict) {
        if (hasSeenEquals) {
          conflictBuffer.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    // Only write if content changed
    if (resolvedContent !== content) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
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
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for merge conflict markers
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
const projectRoot = process.cwd();
console.log('Searching for files with merge conflicts...');

const conflictedFiles = findFilesWithConflicts(projectRoot);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);
console.log('Merge conflict resolution complete!');