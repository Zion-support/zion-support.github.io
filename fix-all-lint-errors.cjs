const fs = require('fs');
const path = require('path');

// Function to fix common linting issues in a file
function fixLintErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unused parameters by removing underscore prefix
    content = content.replace(/\(_([a-zA-Z_][a-zA-Z0-9_]*)\)/g, '($1)');
    content = content.replace(/\(_([a-zA-Z_][a-zA-Z0-9_]*),/g, '($1,');
    content = content.replace(/,_([a-zA-Z_][a-zA-Z0-9_]*)\)/g, ',$1)');
    content = content.replace(/,_([a-zA-Z_][a-zA-Z0-9_]*),/g, ',$1,');

    // Fix unused variables in destructuring
    content = content.replace(/\{_([a-zA-Z_][a-zA-Z0-9_]*)\}/g, '{$1}');
    content = content.replace(/\{_([a-zA-Z_][a-zA-Z0-9_]*),/g, '{$1,');
    content = content.replace(/,_([a-zA-Z_][a-zA-Z0-9_]*)\}/g, ',$1}');
    content = content.replace(/,_([a-zA-Z_][a-zA-Z0-9_]*),/g, ',$1,');

    // Fix unused imports by removing them
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that are part of multi-line imports
      if (line.includes('import {') && !line.includes('} from')) {
        let importLines = [line];
        let j = i + 1;
        
        while (j < lines.length && !lines[j].includes('} from')) {
          importLines.push(lines[j]);
          j++;
        }
        
        if (j < lines.length) {
          importLines.push(lines[j]);
          
          // Check if this is a lucide-react import
          if (importLines.some(l => l.includes('lucide-react'))) {
            // Extract all imports
            const allImports = importLines.join(' ').match(/\{([^}]+)\}/);
            if (allImports) {
              const imports = allImports[1]
                .split(',')
                .map(imp => imp.trim())
                .filter(imp => imp.length > 0);

              // Check which imports are actually used
              const usedImports = imports.filter(imp => {
                const importName = imp.split(' as ')[0].trim();
                const regex = new RegExp(`\\b${importName}\\b`, 'g');
                return regex.test(content.replace(importLines.join(' '), ''));
              });

              if (usedImports.length > 0) {
                newLines.push(`import { ${usedImports.join(', ')} } from 'lucide-react';`);
              } else {
                // Skip this import entirely
              }
            } else {
              newLines.push(...importLines);
            }
          } else {
            newLines.push(...importLines);
          }
          
          i = j; // Skip the processed lines
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }

    const newContent = newLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed lint errors in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Process all .tsx files
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

tsxFiles.forEach(fixLintErrors);

console.log('Lint errors cleanup completed!');