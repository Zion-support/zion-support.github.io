const fs = require('fs');
const path = require('path');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and choose the second version (after =======)
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictType = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }
      
      if (line.startsWith('=======')) {
        conflictType = 'separator';
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // Skip lines from HEAD (first part)
        if (conflictType === 'head') {
          continue;
        }
        // Keep lines from the second part (after =======)
        if (conflictType === 'separator') {
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Cleaned merge conflicts in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Find all files with merge conflicts
function findFilesWithMergeConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
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
  
  searchDirectory(dir);
  return files;
}

// Clean all files with merge conflicts
const filesWithConflicts = findFilesWithMergeConflicts('/workspace');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

filesWithConflicts.forEach(file => {
  cleanMergeConflicts(file);
});

console.log('All merge conflicts cleaned!');