const fs = require('fs');
const path = require('path');

// Fix missing commas in object arrays
function fixCommas(content) {
  // Fix missing commas between object properties in arrays
  content = content.replace(/(\s*{\s*[^}]*}\s*)\s*{\s*([^}]*}\s*)/g, '$1,\n    { $2');
  
  // Fix missing commas between array items
  content = content.replace(/(\s*}\s*)\s*{\s*([^}]*}\s*)/g, '$1,\n    { $2');
  
  // Fix missing commas in import statements
  content = content.replace(/(\s*ChevronDown\s*)\s*(\s*Mail\s*)/g, '$1,\n  $2');
  content = content.replace(/(\s*Mail\s*)\s*(\s*Menu\s*)/g, '$1,\n  $2');
  
  // Fix missing commas in object properties
  content = content.replace(/(\s*icon:\s*\w+\s*)\s*(\s*title:\s*)/g, '$1,\n      $2');
  content = content.replace(/(\s*title:\s*[^,]*)\s*(\s*description:\s*)/g, '$1,\n      $2');
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixCommas(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed commas in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
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
      } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check for comma issues...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed commas in ${fixedCount} files`);
