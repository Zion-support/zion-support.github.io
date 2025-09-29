const fs = require('fs');
const path = require(path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
 HEAD

          takeHead = false;
          continue;
        } else if (line.includes(>>>>>>>')) {
 origin/chore/fix-lint-and-merge
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
 HEAD
console.log('Fixing merge conflicts in app directory...);
findAndFixConflicts(./app');
console.log('Merge conflicts fixed!');
 origin/chore/fix-lint-and-merge
