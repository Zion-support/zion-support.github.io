#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix unterminated string literals and other syntax issues
function fixStringLiterals(content) {
  let fixed = content;
  
  // Fix unterminated string literals at the end of lines
  fixed = fixed.replace(/';$/gm, ';');
  fixed = fixed.replace(/';/g, ';');
  fixed = fixed.replace(/';/g, ';');
  
  // Fix broken import statements
  fixed = fixed.replace(/import\s+React\s+from\s+'react';'/g, "import React from 'react';");
  fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+'([^']+)';'/g, "import { $1 } from '$2';");
  
  // Fix broken function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{/g, 'const $1 = () => {');
  
  // Fix missing semicolons
  fixed = fixed.replace(/}\s*$/gm, '};');
  fixed = fixed.replace(/}\s*export/g, '}\n\nexport');
  
  // Fix broken JSX
  fixed = fixed.replace(/return\s*\(\s*<div>\s*<h2>(\w+)<\/h2>\s*<p>This component is under construction\.<\/p>\s*<\/div>\s*\)\s*$/gm, 
    'return (\n    <div>\n      <h2>$1</h2>\n      <p>This component is under construction.</p>\n    </div>\n  );');
  
  // Fix broken page components
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\(\)\s*{\s*return\s*\(\s*<div>Page content<\/div>\s*\);\s*return\s*\(\s*<div>Page content<\/div>\s*\);\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g, 
    'export default function $1() {\n  return (\n    <div>\n      <h1 className="text-4xl font-bold mb-8">$1</h1>\n      <p className="text-gray-600 text-lg">\n        This page is under development.\n      </p>\n    </div>\n  );\n}');
  
  // Fix broken interface declarations
  fixed = fixed.replace(/interface\s+(\w+)\s*{\s*}\s*([^}]*?)\s*}/g, (match, name, props) => {
    const cleanProps = props.replace(/[;']/g, '').trim();
    if (cleanProps) {
      return `interface ${name} {\n  ${cleanProps}\n}`;
    }
    return `interface ${name} {}`;
  });
  
  // Fix broken type declarations
  fixed = fixed.replace(/type\s+(\w+)\s*=\s*([^;]+);'/g, 'type $1 = $2;');
  
  // Fix broken array declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{\s*name:\s*"([^"]*)",\s*content:\s*"([^"]*)"\s*\},/g, 
    'const $1 = [\n  {\n    name: "$2",\n    content: "$3"\n  },');
  
  // Fix broken object declarations
  fixed = fixed.replace(/\{\s*name:\s*"([^"]*)",\s*content:\s*"([^"]*)"\s*\}/g, 
    '{\n    name: "$1",\n    content: "$2"\n  }');
  
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
  
  // Clean up extra quotes and semicolons
  fixed = fixed.replace(/''/g, "'");
  fixed = fixed.replace(/;;/g, ';');
  fixed = fixed.replace(/\s*;\s*$/gm, ';');
  
  return fixed;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixStringLiterals(content);
    
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

module.exports = { fixStringLiterals, fixFile };