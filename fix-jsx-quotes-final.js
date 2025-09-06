#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixJSXQuotes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unescaped single quotes in JSX text content
    // This regex looks for single quotes that are not already escaped and are in JSX text content
    const singleQuoteRegex = /([^\\])'([^']*?)'/g;
    const newContent = content.replace(singleQuoteRegex, (match, before, text) => {
      // Skip if it's already escaped or in a string literal
      if (before === '\\' || before === "'" || before === '"') return match;
      // Skip if it's in an import statement or other non-JSX context
      if (before === 'm' && text.includes(' ')) return match; // from 'module'
      if (before === ' ' && text.includes(' ')) return match; // ' ' in strings
      modified = true;
      return `${before}'${text}'`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed JSX quotes in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTSXFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        let stat;
        
        try {
          stat = fs.statSync(fullPath);
        } catch (error) {
          continue;
        }
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
const tsxFiles = findTSXFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TSX/JSX files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXQuotes(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX quotes in ${fixedCount} files`);