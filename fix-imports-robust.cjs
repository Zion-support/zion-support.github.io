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
    
    // Get all content after imports
    const allContent = otherLines.map(l => l.line).join('\n');
    
    // Process each import line
    const newImportLines = [];
    
    importLines.forEach(({ line }) => {
      if (line.startsWith('import ')) {
        // Handle different import patterns
        const importMatch = line.match(/import\s+(?:{[^}]+}|\w+|\*\s+as\s+\w+)\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const moduleName = importMatch[1];
          const importContent = line.match(/import\s+([^from]+)\s+from/);
          
          if (importContent) {
            const imports = importContent[1];
            
            // Handle named imports
            if (imports.includes('{')) {
              const namedImports = imports.match(/\{([^}]+)\}/);
              if (namedImports) {
                const importList = namedImports[1];
                const individualImports = importList.split(',').map(imp => imp.trim());
                const usedImports = [];
                
                individualImports.forEach(imp => {
                  const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
                  if (cleanImport && !cleanImport.startsWith('//') && allContent.includes(cleanImport)) {
                    usedImports.push(imp.trim());
                  }
                });
                
                if (usedImports.length > 0) {
                  newImportLines.push(`import { ${usedImports.join(', ')} } from '${moduleName}';`);
                }
              }
            }
            // Handle default imports
            else if (!imports.includes('*')) {
              const defaultImport = imports.trim();
              if (defaultImport && !defaultImport.startsWith('//') && allContent.includes(defaultImport)) {
                newImportLines.push(`import ${defaultImport} from '${moduleName}';`);
              }
            }
            // Handle namespace imports
            else {
              const aliasMatch = imports.match(/\*\s+as\s+(\w+)/);
              if (aliasMatch) {
                const alias = aliasMatch[1];
                if (allContent.includes(alias)) {
                  newImportLines.push(`import * as ${alias} from '${moduleName}';`);
                }
              }
            }
          }
        }
      } else if (line.trim() === '') {
        // Keep empty lines in import section
        if (newImportLines.length > 0) {
          newImportLines.push('');
        }
      }
    });
    
    // If no imports were kept, don't add empty line
    if (newImportLines.length > 0 && newImportLines[newImportLines.length - 1] === '') {
      newImportLines.pop();
    }
    
    // Rebuild the file
    const newLines = [...newImportLines, ...otherLines.map(l => l.line)];
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