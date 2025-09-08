const fs = require('fs');
const path = require(path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Simple merge conflict resolution - take the HEAD version
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let takeHead = true;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('')) {
          inConflict = true;
          takeHead = true;
          continue;
        } else if (line.includes('')) {
          takeHead = false;
          continue;
          inConflict = true;
          takeHead = true;
          continue;
        } else if (line.includes('')) {
          inConflict = false;
          continue;
        }
        
        if (!inConflict || takeHead) {
          resolvedLines.push(line);
        }
      }
      
      const resolvedContent = resolvedLines.join('\n);
      fs.writeFileSync(filePath, resolvedContent, utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx) || file.endsWith(.ts') || file.endsWith('.jsx) || file.endsWith(.js')) {
      fixMergeConflicts(filePath);
    }
  }
}

// Fix conflicts in app directory
console.log('Fixing merge conflicts in app directory...');
findAndFixConflicts('./app');
console.log('Merge conflicts fixed!');
