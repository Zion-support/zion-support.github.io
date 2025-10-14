#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all TypeScript files
const files = glob.sync('app/**/*.tsx', { cwd: process.cwd() });

let fixedCount = 0;
let errorCount = 0;

console.log(`Found ${files.length} TypeScript files to check...`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Fix malformed closing tags and extra quotes
    content = content.replace(/<\/div>""\s*<\/>""\s*\)\s*;""\s*\}""\s*$/gm, '');
    content = content.replace(/<\/div>""\s*<\/>""\s*\)\s*;""\s*$/gm, '');
    content = content.replace(/<\/div>""\s*<\/>""\s*$/gm, '');
    content = content.replace(/<\/div>""\s*$/gm, '');
    content = content.replace(/<\/>""\s*$/gm, '');
    content = content.replace(/\)\s*;""\s*$/gm, '');
    content = content.replace(/\}""\s*$/gm, '');
    
    // Fix unterminated string literals
    content = content.replace(/"([^"]*)\n/g, '"$1"\n');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/button><\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm, '');
    
    // Fix malformed function endings
    content = content.replace(/}\s*\);\s*}\s*}\s*''\s*$/gm, '}');
    content = content.replace(/}\s*}\s*}\s*''\s*$/gm, '}');
    content = content.replace(/}\s*}\s*}\s*$/gm, '}');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>\s*$/gm, '');
    
    // Fix malformed import statements
    content = content.replace(/import React from  from 'react';/g, "import React from 'react';");
    content = content.replace(/import React from 'react';'use client'/g, "import React from 'react';\n'use client'");
    
    // Fix missing semicolons in imports
    content = content.replace(/import ([^;]+)\n/g, 'import $1;\n');
    
    // Fix malformed export statements
    content = content.replace(/export default function ([^{]+)\s*{\s*}\s*$/gm, 'export default function $1 {\n  return (\n    <div>Page under development</div>\n  );\n}');
    
    // Fix malformed function declarations
    content = content.replace(/const ([^=]+) = \(\) => {\s*}\s*$/gm, 'const $1 = () => {\n  return (\n    <div>Page under development</div>\n  );\n};');
    
    // Fix common syntax errors in object definitions
    content = content.replace(/{\s*title: "([^"]*)"",\s*description: "([^"]*)"",\s*icon: <([^>]+) className="([^"]*)" \/>,\s*color: "([^"]*)"",\s*color: "([^"]*)"",\s*}/g, '{\n  title: "$1",\n  description: "$2",\n  icon: <$3 className="$4" />,\n  color: "$5"\n}');
    
    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)"\s*\/>/g, 'className="$1" />');
    
    // Fix unterminated JSX elements
    content = content.replace(/<([^>]+)\s*$/gm, '<$1>');
    
    // Fix malformed closing tags
    content = content.replace(/<\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm, '');
    
    // Fix duplicate closing braces
    content = content.replace(/}\s*}\s*}\s*$/gm, '}');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*\}\s*$/gm, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors: ${errorCount} files`);
console.log('Done!');