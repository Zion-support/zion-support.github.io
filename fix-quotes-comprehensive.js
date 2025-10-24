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

// Function to fix various quote issues
function fixQuotes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import statements with extra quotes - more comprehensive pattern
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      let fixedLine = line;
      
      // Fix import statements with double quotes at the end
      if (line.includes("import") && line.includes("from") && line.includes("''")) {
        fixedLine = line.replace(/''$/, "'");
        modified = true;
      }
      
      // Fix 'use client' statements
      if (line.includes("'use client''")) {
        fixedLine = line.replace(/'use client''/g, "'use client'");
        modified = true;
      }
      
      // Fix other patterns with double quotes
      if (line.includes("''") && !line.includes("import")) {
        fixedLine = line.replace(/''/g, "'");
        modified = true;
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
console.log('Starting comprehensive quote fix...');

const files = findTsxFiles('./');
let fixedCount = 0;

files.forEach(file => {
  if (fixQuotes(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files with quote issues.`);