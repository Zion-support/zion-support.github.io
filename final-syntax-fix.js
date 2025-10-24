const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix final syntax errors
function fixFinalSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unterminated string literals
    const lines = content.split('\n');
    const fixedLines = lines.map((line, index) => {
      let fixedLine = line;
      
      // Fix unterminated string literals at end of lines
      if (line.includes("'") && !line.includes("'use client'") && !line.includes("import")) {
        const singleQuotes = (line.match(/'/g) || []).length;
        if (singleQuotes % 2 !== 0 && line.trim().endsWith("'")) {
          fixedLine = line + "'";
          modified = true;
        }
      }
      
      // Fix missing semicolons after const declarations
      if (line.trim().startsWith('const ') && 
          !line.trim().endsWith(';') && 
          !line.trim().endsWith('{') && 
          !line.trim().endsWith('}') &&
          !line.includes('=>')) {
        
        const nextLine = lines[index + 1];
        if (nextLine && (
          nextLine.trim().startsWith('const ') || 
          nextLine.trim().startsWith('let ') || 
          nextLine.trim().startsWith('var ') || 
          nextLine.trim().startsWith('function ') || 
          nextLine.trim().startsWith('export ') || 
          nextLine.trim().startsWith('import ') ||
          nextLine.trim() === '' ||
          nextLine.trim().startsWith('//') ||
          nextLine.trim().startsWith('if ') ||
          nextLine.trim().startsWith('for ') ||
          nextLine.trim().startsWith('while ')
        )) {
          fixedLine = line + ';';
          modified = true;
        }
      }
      
      // Fix missing closing brackets in array destructuring
      if (line.includes('const [') && line.includes(']') && !line.includes(';')) {
        if (!line.trim().endsWith(';')) {
          fixedLine = line + ';';
          modified = true;
        }
      }
      
      // Fix missing closing parentheses
      if (line.includes('(') && !line.includes(')') && !line.includes('=>')) {
        if (line.trim().endsWith(',')) {
          fixedLine = line.replace(/,$/, ');');
          modified = true;
        }
      }
      
      // Fix missing commas in object properties
      if (line.includes('=') && line.includes("'") && !line.includes(',') && !line.includes(';')) {
        const nextLine = lines[index + 1];
        if (nextLine && nextLine.trim().startsWith('}')) {
          // This is the last property, no comma needed
        } else if (nextLine && (nextLine.trim().startsWith('  ') || nextLine.trim().startsWith('\t'))) {
          fixedLine = line + ',';
          modified = true;
        }
      }
      
      return fixedLine;
    });
    
    if (modified) {
      const newContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting final syntax fix...');

const files = findTsxFiles('./');
let fixedCount = 0;

files.forEach(file => {
  if (fixFinalSyntax(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files with final syntax errors.`);