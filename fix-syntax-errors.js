import fs from 'fs';
import path from 'path';

// Common syntax fixes
const fixes = [
  // Fix malformed imports with semicolons
  {
    pattern: /import\s*{\s*";"\s*([^}]+)";"\s*}\s*from\s*['"]([^'"]+)['"];?/g,
    replacement: 'import { $1 } from \'$2\';'
  },
  // Fix array declarations with semicolons
  {
    pattern: /const\s+(\w+)\s*=\s*\[\s*";"\s*([^;]+);"\s*\]\s*;/g,
    replacement: 'const $1 = [\n    $2\n  ];'
  },
  // Fix JSX with semicolons
  {
    pattern: /<(\w+)\s*([^>]*?);"\s*>/g,
    replacement: '<$1 $2>'
  },
  // Fix closing tags with semicolons
  {
    pattern: /<\/(\w+)";"\s*>/g,
    replacement: '</$1>'
  },
  // Fix function declarations with semicolons
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*};"\s*;/g,
    replacement: 'const $1: React.FC = () => {\n  return (\n    <div>Component content</div>\n  );\n};'
  },
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<(\w+)><\/\1>\s*<\/>/g,
    replacement: '<>\n      <$1>\n        Content\n      </$1>\n    </>'
  },
  // Fix missing React import
  {
    pattern: /^(?!import React)/m,
    replacement: (match, offset, string) => {
      if (string.includes('React.FC') || string.includes('React.Component') || string.includes('<') && string.includes('>')) {
        return 'import React from \'react\';\n' + match;
      }
      return match;
    }
  },
  // Fix unterminated strings
  {
    pattern: /content="([^"]*?)\s*$/gm,
    replacement: 'content="$1"'
  },
  // Fix missing closing braces
  {
    pattern: /}\s*;\s*$/gm,
    replacement: '}'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes
    // Fix malformed function declarations
    content = content.replace(/export default function (\w+)\(\)\s*\{\s*\};\s*return\s*\(/g, 'export default function $1() {\n  return (');
    
    // Fix missing opening tags
    content = content.replace(/<div><\/div>\s*<(\w+)><\/\1>/g, '<div>\n      <$1>\n        Content\n      </$1>\n    </div>');
    
    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*?)\s*$/gm, 'className="$1"');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)\s*([^>]*?)\s*>\s*$/gm, '<$1 $2>\n        Content\n      </$1>');
    
    // Fix array syntax
    content = content.replace(/\[\s*";"\s*([^;]+);"\s*\]/g, '[\n    $1\n  ]');
    
    // Fix object syntax
    content = content.replace(/\{\s*";"\s*([^;]+);"\s*\}/g, '{\n    $1\n  }');
    
    if (content !== originalContent) {
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
    
    if (stat.isDirectory()) {
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