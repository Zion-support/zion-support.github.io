<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node
=======

>>>>>>> origin/merge-pr-12271

>>>>>>> origin/enhance-app-with-new-services-and-advertising
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD

=======
    const content = fs.readFileSync(filePath, 'utf8');
    
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4
    // Check if file has merge conflict markers
    if (
      content.includes('<<<<<<< HEAD') ||
      content.includes('=======') ||
      content.includes('>>>>>>>')
    ) {
      console.log(`Fixing merge conflicts in: ${filePath}`);

      // Remove merge conflict markers and keep the content after =======
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          keepContent = false;
          continue;
        }

        if (line.includes('=======')) {
          keepContent = true;
          continue;
        }

        if (line.includes('>>>>>>>')) {
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

console.log('Starting merge conflict fixes...');
const fixedCount = processDirectory('./components');
console.log(`Fixed ${fixedCount} files`);
=======
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> [a-f0-9]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');
    
=======
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
>>>>>>> origin/merge-pr-12271
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
<<<<<<< HEAD
  }
}

// Fix the specific file
fixMergeConflicts('src/components/EnhancedSearch.tsx');
>>>>>>> origin/enhance-app-with-new-services-and-advertising
=======

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

>>>>>>> origin/merge-pr-12271
