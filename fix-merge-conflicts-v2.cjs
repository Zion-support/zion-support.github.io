const fs = require('fs');
const path = require('path');


function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;

    // More sophisticated merge conflict resolution
    // Split by merge conflict markers
    const lines = content.split('\n');
    let result = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'newer'

    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
        keepContent = true;
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
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedLines.join('\n'));

        conflictType = 'head';
        continue;
      } else if (line.includes('')) {
        conflictType = 'newer';
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // Only include lines from the newer version (after )
        if (conflictType === 'newer') {
          result.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    fs.writeFileSync(filePath, result.join('\n'), 'utf8');

    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
<<<<<<< HEAD
// Function to fix corrupted files by restoring proper formatting
function fixCorruptedFile(filePath) {
  try {
    // Check if file is corrupted (missing line breaks in key places)
    if (!content.includes('const ') || content.includes('const ' && !content.includes('\n'))) {
      console.log(`File appears corrupted, skipping: ${filePath}`);
      return false;
    }
    // Fix common formatting issues
    content = content
      // Fix missing line breaks after const declarations
      .replace(/const ([^=]+)=/g, 'const $1 = ')
      .replace(/const ([^=]+)=/g, 'const $1 = ')
      // Fix missing line breaks after function declarations
      .replace(/React\.FC = \(/g, 'React.FC = (')
      .replace(/React\.FC = \(/g, 'React.FC = (')
      // Fix missing line breaks in arrays
      .replace(/\[;/g, '[\n    ')
      .replace(/\]/g, '\n  ]')
      // Fix missing line breaks in objects
      .replace(/\{([^}]+)\}/g, (match, content) => {
        if (content.includes(',')) {
          return '{\n      ' + content.replace(/,/g, ',\n      ') + '\n    }';
        }
        return match;
      })
      // Fix missing line breaks after return statements
      .replace(/return \(/g, 'return (\n    ')
      // Fix missing line breaks in JSX
      .replace(/<div;/g, '<div\n      ')
      .replace(/className=/g, '\n      className=')
      .replace(/>/g, '\n    >')
      .replace(/<\/div>/g, '\n    </div>');
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing corrupted file ${filePath}:`, error.message);
    return false;
  }
}
// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
=======


function findAndFixConflicts(dir) {
>>>>>>> origin/chore/fix-lint-and-merge
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {

      fixedCount += findAndFixConflicts(filePath);

    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }

    }
  });

  
  return fixedCount;
}


console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixConflicts('./app');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);

