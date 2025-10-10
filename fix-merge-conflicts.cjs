const fs = require('fs');
<<<<<<< HEAD
=======
const path = require('path');
>>>>>>> main

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
<<<<<<< HEAD
    // Remove merge conflict markers and keep HEAD version
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepHead = false;
=======
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictType = null;
    let headContent = [];
    let separatorFound = false;
>>>>>>> main
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
<<<<<<< HEAD
        keepHead = true;
=======
        conflictType = 'head';
        headContent = [];
>>>>>>> main
        continue;
      }
      
      if (line.startsWith('=======')) {
<<<<<<< HEAD
        keepHead = false;
        continue;
      }
      
      if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (!inConflict || keepHead) {
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
    console.error(`Error processing ${filePath}:`, error.message);
=======
        if (inConflict && conflictType === 'head') {
          separatorFound = true;
          continue;
        }
      }
      
      if (line.startsWith('>>>>>>> ')) {
        if (inConflict) {
          // Choose the better version (usually the one after =======)
          if (separatorFound) {
            // Use the content after ======= (usually more complete)
            result.push(...headContent);
          } else {
            // Use the head content if no separator
            result.push(...headContent);
          }
          inConflict = false;
          conflictType = null;
          headContent = [];
          separatorFound = false;
          continue;
        }
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (separatorFound) {
          // This is content after =======, skip it as we'll use head content
          continue;
        }
      } else {
        result.push(line);
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, result.join('\n'), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> main
    return false;
  }
}

<<<<<<< HEAD
// Find all files with merge conflicts
const { execSync } = require('child_process');

try {
  const files = execSync('find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "^<<<<<<< HEAD\\|^=======\\|^>>>>>>> " 2>/dev/null || true', { encoding: 'utf8' });
  
  const fileList = files.trim().split('\n').filter(f => f && !f.includes('node_modules'));
  
  console.log(`Found ${fileList.length} files with merge conflicts`);
  
  let fixedCount = 0;
  fileList.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixedCount++;
=======
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
>>>>>>> main
    }
  });
  
<<<<<<< HEAD
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
} catch (error) {
  console.error('Error finding files:', error.message);
}
=======
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);
>>>>>>> main
