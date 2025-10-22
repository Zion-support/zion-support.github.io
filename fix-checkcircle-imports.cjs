const fs = require('fs');
const path = require('path');

// Find all TypeScript files in the app directory
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

// Fix CheckCircle imports
function fixCheckCircleImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if CheckCircle is imported but not used
    if (content.includes('CheckCircle') && content.includes('import')) {
      // Remove CheckCircle from import statement
      content = content.replace(/,\s*CheckCircle/g, '');
      content = content.replace(/CheckCircle,\s*/g, '');
      content = content.replace(/{\s*CheckCircle\s*}/g, '');
      
      // Write back the file
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TypeScript files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  const originalContent = fs.readFileSync(file, 'utf8');
  fixCheckCircleImports(file);
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);