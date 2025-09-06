const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (

      content.includes('
      content.includes('') ||
      content.includes('>>>>>>>')

    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);


          inConflict = true;
          keepContent = false;
          continue;
        }


          inConflict = false;
          keepContent = false;
          continue;
        }

        if (!inConflict || keepContent) {
          fixedLines.push(line);
        }
      }

      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      if (fixMergeConflicts(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}

console.log('Starting comprehensive merge conflict fixes...');
const fixedCount = processDirectory('.');
console.log(`Fixed ${fixedCount} files`);
