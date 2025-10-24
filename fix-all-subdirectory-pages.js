const fs = require('fs');
const path = require('path');

// Function to fix page files in subdirectories
function fixSubdirectoryPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the wrong Footer import path
    if (content.includes('import Footer from "../components/Footer"')) {
      console.log(`Fixing: ${filePath}`);
      
      // Count the depth of the file from the app directory
      const relativePath = path.relative(path.join(__dirname, 'app'), filePath);
      const depth = relativePath.split(path.sep).length - 1; // -1 because page.tsx is not a directory
      
      // Create the correct import path based on depth
      const importPath = '../'.repeat(depth) + 'components/Footer';
      
      // Fix the Footer import path
      content = content.replace(
        'import Footer from "../components/Footer"',
        `import Footer from "${importPath}"`
      );
      
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page.tsx files in subdirectories (not in root app directory)
function findSubdirectoryPageFiles() {
  const appDir = path.join(__dirname, 'app');
  const files = [];
  
  function traverse(currentDir, depth = 0) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath, depth + 1);
      } else if (item === 'page.tsx' && depth > 0) { // Only files in subdirectories
        files.push(fullPath);
      }
    }
  }
  
  traverse(appDir);
  return files;
}

// Main execution
const pageFiles = findSubdirectoryPageFiles();

console.log(`Found ${pageFiles.length} subdirectory page.tsx files`);

let fixedCount = 0;
for (const filePath of pageFiles) {
  if (fixSubdirectoryPageFile(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);