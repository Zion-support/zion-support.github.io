const fs = require('fs');
const path = require('path');

// Function to fix syntax errors caused by the previous script
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix commented out variable declarations
    const commentedVarRegex = /\/\/ const _(\w+) =/g;
    content = content.replace(commentedVarRegex, (match, varName) => {
      modified = true;
      return `const _${varName} =`; // Restore the variable declaration
    });

    // Fix any other syntax issues
    // Remove any orphaned semicolons or syntax errors
    content = content.replace(/;\s*$/gm, ''); // Remove trailing semicolons on empty lines
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  fixSyntaxErrors(file);
});

console.log('Done fixing syntax errors!');