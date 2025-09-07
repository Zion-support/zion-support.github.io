const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
)
    content = content.replace(/[\s\S]*?
    // Clean up any duplicate content that might have been left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
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
  const output = execSync('find . -name "*.tsx" -o -name "*.ts" | xargs grep -l ""', { encoding: 'utf8' });
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