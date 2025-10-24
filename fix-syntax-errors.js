const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix JSX self-closing tags
  { pattern: /\/\s*\/>/g, replacement: ' />' },
  { pattern: /\/\s*>/g, replacement: ' />' },
  
  // Fix JSX closing tags
  { pattern: /<\/(\w+)\s*\/>/g, replacement: '</$1>' },
  
  // Fix JSX attributes
  { pattern: /className=\{([^}]+)\}\s*\/>/g, replacement: 'className={$1} />' },
  
  // Fix function declarations
  { pattern: /const\s+(\w+):\s*React\.FC<(\w+)>\s*=\s*\(\{([^}]+)\}\s*\)\s*=\s*>/g, replacement: 'const $1: React.FC<$2> = ({ $3 }) =>' },
  
  // Fix interface declarations
  { pattern: /interface\s+(\w+)\s*\{([^}]+);/g, replacement: 'interface $1 {\n  $2' },
  
  // Fix return statements
  { pattern: /return\s*;\s*return\s*\(/g, replacement: 'return (' },
  
  // Fix JSX fragments
  { pattern: /<>\s*<\/>/g, replacement: '<></>' },
  
  // Fix semicolons in JSX
  { pattern: /;\s*\/>/g, replacement: ' />' },
  
  // Fix malformed JSX expressions
  { pattern: /\{\s*(\w+)\s*\.map\(([^)]+)\)\s*=\s*</g, replacement: '{$1.map($2 => (' },
  
  // Fix missing closing braces
  { pattern: /(\w+)\s*:\s*React\.ReactNode;\s*\)/g, replacement: '$1: React.ReactNode\n  })' },
  
  // Fix malformed arrow functions
  { pattern: /=\s*\(\s*\)\s*=\s*</g, replacement: '= () => (' },
  
  // Fix JSX attribute syntax
  { pattern: /(\w+)\s*=\s*\{([^}]+)\}\s*\/>/g, replacement: '$1={$2} />' },
  
  // Fix missing semicolons in interfaces
  { pattern: /(\w+)\s*:\s*string\s*$/gm, replacement: '$1: string;' },
  
  // Fix malformed JSX elements
  { pattern: /<(\w+)\s*([^>]*)\s*\/\s*>/g, replacement: '<$1 $2 />' },
  
  // Fix missing closing tags
  { pattern: /<(\w+)\s*([^>]*)\s*>\s*$/gm, replacement: '<$1 $2></$1>' },
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
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files.`);