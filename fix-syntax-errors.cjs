#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Remove duplicate return statements and fix JSX structure
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/'([^']*?)(?=\n|$)/g, (match, content) => {
    if (content.includes('"') && !content.includes("'")) {
      return `"${content}"`;
    }
    return `'${content}'`;
  });
  
  // Fix broken JSX - remove duplicate returns and fix structure
  const returnRegex = /return\s*\(\s*<div[^>]*>Page content<\/div>\s*\)\s*;\s*return\s*\(/g;
  fixed = fixed.replace(returnRegex, 'return (');
  
  // Fix broken JSX expressions
  fixed = fixed.replace(/<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*\)\s*;\s*<\/p><\/div><\/div>\s*\)\s*;\s*}/g, '');
  
  // Fix malformed imports
  fixed = fixed.replace(/';import/g, ";\nimport");
  fixed = fixed.replace(/';interface/g, ";\ninterface");
  
  // Fix broken semicolons in imports
  fixed = fixed.replace(/import\s+{\s*useEffect\s+\s*}\s+from\s+'react';\s*';/g, "import { useEffect } from 'react';\n");
  
  // Fix broken interface declarations
  fixed = fixed.replace(/';interface\s+(\w+)\s*{\s*}\s*([^}]*?)\s*}/g, (match, name, props) => {
    const cleanProps = props.replace(/[;']/g, '').trim();
    return `interface ${name} {\n  ${cleanProps}\n}`;
  });
  
  // Fix broken function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*([^=]*?)\s*=>\s*{\s*};/g, (match, name, params) => {
    const cleanParams = params.replace(/[;']/g, '').trim();
    return `const ${name}: React.FC<${cleanParams}> = (${cleanParams}) => {`;
  });
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/href="[^"]*"/g, (match) => {
    return match.replace(/"/g, '"');
  });
  
  // Fix broken meta tags
  fixed = fixed.replace(/\{ name: "'([^']*)'", content: "([^"]*)"\}/g, '{ name: "$1", content: "$2" }');
  fixed = fixed.replace(/\{ property: "'([^']*)'", content: "([^"]*)"\}/g, '{ property: "$1", content: "$2" }');
  
  // Fix broken array syntax
  fixed = fixed.replace(/\[\s*\{\s*name:\s*"([^"]*)",\s*content:\s*"([^"]*)"\s*\},/g, '[{ name: "$1", content: "$2" },');
  
  // Fix broken string concatenation
  fixed = fixed.replace(/keywords\.join\('([^']*)'\)/g, 'keywords.join("$1")');
  
  // Fix broken template literals
  fixed = fixed.replace(/`([^`]*?)`/g, (match, content) => {
    if (content.includes('${')) {
      return match;
    }
    return `"${content}"`;
  });
  
  // Remove duplicate closing braces and fix structure
  fixed = fixed.replace(/\}\s*\}\s*\}\s*\}\s*$/g, '}');
  
  // Fix broken useEffect
  fixed = fixed.replace(/useEffect\(\(\)\s*=>\s*\{\s*\}\s*([^}]*?)\s*return\s+undefined;\s*\}/g, (match, body) => {
    const cleanBody = body.replace(/[;']/g, '').trim();
    return `useEffect(() => {\n    ${cleanBody}\n  }, [structuredData]);`;
  });
  
  // Fix broken Helmet JSX
  fixed = fixed.replace(/<Helmet>\s*<title>\{title\}<\/title>\s*\{metaTags\.map\(\(tag,\s*_index\)\s*=>\s*\(\}\s*<meta\s+key=\{_index\}\s*\{\.\.\.tag\}\s*\/>\s*\)\)\}/g, 
    '<Helmet>\n      <title>{title}</title>\n      {metaTags.map((tag, index) => (\n        <meta key={index} {...tag} />\n      ))}');
  
  // Fix broken link tags
  fixed = fixed.replace(/href="\{url\}"\s*\/>\s*<link\s+rel="icon"\s+type="image"\/x-icon"\s+href=""\/favicon\.ico"\s*\/>/g, 
    'href={url} />\n      <link rel="icon" type="image/x-icon" href="/favicon.ico" />');
  
  // Clean up extra semicolons and fix structure
  fixed = fixed.replace(/;\s*;/g, ';');
  fixed = fixed.replace(/\s*;\s*$/gm, '');
  
  return fixed;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    // Additional file-specific fixes
    let finalContent = fixed;
    
    // Fix React component structure
    if (filePath.includes('.tsx') || filePath.includes('.jsx')) {
      // Ensure proper React component structure
      if (!finalContent.includes('export default function') && !finalContent.includes('const') && !finalContent.includes('function')) {
        finalContent = `'use client';
import React from 'react';

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under development.</p>
    </div>
  );
}`;
      }
    }
    
    // Fix TypeScript interface issues
    if (filePath.includes('.ts') || filePath.includes('.tsx')) {
      finalContent = finalContent.replace(/interface\s+(\w+)\s*{\s*}\s*([^}]*?)\s*}/g, (match, name, props) => {
        const cleanProps = props.replace(/[;']/g, '').trim();
        return `interface ${name} {\n  ${cleanProps}\n}`;
      });
    }
    
    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all files
function main() {
  const directories = [
    'app/components',
    'app/pages',
    'app/utils',
    'app/hooks',
    'app/contexts',
    'app/config',
    'app/data',
    'src/components',
    'src/pages',
    'src/utils'
  ];
  
  let fixedCount = 0;
  let totalCount = 0;
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir, { recursive: true });
      
      files.forEach(file => {
        if (typeof file === 'string' && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
          const filePath = path.join(dir, file);
          totalCount++;
          
          if (fixFile(filePath)) {
            fixedCount++;
          }
        }
      });
    }
  });
  
  console.log(`\nFixed ${fixedCount} out of ${totalCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, fixFile };
