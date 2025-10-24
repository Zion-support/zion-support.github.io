#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Comprehensive fixes for common syntax errors
const fixes = [
  // Fix unterminated string literals
  {
    pattern: /"use client"\s*import\s+React[^;]*;\s*interface\s+(\w+Props)\s*\{[^}]*\}\s*const\s+(\w+):\s*"React\.FC<[^>]+>\s*=\s*\(\{([^}]*)\}\s*\)\s*=>\s*\{/g,
    replacement: '"use client"\nimport React from "react";\n\ninterface $1Props {\n  $3\n}\n\nconst $2: React.FC<$1Props> = ({ $3 }) => {'
  },
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+):\s*"React\.FC<[^>]+>\s*=\s*\(\{([^}]*)\}\s*\)\s*=>\s*\{/g,
    replacement: 'const $1: React.FC<$1Props> = ({ $2 }) => {'
  },
  // Fix missing interface declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC<(\w+)Props>\s*=\s*\(\{([^}]*)\}\s*\)\s*=>\s*\{/g,
    replacement: (match, name, interfaceName, params) => {
      if (!match.includes('interface')) {
        return `interface ${interfaceName}Props {\n  ${params}\n}\n\nconst ${name}: React.FC<${interfaceName}Props> = ({ ${params} }) => {`;
      }
      return match;
    }
  },
  // Fix unterminated string literals in JSX
  {
    pattern: /className\s*=\s*"([^"]*)\s*$/gm,
    replacement: 'className="$1"'
  },
  // Fix missing closing tags
  {
    pattern: /<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g,
    replacement: '<$1$2>$3</$1>\n  )'
  },
  // Fix malformed JSX attributes
  {
    pattern: /<(\w+)\s+className\s*=\s*\{([^}]+)\}\s*>/g,
    replacement: '<$1 className={$2}>'
  },
  // Fix missing return statements
  {
    pattern: /const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\{[^}]*\}\)\s*=>\s*\{([^}]*)\}/g,
    replacement: (match, name, body) => {
      if (!body.includes('return')) {
        return match.replace(/\{([^}]*)\}/, '{\n  return (\n    $1\n  )\n}');
      }
      return match;
    }
  },
  // Fix missing semicolons
  {
    pattern: /interface\s+(\w+Props)\s*\{[^}]*\}\s*$/gm,
    replacement: (match) => match.replace(/\s*$/, '')
  },
  // Fix malformed imports
  {
    pattern: /import\s+React[^;]*;\s*$/gm,
    replacement: 'import React from "react";'
  },
  // Fix missing closing parentheses
  {
    pattern: /\)\s*\)\s*}\s*$/gm,
    replacement: ')\n  )\n}'
  },
  // Fix JSX expressions without parent element
  {
    pattern: /return\s*\(\s*<(\w+)>([^<]*)<\/\1>\s*<(\w+)>([^<]*)<\/\3>\s*\)/g,
    replacement: 'return (\n    <>\n      <$1>$2</$1>\n      <$3>$4</$3>\n    </>\n  )'
  }
];

// Specific fixes for problematic files
const specificFixes = [
  // Fix App.tsx - Add missing imports
  {
    file: 'app/App.tsx',
    pattern: /import\s+React[^;]*;\s*$/gm,
    replacement: 'import React from "react";\nimport { BrowserRouter, Routes, Route, Suspense } from "react-router-dom";'
  },
  // Fix root-layout.tsx
  {
    file: 'app/root-layout.tsx',
    pattern: /children:\s*"React\.ReactNode\)/g,
    replacement: 'children: React.ReactNode'
  },
  // Fix common component patterns
  {
    pattern: /const\s+(\w+):\s*"React\.FC<[^>]+>\s*=\s*\(\{([^}]*)\}\s*\)\s*=>\s*\{/g,
    replacement: 'const $1: React.FC<$1Props> = ({ $2 }) => {'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply general fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Apply specific fixes
    for (const fix of specificFixes) {
      if (filePath.includes(fix.file)) {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    }

    // Additional cleanup
    // Remove duplicate semicolons
    content = content.replace(/;;+/g, ';');
    
    // Fix common JSX issues
    content = content.replace(/<(\w+)\s+className\s*=\s*\{([^}]+)\}\s*>/g, '<$1 className={$2}>');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed function parameters
    content = content.replace(/\(\{\s*(\w+)\s*\}\s*:\s*\{\s*(\w+):\s*"([^"]+)"\s*\)/g, '({ $1 }: { $2: $3 })');
    
    // Fix missing return statements
    content = content.replace(/const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\{[^}]*\}\)\s*=>\s*\{([^}]*)\}/g, 
      (match, name, body) => {
        if (!body.includes('return')) {
          return match.replace(/\{([^}]*)\}/, '{\n  return (\n    $1\n  )\n}');
        }
        return match;
      }
    );

    // Fix unterminated string literals
    content = content.replace(/"([^"]*)\s*$/gm, '"$1"');
    
    // Fix missing closing parentheses in JSX
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed JSX expressions
    content = content.replace(/return\s*\(\s*<(\w+)>([^<]*)<\/\1>\s*<(\w+)>([^<]*)<\/\3>\s*\)/g, 
      'return (\n    <>\n      <$1>$2</$1>\n      <$3>$4</$3>\n    </>\n  )');

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
  console.log('Starting comprehensive syntax fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Comprehensive syntax fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };