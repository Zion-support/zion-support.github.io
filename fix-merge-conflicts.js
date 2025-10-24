const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepLines = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
          keepLines = true;
          continue;
        }
        
          inConflict = false;
          keepLines = false;
          continue;
        }
        
        if (!inConflict || keepLines) {
          fixedLines.push(line);
        }
      }
      
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  let fixedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (fixMergeConflicts(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(dir);
  return fixedCount;
}

console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixConflicts('/workspace');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);