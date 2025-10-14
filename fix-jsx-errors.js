#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate closing Helmet tags
    if (content.includes('</Helmet>') && content.split('</Helmet>').length > 2) {
      // Remove duplicate closing Helmet tags
      const helmetMatches = content.match(/<\/Helmet>/g);
      if (helmetMatches && helmetMatches.length > 1) {
        // Keep only the first closing tag
        content = content.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
        modified = true;
      }
    }

    // Fix malformed JSX fragments - ensure proper opening and closing
    if (content.includes('<>') && !content.includes('</>')) {
      // Add missing closing fragment
      content = content.replace(/(\s*)<\/div>\s*<\/div>\s*$/, '$1</div>\n      </div>\n    </>');
      modified = true;
    }

    // Fix missing opening tags for Helmet
    if (content.includes('</Helmet>') && !content.includes('<Helmet>')) {
      // Add proper Helmet opening tag
      content = content.replace(
        /(\s*)<>/,
        `$1<>\n      <Helmet>\n        <title>Page Title - Zion Tech Group</title>\n        <meta name="description" content="Page description" />\n      </Helmet>`
      );
      modified = true;
    }

    // Fix incomplete Helmet tags
    if (content.includes('<Helmet>') && content.includes('</Helmet>') && 
        !content.includes('<title>') && !content.includes('<meta')) {
      // Add proper Helmet content
      content = content.replace(
        /<Helmet>\s*<\/Helmet>/,
        `<Helmet>
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Page description" />
      </Helmet>`
      );
      modified = true;
    }

    // Fix missing content in pages - add basic page structure
    if (content.includes('export default function Page()') && 
        !content.includes('<div className="min-h-screen') && 
        !content.includes('This page is under development')) {
      
      const pageName = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      content = content.replace(
        /(\s*)<>/,
        `$1<>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${pageName}</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our ${pageName.toLowerCase()} services.
          </p>
        </div>
      </div>`
      );
      modified = true;
    }

    // Fix App.tsx specifically
    if (filePath.includes('App.tsx')) {
      // Fix the malformed div structure
      content = content.replace(
        /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\s*<Helmet>\s*<title>App - Zion Tech Group<\/title>\s*<meta name="description" content="App - Zion Tech Group" \/>\s*<\/Helmet>\s*<\/Helmet>/,
        `<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Helmet>
          <title>App - Zion Tech Group</title>
          <meta name="description" content="App - Zion Tech Group" />
        </Helmet>`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/JSX files in the app directory
  const files = await glob('app/**/*.{tsx,ts}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixJSXErrors(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);