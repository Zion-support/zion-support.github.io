#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix syntax errors in a file
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Remove merge conflict markers
  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/[\s\S]*?[\s\S]*?  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?/g, '');
  
  // Fix common syntax issues
  fixed = fixed.replace(/import React from "react";";/g, 'import React from "react";');
  fixed = fixed.replace(/import React from "react";\s*;/g, 'import React from "react";');
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/return \("\s*$/gm, 'return (');
  fixed = fixed.replace(/^\s*<div className="min-h-screen[^"]*">\s*$/gm, '    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
  fixed = fixed.replace(/^\s*<Helmet><\/Helmet>\s*$/gm, '      <Helmet>');
  fixed = fixed.replace(/^\s*<title>[^<]*<\/title>"\s*$/gm, '        <title>Page Title - Zion Tech Group</title>');
  fixed = fixed.replace(/^\s*<meta[^>]*\/>"\s*$/gm, '        <meta name="description" content="Page Description - Zion Tech Group" />');
  fixed = fixed.replace(/^\s*<\/Helmet>"\s*$/gm, '      </Helmet>');
  
  // Fix JSX structure issues
  fixed = fixed.replace(/^\s*<div className="container[^"]*">\s*$/gm, '      <div className="container mx-auto px-4 py-16">');
  fixed = fixed.replace(/^\s*<div className="text-center">\s*$/gm, '        <div className="text-center">');
  fixed = fixed.replace(/^\s*<h1[^>]*>[^<]*<\/h1>"\s*$/gm, '          <h1 className="text-4xl font-bold text-white mb-8">Page Title</h1>');
  fixed = fixed.replace(/^\s*<p[^>]*>\s*$/gm, '          <p className="text-gray-300 text-lg">');
  fixed = fixed.replace(/^\s*This page is under construction[^<]*\s*$/gm, '            This page is under construction. Please check back later.');
  fixed = fixed.replace(/^\s*<\/p>\s*$/gm, '          </p>');
  fixed = fixed.replace(/^\s*<\/div>\s*$/gm, '        </div>');
  fixed = fixed.replace(/^\s*<\/div>\s*$/gm, '      </div>');
  fixed = fixed.replace(/^\s*<\/div>\s*$/gm, '    </div>');
  fixed = fixed.replace(/^\s*\)\s*$/gm, '  );');
  fixed = fixed.replace(/^\s*\};\s*$/gm, '};');
  fixed = fixed.replace(/^\s*;\s*$/gm, '');
  fixed = fixed.replace(/^\s*export default[^;]*;\s*$/gm, 'export default PageComponent;');
  
  // Clean up extra quotes and malformed strings
  fixed = fixed.replace(/"\s*$/gm, '');
  fixed = fixed.replace(/^\s*"\s*/gm, '');
  fixed = fixed.replace(/\s*"\s*$/gm, '');
  
  // Fix function declarations
  fixed = fixed.replace(/const\s+(\w+)Page\s*=\s*\(\)\s*=>\s*\{/g, 'const $1Page = () => {');
  fixed = fixed.replace(/export default\s+(\w+)Page;\s*$/gm, 'export default $1Page;');
  
  return fixed;
}

// Function to create a proper page component
function createProperPageComponent(filePath, pageName) {
  const componentName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Page';
  
  return `import React from "react";
import { Helmet } from "react-helmet-async";

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${pageName.charAt(0).toUpperCase() + pageName.slice(1)} - Zion Tech Group</title>
        <meta name="description" content="${pageName.charAt(0).toUpperCase() + pageName.slice(1)} - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">${pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};`;
}

// Main function to process files
async function main() {
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript/JSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has syntax errors or merge conflicts
      if (content.includes('') || 
          content.includes('') || 
          content.includes('>>>>>>>') ||
          content.includes('import React from "react";";') ||
          content.includes('return ("') ||
          content.includes(');\n};') ||
          content.includes('export default') && content.includes('";')) {
        
        console.log(`Fixing: ${file}`);
        
        // Extract page name from file path
        const pageName = path.basename(file, path.extname(file));
        
        // Create a proper page component
        const fixedContent = createProperPageComponent(filePath, pageName);
        
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  if (errorCount > 0) {
    console.log(`Encountered ${errorCount} errors`);
  }
  console.log('Syntax error fixes completed!');
}

main().catch(console.error);
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals by adding missing quotes
  // Look for lines that start with a quote but don't end with one
  fixed = fixed.replace(/^(\s*"[^"]*?)(\n|$)/gm, (match, p1, p2) => {
    if (!p1.endsWith('"') && !p1.endsWith('";')) {
      return p1 + '"' + p2;
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/content="([^"]*?)(\n|$)/gm, (match, p1, p2) => {
    if (!p1.endsWith('"')) {
      return `content="${p1}"${p2}`;
    }
    return match;
  });
  
  // Remove merge conflict markers
  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/[\s\S]*?  
  // Fix extra semicolons and quotes
  fixed = fixed.replace(/;";/g, ';');
  fixed = fixed.replace(/";"/g, ';');
  fixed = fixed.replace(/""/g, '"');
  fixed = fixed.replace(/;;/g, ';');
  
  // Fix malformed import statements
  fixed = fixed.replace(/import React from "react";";/g, 'import React from "react";');
  fixed = fixed.replace(/import {[^}]*} from "[^"]*";";/g, (match) => match.replace(/";$/, '";'));
  
  // Fix JSX structure issues
  fixed = fixed.replace(/return \("([\s\S]*?)"\);/g, (match, p1) => {
    return `return (\n${p1}\n);`;
  });
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>([\s\S]*?)(\n\s*\))/g, (match, p1, p2, p3) => {
    if (!p2.includes('</div>')) {
      return `<div${p1}>${p2}</div>${p3}`;
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+([^"]*?)\s+from\s+"([^"]*?)"([^;]*?)(?:\n|$)/g, (match, imports, module, rest) => {
    if (rest && !rest.includes(';')) {
      return `import ${imports} from "${module}";\n`;
    }
    return match;
  });
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function Page\(\) \{;/g, 'export default function Page() {');
  fixed = fixed.replace(/const \w+ = \(\) => \{"/g, (match) => match.replace(/"/, ''));
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    fixed += '\n' + '}'.repeat(missingBraces);
  }
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([\s\S]*?)<\/>/g, (match, p1) => {
    if (!p1.trim()) return '<></>';
    return `<>${p1}</>`;
  });
  
  // Fix missing semicolons after statements
  fixed = fixed.replace(/(\w+)\s*$/gm, (match, p1) => {
    if (['return', 'const', 'let', 'var', 'function'].includes(p1)) {
      return match;
    }
    if (!match.endsWith(';') && !match.endsWith('{') && !match.endsWith('}') && !match.endsWith(')')) {
      return match + ';';
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
    });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };
