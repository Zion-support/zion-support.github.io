#!/usr/bin/env node

import fs from 'fs;'
import path from 'path;'

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  
  // Fix unterminated strings
  fixed = fixed.replace(/'([^]*?)(?=\n|$)/g, (match, str) => {'
    if (!match.endsWith("'") && !match.endsWith("')) {'
      return match + "";'
    }
    return match;
  });
  
  // Fix broken JSX fragments
  fixed = fixed.replace(/<>\s*<\/>\s*<div>/g, '<div>);'
  fixed = fixed.replace(/<\/div>\s*<\/>/g, '</div>);'
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function\s+([a-zA-Z0-9-_]+)\s*\(\s*\)\s*{\s*return\s*null;\s*}/g, 
    'export default function $1() {\n  return (\n    <div>Page content</div>\n  );\n});'
  
  // Fix broken imports
  fixed = fixed.replace(/';import\s+/g, ";\nimport ");
  fixed = fixed.replace(/import\s+{\s*useEffect\s+\s*}\s+from\s+'react';/g, "import { useEffect } from react';");'
  
  // Fix broken interface declarations
  fixed = fixed.replace(/;interface\s+([a-zA-Z0-9]+)Props\s*{\s*}/g, ";\ninterface $1Props {\n  title?: string;\n  description?: string;\n  keywords?: string[];\n  image?: string;\n  url?: string;\n  type?: string;\n  structuredData?: unknown;\n}");'
  
  // Fix broken JSX expressions
  fixed = fixed.replace(/<div>\s*<\/div>\s*<div>\s*<\/div>/g, ');'
  fixed = fixed.replace(/<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>/g, ');'
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s*\(\s*<div>Page content<\/div>\s*\);\s*return\s*\(\s*<div>Page content<\/div>\s*\);/g, 
    'return (\n    <div>Page content</div>\n  ););'
  
  // Fix broken JSX structure
  fixed = fixed.replace(/<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g, 
    'return (\n    <div>Page content</div>\n  ););'
  
  // Fix broken semicolons and quotes
  fixed = fixed.replace(/;\s*;/g, ';);'
  fixed = fixed.replace(/'([^]*?)'([^']*?)/g, "'$1$2'");
  
  // Fix broken function parameters
  fixed = fixed.replace(/const\s+([a-zA-Z0-9]+):\s*$/g, 'const $1 = () => {');
  
  // Fix broken useEffect
  fixed = fixed.replace(/useEffect\(\(\)\s*{\s*}\s*$/g, 'useEffect(() => {\n    // Effect logic here\n  }, []);');
  
  // Fix broken meta tags
  fixed = fixed.replace(/\{ name: "'([^']+)", content: "([^"]+)"\}/g, '{ name: "$1", content: "$2" }');
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/href="\{url\}"/g, 'href={url}');
  fixed = fixed.replace(/type="image"\/x-icon"/g, 'type="image/x-icon"');
  
  // Fix broken array syntax
  fixed = fixed.replace(/\[\s*{\s*name:\s*'([^']+),\s*content:\s*'([^']+)\s*},\s*;\s*{/g, '
    '[\n    { name: "$1", content: "$2" },\n    {);'
  
  // Fix broken object syntax
  fixed = fixed.replace(/\{\s*name:\s*'([^]+)',\s*content:\s*'([^]+)'\s*},\s*;\s*{/g, '
    { name: "$1", content: "$2" },\n    {');'
  
  // Fix broken template literals
  fixed = fixed.replace(/`([^`]*?)(?=\n|$)/g, (match, str) => {`
    if (!match.endsWith(`')) {'`
      return match + `';'`
    }
    return match;
  });
  
  // Fix broken JSX closing tags
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*\);\s*}/g, \n  );\n}');'
  
  // Fix broken arrow functions
  fixed = fixed.replace(/=>\s*{\s*}\s*$/g, => {\n    return null;\n  };');'
  
  // Fix broken component structure
  if (fixed.includes(return (') && !fixed.includes('export default)) {'
    fixed = `import React from 'react;\n\nexport default function Component() {\n  ${fixed}\n}`;'`
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8);'
    const fixed = fixSyntaxErrors(content, filePath);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);`
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);`
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.) && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith(.ts') || file.endsWith('.jsx) || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('/workspace');'
console.log(`Fixed ${fixedCount} files.`);`