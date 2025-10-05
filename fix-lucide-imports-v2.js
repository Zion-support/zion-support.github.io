#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Get all TypeScript/JavaScript files that might have lucide-react imports
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let results = [];
  
  try {
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
      const filePath = path.join(dir, file);
      
      try {
        const stat = fs.statSync(filePath);
        
        if (stat && stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'corrupted_backup', 'corrupted-files-backup', 'backup-problematic-files', 'backup', 'components.disabled', 'components-disabled', 'components.disabled_full', 'automation_backup', 'broken_files_backup', 'blog', 'media'].includes(file)) {
            results = results.concat(getAllFiles(filePath, extensions));
          }
        } else if (extensions.some(ext => file.endsWith(ext))) {
          results.push(filePath);
        }
      } catch (error) {
        // Skip files that can't be accessed (broken symlinks, etc.)
        console.log(`Skipping inaccessible file: ${filePath}`);
      }
    });
  } catch (error) {
    console.log(`Skipping inaccessible directory: ${dir}`);
  }
  
  return results;
}

// Fix lucide-react imports in a file
function fixLucideImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match multiple individual default imports from lucide-react
    const individualImportPattern = /import\s+(\w+)\s+from\s+['"]lucide-react['"]/g;
    
    // Collect all lucide-react imports
    const lucideImports = [];
    let match;
    
    while ((match = individualImportPattern.exec(content)) !== null) {
      lucideImports.push(match[1]);
    }
    
    if (lucideImports.length > 0) {
      // Remove all individual lucide-react imports
      content = content.replace(individualImportPattern, '');
      
      // Add a single named import
      const namedImport = `import { ${lucideImports.join(', ')} } from "lucide-react";`;
      
      // Find the first import statement and add after it
      const firstImportMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/);
      if (firstImportMatch) {
        const insertIndex = firstImportMatch.index + firstImportMatch[0].length;
        content = content.slice(0, insertIndex) + '\n' + namedImport + '\n' + content.slice(insertIndex);
      } else {
        content = namedImport + '\n\n' + content;
      }
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting lucide-react import fixes (v2)...');

// Get all relevant files
const files = getAllFiles('/workspace', ['.tsx', '.ts', '.jsx', '.js']);

let fixedCount = 0;
let totalProcessed = 0;

files.forEach(file => {
  totalProcessed++;
  if (fixLucideImports(file)) {
    fixedCount++;
  }
});

console.log(`\nCompleted! Fixed ${fixedCount} files out of ${totalProcessed} processed.`);