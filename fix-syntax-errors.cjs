const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Fix object properties with semicolons instead of commas
      .replace(/(\w+);(\s*\n\s*\w+:)/g, '$1,$2')
      .replace(/(\w+);(\s*\n\s*\w+;)/g, '$1,$2')
      .replace(/(\w+);(\s*\n\s*})/g, '$1$2')
      
      // Fix interface properties
      .replace(/(\w+):\s*([^;,\n]+),(\s*\n\s*})/g, '$1: $2$3')
      .replace(/(\w+):\s*([^;,\n]+);(\s*\n\s*})/g, '$1: $2$3')
      
      // Fix function parameters
      .replace(/(\w+):\s*([^,)]+),(\s*\))/g, '$1: $2$3')
      .replace(/(\w+):\s*([^,)]+);(\s*\))/g, '$1: $2$3')
      
      // Fix array elements
      .replace(/([^,\[\]]+);(\s*\n\s*])/g, '$1$2')
      
      // Fix JSX attributes
      .replace(/(\w+)="([^"]+)",(\s*\/>)/g, '$1="$2"$3')
      .replace(/(\w+)="([^"]+)";(\s*\/>)/g, '$1="$2"$3')
      
      // Fix trailing commas in objects
      .replace(/,(\s*\n\s*})/g, '$1')
      
      // Fix trailing semicolons in objects
      .replace(/(\w+);(\s*\n\s*})/g, '$1$2');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixSyntaxErrors(filePath);
    }
  });
}

// Start fixing from the components directory
walkDir('/workspace/components');
walkDir('/workspace/pages');
walkDir('/workspace/src');

console.log('Syntax error fixing completed!');