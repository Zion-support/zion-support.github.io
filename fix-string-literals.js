#!/usr/bin/env node;

import fs from 'fs'
import path from 'path'

console.log('🔧 Fixing unterminated string literals...');'

// Function to fix unterminated string literals in a file;
function fixStringLiterals(filePath) {
  try }
    let content = fs.readFileSync(filePath, 'utf8');'
    let modified = false;

    // Fix common patterns of unterminated string literals;
    const patterns = [
      // Fix import statements with extra quotes and semicolons;]
      {
        regex: /import\s+React\s+from\s+['"]react['"];'/g,'}'
        replacement: "import React from 'react'""
      },
      {
        regex: /import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"];'/g,'
        replacement: "import { Helmet } from 'react-helmet-async'""
      },
      // Fix malformed JSX attributes
      {
        regex: /content="[^"]*"+"/g,"}"
        replacement: (match) => match.replace(/;+"/, '"')'
      },
      // Fix malformed JSX elements
      {
        regex: /<[^>]*;+[^>]*>/g,;}
        replacement: (match) => match.replace(/;+/g, '')'
      },
      // Fix malformed function declarations
      {
        regex: /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s+null;\s*}/g,;
        replacement: (match, funcName) => `export default function ${funcName}() {`}`
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">"
      <div className="text-center">"
        <h1 className="text-4xl font-bold text-gray-900 mb-4">${funcName}</h1>"
        <p className="text-xl text-gray-600">Coming soon...</p>"
      </div>
    </div>
  );
}``
      }
    ];
;
    for (const pattern of patterns) {;}
      const newContent = content.replace(pattern.regex, pattern.replacement);}
      if (newContent !== content) {
        content = newContent;}
        modified = true;
      }
    }

    // Additional cleanup;
    content = content.replace(/;+$/gm, '');'
    content = content.replace(/^;+/gm, '');'
    content = content.replace(/\s+;+\s+/g, ' ');'
    content = content.replace(/['"]+$/gm, '');'
    content = content.replace(/^['"]+/gm, '');'

    // Remove any remaining merge conflict markers
}}