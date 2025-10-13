const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'backup-unused-components') {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Fix unused imports and variables more aggressively
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports more aggressively
    const importRegex = /import\s*{([^}]+)}\s*from\s*['"][^'"]+['"];?/g;
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const importName = imp.split(' as ')[0].trim();
        // Check if the import is used in the file (excluding the import line itself)
        const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
        const matches = content.match(usageRegex);
        return matches && matches.length > 1; // More than 1 because the import itself counts
      });
      
      if (usedImports.length !== importList.length) {
        modified = true;
        if (usedImports.length === 0) {
          return ''; // Remove entire import line
        } else {
          return match.replace(imports, usedImports.join(', '));
        }
      }
      return match;
    });
    
    // Remove unused variables more aggressively
    const varRegex = /const\s+(\w+)\s*=\s*[^;]+;/g;
    content = content.replace(varRegex, (match, varName) => {
      // Check if variable is used
      const usageRegex = new RegExp(`\\b${varName}\\b`, 'g');
      const matches = content.match(usageRegex);
      if (matches && matches.length === 1) { // Only the declaration
        modified = true;
        return ''; // Remove unused variable
      }
      return match;
    });
    
    // Remove unused function parameters
    const paramRegex = /function\s+\w+\s*\([^)]*\)\s*{/g;
    content = content.replace(paramRegex, (match) => {
      // This is a basic approach - in practice, you'd need more sophisticated parsing
      return match;
    });
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting comprehensive lint error fixes...');

const files = getAllFiles('./app');
files.forEach(fixFile);

// Also fix hooks directory
const hooksFiles = getAllFiles('./hooks');
hooksFiles.forEach(fixFile);

console.log('Comprehensive lint error fixes completed!');