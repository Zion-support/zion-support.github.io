const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix trailing commas in type definitions
    content = content.replace(/(\w+)\s*:\s*([^,}]+),\s*}/g, '$1: $2}');
    
    // Fix const declarations with trailing commas
    content = content.replace(/const\s+([^=]+)=\s*([^,]+),\s*$/gm, 'const $1 = $2;');
    
    // Fix variable declarations in function bodies
    content = content.replace(/^\s*const\s+([^=]+)=\s*([^,]+),\s*$/gm, 'const $1 = $2;');
    content = content.replace(/^\s*let\s+([^=]+)=\s*([^,]+),\s*$/gm, 'let $1 = $2;');
    content = content.replace(/^\s*var\s+([^=]+)=\s*([^,]+),\s*$/gm, 'var $1 = $2;');
    
    // Fix try-catch blocks with missing semicolons
    content = content.replace(/try\s*{\s*([^}]+)\s*}\s*catch\s*\(([^)]+)\)\s*{\s*([^}]+)\s*}/g, 'try { $1; } catch ($2) { $3; }');
    
    // Fix duplicate function declarations
    content = content.replace(/export default async function handler\([^)]+\)\s*{\s*[^}]*}\s*export default async function handler\([^)]+\)\s*{/g, 'export default async function handler(');
    
    // Fix missing semicolons after variable declarations
    content = content.replace(/(const|let|var)\s+([^=]+)=\s*([^;]+)(?<!;)\s*$/gm, '$1 $2 = $3;');
    
    // Fix missing semicolons after function calls
    content = content.replace(/(\w+\([^)]*\))(?<!;)\s*$/gm, '$1;');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      fixSyntaxErrors(filePath);
    }
  }
}

// Start fixing from the pages/api directory
walkDirectory('/workspace/pages/api');
console.log('Syntax error fixes completed!');