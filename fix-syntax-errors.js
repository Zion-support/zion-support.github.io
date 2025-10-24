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

// Function to fix various syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed string literals in className
    if (content.includes("className = ',")) {
      content = content.replace(/className = ',/g, "className = ''");
      modified = true;
    }
    
    // Fix malformed const declarations
    if (content.includes('const "DefaultSEO"')) {
      content = content.replace(/const "DefaultSEO"/g, 'const DefaultSEO');
      modified = true;
    }
    
    // Fix unterminated string literals in various contexts
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      let fixedLine = line;
      
      // Fix unterminated string literals at end of lines
      if (line.match(/[^'"]$/) && line.includes("'") && !line.includes("'use client'") && !line.includes("import")) {
        // Check if line ends with unterminated string
        const singleQuotes = (line.match(/'/g) || []).length;
        const doubleQuotes = (line.match(/"/g) || []).length;
        
        if (singleQuotes % 2 !== 0 && line.trim().endsWith("'")) {
          fixedLine = line + "'";
          modified = true;
        }
        if (doubleQuotes % 2 !== 0 && line.trim().endsWith('"')) {
          fixedLine = line + '"';
          modified = true;
        }
      }
      
      // Fix specific patterns
      if (line.includes("'use client''")) {
        fixedLine = line.replace(/'use client''/g, "'use client'");
        modified = true;
      }
      
      // Fix import statements with extra quotes
      if (line.includes("import") && line.includes("from") && line.includes("''")) {
        fixedLine = line.replace(/''$/, "'");
        modified = true;
      }
      
      // Fix malformed array declarations
      if (line.includes("const [") && line.includes("]") && !line.includes(";")) {
        if (!line.trim().endsWith(';')) {
          fixedLine = line + ';';
          modified = true;
        }
      }
      
      // Fix malformed object declarations
      if (line.includes("const {") && line.includes("}") && !line.includes(";")) {
        if (!line.trim().endsWith(';')) {
          fixedLine = line + ';';
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
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files with syntax errors.`);