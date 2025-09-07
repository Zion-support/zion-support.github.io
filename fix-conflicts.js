const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the newer content (after )
    content = content.replace(/([\s\S]*?)
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?
    content = content.replace(//g, '');
    content = content.replace(/[\s\S]*?
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find all .tsx files in app/services
const tsxFiles = findTsxFiles('app/services');

// Fix each file
tsxFiles.forEach(fixMergeConflicts);

console.log(`Fixed ${tsxFiles.length} files`);