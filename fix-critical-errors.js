#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix critical parsing errors
function fixCriticalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      const lines = content.split('\n');
      const result = [];
      let inConflict = false;
      let keepCurrent = true;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith('<<<<<<<')) {
          inConflict = true;
          keepCurrent = true;
          continue;
        } else if (line.startsWith('=======')) {
          keepCurrent = false;
          continue;
        } else if (line.startsWith('>>>>>>>')) {
          inConflict = false;
          keepCurrent = false;
          continue;
        }
        
        if (!inConflict || keepCurrent) {
          result.push(line);
        }
      }
      
      content = result.join('\n');
      modified = true;
    }
    
    // Fix common syntax errors
    content = content.replace(/export\s+return/g, 'export const rateLimitingMiddleware =');
    content = content.replace(/}\s*;\s*$/gm, '}');
    content = content.replace(/}\s*;\s*export/g, '}\nexport');
    
    // Fix malformed JSX
    content = content.replace(/<div[^>]*>\s*$/gm, '<div>');
    content = content.replace(/<\/div>\s*$/gm, '</div>');
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*};/g, 'const $1 = () => {};');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
    // Fix specific patterns
    if (filePath.includes('App.tsx')) {
      content = content.replace(/catch\s*{\s*}/g, 'catch (error) { console.warn("Error:", error); }');
    }
    
    if (filePath.includes('middleware')) {
      content = content.replace(/export\s+return/g, 'export const rateLimitingMiddleware =');
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files that need fixing
function findFilesToFix(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
console.log('Fixing critical parsing errors...');

const filesToFix = findFilesToFix(srcDir);
console.log(`Processing ${filesToFix.length} files`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixCriticalErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);