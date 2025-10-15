const fs = require('fs');
const path = require('path');

// Function to fix malformed imports in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed import statements
    const importRegex = /import\s*{([^}]+)}\s*from\s*''([^']+)'';?/g;
    const fixedContent = content.replace(importRegex, (match, imports, module) => {
      modified = true;
      return `import { ${imports} } from '${module}';`;
    });
    
    // Fix malformed default imports
    const defaultImportRegex = /import\s+([^{}\s]+)\s*from\s*''([^']+)'';?/g;
    const fixedDefaultContent = fixedContent.replace(defaultImportRegex, (match, importName, module) => {
      modified = true;
      return `import ${importName} from '${module}';`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, fixedDefaultContent);
      console.log(`✅ Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
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
console.log('🔧 Fixing malformed imports...');

const appDir = path.join(__dirname, '..', 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  try {
    fixImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`✅ Fixed imports in ${fixedCount} files`);
console.log('🎉 Import fixing completed!');
