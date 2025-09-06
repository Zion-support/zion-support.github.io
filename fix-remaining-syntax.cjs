#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
// More comprehensive syntax fixes
const fixes = [
  // Fix missing commas in function parameters
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object destructuring
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in array destructuring
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in function calls
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in interface properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in type definitions
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in function parameters
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object destructuring
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in array destructuring
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in function calls
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in interface properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in type definitions
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in function parameters
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object destructuring
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in array destructuring
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in function calls
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in interface properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in type definitions
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  }
];
<<<<<<< HEAD
=======
=======
function fixSyntax(content) {
  // Fix function parameter destructuring - replace commas with semicolons
  content = content.replace(
    /(\w+):\s*([^,;]+),\s*$/gm,
    '$1: $2;'
  );
  
  // Fix object properties - replace commas with semicolons
  content = content.replace(
    /(\s+)(\w+)(\?)?:\s*([^,;]+),\s*$/gm,
    '$1$2$3: $4;'
  );
  
  // Fix interface properties - replace commas with semicolons
  content = content.replace(
    /interface\s+\w+\s*\{([^}]+)\}/gs,
    (match, body) => {
      const fixedBody = body.replace(
        /(\s+)(\w+)(\?)?:\s*([^,;]+),\s*$/gm,
        '$1$2$3: $4;'
      );
      return match.replace(body, fixedBody);
    }
  );
  
  // Fix type definitions - replace commas with semicolons
  content = content.replace(
    /type\s+\w+\s*=\s*\{([^}]+)\}/gs,
    (match, body) => {
      const fixedBody = body.replace(
        /(\s+)(\w+)(\?)?:\s*([^,;]+),\s*$/gm,
        '$1$2$3: $4;'
      );
      return match.replace(body, fixedBody);
    }
  );
  
  // Fix function declarations with destructuring parameters
  content = content.replace(
    /function\s+\w+\s*\(\s*\{([^}]+)\}\s*\)/g,
    (match, params) => {
      const fixedParams = params.replace(
        /(\w+):\s*([^,;]+),\s*/g,
        '$1: $2; '
      );
      return match.replace(params, fixedParams);
    }
  );
  
  // Fix arrow function destructuring parameters
  content = content.replace(
    /\(\s*\{([^}]+)\}\s*\)\s*=>/g,
    (match, params) => {
      const fixedParams = params.replace(
        /(\w+):\s*([^,;]+),\s*/g,
        '$1: $2; '
      );
      return match.replace(params, fixedParams);
    }
  );
  
  // Fix React component props destructuring
  content = content.replace(
    /const\s+\w+:\s*React\.FC<[^>]*>\s*=\s*\(\s*\{([^}]+)\}\s*\)/g,
    (match, params) => {
      const fixedParams = params.replace(
        /(\w+):\s*([^,;]+),\s*/g,
        '$1: $2; '
      );
      return match.replace(params, fixedParams);
    }
  );
  
  // Fix specific patterns that are common
  content = content.replace(
    /children:\s*React\.ReactNode,\s*$/gm,
    'children: React.ReactNode;'
  );
  
  content = content.replace(
    /variant\?:\s*[^,;]+,\s*$/gm,
    (match) => match.replace(/,$/, ';')
  );
  
  content = content.replace(
    /size\?:\s*[^,;]+,\s*$/gm,
    (match) => match.replace(/,$/, ';')
  );
  
  content = content.replace(
    /className\?:\s*[^,;]+,\s*$/gm,
    (match) => match.replace(/,$/, ';')
  );
  
  content = content.replace(
    /onClick\?:\s*[^,;]+,\s*$/gm,
    (match) => match.replace(/,$/, ';')
  );
  
  content = content.replace(
    /type\?:\s*[^,;]+,\s*$/gm,
    (match) => match.replace(/,$/, ';')
  );
  
  content = content.replace(
    /disabled\?:\s*[^,;]+,\s*$/gm,
    (match) => match.replace(/,$/, ';')
  );
  
  // Fix specific import patterns that might have been missed
  content = content.replace(
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];?/g,
    (match, imports) => {
      // Split by semicolons and fix each part
      const parts = imports.split(';').map(part => {
        // Remove any existing commas at the end and add proper commas
        return part.trim().replace(/,$/, '').split(',').map(item => item.trim()).join(', ');
      });
      
      // Join all parts with commas
      const fixedImports = parts.join(', ');
      
      // Reconstruct the import statement
      const fromPart = match.match(/from\s*['"][^'"]+['"];?/);
      return `import { ${fixedImports} } ${fromPart}`;
    }
  );
  
  return content;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

function fixFile(filePath) {

    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD

    // More comprehensive fixes
    content = content
      // Remove semicolons after function declarations
      .replace(/function\s+([^{]+)\s*\{;/g, 'function $1 {')
      // Remove semicolons after arrow functions
      .replace(/=>\s*\{;/g, '=> {')
      // Remove semicolons after if statements
      .replace(/if\s*\([^)]+\)\s*\{;/g, match => match.replace('{;', '{'))
      // Remove semicolons after object properties
      .replace(/(\w+):\s*([^}]+);/g, '$1: $2,')
      // Fix object syntax
      .replace(/\{([^}]+);(\s*)\}/g, '{$1$2}')
      // Remove semicolons in JSX
      .replace(/<([^>]+);>/g, '<$1>')
      // Fix array syntax
      .replace(/\[([^\]]+);\]/g, '[$1]')
      // Remove standalone semicolons
      .replace(/^;$/gm, '')
      // Fix function calls
      .replace(/(\w+)\s*\(([^)]+);\)/g, '$1($2)')
      // Fix object method calls
      .replace(/(\w+)\.(\w+)\s*\(([^)]+);\)/g, '$1.$2($3)')
      // Clean up multiple semicolons
      .replace(/;+/g, ';')
      // Remove trailing semicolons before closing braces
      .replace(/;(\s*[}\]])/g, '$1')
      // Fix template literals
      .replace(/`([^`]+);([^`]+)`/g, '`$1$2`')
      // Remove semicolons from JSX attributes
      .replace(/(\w+)=([^>]+);/g, '$1=$2')
      // Clean up empty lines
      .replace(/^\s*$\n/gm, '');

    fs.writeFileSync(filePath, content);
    console.log(`Fixe: ${filePath}`);
=======
    const originalContent = content;
    
    content = fixSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax in: ${filePath}`);
      return true;
    }
    
    return false;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      walkDir(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      fixFile(filePath);
    }
  });
}

// Start fixing from components directory
walkDir('./components');
walkDir('./hooks');
walkDir('./lib');
walkDir('./pages');

console.log('Remaining syntax error fixing completed!');
