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
    
    // Fix malformed meta name attributes
    content = content.replace(/name="description""/g, 'name="description"');
    content = content.replace(/name="description",;,/g, 'name="description"');
    
    // Fix malformed link rel attributes
    content = content.replace(/rel="canonical""/g, 'rel="canonical"');
    content = content.replace(/rel: "canonical",;,/g, 'rel="canonical"');
    content = content.replace(/rel="canonical",;,/g, 'rel="canonical"');
    
    // Fix malformed href attributes
    content = content.replace(/href ="https: \/\/ziontechgroup\.com/g, 'href="https://ziontechgroup.com');
    content = content.replace(/href="https:\/\/ziontechgroup\.com\/blog\/[^"]*\/>",;,/g, 'href="https://ziontechgroup.com/blog/page" />');
    
    // Fix malformed content attributes
    content = content.replace(/content="([^"]*)" \/>/g, 'content="$1" />');
    
    // Fix malformed title attributes
    content = content.replace(/title: "([^"]*)",/g, 'title="$1"');
    
    // Fix malformed className attributes
    content = content.replace(/className= "([^"]*)"/g, 'className="$1"');
    content = content.replace(/className ="([^"]*)"/g, 'className="$1"');
    
    // Fix malformed div tags with trailing quotes
    content = content.replace(/<div className="([^"]*)"\s*",?\s*$/gm, '<div className="$1">');
    
    // Fix malformed p tags
    content = content.replace(/<p[^>]*>\s*"([^"]*)"\s*$/gm, '<p>$1');
    
    // Fix malformed h1 tags
    content = content.replace(/<h1[^>]*>\s*"([^"]*)"\s*$/gm, '<h1>$1');
    
    // Fix missing closing tags
    content = content.replace(/<([^>]+)\s*>\s*"([^"]*)"\s*$/gm, '<$1>$2');
    
    // Fix malformed Link components
    content = content.replace(/to: "([^"]*)",\s*className/g, 'to="$1" className');
    content = content.replace(/className="([^"]*)"\s*>\s*"([^"]*)"\s*<\/Link>\s*",/g, 'className="$1">$2</Link>');
    
    // Fix missing closing tags for common elements
    const missingClosings = [
      { open: '<div', close: '</div>' },
      { open: '<section', close: '</section>' },
      { open: '<article', close: '</article>' },
      { open: '<main', close: '</main>' },
      { open: '<header', close: '</header>' },
      { open: '<footer', close: '</footer>' },
      { open: '<nav', close: '</nav>' },
      { open: '<aside', close: '</aside>' },
      { open: '<p', close: '</p>' },
      { open: '<h1', close: '</h1>' },
      { open: '<h2', close: '</h2>' },
      { open: '<h3', close: '</h3>' },
      { open: '<ul', close: '</ul>' },
      { open: '<ol', close: '</ol>' },
      { open: '<li', close: '</li>' }
    ];
    
    // Ensure proper React import if missing
    if (!content.includes('import React') && !content.includes('import { React')) {
      content = `import React from 'react';\n${content}`;
    }
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+):\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
    content = content.replace(/export default function\s+(\w+)\s*\(\):\s*void/g, 'export default function $1(): JSX.Element');
    content = content.replace(/export default function\s+(\w+)\s*\(\):\s*React\.JSX\.Element/g, 'export default function $1(): JSX.Element');
    
    // Ensure proper export if missing
    if (!content.includes('export default')) {
      const componentName = path.basename(filePath, '.tsx');
      content += `\n\nexport default ${componentName};`;
    }
    
    // Clean up trailing semicolons and quotes
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/",\s*$/gm, '"');
    content = content.replace(/'\s*$/gm, "'");
    
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