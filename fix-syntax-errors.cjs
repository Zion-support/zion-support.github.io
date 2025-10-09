const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common patterns to fix
const fixes = [
  // Fix duplicate imports in lucide-react
  {
    pattern: /import\s*\{\s*([^}]+)\s*,\s*([^}]+)\s*\}\s*from\s*'lucide-react'/g,
    replacement: (match, p1, p2) => {
      // Remove duplicates and clean up
      const items1 = p1.split(',').map(item => item.trim()).filter(Boolean);
      const items2 = p2.split(',').map(item => item.trim()).filter(Boolean);
      const allItems = [...new Set([...items1, ...items2])];
      return `import { ${allItems.join(', ')} } from 'lucide-react'`;
    }
  },
  
  // Fix malformed object properties
  {
    pattern: /\{\s*,/g,
    replacement: '{'
  },
  
  // Fix missing closing braces in objects
  {
    pattern: /(\w+):\s*([^,}]+)\s*,\s*$/gm,
    replacement: '$1: $2'
  },
  
  // Fix function parameter syntax
  {
    pattern: /\(\s*\{\s*\/\/\s*TODO:.*?\}\s*,\s*\/\/\s*children,\s*\}\s*:\s*\{\s*\/\/\s*TODO:.*?\};\s*children:\s*React\.ReactNode;/g,
    replacement: '({ children }: { children: React.ReactNode; })'
  },
  
  // Fix JSX syntax errors
  {
    pattern: /Expected corresponding JSX closing tag for '(\w+)'/g,
    replacement: ''
  },
  
  // Fix semicolon issues
  {
    pattern: /;\s*$/gm,
    replacement: ';'
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

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);