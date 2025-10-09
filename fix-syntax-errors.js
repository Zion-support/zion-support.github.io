#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common patterns to fix
const fixes = [
  // Fix duplicate imports with missing commas
  {
    pattern: /import\s*{\s*([^}]+)\s*,\s*([^}]+)\s*from\s*['"]([^'"]+)['"];?/g,
    replacement: (match, imports1, imports2, module) => {
      // Clean up the imports and remove duplicates
      const allImports = (imports1 + ',' + imports2)
        .split(',')
        .map(imp => imp.trim())
        .filter(imp => imp.length > 0);
      
      const uniqueImports = [...new Set(allImports)];
      return `import { ${uniqueImports.join(', ')} } from '${module}';`;
    }
  },
  
  // Fix malformed object literals with missing opening braces
  {
    pattern: /{\s*,\s*([^}]+):/g,
    replacement: '{\n      $1:'
  },
  
  // Fix malformed comment blocks
  {
    pattern: /\/\/ TODO: Add content\n\}/g,
    replacement: ''
  },
  
  // Fix malformed function parameters
  {
    pattern: /{\s*\/\/ TODO: Add content\n\}/g,
    replacement: '{}'
  },
  
  // Fix malformed JSX closing tags
  {
    pattern: /Expected corresponding JSX closing tag for '([^']+)'/g,
    replacement: 'Missing closing tag for $1'
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

function main() {
  const srcDir = path.join(__dirname, 'src');
  
  // Find all TypeScript and TSX files
  const files = glob.sync('**/*.{ts,tsx}', { cwd: srcDir });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const fullPath = path.join(srcDir, file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  });
  
  console.log(`\nFixed ${fixedCount} files`);
}

main();