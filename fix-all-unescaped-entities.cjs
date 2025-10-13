const fs = require('fs');
const path = require('path');

// Find all .tsx files in the app directory
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

function fixUnescapedEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all &apos; with ' in the entire file
    content = content.replace(/&apos;/g, "'");
    
    // Replace all &quot; with " in the entire file
    content = content.replace(/&quot;/g, '"');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed unescaped entities in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all .tsx files
const tsxFiles = findTsxFiles('/workspace/app');
tsxFiles.forEach(fixUnescapedEntities);

console.log('All unescaped entities fixed!');