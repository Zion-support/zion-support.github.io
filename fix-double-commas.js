const fs = require('fs');
const path = require('path');

// Function to fix double commas
function fixDoubleCommas(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix double commas after icon properties
    const doubleCommaPattern = /icon:\s*(\w+),,/g;
    content = content.replace(doubleCommaPattern, (match, componentName) => {
      modified = true;
      return `icon: ${componentName},`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed double commas in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to process...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixDoubleCommas(file)) {
    fixedCount++;
  }
}

console.log(`Fixed double commas in ${fixedCount} files.`);