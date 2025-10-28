const fs = require('fs');
const path = require('path');

// Function to fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for import statements
      if (line.startsWith('import ')) {
        // Extract the imported names
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"]/);
        if (match) {
          const imports = match[1].split(',').map(imp => imp.trim());
          const usedImports = [];
          
          // Check if each import is used in the file
          for (const imp of imports) {
            if (content.includes(`<${imp}`) || content.includes(`${imp}(`) || content.includes(`${imp}.`) || content.includes(`${imp} `)) {
              usedImports.push(imp);
            }
          }
          
          if (usedImports.length > 0) {
            const importPath = line.match(/from\s*['"]([^'"]+)['"]/)[1];
            newLines.push(`import { ${usedImports.join(', ')} } from '${importPath}';`);
            if (usedImports.length !== imports.length) {
              modified = true;
            }
          } else {
            modified = true;
          }
        } else {
          // Check for default imports
          const defaultMatch = line.match(/import\s+(\w+)\s+from\s*['"]([^'"]+)['"]/);
          if (defaultMatch) {
            const importName = defaultMatch[1];
            // const importPath = defaultMatch[2];
            
            // Check if the import is used
            if (content.includes(`<${importName}`) || content.includes(`${importName}(`) || content.includes(`${importName}.`) || content.includes(`${importName} `)) {
              newLines.push(line);
            } else {
              modified = true;
            }
          } else {
            newLines.push(line);
          }
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
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
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports in ${fixedCount} files`);