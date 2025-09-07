

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {

function fixMergeConflicts(filePath) {
  try {

    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);

    return false;
  }
}

  let fixedCount = 0;

      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

  }
  
  scanDirectory(dir);
  return files;
}

    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read

        }

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;

      }
    }
  }

  return files;
}

// Main execution

console.log('🔍 Scanning for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {

  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

  return fixedCount;
}

// Fix conflicts in src/pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');
if (fs.existsSync(pagesDir)) {
  const fixedCount = findAndFixConflicts(pagesDir);
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
} else {
  console.log('src/pages directory not found');
}

// Also fix other common directories
const otherDirs = ['src/components', 'src'];
for (const dir of otherDirs) {
  const fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    const fixedCount = findAndFixConflicts(fullPath);
    if (fixedCount > 0) {
      console.log(`Fixed merge conflicts in ${fixedCount} files in ${dir}`);
    }
  }
}

}

// Main execution

}

