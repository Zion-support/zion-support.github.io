const fs = require('fs');
const path = require('path');

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;
    
    // Track which imports are actually used
    const usedImports = new Set();
    
    // Find all import statements
    const importLines = [];
    lines.forEach((line, index) => {
      if (line.trim().startsWith('import ')) {
        importLines.push({ line, index });
      }
    });
    
    // Check if each import is used in the file
    importLines.forEach(({ line, index }) => {
      const importMatch = line.match(/import\s+(?:{[^}]+}|\w+)\s+from\s+['"]([^'"]+)['"]/);
      if (importMatch) {
        const modulePath = importMatch[1];
        const importName = line.match(/import\s+{([^}]+)}/);
        
        if (importName) {
          // Named imports
          const names = importName[1].split(',').map(n => n.trim());
          names.forEach(name => {
            const cleanName = name.split(' as ')[0].trim();
            if (content.includes(cleanName) && !line.includes(cleanName)) {
              usedImports.add(cleanName);
            }
          });
        } else {
          // Default import
          const defaultName = line.match(/import\s+(\w+)/);
          if (defaultName) {
            const name = defaultName[1];
            if (content.includes(name) && !line.includes(name)) {
              usedImports.add(name);
            }
          }
        }
      }
    });
    
    // Remove unused imports
    const newLines = lines.filter((line, index) => {
      if (line.trim().startsWith('import ')) {
        const importMatch = line.match(/import\s+(?:{[^}]+}|\w+)\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const modulePath = importMatch[1];
          const importName = line.match(/import\s+{([^}]+)}/);
          
          if (importName) {
            // Named imports - check if any are used
            const names = importName[1].split(',').map(n => n.trim());
            const usedNames = names.filter(name => {
              const cleanName = name.split(' as ')[0].trim();
              return content.includes(cleanName) && !line.includes(cleanName);
            });
            
            if (usedNames.length === 0) {
              modified = true;
              return false; // Remove this import line
            }
          } else {
            // Default import
            const defaultName = line.match(/import\s+(\w+)/);
            if (defaultName) {
              const name = defaultName[1];
              if (!content.includes(name) || line.includes(name)) {
                modified = true;
                return false; // Remove this import line
              }
            }
          }
        }
      }
      return true;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`Fixed unused imports in ${fixedCount} files.`);