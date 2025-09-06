#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

<<<<<<< HEAD
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

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const patterns = [
    'components/**/*.tsx',
    'components/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixSyntax };