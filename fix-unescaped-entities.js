#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixUnescapedEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix single quotes
    const singleQuoteRegex = /([^&])'([^;])/g;
    const newContent = content.replace(singleQuoteRegex, (match, before, after) => {
      // Skip if it's already escaped or in a string literal
      if (before === '&' || before === '\\') return match;
      modified = true;
      return `${before}'${after}`;
    });
    
    // Fix double quotes in JSX text content (not in attributes)
    const doubleQuoteRegex = /([^&])"([^;])/g;
    const finalContent = newContent.replace(doubleQuoteRegex, (match, before, after) => {
      // Skip if it's already escaped or in a string literal
      if (before === '&' || before === '\\') return match;
      modified = true;
      return `${before}"${after}`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`Fixed unescaped entities in: ${filePath}`);
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
        } else if (stat.isFile() && /\.tsx?$/.test(item)) {
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

console.log(`Found ${tsxFiles.length} TSX files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixUnescapedEntities(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unescaped entities in ${fixedCount} files`);