#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and take the newer version (after =======)
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        conflictStart = -1;
        continue;
      }
      
      if (!inConflict) {
        result.push(line);
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
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
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') && content.includes('=======') && content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also fix other directories
const otherDirs = ['api', 'src', 'hooks', 'utils'];
for (const dir of otherDirs) {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    const files = findFilesWithConflicts(dirPath);
    for (const file of files) {
      if (fixMergeConflicts(file)) {
        fixedCount++;
      }
    }
  }
}

console.log(`Total files fixed: ${fixedCount}`);