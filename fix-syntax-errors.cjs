const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Remove trailing commas before semicolons
      .replace(/,;/g, ';')
      // Remove standalone commas
      .replace(/^,;$/gm, '')
      // Fix JSX syntax issues
      .replace(/,;$/gm, '')
      // Fix object property syntax
      .replace(/(\w+),;/g, '$1;')
      // Fix function parameters
      .replace(/\(([^)]+),\)/g, '($1)')
      // Fix array syntax
      .replace(/\[([^\]]+),\]/g, '[$1]')
      // Fix object syntax
      .replace(/\{([^}]+),(\s*)\}/g, '{$1$2}')
      // Remove extra commas in JSX
      .replace(/,(\s*[<>])/g, '$1')
      // Fix import statements
      .replace(/import\s+([^;]+),;/g, 'import $1;')
      // Fix export statements
      .replace(/export\s+([^;]+),;/g, 'export $1;')
      // Clean up multiple semicolons
      .replace(/;+/g, ';')
      // Clean up multiple commas
      .replace(/,+/g, ',')
      // Remove empty lines with just commas
      .replace(/^\s*,?\s*$/gm, '')
      // Fix CSS in template literals
      .replace(/`([^`]+),;([^`]+)`/g, '`$1$2`')
      // Fix JSX attributes
      .replace(/(\w+)=/g, '$1=')
      .replace(/=([^=]+),;/g, '=$1')
      // Clean up trailing commas in objects
      .replace(/,(\s*[}\]])/g, '$1');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
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
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  });
}

// Start fixing from components directory
walkDir('./components');
walkDir('./hooks');
walkDir('./lib');
walkDir('./pages');

console.log('Syntax error fixing completed!');