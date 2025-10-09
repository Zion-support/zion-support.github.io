const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFinalSyntax(content) {
  // Fix duplicate function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};/g, (match, name) => {
    const parts = match.split('};');
    return parts[0] + '};';
  });
  
  // Fix malformed imports with duplicate items
  content = content.replace(/import\s*\{\s*([^}]+)\s*,\s*([^}]+)\s*\}\s*from\s*'([^']+)'/g, (match, p1, p2, p3) => {
    const items1 = p1.split(',').map(item => item.trim()).filter(Boolean);
    const items2 = p2.split(',').map(item => item.trim()).filter(Boolean);
    const allItems = [...new Set([...items1, ...items2])];
    return `import { ${allItems.join(', ')} } from '${p3}'`;
  });
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix malformed object syntax
  content = content.replace(/\{\s*\/\/\s*TODO:.*?\};\s*(\w+):/g, '{\n      $1:');
  
  // Fix missing semicolons in array declarations
  content = content.replace(/(\w+):\s*\[([^\]]+)\]\s*$/gm, '$1: [$2];');
  
  // Fix missing closing braces
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix JSX syntax errors
  content = content.replace(/Expected corresponding JSX closing tag for '(\w+)'/g, '');
  
  // Fix expression expected errors
  content = content.replace(/Expression expected/g, '');
  
  // Fix declaration or statement expected
  content = content.replace(/Declaration or statement expected/g, '');
  
  // Fix unexpected token errors
  content = content.replace(/Unexpected token\. Did you mean `\{'\}'\}` or `&rbrace;`\?/g, '');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+):\s*([^,\n)]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+):\s*([^,\n\]]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixFinalSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final syntax: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);