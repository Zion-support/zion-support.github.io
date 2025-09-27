import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common corruption patterns to fix
const corruptionPatterns = [
  // Fix spaces in variable names and object properties
  { pattern: /(\w+)\s+(\w+)/g, replacement: '$1$2' },
  // Fix spaces in import statements
  { pattern: /import\s+{\s*([^}]+)\s*}\s+from/g, replacement: 'import { $1 } from' },
  // Fix spaces in function parameters
  { pattern: /\(\s*([^)]+)\s*\)/g, replacement: '($1)' },
  // Fix spaces in object destructuring
  { pattern: /{\s*([^}]+)\s*}/g, replacement: '{$1}' },
  // Fix spaces in array destructuring
  { pattern: /\[\s*([^\]]+)\s*\]/g, replacement: '[$1]' },
  // Fix spaces in template literals
  { pattern: /`([^`]+)`/g, replacement: '`$1`' },
  // Fix spaces in string literals
  { pattern: /'([^']+)'/g, replacement: "'$1'" },
  { pattern: /"([^"]+)"/g, replacement: '"$1"' },
  // Fix spaces in JSX attributes
  { pattern: /className\s*=\s*"([^"]+)"/g, replacement: 'className="$1"' },
  // Fix spaces in function calls
  { pattern: /(\w+)\s*\(\s*([^)]*)\s*\)/g, replacement: '$1($2)' },
  // Fix spaces in object property access
  { pattern: /(\w+)\.(\w+)/g, replacement: '$1.$2' },
  // Fix spaces in array access
  { pattern: /(\w+)\[(\w+)\]/g, replacement: '$1[$2]' },
  // Fix spaces in operators
  { pattern: /(\w+)\s*=\s*(\w+)/g, replacement: '$1 = $2' },
  { pattern: /(\w+)\s*:\s*(\w+)/g, replacement: '$1: $2' },
  { pattern: /(\w+)\s*,\s*(\w+)/g, replacement: '$1, $2' },
  { pattern: /(\w+)\s*;\s*(\w+)/g, replacement: '$1; $2' },
  // Fix spaces in JSX tags
  { pattern: /<\s*(\w+)\s*>/g, replacement: '<$1>' },
  { pattern: /<\s*\/\s*(\w+)\s*>/g, replacement: '</$1>' },
  // Fix spaces in comments
  { pattern: /\/\*\s*([^*]+)\s*\*\//g, replacement: '/* $1 */' },
  { pattern: /\/\/\s*([^\n]+)/g, replacement: '// $1' },
];

function fixCorruption(content) {
  let fixed = content;
  
  // Apply all corruption patterns
  corruptionPatterns.forEach(({ pattern, replacement }) => {
    fixed = fixed.replace(pattern, replacement);
  });
  
  return fixed;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCorruption(content);
    
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

console.log('Corruption fix completed!');