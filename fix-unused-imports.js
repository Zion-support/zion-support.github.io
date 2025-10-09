#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import statement
      if (line.trim().startsWith('import ')) {
        // Check if this is a multi-line import
        let importLines = [line];
        let j = i + 1;
        while (j < lines.length && (lines[j].includes('{') || lines[j].includes('}') || lines[j].includes(','))) {
          importLines.push(lines[j]);
          j++;
        }
        
        const fullImport = importLines.join(' ');
        
        // Skip if it's a default import or import from a file
        if (fullImport.includes('from ') && fullImport.includes('{')) {
          // Extract the imported items
          const match = fullImport.match(/\{([^}]+)\}/);
          if (match) {
            const imports = match[1].split(',').map(imp => imp.trim());
            
            // Check which imports are actually used in the file
            const usedImports = imports.filter(imp => {
              const importName = imp.split(' as ')[0].trim();
              // Check if the import is used anywhere in the file
              const regex = new RegExp(`\\b${importName}\\b`, 'g');
              return regex.test(content);
            });
            
            if (usedImports.length === 0) {
              // Remove the entire import line
              i = j - 1; // Skip to the end of the import
              continue;
            } else if (usedImports.length < imports.length) {
              // Replace with only used imports
              const newImport = fullImport.replace(/\{[^}]+\}/, `{ ${usedImports.join(', ')} }`);
              newLines.push(newImport);
              i = j - 1; // Skip to the end of the import
              continue;
            }
          }
        }
      }
      
      newLines.push(line);
    }
    
    // Write back if changed
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Fixing unused imports...');

const srcDir = path.join(process.cwd(), 'src');
const files = getAllFiles(srcDir);

let fixedCount = 0;
for (const file of files) {
  try {
    removeUnusedImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Processed ${fixedCount} files`);
console.log('Done!');