const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
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
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        headContent = [];
        continue;
      }
      
      if (line.startsWith('=======')) {
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
    return false;
  }
}

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
    }
  }
  
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