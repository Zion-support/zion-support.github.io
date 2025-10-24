const fs = require('fs');
const path = require('path');

// Function to fix function declarations in a file
function fixFunctionDeclarations(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed function declarations
    content = content.replace(/export default function;\s*(\w+)\(\)/g, 'export default function $1()');
    content = content.replace(/export default function\s+(\w+);\s*\(\)/g, 'export default function $1()');
    content = content.replace(/export default function\s+(\w+);\s*(\w+)\(\)/g, 'export default function $1$2()');
    
    // Fix other common syntax issues
    content = content.replace(/,\s*}/g, '}'); // Remove trailing commas before closing braces
    content = content.replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets
    content = content.replace(/;\s*;/g, ';'); // Remove double semicolons
    content = content.replace(/\s+;/g, ';'); // Remove spaces before semicolons
    
    // Fix JSX syntax
    content = content.replace(/<(\w+)\s*\/>/g, '<$1 />'); // Fix self-closing tags
    content = content.replace(/className\s*=\s*["']([^"']+)["']/g, 'className="$1"'); // Fix className quotes
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    content = content.replace(/<\/div>\s*$/gm, '</div>');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/React files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFunctionDeclarations(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting to fix function declarations and syntax errors...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files`);

// Also fix components directory
const componentsFixedCount = fixAllFiles('./components');
console.log(`Fixed ${componentsFixedCount} files in components`);

console.log('Function declaration fixing completed!');