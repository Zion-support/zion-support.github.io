const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix duplicate const declarations
  content = content.replace(/const\s+(\w+)\s*=\s*const\s+\1\s*=\s*const\s+\1\s*=\s*/g, 'const $1 = ');
  
  // Fix missing arrow function syntax
  content = content.replace(/return\s+null\s*=>/g, 'return () =>');
  content = content.replace(/=\s*\(\s*\)\s*\)\s*=>\s*{/g, '= () => {');
  content = content.replace(/=\s*\(\s*\)\s*\)\s*=>\s*\(/g, '= () => (');
  
  // Fix missing semicolons
  content = content.replace(/\}\s*\)\s*$/gm, '});');
  content = content.replace(/\}\s*\)\s*;?\s*$/gm, '});');
  
  // Fix merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix object syntax errors
  content = content.replace(/particles\.push\(\)\s*$/gm, 'particles.push({');
  content = content.replace(/x:\s*Math\.random\(\)\s*\*\s*canvas\.width,\s*y:\s*Math\.random\(\)\s*\*\s*canvas\.height,/g, 'x: Math.random() * canvas.width,\n        y: Math.random() * canvas.height,');
  
  // Fix missing return statements
  content = content.replace(/return\s*\(\s*\)\s*$/gm, 'return null;');
  
  // Fix missing semicolons in object properties
  content = content.replace(/(\w+):\s*Math\.random\(\)\s*\*\s*canvas\.(\w+),/g, '$1: Math.random() * canvas.$2,');
  
  // Fix missing semicolons after function calls
  content = content.replace(/(\w+)\s*\(\s*\)\s*$/gm, '$1();');
  
  // Fix missing semicolons in variable declarations
  content = content.replace(/(\w+)\s*=\s*(\w+)\s*\(\s*\)\s*$/gm, '$1 = $2();');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    const fixedContent = fixSyntaxErrors(content);
    
    if (fixedContent !== originalContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Syntax error fixing completed!');
