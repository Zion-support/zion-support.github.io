const fs = require('fs');
const path = require('path');

// Function to fix remaining merge conflicts
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in ${filePath}`);
      
      // Remove merge conflict markers and keep the version after =======
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\s*([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
      
      // Clean up any remaining markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
      content = content.replace(/>>>>>>> [^\n]+/g, '');
      
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all files with merge conflicts
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting merge conflict fixes...');

// Fix files in app directory
const appFixed = fixAllFiles('./app');
console.log(`Fixed ${appFixed} files in app directory.`);

// Fix files in src directory if it exists
let srcFixed = 0;
if (fs.existsSync('./src')) {
  srcFixed = fixAllFiles('./src');
  console.log(`Fixed ${srcFixed} files in src directory.`);
}

console.log(`Merge conflict fixes completed. Total files fixed: ${appFixed + srcFixed}`);