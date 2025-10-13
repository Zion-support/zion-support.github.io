import fs from 'fs';
import path from 'path';

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.trim()) return false;
    
    let newContent = content;
    let changed = false;
    
    // Find all import statements
    const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"];?\s*\n?/g;
    const imports = content.match(importRegex) || [];
    
    for (const importStatement of imports) {
      // Extract the imports from the statement
      const match = importStatement.match(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?\s*\n?/);
      if (!match) continue;
      
      const importList = match[1];
      const source = match[2];
      
      // Split imports and clean them
      const importsArray = importList.split(',').map(imp => imp.trim());
      
      // Check which imports are actually used in the file
      const usedImports = importsArray.filter(imp => {
        const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
        // Check if the import is used in the file (excluding the import statement itself)
        const fileWithoutImport = content.replace(importStatement, '');
        return fileWithoutImport.includes(cleanImport);
      });
      
      // If no imports are used, remove the entire import statement
      if (usedImports.length === 0) {
        newContent = newContent.replace(importStatement, '');
        changed = true;
      }
      // If some imports are used, keep only the used ones
      else if (usedImports.length < importsArray.length) {
        const newImportStatement = `import { ${usedImports.join(', ')} } from '${source}';\n`;
        newContent = newContent.replace(importStatement, newImportStatement);
        changed = true;
      }
    }
    
    // Clean up multiple empty lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (changed) {
      fs.writeFileSync(filePath, newContent);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive unused import removal...');

const files = findTsxFiles('./app');
console.log(`Found ${files.length} files to process`);

let fixedCount = 0;
for (const file of files) {
  if (fixUnusedImports(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Comprehensive unused import removal completed!');