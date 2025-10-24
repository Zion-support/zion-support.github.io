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

// Function to fix remaining syntax errors
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unterminated string literals in import statements
    content = content.replace(/from '([^']*)''/g, "from '$1'");
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix unterminated string literals in general
    content = content.replace(/'([^']*)''/g, "'$1'");
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix missing semicolons after const declarations
    const lines = content.split('\n');
    const fixedLines = lines.map((line, index) => {
      let fixedLine = line;
      
      // Fix missing semicolons after const declarations that don't end with { or }
      if (line.trim().startsWith('const ') && 
          !line.trim().endsWith(';') && 
          !line.trim().endsWith('{') && 
          !line.trim().endsWith('}') &&
          !line.includes('=>')) {
        
        // Check if next line is a new declaration or empty
        const nextLine = lines[index + 1];
        if (nextLine && (
          nextLine.trim().startsWith('const ') || 
          nextLine.trim().startsWith('let ') || 
          nextLine.trim().startsWith('var ') || 
          nextLine.trim().startsWith('function ') || 
          nextLine.trim().startsWith('export ') || 
          nextLine.trim().startsWith('import ') ||
          nextLine.trim() === '' ||
          nextLine.trim().startsWith('//')
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
      
      // Fix missing closing parentheses in function calls
      if (line.includes('(') && !line.includes(')') && !line.includes('=>')) {
        if (line.trim().endsWith(',')) {
          fixedLine = line.replace(/,$/, ');');
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
console.log('Starting remaining error fix...');

const files = findTsxFiles('./');
let fixedCount = 0;

files.forEach(file => {
  if (fixRemainingErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files with remaining errors.`);