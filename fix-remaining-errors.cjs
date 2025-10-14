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
    
    // Fix unterminated string literals - add closing quotes
    content = content.replace(/"([^"]*)\n/g, '"$1"\n');
    
    // Fix malformed object properties with extra quotes
    content = content.replace(/title: "([^"]*)"",/g, 'title: "$1",');
    content = content.replace(/description: "([^"]*)"",/g, 'description: "$1",');
    content = content.replace(/color: "([^"]*)"",/g, 'color: "$1",');
    
    // Fix duplicate properties
    content = content.replace(/color: "([^"]*)",\s*color: "([^"]*)",/g, 'color: "$1",');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/button><\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm, '');
    
    // Fix malformed function endings
    content = content.replace(/}\s*\);\s*}\s*}\s*''\s*$/gm, '}');
    content = content.replace(/}\s*}\s*}\s*''\s*$/gm, '}');
    content = content.replace(/}\s*}\s*}\s*$/gm, '}');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>\s*$/gm, '');
    
    // Fix unterminated string literals in JSX
    content = content.replace(/"([^"]*)\n/g, '"$1"\n');
    
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
    
    // If the file is severely corrupted, replace with a simple working version
    if (content.includes('error TS') || content.includes('Unterminated string literal') || content.includes('Unexpected token')) {
      const fileName = path.basename(file, '.tsx');
      const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, ' ');
      
      content = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} solutions from Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            ${pageName}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            This page is under development. Please check back soon for updates.
          </p>
        </div>
      </div>
    </div>
  );
}`;
    }
    
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