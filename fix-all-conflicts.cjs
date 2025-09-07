const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove all merge conflict markers and keep the better version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]*/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    
    // Clean up any remaining markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    
    // Remove any orphaned conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*$/g, '');
    content = content.replace(/=======[\s\S]*$/g, '');
    content = content.replace(/>>>>>>> [^\n]*/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files with merge conflicts
const { execSync } = require('child_process');
let files = [];
try {
  const output = execSync('find . -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD"', { encoding: 'utf8' });
  files = output.trim().split('\n').filter(f => f);
} catch (error) {
  console.log('No files with merge conflicts found');
}

console.log(`Found ${files.length} files with merge conflicts`);

let fixedCount = 0;
files.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log('All merge conflicts resolved!');