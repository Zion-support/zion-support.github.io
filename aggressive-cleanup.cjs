const fs = require('fs');
const path = require('path');

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is not a React component
    if (!content.includes('import') || !content.includes('from')) {
      return;
    }
    
    // Find all import statements
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/g;
    let match;
    let newContent = content;
    
    while ((match = importRegex.exec(content)) !== null) {
      const fullImport = match[0];
      const imports = match[1];
      const source = match[2];
      
      // Split imports and clean them
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // Check which imports are actually used in the file
      importList.forEach(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        if (cleanImp && content.includes(cleanImp)) {
          usedImports.push(imp);
        }
      });
      
      // If there are used imports, replace the import statement
      if (usedImports.length > 0) {
        const newImport = `import { ${usedImports.join(', ')} } from '${source}';`;
        newContent = newContent.replace(fullImport, newImport);
      } else {
        // Remove the entire import statement if no imports are used
        newContent = newContent.replace(fullImport, '');
      }
    }
    
    // Write the cleaned content back to the file
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Cleaned: ${filePath}`);
    }
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
}

// Function to recursively find all .tsx and .ts files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('Starting aggressive cleanup of unused imports...');

const files = findFiles('./src');
files.forEach(removeUnusedImports);

const appFiles = findFiles('./app');
appFiles.forEach(removeUnusedImports);

console.log('Aggressive cleanup completed!');