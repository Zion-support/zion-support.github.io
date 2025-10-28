#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all TypeScript files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix ErrorBoundary imports
    if (content.includes("import { ErrorBoundary } from '@/components/ErrorBoundary'")) {
      content = content.replace(
        "import { ErrorBoundary } from '@/components/ErrorBoundary'",
        "import { AppErrorBoundary } from '@/components/AppErrorBoundary'"
      );
      modified = true;
    }
    
    // Fix ErrorBoundary usage
    if (content.includes('<ErrorBoundary>')) {
      content = content.replace(/<ErrorBoundary>/g, '<AppErrorBoundary>');
      content = content.replace(/<\/ErrorBoundary>/g, '</AppErrorBoundary>');
      modified = true;
    }
    
    // Remove duplicate metadata exports
    const lines = content.split('\n');
    let newLines = [];
    let metadataCount = 0;
    let inMetadata = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('export const metadata')) {
        if (metadataCount === 0) {
          newLines.push(line);
          inMetadata = true;
          metadataCount++;
        } else {
          // Skip duplicate metadata blocks
          while (i < lines.length && !lines[i].includes('};')) {
            i++;
          }
          inMetadata = false;
        }
        continue;
      }
      
      if (inMetadata && line.includes('};')) {
        newLines.push(line);
        inMetadata = false;
        continue;
      }
      
      if (inMetadata) {
        newLines.push(line);
        continue;
      }
      
      // Skip lines with just semicolons
      if (line.trim() === ';') {
        continue;
      }
      
      newLines.push(line);
    }
    
    // Remove duplicate imports
    const importLines = [];
    const seenImports = new Set();
    
    for (const line of newLines) {
      if (line.includes('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          importLines.push(line);
          seenImports.add(importKey);
        }
      } else {
        importLines.push(line);
      }
    }
    
    // Clean up extra whitespace
    const cleanedContent = importLines.join('\n').replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript files
const appDir = path.join(process.cwd(), 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
files.forEach(filePath => {
  if (fixFile(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files!`);