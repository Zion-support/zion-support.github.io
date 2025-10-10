const fs = require('fs');
const path = require('path');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
      console.log(`Cleaning merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content = content
        .replace(/<<<<<<< HEAD\n?/g, '')
        .replace(/=======\n?/g, '')
        .replace(/>>>>>>> [^\n]+\n?/g, '')
        .replace(/<<<<<<< [^\n]+\n?/g, '')
        .replace(/=======\n?/g, '')
        .replace(/>>>>>>> [^\n]+\n?/g, '');
      
      // Clean up any remaining empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
      console.log(`✓ Cleaned: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and clean files
function cleanDirectory(dirPath) {
  let cleanedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          cleanedCount += cleanDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (cleanMergeConflicts(fullPath)) {
          cleanedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
  
  return cleanedCount;
}

// Main execution
console.log('Starting merge conflict cleanup...');
const cleanedCount = cleanDirectory('./app');
console.log(`\nCleanup complete! Cleaned ${cleanedCount} files.`);