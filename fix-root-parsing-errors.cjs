const fs = require('fs');
const path = require('path');

// Get all JSX/TSX files in the root directory
const rootFiles = fs.readdirSync('/workspace')
  .filter(file => (file.endsWith('.jsx') || file.endsWith('.tsx')) && file !== 'App.tsx' && file !== 'App_minimal.tsx')
  .map(file => `/workspace/${file}`);

function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix function declaration trailing comma
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,/g, 'const $1: React.FC = () => {');
    
    // Fix return statement trailing comma
    content = content.replace(/return\s*\(,/g, 'return (');
    
    // Fix JSX trailing commas
    content = content.replace(/,(\s*<\/[^>]+>)/g, '$1');
    content = content.replace(/,(\s*\))/g, '$1');
    content = content.replace(/,(\s*};)/g, '$1');
    
    // Fix invalid characters (replace with proper syntax)
    content = content.replace(/import React from 'react';\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,\s*return\s*\(,/g, (match, componentName) => {
      return `import React from 'react';\nconst ${componentName}: React.FC = () => {\n  return (`;
    });
    
    // Fix specific patterns
    content = content.replace(/,\s*<\/div>,\s*\),\s*};/g, '\n    </div>\n  );\n};');
    
    // Fix export statements
    content = content.replace(/export default (\w+);/g, 'export default $1;');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

console.log(`Found ${rootFiles.length} root-level JSX/TSX files to fix`);

rootFiles.forEach(fixParsingErrors);