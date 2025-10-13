#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

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
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line from lucide-react
      if (line.trim().startsWith('import ') && line.includes('from "lucide-react"') || line.includes("from 'lucide-react'")) {
        // Extract the imported items
        const importMatch = line.match(/import\s+.*?{\s*([^}]+)\s*}\s*from/);
        if (importMatch) {
          const importedItems = importMatch[1]
            .split(',')
            .map(item => item.trim())
            .filter(item => item.length > 0);
          
          // Check which items are actually used in the file
          const usedItems = [];
          for (const item of importedItems) {
            // Look for the item name in the rest of the file (after this import)
            const restOfFile = content.substring(content.indexOf(line) + line.length);
            // Simple check - look for the item name as a component or in className
            if (restOfFile.includes(`<${item}`) || restOfFile.includes(`<${item} `) || restOfFile.includes(`className="w-`) && restOfFile.includes(item)) {
              usedItems.push(item);
            }
          }
          
          // If no items are used, skip this import line
          if (usedItems.length === 0) {
            console.log(`Removing unused import: ${line.trim()}`);
            continue;
          } else if (usedItems.length < importedItems.length) {
            // Reconstruct the import with only used items
            const beforeBrace = line.substring(0, line.indexOf('{'));
            const afterFrom = line.substring(line.indexOf('} from'));
            const newImport = beforeBrace + '{ ' + usedItems.join(', ') + ' }' + afterFrom;
            console.log(`Reducing import: ${line.trim()} -> ${newImport.trim()}`);
            newLines.push(newImport);
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