const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find import lines
    const importLines = [];
    const otherLines = [];
    let inImportSection = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (inImportSection && (line.startsWith('import ') || line.trim() === '')) {
        importLines.push({ line, index: i });
      } else {
        inImportSection = false;
        otherLines.push({ line, index: i });
      }
    }
    
    // Check which imports are actually used
    const usedImports = new Set();
    const allContent = otherLines.map(l => l.line).join('\n');
    
    // Extract import names from import lines
    const moduleImports = new Map();
    
    importLines.forEach(({ line }) => {
      if (line.startsWith('import ')) {
        // Handle different import patterns
        const importMatch = line.match(/import\s+(?:{[^}]+}|\w+|\*\s+as\s+\w+)\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const moduleName = importMatch[1];
          const importContent = line.match(/import\s+([^from]+)\s+from/)[1];
          
          // Extract individual imports
          if (importContent.includes('{')) {
            const namedImports = importContent.match(/\{([^}]+)\}/)[1];
            const imports = namedImports.split(',').map(imp => imp.trim());
            const usedImportsFromModule = [];
            
            imports.forEach(imp => {
              const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
              if (cleanImport && !cleanImport.startsWith('//')) {
                // Check if this import is used in the content
                if (allContent.includes(cleanImport)) {
                  usedImportsFromModule.push(imp.trim());
                }
              }
            });
            
            if (usedImportsFromModule.length > 0) {
              moduleImports.set(moduleName, usedImportsFromModule);
            }
          } else if (importContent.includes('*')) {
            const aliasMatch = importContent.match(/\*\s+as\s+(\w+)/);
            if (aliasMatch) {
              const alias = aliasMatch[1];
              if (allContent.includes(alias)) {
                moduleImports.set(moduleName, [`* as ${alias}`]);
              }
            }
          } else {
            const defaultImport = importContent.trim();
            if (defaultImport && !defaultImport.startsWith('//')) {
              if (allContent.includes(defaultImport)) {
                moduleImports.set(moduleName, [defaultImport]);
              }
            }
          }
        }
      }
    });
    
    // Rebuild the file
    const newLines = [];
    
    // Add used imports
    moduleImports.forEach((imports, module) => {
      if (imports.length === 1) {
        if (imports[0].startsWith('* as')) {
          newLines.push(`import ${imports[0]} from '${module}';`);
        } else {
          newLines.push(`import { ${imports[0]} } from '${module}';`);
        }
      } else {
        newLines.push(`import { ${imports.join(', ')} } from '${module}';`);
      }
    });
    
    // Add empty line after imports
    if (newLines.length > 0) {
      newLines.push('');
    }
    
    // Add the rest of the content
    otherLines.forEach(({ line }) => {
      newLines.push(line);
    });
    
    // Write the fixed content
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing unused imports in src directory...');

const srcDir = path.join(process.cwd(), 'src');
const files = getAllFiles(srcDir);

let fixedCount = 0;
files.forEach(file => {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);