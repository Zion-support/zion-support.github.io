const fs = require('fs');
const path = require('path');

// Function to fix icon issues in a file
function fixIconIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern to match icon: <ComponentName className="..." />
    const iconPattern = /icon:\s*<(\w+)\s+className="[^"]*"\s*\/>/g;
    
    // Replace with icon: ComponentName
    content = content.replace(iconPattern, (match, componentName) => {
      modified = true;
      return `icon: ${componentName}`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files in app directory
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

// Main execution
console.log('Starting to fix icon issues...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixIconIssues(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files with icon issues.`);