#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixImportQuotes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix ' in import statements back to single quotes
    const importRegex = /import\s+.*?from\s+'([^&]+)'/g;
    const newContent = content.replace(importRegex, (match, modulePath) => {
      modified = true;
      return match.replace(/'/g, "'");
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed import quotes in: ${filePath}`);
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
  if (fixImportQuotes(file)) {
    fixedCount++;
  }
}

console.log(`Fixed import quotes in ${fixedCount} files`);