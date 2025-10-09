#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors after merge conflict resolution
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues that occur after removing merge conflict markers
    
    // Fix missing imports that might have been removed
    if (content.includes('React') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Fix missing closing braces for components
    if (content.includes('const ') && content.includes('= () => {') && !content.includes('export default')) {
      // Find the last opening brace and add proper closing
      const lines = content.split('\n');
      let braceCount = 0;
      let lastOpenBrace = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('{')) {
          braceCount++;
          lastOpenBrace = i;
        }
        if (line.includes('}')) {
          braceCount--;
        }
      }
      
      if (braceCount > 0 && lastOpenBrace !== -1) {
        // Add missing closing braces
        for (let i = 0; i < braceCount; i++) {
          content += '\n}';
        }
        // Add export default
        content += '\n\nexport default ' + lines[lastOpenBrace].match(/const\s+(\w+)/)?.[1] + ';';
        modified = true;
      }
    }
    
    // Fix orphaned expressions (lines that are just expressions without assignment)
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      // Skip empty lines, comments, and proper statements
      if (line.trim() === '' || line.trim().startsWith('//') || line.trim().startsWith('/*') || 
          line.trim().startsWith('*') || line.trim().startsWith('*/') ||
          line.includes('import ') || line.includes('export ') || line.includes('const ') ||
          line.includes('let ') || line.includes('var ') || line.includes('function ') ||
          line.includes('class ') || line.includes('interface ') || line.includes('type ') ||
          line.includes('return ') || line.includes('if ') || line.includes('for ') ||
          line.includes('while ') || line.includes('switch ') || line.includes('case ') ||
          line.includes('default:') || line.includes('try ') || line.includes('catch ') ||
          line.includes('finally ') || line.includes('throw ') || line.includes('break ') ||
          line.includes('continue ') || line.includes('}') || line.includes('{') ||
          line.includes('=>') || line.includes('=') || line.includes(';') ||
          line.trim().startsWith('<') || line.trim().startsWith('</')) {
        return line;
      }
      
      // If it's just an expression, comment it out or remove it
      if (line.trim() && !line.includes(':')) {
        return '// ' + line;
      }
      
      return line;
    });
    
    if (fixedLines.join('\n') !== content) {
      content = fixedLines.join('\n');
      modified = true;
    }
    
    // Fix missing closing tags in JSX
    if (content.includes('<div') && !content.includes('</div>')) {
      // This is a complex fix, so we'll just add a closing div at the end
      if (!content.trim().endsWith('</div>') && !content.trim().endsWith('</>')) {
        content += '\n</div>';
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
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
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Ignore permission errors
  }
  
  return files;
}

// Main execution
console.log('Fixing syntax errors after merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nFixed ${fixedCount} files with syntax errors`);
if (errorCount > 0) {
  console.log(`Encountered errors in ${errorCount} files`);
}

console.log('\nDone!');