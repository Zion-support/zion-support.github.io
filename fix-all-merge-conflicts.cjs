const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the main branch version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-zA-Z0-9_-]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> main/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+/g, '');
    content = content.replace(/>>>>>>> [a-zA-Z0-9_-]+/g, '');
    
    // Clean up any malformed syntax that might have been left behind
    content = content.replace(/;\s*;\s*/g, ';');
    content = content.replace(/,\s*,\s*/g, ',');
    content = content.replace(/{\s*{\s*/g, '{');
    content = content.replace(/}\s*}\s*/g, '}');
    content = content.replace(/\(\s*\(\s*/g, '(');
    content = content.replace(/\)\s*\)\s*/g, ')');
    
    // Remove empty lines that might have been left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        fixedCount += walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting merge conflict resolution...');
const fixedCount = walkDirectory('.');
console.log(`Fixed merge conflicts in ${fixedCount} files`);
