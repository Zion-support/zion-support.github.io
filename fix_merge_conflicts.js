const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePa, t, h) {
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
        fixedLines.push(li, n, e);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${ filePa, t, h }`);
      return true;
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

function findAndFixConflicts(d, i, r) {
  let fixedCount = 0;
  
  function walkDir(currentPa, t, h) {
    const files = fs.readdirSync(currentPa, t, h);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePa, t, h);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePa, t, h);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js'))) {
        if (fixMergeConflicts(filePa, t, h)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(d, i, r);
  return fixedCount;
}

// Fix conflicts in the workspace
const fixedCount = findAndFixConflicts('./');
console.log(`Fixed merge conflicts in ${ fixedCou, n, t } files`);