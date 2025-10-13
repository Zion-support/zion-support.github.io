const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all files with merge conflicts
const { execSync } = require('child_process');

try {
  const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD"', { encoding: 'utf8' })
    .split('\n')
    .filter(file => file && !file.includes('node_modules') && !file.includes('fix_conflicts'));
  
  console.log(`Found ${files.length} files with merge conflicts`);
  
  files.forEach(file => {
    if (file.trim()) {
      resolveMergeConflicts(file.trim());
    }
  });
  
  console.log('All merge conflicts resolved!');
} catch (error) {
  console.error('Error finding files:', error.message);
}