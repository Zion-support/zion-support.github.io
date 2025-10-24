const fs = require('fs');
const path = require('path');

// Function to clean up merge conflicts in a file
function cleanupMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep our version (HEAD)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]*\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d938
    console.log(`Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and clean all files with merge conflicts
function cleanupAllMergeConflicts() {
  const appDir = path.join(__dirname, 'app');
  const files = [];
  
  function findTSXFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findTSXFiles(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  findTSXFiles(appDir);
  
  let cleanedCount = 0;
  for (const file of files) {
    if (cleanupMergeConflicts(file)) {
      cleanedCount++;
    }
  }
  
  console.log(`Cleaned ${cleanedCount} out of ${files.length} files`);
}

// Run the cleanup
cleanupAllMergeConflicts();
