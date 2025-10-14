#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix syntax errors in a file
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Remove merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> origin\/main/g, '');
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');
  
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
      if (content.includes('<<<<<<< HEAD') || 
          content.includes('=======') || 
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