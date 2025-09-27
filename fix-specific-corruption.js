import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixSpecificCorruption(content) {
  let fixed = content;
  
  // Fix specific corruption patterns that are causing build errors
  
  // Fix import statements - add missing spaces
  fixed = fixed.replace(/import(\w+)/g, 'import $1');
  fixed = fixed.replace(/import\s+(\w+)\s+from/g, 'import $1 from');
  fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from/g, 'import { $1 } from');
  
  // Fix export statements
  fixed = fixed.replace(/exportdefault/g, 'export default');
  fixed = fixed.replace(/export\s+default/g, 'export default');
  
  // Fix function declarations
  fixed = fixed.replace(/function(\w+)/g, 'function $1');
  
  // Fix JSX attributes
  fixed = fixed.replace(/<(\w+)lang=/g, '<$1 lang=');
  fixed = fixed.replace(/href=/g, 'href=');
  fixed = fixed.replace(/rel=/g, 'rel=');
  fixed = fixed.replace(/className=/g, 'className=');
  
  // Fix object properties
  fixed = fixed.replace(/(\w+):(\w+)/g, '$1: $2');
  fixed = fixed.replace(/(\w+)\s*=\s*{/g, '$1 = {');
  
  // Fix array elements
  fixed = fixed.replace(/\[\s*(\w+)\s*\]/g, '[$1]');
  
  // Fix string concatenation
  fixed = fixed.replace(/'([^']+)'/g, "'$1'");
  fixed = fixed.replace(/"([^"]+)"/g, '"$1"');
  
  // Fix template literals
  fixed = fixed.replace(/`([^`]+)`/g, '`$1`');
  
  // Fix JSX closing tags
  fixed = fixed.replace(/<\/(\w+)>/g, '</$1>');
  
  // Fix comments
  fixed = fixed.replace(/\/\*\s*([^*]+)\s*\*\//g, '/* $1 */');
  fixed = fixed.replace(/\/\/\s*([^\n]+)/g, '// $1');
  
  return fixed;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSpecificCorruption(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all TypeScript/JavaScript files in pages directory
const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir);

files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
    fixFile(path.join(pagesDir, file));
  }
});

console.log('Specific corruption fix completed!');