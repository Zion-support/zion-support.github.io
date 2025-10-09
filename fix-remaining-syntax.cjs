const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixRemainingSyntax(content) {
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+):\s*\[([^\]]+)\]\n\s*(\w+):/g, '$1: [$2],\n      $3:');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+):\s*([^,\n)]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing semicolons in object properties
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in imports
  content = content.replace(/import\s*\{\s*([^}]+)\s*,\s*([^}]+)\s*\}\s*from\s*'([^']+)'/g, (match, p1, p2, p3) => {
    const items1 = p1.split(',').map(item => item.trim()).filter(Boolean);
    const items2 = p2.split(',').map(item => item.trim()).filter(Boolean);
    const allItems = [...new Set([...items1, ...items2])];
    return `import { ${allItems.join(', ')} } from '${p3}'`;
  });
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in array declarations
  content = content.replace(/(\w+):\s*\[([^\]]+)\]\s*$/gm, '$1: [$2]');
  
  // Fix missing commas in function calls
  content = content.replace(/(\w+):\s*([^,\n)]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in JSX props
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in type definitions
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixRemainingSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining syntax: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files in src directory
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);