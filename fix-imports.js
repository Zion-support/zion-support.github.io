const fs = require('fs');
const path = require('path');

// Function to fix import paths
function fixImports(content, filePath) {
  let fixed = content;
  
  // Fix @/components imports to relative paths
  fixed = fixed.replace(/from ['"]@\/components\/([^'"]+)['"]/g, (match, componentName) => {
    const relativePath = getRelativePath(filePath, `./app/components/${componentName}`);
    return `from '${relativePath}'`;
  });
  
  return fixed;
}

// Function to calculate relative path
function getRelativePath(from, to) {
  const fromDir = path.dirname(from);
  const relativePath = path.relative(fromDir, to);
  return relativePath.startsWith('.') ? relativePath : './' + relativePath;
}

// Function to process all TSX files
function processAllTSXFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      processAllTSXFiles(fullPath);
    } else if (file.name.endsWith('.tsx')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const fixed = fixImports(content, fullPath);
        
        if (content !== fixed) {
          fs.writeFileSync(fullPath, fixed);
          console.log(`Fixed imports in: ${fullPath}`);
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Process the app directory
processAllTSXFiles('./app');
console.log('Import path fixing completed!');