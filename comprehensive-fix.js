#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix 1: Missing closing brace for React.FC functions
    content = content.replace(
      /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{([^}]*?)(?=\s*const\s|\s*return\s|\s*$)/gs,
      (match, funcName, body) => {
        // Count braces more carefully
        let braceCount = 0;
        let inString = false;
        let stringChar = '';
        
        for (let i = 0; i < body.length; i++) {
          const char = body[i];
          const prevChar = i > 0 ? body[i-1] : '';
          
          if (!inString && (char === '"' || char === "'" || char === '`')) {
            inString = true;
            stringChar = char;
          } else if (inString && char === stringChar && prevChar !== '\\') {
            inString = false;
          } else if (!inString) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
          }
        }
        
        if (braceCount > 0) {
          return `const ${funcName}: React.FC = () => {${body}${'  '.repeat(Math.max(0, 2))}}`;
        }
        return match;
      }
    );
    
    // Fix 2: Malformed icon property
    content = content.replace(/ico,\s*n:\s*/g, 'icon: ');
    
    // Fix 3: Fix missing closing braces in arrays and objects
    content = content.replace(/(\]\s*)(?=\s*const\s)/g, '$1\n  ');
    content = content.replace(/(\}\s*)(?=\s*const\s)/g, '$1\n  ');
    
    // Fix 4: Fix missing closing braces before return statements
    content = content.replace(/(\]\s*)(?=\s*return\s)/g, '$1\n  ');
    content = content.replace(/(\}\s*)(?=\s*return\s)/g, '$1\n  ');
    
    // Fix 5: Fix missing closing braces in JSX
    content = content.replace(/(\]\s*)(?=\s*<)/g, '$1\n  ');
    content = content.replace(/(\}\s*)(?=\s*<)/g, '$1\n  ');
    
    // Fix 6: Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)"\s*([^>]*?)(?=\s*<[^/]|\s*$)/g, (match, className, rest) => {
      if (rest.trim() && !rest.includes('>')) {
        return `className="${className}"${rest}>`;
      }
      return match;
    });
    
    // Fix 7: Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*?)(?=\s*<[^/]|\s*$)/g, (match, tagName, attributes) => {
      if (!match.includes('>')) {
        return `${match}>`;
      }
      return match;
    });
    
    // Fix 8: Fix specific parsing errors
    content = content.replace(/,\s*expected/g, '');
    content = content.replace(/expected\s*,/g, '');
    content = content.replace(/,\s*expected\s*,/g, ',');
    
    // Fix 9: Fix missing semicolons after object/array declarations
    content = content.replace(/(\]\s*)(?=\s*$)/gm, '$1;');
    content = content.replace(/(\}\s*)(?=\s*$)/gm, '$1;');
    
    // Fix 10: Fix malformed function calls
    content = content.replace(/\(\s*\)\s*{([^}]*?)(?=\s*const\s|\s*return\s)/g, (match, body) => {
      const openBraces = (body.match(/{/g) || []).length;
      const closeBraces = (body.match(/}/g) || []).length;
      if (openBraces > closeBraces) {
        return `() {${body}}`;
      }
      return match;
    });
    
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

async function main() {
  // Find all TypeScript/JSX files
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
  });
  
  console.log(`Found ${files.length} files to check...`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);