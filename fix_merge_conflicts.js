const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any remaining empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts
const { execSync } = require('child_process');
const filesWithConflicts = execSync('grep -l "<<<<<<< HEAD" app/**/*.tsx app/**/*.ts 2>/dev/null || true', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log('Files with merge conflicts:', filesWithConflicts);

filesWithConflicts.forEach(file => {
  if (file) {
    fixMergeConflicts(file);
  }
});

console.log('Merge conflict resolution complete!');