const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix 1: Remove unused CheckCircle imports
    if (content.includes("import { CheckCircle } from 'lucide-react';") && !content.includes('CheckCircle')) {
      content = content.replace(/import { CheckCircle } from 'lucide-react';\n?/g, '');
      modified = true;
    }

    // Fix 2: Remove unused Helmet imports
    if (content.includes("import { Helmet } from 'react-helmet-async';") && !content.includes('Helmet')) {
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
      modified = true;
    }

    // Fix 3: Remove unused Navigation imports
    if (content.includes("import Navigation from") && !content.includes('<Navigation')) {
      content = content.replace(/import Navigation from[^;]+;\n?/g, '');
      modified = true;
    }

    // Fix 4: Remove unused Footer imports
    if (content.includes("import Footer from") && !content.includes('<Footer')) {
      content = content.replace(/import Footer from[^;]+;\n?/g, '');
      modified = true;
    }

    // Fix 5: Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    // Fix 6: Remove unused variables
    content = content.replace(/const\s+features\s*=\s*\[[\s\S]*?\];\s*\n/g, '');
    content = content.replace(/const\s+stats\s*=\s*\[[\s\S]*?\];\s*\n/g, '');

    // Fix 7: Fix expression errors by removing stray expressions
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that are just expressions without assignment
      if (line.trim().match(/^[a-zA-Z_$][a-zA-Z0-9_$]*\s*$/) && 
          !line.includes('=') && 
          !line.includes('return') && 
          !line.includes('if') && 
          !line.includes('for') && 
          !line.includes('while') &&
          !line.includes('function') &&
          !line.includes('const') &&
          !line.includes('let') &&
          !line.includes('var') &&
          !line.includes('import') &&
          !line.includes('export') &&
          !line.includes('//') &&
          !line.includes('/*') &&
          !line.includes('*') &&
          !line.includes('}') &&
          !line.includes('{') &&
          !line.includes('(') &&
          !line.includes(')') &&
          !line.includes('<') &&
          !line.includes('>')) {
        continue; // Skip this line
      }
      
      newLines.push(line);
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }

    // Fix 8: Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/\s*;\s*$/gm, '');

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);