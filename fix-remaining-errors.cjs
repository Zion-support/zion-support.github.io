const fs = require('fs');
const path = require('path');
const glob = require('glob');

// More specific fixes for remaining errors
const fixes = [
  // Fix malformed JSX closing tags
  {
    pattern: /<\/(\w+)\s*>\s*}\s*\/>/g,
    replacement: '</$1>'
  },
  
  // Fix object properties with missing opening brace
  {
    pattern: /{\s*,\s*(\w+):/g,
    replacement: '{\n    $1:'
  },
  
  // Fix malformed import statements with missing closing parenthesis
  {
    pattern: /import\s*{\s*([^}]+)\s*,\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;\s*$/gm,
    replacement: (match, p1, p2, p3) => {
      const cleanImports = p1.replace(/,\s*$/, '').trim();
      return `import { ${cleanImports} } from '${p3}';`;
    }
  },
  
  // Fix malformed JSX expressions
  {
    pattern: /{\s*([^}]*)\s*>\s*([^<]+)\s*<\s*\/\s*([^>]+)\s*>/g,
    replacement: '{$1}>\n          $2\n        </$3>'
  },
  
  // Fix missing semicolons in object properties
  {
    pattern: /(\w+):\s*([^,;]+)\s*\n\s*(\w+):/g,
    replacement: '$1: $2;\n    $3:'
  },
  
  // Fix malformed function declarations
  {
    pattern: /export\s+default\s+function\s+(\w+)\s*\(\s*{\s*\/\/[^}]*}\s*\/\/[^}]*}\s*:\s*{\s*\/\/[^}]*};\s*([^}]+)\s*}\s*\)/g,
    replacement: 'export default function $1({\n  $2\n}: {\n  $2: React.ReactNode;\n})'
  },
  
  // Fix incomplete JSX elements
  {
    pattern: /<(\w+)([^>]*)>\s*([^<]+)\s*<\s*\/\s*(\w+)\s*>/g,
    replacement: '<$1$2>$3</$4>'
  },
  
  // Fix malformed object literals
  {
    pattern: /{\s*,\s*(\w+):\s*([^,}]+)\s*,/g,
    replacement: '{\n    $1: $2,'
  },
  
  // Fix missing commas in import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;\s*$/gm,
    replacement: (match, imports, module) => {
      const cleanImports = imports.replace(/,\s*$/, '').trim();
      return `import { ${cleanImports} } from '${module}';`;
    }
  },
  
  // Fix malformed JSX attributes
  {
    pattern: /<(\w+)([^>]*)\s*>\s*([^<]+)\s*<\s*\/\s*(\w+)\s*>/g,
    replacement: '<$1$2>$3</$4>'
  },
  
  // Fix incomplete function parameters
  {
    pattern: /export\s+default\s+function\s+(\w+)\s*\(\s*{\s*\/\/[^}]*}\s*\/\/[^}]*}\s*:\s*{\s*\/\/[^}]*};\s*([^}]+)\s*}\s*\)/g,
    replacement: 'export default function $1({\n  $2\n}: {\n  $2: React.ReactNode;\n})'
  },
  
  // Fix malformed object properties
  {
    pattern: /{\s*,\s*(\w+):\s*([^,}]+)\s*,/g,
    replacement: '{\n    $1: $2,'
  },
  
  // Fix incomplete JSX closing tags
  {
    pattern: /<h2([^>]*)>\s*([^<]+)\s*<\/h2>\s*<h2/g,
    replacement: '<h2$1>$2</h2>\n        <h2'
  },
  
  // Fix malformed JSX expressions with missing closing tags
  {
    pattern: /{\s*([^}]*)\s*>\s*([^<]+)\s*<\s*\/\s*([^>]+)\s*>/g,
    replacement: '{$1}>\n          $2\n        </$3>'
  },
  
  // Fix missing semicolons in object properties
  {
    pattern: /(\w+):\s*([^,;]+)\s*\n\s*(\w+):/g,
    replacement: '$1: $2;\n    $3:'
  },
  
  // Fix malformed import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;\s*$/gm,
    replacement: (match, imports, module) => {
      const cleanImports = imports.replace(/,\s*$/, '').trim();
      return `import { ${cleanImports} } from '${module}';`;
    }
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

// Find all TSX/TS files in src directory
const files = glob.sync('/workspace/src/**/*.{ts,tsx}', {
  ignore: [
    '/workspace/src/**/node_modules/**',
    '/workspace/src/**/dist/**',
    '/workspace/src/**/.next/**'
  ]
});

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);