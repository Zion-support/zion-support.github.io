const fs = require('fs');
const path = require('path');

function fixCommas(content) {
  // Fix missing commas in import statements
  content = content.replace(/(\w+)\s*\n\s*(\w+)/g, (match, p1, p2) => {
    if (match.includes('import') || match.includes('from')) {
      return `${p1},\n  ${p2}`;
    }
    return match;
  });
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*([^,\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in array items
  content = content.replace(/(\s*}\s*)\s*\n\s*{\s*(\w+):/g, '$1,\n    { $2:');
  
  // Fix missing commas after object properties
  content = content.replace(/(\w+):\s*([^,\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in team arrays
  content = content.replace(/(\w+):\s*([^,\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in benefits arrays
  content = content.replace(/(\w+):\s*([^,\n]+)\s*\n\s*benefits:/g, '$1: $2,\n      benefits:');
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixCommas(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
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

console.log(`Found ${tsxFiles.length} TSX files to check...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
