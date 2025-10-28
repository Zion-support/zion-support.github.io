import fs from 'fs';
import path from 'path';

// Function to fix any types
function fixAnyTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace Record<string, any> with Record<string, unknown>
    const recordAnyRegex = /Record<string, any>/g;
    if (recordAnyRegex.test(content)) {
      content = content.replace(recordAnyRegex, 'Record<string, unknown>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed any types in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Get all page.tsx files
function getAllPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const pageFiles = getAllPageFiles(appDir);

console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixAnyTypes(file)) {
    fixedCount++;
  }
}

console.log(`Fixed any types in ${fixedCount} files`);