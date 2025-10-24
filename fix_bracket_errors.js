const fs = require('fs');
const path = require('path');

// Function to fix bracket errors
function fixBracketErrors(content) {
  let fixedContent = content;
  
  // Fix }]; to }];
  fixedContent = fixedContent.replace(/}\];/g, '}\n  ];');
  
  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixBracketErrors(content);
    
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
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
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
console.log('Starting to fix bracket errors...');
const filesProcessed = processDirectory('/workspace');
console.log(`Processed ${filesProcessed} files.`);