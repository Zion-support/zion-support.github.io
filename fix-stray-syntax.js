const fs = require('fs');
const path = require('path');

// Function to fix stray syntax characters
function fixStraySyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const modified = false;

    // Fix stray ); characters after import statements
    content = content.replace(/import[^;]*;\s*\);/g, (match) => {
      return match.replace(/\);/g, '');
    });

    // Fix stray ); characters after "use client"
    content = content.replace(/"use client"\s*\);/g, '"use client";');

    // Fix other common stray syntax
    content = content.replace(/\s*\);\s*import/g, '\nimport');
    content = content.replace(/\s*\);\s*export/g, '\nexport');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed stray syntax: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Fixing stray syntax characters...');

const appDir = path.join('/workspace', 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixStraySyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files with stray syntax.`);