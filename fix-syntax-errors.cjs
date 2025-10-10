#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in object literals
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Fix missing comma after object properties
      if (line.match(/^\s*[a-zA-Z_$][a-zA-Z0-9_$]*:\s*['"`][^'"`]*['"`]\s*$/) && 
          i + 1 < lines.length && 
          lines[i + 1].match(/^\s*[a-zA-Z_$][a-zA-Z0-9_$]*:\s*/)) {
        if (!line.trim().endsWith(',')) {
          line = line.trim() + ',';
          modified = true;
        }
      }
      
      // Fix missing comma after array elements
      if (line.match(/^\s*['"`][^'"`]*['"`]\s*$/) && 
          i + 1 < lines.length && 
          lines[i + 1].match(/^\s*['"`][^'"`]*['"`]\s*$/)) {
        if (!line.trim().endsWith(',')) {
          line = line.trim() + ',';
          modified = true;
        }
      }
      
      // Fix missing comma after closing brackets
      if (line.match(/^\s*\]\s*$/) && 
          i + 1 < lines.length && 
          lines[i + 1].match(/^\s*[a-zA-Z_$][a-zA-Z0-9_$]*:\s*/)) {
        if (!line.trim().endsWith(',')) {
          line = line.trim() + ',';
          modified = true;
        }
      }
      
      // Fix missing comma after closing braces
      if (line.match(/^\s*\}\s*$/) && 
          i + 1 < lines.length && 
          lines[i + 1].match(/^\s*[a-zA-Z_$][a-zA-Z0-9_$]*:\s*/)) {
        if (!line.trim().endsWith(',')) {
          line = line.trim() + ',';
          modified = true;
        }
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, fixedLines.join('\n'));
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
function main() {
  const workspaceDir = process.cwd();
  console.log('Searching for source files...');
  
  const sourceFiles = findSourceFiles(workspaceDir);
  console.log(`Found ${sourceFiles.length} source files`);
  
  let fixedCount = 0;
  for (const file of sourceFiles) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed syntax errors in ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, findSourceFiles };