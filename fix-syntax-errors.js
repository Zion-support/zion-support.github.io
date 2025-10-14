#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax error patterns and their fixes
const fixes = [
  // Fix unterminated string literals
  {
    pattern: /'use client';'/g,
    replacement: "'use client';"
  },
  {
    pattern: /import React from "react";\nimport { Helmet     } from "react-helmet-async";/g,
    replacement: 'import React from "react";\nimport { Helmet } from "react-helmet-async";'
  },
  // Fix JSX closing tag issues
  {
    pattern: /<h1([^>]*)>([^<]*)<\/div>/g,
    replacement: '<h1$1>$2</h1>'
  },
  {
    pattern: /<p([^>]*)>([^<]*)<\/div>/g,
    replacement: '<p$1>$2</p>'
  },
  {
    pattern: /<span([^>]*)>([^<]*)<\/div>/g,
    replacement: '<span$1>$2</span>'
  },
  {
    pattern: /<a([^>]*)>([^<]*)<\/div>/g,
    replacement: '<a$1>$2</a>'
  },
  {
    pattern: /<li([^>]*)>([^<]*)<\/div>/g,
    replacement: '<li$1>$2</li>'
  },
  // Fix JSX fragment issues
  {
    pattern: /<>    <div/g,
    replacement: '<>\n      <div'
  },
  {
    pattern: /<\/div>\n    <\/>/g,
    replacement: '</div>\n    </>'
  },
  // Fix malformed JSX structure
  {
    pattern: /<>\s*<div([^>]*)><\/div>\s*<h1([^>]*)>([^<]*)<\/div>\s*<\/>/g,
    replacement: '<>\n      <div$1>\n        <h1$2>$3</h1>\n      </div>\n    </>'
  },
  // Fix unterminated string literals in JSX
  {
    pattern: /content="([^"]*)"\s*\/>/g,
    replacement: 'content="$1" />'
  },
  // Fix merge conflict markers
  {
    pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g,
    replacement: ''
  },
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*<>\s*<div[^>]*><\/div>\s*<h1[^>]*>([^<]*)<\/div>\s*<\/>\s*\);\s*};/g,
    replacement: 'const $1 = () => {\n  return (\n    <>\n      <div className="min-h-screen bg-slate-900">\n        <h1 className="text-white text-center py-20">$2</h1>\n      </div>\n    </>\n  );\n};'
  },
  // Fix common JSX structure issues
  {
    pattern: /<div([^>]*)><\/div>\s*<h1([^>]*)>([^<]*)<\/div>/g,
    replacement: '<div$1>\n        <h1$2>$3</h1>\n      </div>'
  },
  // Fix malformed export statements
  {
    pattern: /export default (\w+);/g,
    replacement: 'export default $1;'
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

async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main().catch(console.error);

export { fixFile, fixes };