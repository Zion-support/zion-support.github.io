const fs = require('fs');
const path = require('path');

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find all import statements
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"][^'"]+['"];?/g;
    const matches = [...content.matchAll(importRegex)];

    for (const match of matches) {
      const fullImport = match[0];
      const importList = match[1];
      
      // Split the imports and clean them
      const imports = importList.split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // Check which imports are actually used in the file
      for (const imp of imports) {
        const importName = imp.split(' as ')[0].trim();
        // Skip default imports and check if the import is used
        if (importName && importName !== 'default' && content.includes(importName)) {
          usedImports.push(imp);
        }
      }
      
      // If we have unused imports, replace the import statement
      if (usedImports.length !== imports.length) {
        if (usedImports.length === 0) {
          // Remove the entire import line if no imports are used
          content = content.replace(fullImport + '\n', '');
        } else {
          // Replace with only used imports
          const newImport = fullImport.replace(importList, usedImports.join(', '));
          content = content.replace(fullImport, newImport);
        }
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process all TypeScript/JavaScript files
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixUnusedImports(filePath);
    }
  }
}

// Start processing from the current directory
console.log('Starting to fix unused imports...');
processDirectory('.');
console.log('Finished fixing unused imports!');
