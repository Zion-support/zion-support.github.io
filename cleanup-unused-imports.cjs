const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Remove unused imports and variables
function cleanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;
    
    // Track imports and their usage
    const imports = new Map();
    const usedImports = new Set();
    
    // First pass: collect all imports
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Handle different import patterns
      if (trimmedLine.startsWith('import ')) {
        const importMatch = trimmedLine.match(/import\s+(?:{[^}]*}|\w+|\*\s+as\s+\w+)\s+from\s+['"][^'"]+['"]/);
        if (importMatch) {
          const importLine = importMatch[0];
          const namedImports = importLine.match(/{([^}]*)}/);
          const defaultImport = importLine.match(/import\s+(\w+)\s+from/);
          const namespaceImport = importLine.match(/import\s+\*\s+as\s+(\w+)\s+from/);
          
          if (namedImports) {
            const names = namedImports[1].split(',').map(n => n.trim().split(' as ')[0].trim());
            names.forEach(name => {
              if (name) {
                imports.set(name, { line: index, type: 'named', fullLine: importLine });
              }
            });
          }
          
          if (defaultImport) {
            imports.set(defaultImport[1], { line: index, type: 'default', fullLine: importLine });
          }
          
          if (namespaceImport) {
            imports.set(namespaceImport[1], { line: index, type: 'namespace', fullLine: importLine });
          }
        }
      }
    });
    
    // Second pass: find usage of imports
    lines.forEach((line, index) => {
      imports.forEach((importInfo, importName) => {
        if (line.includes(importName) && index !== importInfo.line) {
          // Check if it's actually used (not just mentioned in comments or strings)
          const regex = new RegExp(`\\b${importName}\\b`);
          if (regex.test(line) && !line.trim().startsWith('//') && !line.trim().startsWith('*')) {
            usedImports.add(importName);
          }
        }
      });
    });
    
    // Third pass: remove unused imports
    const newLines = [];
    let inImportBlock = false;
    let importBlockStart = -1;
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('import ')) {
        if (!inImportBlock) {
          inImportBlock = true;
          importBlockStart = index;
        }
        
        // Check if this import line has any used imports
        const hasUsedImports = Array.from(imports.keys()).some(importName => {
          const importInfo = imports.get(importName);
          return importInfo.line === index && usedImports.has(importName);
        });
        
        if (!hasUsedImports) {
          // This entire import line is unused
          modified = true;
          return; // Skip this line
        } else {
          // This import line has some used imports, clean it up
          const importMatch = trimmedLine.match(/import\s+({[^}]*}|\w+|\*\s+as\s+\w+)\s+from\s+['"]([^'"]+)['"]/);
          if (importMatch) {
            const [, importPart, fromPart] = importMatch;
            
            if (importPart.startsWith('{')) {
              // Named imports - filter out unused ones
              const namedImports = importPart.slice(1, -1).split(',').map(n => n.trim());
              const usedNamedImports = namedImports.filter(name => {
                const cleanName = name.split(' as ')[0].trim();
                return usedImports.has(cleanName);
              });
              
              if (usedNamedImports.length === 0) {
                modified = true;
                return; // Skip this line
              } else {
                newLines.push(`import { ${usedNamedImports.join(', ')} } from '${fromPart}';`);
                modified = true;
                return;
              }
            } else {
              // Default or namespace import
              const importName = importPart.replace(/\*\s+as\s+/, '');
              if (usedImports.has(importName)) {
                newLines.push(line);
              } else {
                modified = true;
                return; // Skip this line
              }
            }
          } else {
            newLines.push(line);
          }
        }
      } else {
        if (inImportBlock && trimmedLine === '') {
          // Empty line in import block, keep it
          newLines.push(line);
        } else if (inImportBlock && !trimmedLine.startsWith('import ') && trimmedLine !== '') {
          // End of import block
          inImportBlock = false;
          newLines.push(line);
        } else {
          newLines.push(line);
        }
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Cleaned: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting cleanup of unused imports...');

const files = getAllFiles('./app');
files.forEach(cleanFile);

// Also clean root files
const rootFiles = ['./App_clean.tsx', './App.tsx'];
rootFiles.forEach(file => {
  if (fs.existsSync(file)) {
    cleanFile(file);
  }
});

console.log('Cleanup completed!');