#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix duplicate component declarations
function fixDuplicateComponents(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find all component declarations
    const componentRegex = /const\s+(\w+Page)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g;
    const matches = [...content.matchAll(componentRegex)];
    
    if (matches.length > 1) {
      console.log(`Fixing duplicate components in: ${filePath}`);
      
      // Find the first component declaration
      const firstMatch = matches[0];
      const componentName = firstMatch[1];
      
      // Find where the first component should end (before the second declaration)
      const secondMatch = matches[1];
      const secondMatchIndex = secondMatch.index;
      
      // Extract the content before the second declaration
      let beforeSecond = content.substring(0, secondMatchIndex);
      
      // Find the last closing brace before the second declaration
      const lastBraceIndex = beforeSecond.lastIndexOf('};');
      if (lastBraceIndex !== -1) {
        // Extract the part after the first component
        const afterFirstComponent = content.substring(lastBraceIndex + 2);
        
        // Find the return statement in the second component
        const returnMatch = afterFirstComponent.match(/return\s*\([\s\S]*?\)\s*;\s*\}/);
        if (returnMatch) {
          // Replace the second component declaration with just the return statement
          const returnStatement = returnMatch[0].replace(/return\s*/, '  return ');
          const newContent = beforeSecond + returnStatement + '\n' + 
                           afterFirstComponent.substring(returnMatch.index + returnMatch[0].length);
          
          content = newContent;
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing duplicate components in ${filePath}:`, error.message);
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
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting duplicate component fixes...');

const srcDir = path.join(__dirname, 'src');
const sourceFiles = findSourceFiles(srcDir);

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
for (const filePath of sourceFiles) {
  if (fixDuplicateComponents(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed duplicate components in ${fixedCount} files`);