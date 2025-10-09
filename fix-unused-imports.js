import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

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
    const fixedLines = [];
    const usedImports = new Set();
    
    // Find all used imports by scanning the content
    const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"]/g;
    const importMatches = content.match(importRegex) || [];
    
    // Extract import names
    const importNames = new Set();
    importMatches.forEach(match => {
      const importPart = match.match(/import\s+(.*?)\s+from/);
      if (importPart) {
        const imports = importPart[1];
        // Handle different import patterns
        if (imports.includes('{')) {
          // Named imports: { Component1, Component2 }
          const namedImports = imports.match(/\{([^}]+)\}/);
          if (namedImports) {
            namedImports[1].split(',').forEach(imp => {
              const name = imp.trim().split(' as ')[0].trim();
              importNames.add(name);
            });
          }
        } else if (imports.includes('*')) {
          // Namespace imports: * as Something
          const namespaceMatch = imports.match(/\*\s+as\s+(\w+)/);
          if (namespaceMatch) {
            importNames.add(namespaceMatch[1]);
          }
        } else {
          // Default imports
          const defaultImport = imports.trim().split(' as ')[0].trim();
          importNames.add(defaultImport);
        }
      }
    });
    
    // Check which imports are actually used
    importNames.forEach(importName => {
      const regex = new RegExp(`\\b${importName}\\b`, 'g');
      const matches = content.match(regex);
      if (matches && matches.length > 1) { // More than just the import line
        usedImports.add(importName);
      }
    });
    
    // Process each line
    let inImportBlock = false;
    let importStartLine = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('import ')) {
        if (!inImportBlock) {
          inImportBlock = true;
          importStartLine = i;
        }
        
        // Check if this import line has any used imports
        const hasUsedImports = Array.from(usedImports).some(usedImport => 
          line.includes(usedImport)
        );
        
        if (hasUsedImports) {
          // Keep the import but remove unused parts
          let fixedLine = line;
          
          // Handle named imports
          if (line.includes('{') && line.includes('}')) {
            const namedImportsMatch = line.match(/\{([^}]+)\}/);
            if (namedImportsMatch) {
              const namedImports = namedImportsMatch[1]
                .split(',')
                .map(imp => imp.trim())
                .filter(imp => {
                  const name = imp.split(' as ')[0].trim();
                  return usedImports.has(name);
                });
              
              if (namedImports.length > 0) {
                fixedLine = line.replace(/\{[^}]+\}/, `{ ${namedImports.join(', ')} }`);
              } else {
                fixedLine = ''; // Remove entire import line
              }
            }
          }
          
          if (fixedLine.trim()) {
            fixedLines.push(fixedLine);
          }
        } else {
          // Remove unused import line
          continue;
        }
      } else if (inImportBlock && line.trim() === '') {
        // Empty line in import block
        fixedLines.push(line);
      } else if (inImportBlock && !line.trim().startsWith('import ')) {
        // End of import block
        inImportBlock = false;
        fixedLines.push(line);
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write fixed content back
    const fixedContent = fixedLines.join('\n');
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
const srcDir = path.join(process.cwd(), 'src');
const files = getAllFiles(srcDir);

console.log(`Found ${files.length} TypeScript/JavaScript files`);

files.forEach(file => {
  fixUnusedImports(file);
});

console.log('Finished fixing unused imports');