#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    let inImportBlock = false;
    let importStartLine = -1;
    let importEndLine = -1;
    let currentImport = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import ') && line.includes('from')) {
        inImportBlock = true;
        importStartLine = i;
        currentImport = line;
        
        // Check if it's a multi-line import
        if (line.includes('{') && !line.includes('}')) {
          // Multi-line import, find the end
          for (let j = i + 1; j < lines.length; j++) {
            currentImport += '\n' + lines[j];
            if (lines[j].includes('}')) {
              importEndLine = j;
              break;
            }
          }
        } else {
          importEndLine = i;
        }
        
        // Extract the imported items
        const importMatch = currentImport.match(/import\s+.*?{\s*([^}]+)\s*}\s*from/);
        if (importMatch) {
          const importedItems = importMatch[1]
            .split(',')
            .map(item => item.trim())
            .filter(item => item.length > 0);
          
          // Check which items are actually used in the file
          const usedItems = [];
          for (const item of importedItems) {
            // Simple check - look for the item name in the rest of the file
            const restOfFile = content.substring(content.indexOf(currentImport) + currentImport.length);
            if (restOfFile.includes(item) && !restOfFile.includes(`// ${item}`)) {
              usedItems.push(item);
            }
          }
          
          // If no items are used, remove the entire import
          if (usedItems.length === 0) {
            // Skip this import block
            i = importEndLine;
            continue;
          } else if (usedItems.length < importedItems.length) {
            // Reconstruct the import with only used items
            const beforeBrace = currentImport.substring(0, currentImport.indexOf('{'));
            const afterFrom = currentImport.substring(currentImport.indexOf('} from'));
            const newImport = beforeBrace + '{ ' + usedItems.join(', ') + ' }' + afterFrom;
            
            // Replace the import block
            for (let k = importStartLine; k <= importEndLine; k++) {
              if (k === importStartLine) {
                newLines.push(newImport);
              } else {
                // Skip the other lines of the multi-line import
              }
            }
            i = importEndLine;
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    // Write the modified content back
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const appDir = path.join(process.cwd(), 'app');
const files = getAllFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports in ${fixedCount} files.`);