function finalSyntaxFix(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common remaining syntax errors
    content = content
      // Fix export statements with trailing commas
      .replace(/export\s+default\s+(\w+),(\s*$)/g, 'export default $1;')
      .replace(/export\s+(\w+),(\s*$)/g, 'export $1;')
      
      // Fix import statements with trailing commas
      .replace(/import\s+([^,]+),(\s*$)/g, 'import $1;')
      
      // Fix function declarations with trailing commas
      .replace(/function\s+(\w+)\([^)]*\),(\s*$)/g, 'function $1() {')
      
      // Fix variable declarations with trailing commas
      .replace(/const\s+(\w+)\s*=\s*([^,;]+),(\s*$)/g, 'const $1 = $2;')
      .replace(/let\s+(\w+)\s*=\s*([^,;]+),(\s*$)/g, 'let $1 = $2;')
      .replace(/var\s+(\w+)\s*=\s*([^,;]+),(\s*$)/g, 'var $1 = $2;')
      
      // Fix object properties with semicolons
      .replace(/(\w+):\s*([^,}]+);(\s*\n\s*})/g, '$1: $2$3')
      .replace(/(\w+):\s*([^,}]+);(\s*\n\s*\w+:)/g, '$1: $2,$3')
      
      // Fix interface properties
      .replace(/(\w+):\s*([^;,\n]+);(\s*\n\s*})/g, '$1: $2$3')
      .replace(/(\w+):\s*([^;,\n]+);(\s*\n\s*\w+:)/g, '$1: $2,$3')
      
      // Fix trailing commas in objects
      .replace(/,(\s*\n\s*})/g, '$1')
      
      // Fix trailing semicolons in objects
      .replace(/(\w+);(\s*\n\s*})/g, '$1$2')
      
      // Fix function parameters
      .replace(/(\w+):\s*([^,)]+);(\s*\))/g, '$1: $2$3')
      
      // Fix array elements
      .replace(/([^,\[\]]+);(\s*\n\s*])/g, '$1$2')
      
      // Fix JSX attributes
      .replace(/(\w+)="([^"]+)";(\s*\/>)/g, '$1="$2"$3')
      .replace(/(\w+)="([^"]+)";(\s*\n\s*[^=])/g, '$1="$2"$3')
      
      // Fix unused expressions (add void operator)
      .replace(/([^=!<>])\s*\(\s*\)\s*;(\s*$)/g, 'void $1();')
      
      // Fix missing semicolons
      .replace(/(\w+)\s*$(\s*\n\s*[^\/\*])/g, '$1;$2')
      
      // Fix missing commas in function calls
      .replace(/(\w+)\(([^)]+)\s+([^)]+)\)/g, '$1($2, $3)')
      
      // Fix missing commas in arrays
      .replace(/([^,\[\]]+)\s+([^,\[\]]+)(\s*\n\s*\])/g, '$1, $2$3')
      
      // Fix missing commas in objects
      .replace(/(\w+):\s*([^,}]+)\s+(\w+):/g, '$1: $2,\n  $3:');
    
    fs.writeFileSync(filePath, content);
    console.log(`Final syntax fix applied to: ${filePath}`);
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
      finalSyntaxFix(filePath);
    }
  });
}

// Start fixing from the components directory
walkDir('/workspace/components');
walkDir('/workspace/pages');
walkDir('/workspace/src');

console.log('Final syntax fix completed!');>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
