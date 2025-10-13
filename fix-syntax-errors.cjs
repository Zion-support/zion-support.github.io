#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix unterminated string literals
  {
    pattern: /import\s+React\s+from\s+'react';'react-helmet-async;/g,
    replacement: "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
  },
  {
    pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+'lucide-react;/g,
    replacement: "import { $1 } from 'lucide-react';"
  },
  {
    pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+'react-router-dom;/g,
    replacement: "import { $1 } from 'react-router-dom';"
  },
  {
    pattern: /import\s+([^;]+);$/gm,
    replacement: (match, p1) => {
      if (p1.includes("'") && !p1.endsWith("'")) {
        return p1 + "';";
      }
      return match;
    }
  },
  // Fix object syntax errors
  {
    pattern: /icon:\s*icon:\s*([^,]+),/g,
    replacement: "icon: $1,"
  },
  {
    pattern: /title:\s*'([^']+)',;/g,
    replacement: "title: '$1',"
  },
  {
    pattern: /description:\s*'([^']+)',;/g,
    replacement: "description: '$1',"
  },
  {
    pattern: /color:\s*'([^']+)',;/g,
    replacement: "color: '$1',"
  },
  // Fix JSX syntax errors
  {
    pattern: /<([^>]+)>\s*$/gm,
    replacement: (match, p1) => {
      if (p1.includes('>') && !p1.endsWith('>')) {
        return `<${p1}>`;
      }
      return match;
    }
  },
  // Fix merge conflict markers
  {
    pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g,
    replacement: ''
  },
  {
    pattern: /=======[\s\S]*?>>>>>>> [^\n]+/g,
    replacement: ''
  },
  // Fix unterminated strings in JSX
  {
    pattern: /className="([^"]*)$/gm,
    replacement: (match, p1) => {
      if (!p1.endsWith('"')) {
        return `className="${p1}"`;
      }
      return match;
    }
  },
  // Fix missing semicolons in imports
  {
    pattern: /import\s+[^;]+$/gm,
    replacement: (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    }
  },
  // Fix duplicate imports
  {
    pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+'[^']+';\s*import\s+{\s*([^}]+)\s*}\s+from\s+'[^']+';/g,
    replacement: (match, p1, p2) => {
      const combined = [...new Set([...p1.split(','), ...p2.split(',')])].join(', ');
      return `import { ${combined} } from 'lucide-react';`;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes for common patterns
    content = content.replace(/'([^']*)\s*$/gm, (match, p1) => {
      if (p1 && !p1.endsWith("'")) {
        return `'${p1}'`;
      }
      return match;
    });
    
    // Fix missing closing braces in objects
    content = content.replace(/(\{[^}]*)\s*$/gm, (match, p1) => {
      if (p1 && !p1.endsWith('}')) {
        return p1 + '}';
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

function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        'app-broken/**',
        'app-disabled/**',
        '**/*.test.*',
        '**/*.spec.*'
      ]
    });
    
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nFixed ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };