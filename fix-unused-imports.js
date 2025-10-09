#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const files = execSync('find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules'));

console.log(`Found ${files.length} files to process...`);

let fixedFiles = 0;

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
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
    
    // Find usage of imported items in the rest of the file
    const fileContent = content;
    importLines.forEach(({ line, index }) => {
      // Extract imported items from the line
      const importMatch = line.match(/import\s+.*?\s+from\s+['"](.*?)['"]/);
      if (importMatch) {
        const modulePath = importMatch[1];
        const importContent = line.match(/import\s+{([^}]+)}/);
        
        if (importContent) {
          // Named imports
          const imports = importContent[1].split(',').map(imp => imp.trim());
          imports.forEach(imp => {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            if (cleanImp && fileContent.includes(cleanImp)) {
              usedImports.add(cleanImp);
            }
          });
        } else {
          // Default import
          const defaultMatch = line.match(/import\s+(\w+)/);
          if (defaultMatch) {
            const defaultImport = defaultMatch[1];
            if (fileContent.includes(defaultImport)) {
              usedImports.add(defaultImport);
            }
          }
        }
      }
    });
    
    // Remove unused imports
    const newLines = lines.map(line => {
      if (line.trim().startsWith('import ')) {
        const importMatch = line.match(/import\s+{([^}]+)}/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImportsList = imports.filter(imp => {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            return usedImports.has(cleanImp);
          });
          
          if (usedImportsList.length === 0) {
            // Remove the entire import line if no imports are used
            modified = true;
            return '';
          } else if (usedImportsList.length < imports.length) {
            // Rebuild the import line with only used imports
            const moduleMatch = line.match(/from\s+['"](.*?)['"]/);
            if (moduleMatch) {
              modified = true;
              return `import { ${usedImportsList.join(', ')} } from '${moduleMatch[1]}';`;
            }
          }
        }
      }
      return line;
    }).filter(line => line !== '');
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed unused imports in: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed unused imports in ${fixedFiles} files.`);