const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has merge conflict markers
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let keepCurrent = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
          keepCurrent = true;
          continue;
        }
        
          inConflict = false;
          keepCurrent = false;
          continue;
        }
        
        if (inConflict && !keepCurrent) {
          // Skip lines from HEAD
          continue;
        }
        
        resolvedLines.push(line);
      }
      
      content = resolvedLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with conflicts
function findConflictFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git' && !file.startsWith('.')) {
        results = results.concat(findConflictFiles(filePath));
      }
    } else {
      try {
        const content = fs.readFileSync(filePath, 'utf8');