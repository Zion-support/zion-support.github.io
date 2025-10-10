const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
      
      // Clean up any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      
      // Write the cleaned content back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    return false;
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
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting merge conflict resolution...');
const fixedCount = walkDirectory('./app');
console.log(`\nFixed ${fixedCount} files with merge conflicts.`);