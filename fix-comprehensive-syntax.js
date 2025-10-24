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

// Function to fix comprehensive syntax errors
function fixComprehensiveSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in function parameters
    if (content.includes("className = ''\n  lazy = true")) {
      content = content.replace(/className = ''\n  lazy = true/g, "className = '',\n  lazy = true");
      modified = true;
    }
    
    // Fix incomplete function declarations
    if (content.includes("const DefaultSEO: React.FC<DefaultSEOProps> = ({ className = ''")) {
      content = content.replace(/const DefaultSEO: React.FC<DefaultSEOProps> = \({ className = ''/g, "const DefaultSEO: React.FC<DefaultSEOProps> = ({ className = '' }) => {");
      modified = true;
    }
    
    // Fix missing semicolons after const declarations
    const lines = content.split('\n');
    const fixedLines = lines.map((line, index) => {
      let fixedLine = line;
      
      // Fix missing semicolons after const declarations
      if (line.trim().startsWith('const ') && !line.trim().endsWith(';') && !line.trim().endsWith('{') && !line.trim().endsWith('}')) {
        // Check if next line starts with a new declaration or is empty
        const nextLine = lines[index + 1];
        if (nextLine && (nextLine.trim().startsWith('const ') || nextLine.trim().startsWith('let ') || nextLine.trim().startsWith('var ') || nextLine.trim().startsWith('function ') || nextLine.trim().startsWith('export ') || nextLine.trim() === '')) {
          fixedLine = line + ';';
          modified = true;
        }
      }
      
      // Fix missing commas in array destructuring
      if (line.includes('const [') && line.includes(']') && !line.includes(';') && !line.includes(',')) {
        if (!line.trim().endsWith(';')) {
          fixedLine = line + ';';
          modified = true;
        }
      }
      
      // Fix unterminated string literals
      if (line.includes("'") && !line.includes("'use client'") && !line.includes("import")) {
        const singleQuotes = (line.match(/'/g) || []).length;
        if (singleQuotes % 2 !== 0 && line.trim().endsWith("'")) {
          fixedLine = line + "'";
          modified = true;
        }
      }
      
      // Fix missing closing braces in function parameters
      if (line.includes('= ({') && !line.includes('}) =>')) {
        if (line.includes('className = \'\'')) {
          fixedLine = line.replace(/className = ''$/, "className = '' }) => {");
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
console.log('Starting comprehensive syntax error fix...');

const files = findTsxFiles('./');
let fixedCount = 0;

files.forEach(file => {
  if (fixComprehensiveSyntax(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files with comprehensive syntax errors.`);