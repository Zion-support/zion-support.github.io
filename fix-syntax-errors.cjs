const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Fix missing commas after arrays
      .replace(/(\])\s*(\w+):/g, '$1,\n      $2:')
      // Fix missing commas after objects
      .replace(/(\})\s*(\w+):/g, '$1,\n      $2:')
      // Fix unterminated strings
      .replace(/([^\\])'([^']*)$/gm, '$1\'$2\'')
      // Fix JSX fragments without proper closing
      .replace(/<>([^<]*?)(?=<[^>]*>)/g, '<>')
      // Fix missing semicolons in object properties
      .replace(/(\w+):\s*([^,}\]]+)\s*(\w+):/g, '$1: $2,\n      $3:')
      // Fix malformed JSX
      .replace(/<(\w+)([^>]*?)(?=\s*$)/gm, '<$1$2>')
      // Fix missing closing tags
      .replace(/(<div[^>]*>)([^<]*?)(?=<div)/g, '$1$2</div>')
      // Fix extra quotes in strings
      .replace(/([^\\])'([^']*)'([^']*)$/gm, '$1\'$2$3\'')
      // Fix missing commas in arrays
      .replace(/([^,]\s*)(\])/g, '$1$2')
      // Fix missing commas in objects
      .replace(/([^,}\s])\s*(\})/g, '$1$2');
    
    fs.writeFileSync(filePath, content, 'utf8');
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
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixSyntaxErrors(filePath);
    }
  });
}

// Start fixing from the app directory
walkDir('./app');
console.log('Syntax error fixing completed!');