const fs = require('fs');
const path = require('path');

function cleanupMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and their content
    content = content
      .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let cleanedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
        cleanedCount += processDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
      if (cleanupMergeConflicts(fullPath)) {
        cleanedCount++;
      }
    }
  }
  
  return cleanedCount;
}

console.log('Starting merge conflict cleanup...');
const cleanedCount = processDirectory('/workspace');
console.log(`Cleanup complete. Cleaned ${cleanedCount} files.`);