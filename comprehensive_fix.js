const fs = require('fs');
const path = require('path');

// Comprehensive fixes for common syntax errors
const fixes = [
  // Fix missing commas in object properties
  { pattern: /(\w+):\s*(\w+)\n\s*(\w+):/g, replacement: '$1: $2,\n    $3:' },
  // Fix missing commas in arrays
  { pattern: /(\w+)\n\s*(\w+)\]/g, replacement: '$1,\n  $2]' },
  // Fix missing semicolons after imports
  { pattern: /import\s+([^;]+)\n/g, replacement: 'import $1;\n' },
  // Fix malformed JSX closing tags
  { pattern: /><\/div>/g, replacement: '></div>' },
  { pattern: /><\/h1>/g, replacement: '></h1>' },
  { pattern: /><\/p>/g, replacement: '></p>' },
  { pattern: /><\/button>/g, replacement: '></button>' },
  { pattern: /><\/section>/g, replacement: '></section>' },
  // Fix missing spaces in className
  { pattern: /className="([^"]*)([a-z])([A-Z])/g, replacement: 'className="$1$2 $3' },
  // Fix HTML entities in imports
  { pattern: /&quot;/g, replacement: '"' },
  { pattern: /&lt;/g, replacement: '<' },
  { pattern: /&gt;/g, replacement: '>' },
  // Fix malformed JSX fragments
  { pattern: /<>\n\s*<div/g, replacement: '<>\n        <div' },
  { pattern: /<\/div>\n\s*<\/>/g, replacement: '</div>\n      </>' },
  // Fix missing closing parentheses in function calls
  { pattern: /(\w+)\s*\(\s*\{[^}]*\}\s*\)\s*=>\s*\{/g, replacement: '$1 = ({ $2 }) => {' },
  // Fix malformed object destructuring
  { pattern: /const\s+(\w+)\s*=\s*\(\s*\{[^}]*\}\s*\)\s*=>/g, replacement: 'const $1 = ({ $2 }) =>' },
  // Fix missing commas in function parameters
  { pattern: /(\w+)\s*(\w+)\s*\)/g, replacement: '$1, $2)' },
  // Fix malformed useEffect dependencies
  { pattern: /}, \[\]\)/g, replacement: '}, []);' },
  // Fix missing export statements
  { pattern: /}\s*$/, replacement: '}\n\nexport default ComponentName;' },
  // Fix malformed JSX expressions
  { pattern: /<div>\n\s*<div/g, replacement: '<div>\n        <div' },
  // Fix missing closing tags
  { pattern: /<(\w+)[^>]*>\s*<\/\1>/g, replacement: '<$1></$1>' },
  // Fix malformed className attributes
  { pattern: /className="([^"]*)([a-z])([A-Z])/g, replacement: 'className="$1$2 $3' },
  // Fix missing semicolons
  { pattern: /(\w+)\s*=\s*(\w+)\n/g, replacement: '$1 = $2;\n' },
  // Fix malformed return statements
  { pattern: /return\s*\(\s*<div>\s*\)/g, replacement: 'return (\n    <div>' },
  // Fix missing closing braces
  { pattern: /}\s*$/, replacement: '}\n}' }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply all fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*(\w+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+)\n\s*(\w+)\]/g, '$1,\n  $2]');
    
    // Fix malformed JSX
    content = content.replace(/<(\w+)>\s*<\/\1>/g, '<$1></$1>');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*(\w+)\n/g, '$1 = $2;\n');
    
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

// Also fix files in src and components directories
const srcFiles = getAllTsxFiles('./src');
srcFiles.forEach(fixFile);

const componentFiles = getAllTsxFiles('./components');
componentFiles.forEach(fixFile);

console.log('Comprehensive syntax fixes completed');
