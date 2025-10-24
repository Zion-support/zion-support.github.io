const fs = require('fs');
const path = require('path');

// Function to fix function syntax
function fixFunctionSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix function declarations missing opening parenthesis
    content = content.replace(/function\s+([a-zA-Z0-9_]+)\)\s*{/g, 'function $1() {');
    
    // Fix any other malformed function syntax
    content = content.replace(/function\s+([a-zA-Z0-9_]+)\s*\)\s*{/g, 'function $1() {');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed function syntax in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      if (fixFunctionSyntax(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting function syntax fixes...');

// Fix files in app directory
const appFixed = fixAllFiles('./app');
console.log(`Fixed ${appFixed} files in app directory.`);

console.log('Function syntax fixes completed.');