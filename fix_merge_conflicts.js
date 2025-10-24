const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/    
    // Fix common syntax issues
    content = content.replace(/\s*;\s*{/g, ' {');
    content = content.replace(/\s*=\s*</g, ' = (');
    content = content.replace(/\s*<\s*{/g, ' (');
    content = content.replace(/\s*}\s*>/g, ')');
    
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
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  
  let fixedCount = 0;
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<< HEAD')) {
      if (fixMergeConflicts(file)) {
        fixedCount++;
      }
    }
  }
  
  console.log(`Fixed ${fixedCount} files with merge conflicts`);
}

// Fix conflicts in the app directory
findAndFixConflicts('./app');
