const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
    
    // Clean up any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any stray ======= markers
    content = content.replace(/=======\n/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllMergeConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict fix...');
const fixedCount = fixAllMergeConflicts('/workspace/app');
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also fix any other common files
const otherFiles = [
  '/workspace/App.tsx',
  '/workspace/index.html',
  '/workspace/package.json'
];

for (const file of otherFiles) {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      console.log(`Fixed merge conflicts in: ${file}`);
    }
  }
}

console.log('Merge conflict fix completed!');