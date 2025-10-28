const fs = require('fs');
const path = require('path');

function fixDuplicateExports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    let foundFirstExportDefault = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check if this is an export default statement
      if (line.startsWith('export default ')) {
        if (!foundFirstExportDefault) {
          // Keep the first export default
          foundFirstExportDefault = true;
          newLines.push(lines[i]);
        } else {
          // Skip subsequent export default statements
          console.log(`Removing duplicate export default at line ${i + 1} in ${filePath}`);
          continue;
        }
      } else {
        newLines.push(lines[i]);
      }
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed duplicate exports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all .tsx files in the app directory
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixDuplicateExports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed duplicate exports in ${fixedCount} files`);