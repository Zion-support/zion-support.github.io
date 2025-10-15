const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep only the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove trailing whitespace
    content = content.replace(/[ \t]+$/gm, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function findAndFixMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', 'dist', 'out', '.next'].includes(file)) {
        fixedCount += findAndFixMergeConflicts(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        if (fixMergeConflicts(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

// Start fixing merge conflicts
console.log('Starting to fix merge conflicts...');
const fixedCount = findAndFixMergeConflicts('./app');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);