const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/^<<<<<<< HEAD\n/gm, '');
    content = content.replace(/^=======\n/gm, '');
    content = content.replace(/^>>>>>>> [^\n]+\n/gm, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n/gs, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  
  let fixedCount = 0;
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
        if (fixMergeConflicts(file)) {
          fixedCount++;
        }
      }
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
}

// Run the fix
findAndFixConflicts('/workspace');
