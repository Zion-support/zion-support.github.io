#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript React files with errors
const files = glob.sync('src/pages/blog/**/*.tsx', { cwd: '/workspace' });

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove @ts-nocheck comments
    content = content.replace(/\/\/ @ts-nocheck\s*\n/g, '');
    
    // Fix malformed className attributes (remove extra quotes and commas)
    content = content.replace(/className=\s*"([^"]*)"\s*>,/g, 'className="$1">');
    content = content.replace(/className=\s*"([^"]*)"\s*",/g, 'className="$1"');
    
    // Fix malformed meta tags
    content = content.replace(/<meta name:\s*"([^"]*)",;,/g, '<meta name="$1"');
    content = content.replace(/content:\s*"([^"]*)",\s*\/><link/g, 'content="$1" /><link');
    
    // Fix malformed link tags
    content = content.replace(/<link rel:\s*"([^"]*)",;,/g, '<link rel="$1"');
    content = content.replace(/href="([^"]*)"\s*\/>",/g, 'href="$1" />');
    
    // Fix malformed Link components
    content = content.replace(/to:\s*"([^"]*)",\s*className/g, 'to="$1" className');
    content = content.replace(/className\s*=\s*"([^"]*)">/g, 'className="$1">');
    
    // Fix malformed h1 tags
    content = content.replace(/<h1[^>]*>\s*"([^"]*)"\s*<\/h1>/g, '<h1>$1</h1>');
    
    // Fix malformed div tags with extra quotes
    content = content.replace(/<div className="([^"]*)"\s*>,/g, '<div className="$1">');
    
    // Fix malformed p tags
    content = content.replace(/<p[^>]*>\s*"([^"]*)"\s*<\/p>/g, '<p>$1</p>');
    
    // Fix missing closing tags by ensuring proper structure
    content = content.replace(/<([^>]+)\s*>,/g, '<$1>');
    
    // Remove extra semicolons and quotes at end of lines
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/",\s*$/gm, '"');
    
    // Ensure proper React import if missing
    if (!content.includes('import React') && !content.includes('import { React')) {
      content = `import React from 'react';\n${content}`;
    }
    
    // Ensure proper export if missing
    if (!content.includes('export default')) {
      const componentName = path.basename(filePath, '.tsx');
      content += `\n\nexport default ${componentName};`;
    }
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+):\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
    content = content.replace(/export default function\s+(\w+)\s*\(\):\s*void/g, 'export default function $1(): JSX.Element');
    content = content.replace(/export default function\s+(\w+)\s*\(\):\s*React\.JSX\.Element/g, 'export default function $1(): JSX.Element');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all files
console.log(`Found ${files.length} files to process...`);
files.forEach(fixJSXFile);
console.log('Done!');