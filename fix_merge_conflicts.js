const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  let fixedContent = content;
  
  // Remove merge conflict markers and keep the HEAD version
  fixedContent = fixedContent.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)  
  // Remove any remaining conflict markers
  fixedContent = fixedContent.replace(/<<<<<<< HEAD\n/g, '');
  fixedContent = fixedContent.replace(/=======\n/g, '');
  fixedContent = fixedContent.replace(/  
  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixMergeConflicts(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let filesProcessed = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          filesProcessed++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return filesProcessed;
}

// Main execution
console.log('Starting to fix merge conflicts...');
const filesProcessed = processDirectory('/workspace');
console.log(`Processed ${filesProcessed} files.`);
