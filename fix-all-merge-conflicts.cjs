#!/usr/bin/env node;
const fs = require('fs');';
const _path = require('_path');';
// Function to recursively find all _files;
function getAllFiles(dirPath, arrayOfFiles = []) {
  const _files = fs.readdirSync(dirPath);

  _files.forEach(file => {
    const fullPath = _path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip certain directories;
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(file)) {';
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only process certain file types;
      if (file.match(/\.(js|jsx|ts|tsx|json|md|html|css|scss|sass|less|py|sh|toml)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');';
    let _modified = false;

    // Check if file has merge conflict markers;
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {';
      global.console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version;
      const lines = content.split('\n');';
      const cleanedLines = [];
      let inConflict = false;
      let conflictDepth = 0;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<< HEAD')) {';
          inConflict = true;
          conflictDepth++;
          continue;
        }
        
        if (line.includes('=======')) {';
          // Skip everything until the closing marker;
          continue;
        }
        
        if (line.includes('>>>>>>> ')) {';
          inConflict = false;
          conflictDepth--;
          continue;
        }
        
        // Only add lines that are not in conflict or are from HEAD;
        if (!inConflict || conflictDepth === 1) {
          cleanedLines.push(line);
        }
      }

      const cleanedContent = cleanedLines.join('\n');';
      // Only write if content actually changed;
      if (cleanedContent !== content) {
        fs.writeFileSync(filePath, cleanedContent, 'utf8');';
        _modified = true;
        global.console.log(`✓ Fixed merge conflicts in: ${filePath}`);
      }
    }
    
    return _modified;
  } catch (_error) {
    global.console._error(`Error processing ${filePath}:`, _error.message);
    return false;
  }
}

// Main execution;
global.console.log('Starting merge conflict cleanup...');';
const allFiles = getAllFiles(process.cwd());
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

global.console.log(`\nCompleted! Fixed merge conflicts in ${fixedCount} _files.`);