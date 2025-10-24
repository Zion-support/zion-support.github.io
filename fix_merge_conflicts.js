const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepSection = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
        keepSection = true;
        continue;
      }
      
        inConflict = false;
        keepSection = false;
        continue;
      }
      
      if (!inConflict || keepSection) {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  let fixedCount = 0;
  
  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePath);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js'))) {
        if (fixMergeConflicts(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(dir);
  return fixedCount;
}

// Fix conflicts in the workspace
const fixedCount = findAndFixConflicts('./');
console.log(`Fixed merge conflicts in ${fixedCount} files`);