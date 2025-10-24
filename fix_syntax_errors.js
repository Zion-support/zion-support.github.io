const fs = require('fs');
const path = require('path');

// Common fixes for syntax errors
const fixes = [
  // Fix missing commas in object properties
  { pattern: /(\w+):\s*(\w+)\n\s*(\w+):/g, replacement: '$1: $2,\n    $3:' },
  // Fix missing commas in arrays
  { pattern: /(\w+)\n\s*(\w+)\]/g, replacement: '$1,\n  $2]' },
  // Fix missing semicolons after imports
  { pattern: /import\s+([^;]+)\n/g, replacement: 'import $1;\n' },
  // Fix malformed JSX closing tags
  { pattern: /><\/div>/g, replacement: '></div>' },
  // Fix missing spaces in className
  { pattern: /className="([^"]*)([a-z])([A-Z])/g, replacement: 'className="$1$2 $3' },
  // Fix missing closing parentheses
  { pattern: /(\w+)\s*=\s*\(\s*\{[^}]*\}\s*\)\s*=>\s*\{/g, replacement: '$1 = ({ $2 }) => {' }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all files
const files = getAllTsxFiles('./app');
files.forEach(fixFile);

console.log('Syntax fixes completed');
