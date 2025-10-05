#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

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
    
    // Pattern to match named imports from lucide-react
    const importPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g;
    
    content = content.replace(importPattern, (match, imports) => {
      modified = true;
      // Split imports and clean them
      const iconNames = imports.split(',').map(name => name.trim()).filter(name => name);
      
      // Convert to individual named imports
      const namedImports = iconNames.map(name => `import { ${name} } from "lucide-react"`).join('\n');
      return namedImports;
    });
    
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
console.log('Starting lucide-react import fixes...');

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