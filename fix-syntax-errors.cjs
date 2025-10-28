#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing 'use client' directive
    if (!content.includes("'use client';") && content.includes('export default')) {
      content = "'use client';\n\n" + content;
      modified = true;
    }
    
    // Fix broken metadata exports
    if (content.includes("title: 'Page | Zion Tech Group',") && !content.includes('export const metadata')) {
      const lines = content.split('\n');
      const newLines = [];
      let inMetadata = false;
      let metadataLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith("title: 'Page | Zion Tech Group',")) {
          inMetadata = true;
          metadataLines = ['export const metadata = {', lines[i]];
          continue;
        }
        
        if (inMetadata) {
          metadataLines.push(lines[i]);
          if (line === '};') {
            inMetadata = false;
            newLines.push(...metadataLines);
            newLines.push('');
            continue;
          }
          continue;
        }
        
        newLines.push(lines[i]);
      }
      
      content = newLines.join('\n');
      modified = true;
    }
    
    // Fix missing semicolons after imports
    content = content.replace(/import ([^;]+)(?<!;)$/gm, 'import $1;');
    
    // Fix broken export statements
    content = content.replace(/export default function Wrapped\s*\n\s*\(/g, 'export default function Wrapped(');
    content = content.replace(/<\s*\n\s*\{\.\.\.props\}/g, '<Page {...props}');
    
    // Fix missing closing braces in JSX
    content = content.replace(/<\s*\{\.\.\.props\}/g, '<Page {...props}');
    
    // Remove empty lines at the beginning
    content = content.replace(/^\s*\n+/, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);