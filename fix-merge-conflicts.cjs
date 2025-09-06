const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n/g, '$1\n');
    
    // Handle nested merge conflicts
    content = content.replace(/<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n/g, '$1\n');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Clean up any malformed JSX or syntax
    content = content.replace(/\s+>\s*{/g, '>{');
    content = content.replace(/\s+>\s*</g, '><');
    content = content.replace(/\s+>\s*$/g, '>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix conflicts in components directory
console.log('Fixing merge conflicts in components...');
const fixedCount = findAndFixConflicts('./components');
console.log(`Fixed ${fixedCount} files with merge conflicts`);

// Also fix any other directories that might have conflicts
const otherDirs = ['./pages', './src', './lib'];
for (const dir of otherDirs) {
  if (fs.existsSync(dir)) {
    console.log(`Fixing merge conflicts in ${dir}...`);
    const count = findAndFixConflicts(dir);
    console.log(`Fixed ${count} files in ${dir}`);
  }
}