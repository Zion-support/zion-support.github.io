const fs = require('fs');
const path = require('path');

// Function to fix numeric function names
function fixNumericFunctionNames(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has a function name starting with a number
    const numericFunctionMatch = content.match(/export default function (\d+[a-zA-Z]+)\(\)/);
    if (numericFunctionMatch) {
      const oldName = numericFunctionMatch[1];
      const newName = oldName.replace(/^(\d+)/, (match) => {
        const numberMap = {
          '5': 'Five',
          '4': 'Four',
          '3': 'Three',
          '2': 'Two',
          '1': 'One'
        };
        return numberMap[match] || match;
      });
      
      console.log(`Fixing ${filePath}: ${oldName} -> ${newName}`);
      const fixedContent = content.replace(
        new RegExp(`export default function ${oldName}\\(\\)`, 'g'),
        `export default function ${newName}()`
      );
      
      fs.writeFileSync(filePath, fixedContent);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
  return false;
}

// Find all page.tsx files in the app directory
function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixNumericFunctionNames(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files with numeric function names`);
