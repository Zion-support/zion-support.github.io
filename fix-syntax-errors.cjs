const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix extra semicolons
    if (content.includes('];];')) {
      content = content.replace(/];\s*];/g, '];');
      modified = true;
    }
    
    // Fix missing commas in object properties
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*[}])/g, '$1,\n$2');
    
    // Fix missing commas after object properties
    content = content.replace(/(\s+description:\s*'[^']+',?\s*)\s*(\n\s*benefits:)/g, '$1\n$2');
    
    // Fix missing commas in arrays
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*[}])/g, '$1,\n$2');
    
    if (modified) {
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

// Get all TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all TSX files
const appDir = './app';
const tsxFiles = getAllTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);