const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix missing semicolons after "use client"
  {
    pattern: /"use client",\s*\n/g,
    replacement: '"use client";\n'
  },
  {
    pattern: /'use client',\s*\n/g,
    replacement: "'use client";\n"
  },
  
  // Fix missing commas in object properties
  {
    pattern: /(\w+):\s*(\w+)\s*\n\s*(\w+):/g,
    replacement: '$1: $2,\n  $3:'
  },
  
  // Fix missing commas in interface properties
  {
    pattern: /(\w+):\s*(\w+)\s*\n\s*(\w+):/g,
    replacement: '$1: $2;\n  $3:'
  },
  
  // Fix malformed JSX attributes
  {
    pattern: /className="([^"]*)\s+([^"]*)"/g,
    replacement: 'className="$1 $2"'
  },
  
  // Fix missing closing tags
  {
    pattern: /<div([^>]*)>\s*$/gm,
    replacement: '<div$1></div>'
  },
  
  // Fix malformed arrow functions
  {
    pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm,
    replacement: 'const $1 = () => {\n  '
  },
  
  // Fix missing semicolons
  {
    pattern: /(\w+)\s*\n\s*const/g,
    replacement: '$1;\nconst'
  },
  
  // Fix malformed imports
  {
    pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"]\s*$/gm,
    replacement: 'import { $1 } from "$2";'
  }
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
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);