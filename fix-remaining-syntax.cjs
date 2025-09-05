const fs = require('fs');
const path = require('path');

function fixRemainingSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common remaining syntax errors
    content = content
      // Fix variable declarations with commas instead of semicolons
      .replace(/const\s+(\w+)\s*=\s*([^,;]+),(\s*\n\s*const)/g, 'const $1 = $2;\n$3')
      .replace(/let\s+(\w+)\s*=\s*([^,;]+),(\s*\n\s*const)/g, 'let $1 = $2;\n$3')
      .replace(/let\s+(\w+)\s*=\s*([^,;]+),(\s*\n\s*let)/g, 'let $1 = $2;\n$3')
      .replace(/var\s+(\w+)\s*=\s*([^,;]+),(\s*\n\s*const)/g, 'var $1 = $2;\n$3')
      .replace(/var\s+(\w+)\s*=\s*([^,;]+),(\s*\n\s*let)/g, 'var $1 = $2;\n$3')
      .replace(/var\s+(\w+)\s*=\s*([^,;]+),(\s*\n\s*var)/g, 'var $1 = $2;\n$3')
      
      // Fix function parameters with semicolons
      .replace(/(\w+):\s*([^,)]+);(\s*\))/g, '$1: $2$3')
      
      // Fix object properties with semicolons
      .replace(/(\w+):\s*([^,}]+);(\s*\n\s*})/g, '$1: $2$3')
      .replace(/(\w+):\s*([^,}]+);(\s*\n\s*\w+:)/g, '$1: $2,$3')
      
      // Fix array elements with semicolons
      .replace(/([^,\[\]]+);(\s*\n\s*])/g, '$1$2')
      
      // Fix JSX attributes with semicolons
      .replace(/(\w+)="([^"]+)";(\s*\/>)/g, '$1="$2"$3')
      .replace(/(\w+)="([^"]+)";(\s*\n\s*[^=])/g, '$1="$2"$3')
      
      // Fix trailing commas in objects
      .replace(/,(\s*\n\s*})/g, '$1')
      
      // Fix trailing semicolons in objects
      .replace(/(\w+);(\s*\n\s*})/g, '$1$2')
      
      // Fix interface properties
      .replace(/(\w+):\s*([^;,\n]+);(\s*\n\s*})/g, '$1: $2$3')
      .replace(/(\w+):\s*([^;,\n]+);(\s*\n\s*\w+:)/g, '$1: $2,$3')
      
      // Fix type definitions
      .replace(/(\w+):\s*([^;,\n]+);(\s*\n\s*})/g, '$1: $2$3')
      .replace(/(\w+):\s*([^;,\n]+);(\s*\n\s*\w+:)/g, '$1: $2,$3')
      
      // Fix function calls with semicolons
      .replace(/(\w+)\(([^)]+)\);(\s*\n\s*[^=])/g, '$1($2)$3')
      
      // Fix return statements
      .replace(/return\s+([^;]+);(\s*\n\s*})/g, 'return $1$2')
      
      // Fix conditional expressions
      .replace(/(\w+)\s*\?\s*([^:]+):\s*([^;]+);(\s*\n\s*[^=])/g, '$1 ? $2 : $3$4')
      
      // Fix template literals
      .replace(/`([^`]+)`;(\s*\n\s*[^=])/g, '`$1`$2')
      
      // Fix string literals
      .replace(/"([^"]+)";(\s*\n\s*[^=])/g, '"$1"$2')
      .replace(/'([^']+)';(\s*\n\s*[^=])/g, "'$1'$2");
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed remaining syntax errors in: ${filePath}`);
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
      fixRemainingSyntaxErrors(filePath);
    }
  });
}

// Start fixing from the components directory
walkDir('/workspace/components');
walkDir('/workspace/pages');
walkDir('/workspace/src');

console.log('Remaining syntax error fixing completed!');