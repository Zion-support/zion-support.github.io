#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedFiles = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Split content into lines
  const lines = content.split('\n');
  const newLines = [];
  const imports = [];
  let inImportBlock = true;
  
  // First pass: collect all imports
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ')) {
      // Extract import names
      const importMatch = line.match(/import\s+(?:{[^}]+}|\w+)\s+from/);
      if (importMatch) {
        const importPart = line.match(/import\s+([^from]+)\s+from/);
        if (importPart) {
          const importContent = importPart[1].trim();
          if (importContent.startsWith('{')) {
            // Named imports
            const namedImports = importContent.slice(1, -1).split(',').map(imp => imp.trim().split(' as ')[0].trim());
            imports.push(...namedImports);
          } else if (importContent !== 'React') {
            // Default import
            imports.push(importContent);
          }
        }
      }
    } else if (line.trim() === '' && inImportBlock) {
      // Empty line in import block - keep it
    } else {
      // Not an import line - we're out of the import block
      inImportBlock = false;
    }
  }
  
  // Second pass: check which imports are actually used
  const usedImports = new Set();
  const contentWithoutImports = content.replace(/import\s+[^;]+;/g, '');
  
  imports.forEach(imp => {
    if (contentWithoutImports.includes(imp)) {
      usedImports.add(imp);
    }
  });
  
  // Third pass: rebuild the file with only used imports
  inImportBlock = true;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ')) {
      // Check if this import is used
      const importMatch = line.match(/import\s+([^from]+)\s+from/);
      if (importMatch) {
        const importContent = importMatch[1].trim();
        let shouldKeep = false;
        
        if (importContent.startsWith('{')) {
          // Named imports - check if any are used
          const namedImports = importContent.slice(1, -1).split(',').map(imp => imp.trim().split(' as ')[0].trim());
          const usedNamedImports = namedImports.filter(imp => usedImports.has(imp));
          if (usedNamedImports.length > 0) {
            shouldKeep = true;
            // Update the import to only include used ones
            const newImport = line.replace(importContent, `{ ${usedNamedImports.join(', ')} }`);
            newLines.push(newImport);
            continue;
          }
        } else if (importContent === 'React' || usedImports.has(importContent)) {
          shouldKeep = true;
        }
        
        if (shouldKeep) {
          newLines.push(line);
        } else {
          console.log(`Removing unused import in ${file}: ${line.trim()}`);
        }
      } else {
        newLines.push(line);
      }
    } else if (line.trim() === '' && inImportBlock) {
      // Empty line in import block - keep it
      newLines.push(line);
    } else {
      // Not an import line - we're out of the import block
      inImportBlock = false;
      newLines.push(line);
    }
  }
  
  const newContent = newLines.join('\n');
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    fixedFiles++;
    console.log(`Fixed unused imports in: ${file}`);
  }
});

console.log(`\nFixed unused imports in ${fixedFiles} files.`);