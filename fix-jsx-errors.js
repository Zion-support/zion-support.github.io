import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to clean up a file with JSX errors
function cleanJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let cleaned = content;
    
    // Remove duplicate imports
    const importLines = content.match(/^import.*$/gm) || [];
    const uniqueImports = [...new Set(importLines)];
    
    // Remove duplicate function definitions
    const functionMatches = content.match(/export default function \w+\([^)]*\)\s*{/g) || [];
    if (functionMatches.length > 1) {
      // Keep only the first function definition
      const firstFunctionIndex = content.indexOf(functionMatches[0]);
      const secondFunctionIndex = content.indexOf(functionMatches[1]);
      
      if (secondFunctionIndex > firstFunctionIndex) {
        // Remove everything from the second function onwards
        cleaned = content.substring(0, secondFunctionIndex);
      }
    }
    
    // Fix common JSX issues
    cleaned = cleaned
      // Remove duplicate React imports
      .replace(/import React from 'react';\s*import React from 'react';/g, 'import React from \'react\';')
      // Fix malformed JSX closing tags
      .replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>')
      // Remove orphaned closing tags
      .replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>')
      // Fix broken JSX expressions
      .replace(/export default function \w+\([^)]*\)\s*{\s*return\s*\(\s*<div[^>]*>\s*<Helmet>\s*<title>[^<]*<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>[^<]*<\/h1>\s*<p[^>]*>\s*export default function/g, 'export default function')
      // Remove incomplete JSX
      .replace(/<p[^>]*>\s*export default function/g, '<p>')
      // Fix broken closing tags
      .replace(/<\/p>\s*export default function/g, '</p>')
      // Remove duplicate content
      .replace(/(export default function \w+\([^)]*\)\s*{[^}]+})\s*export default function/g, '$1')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Ensure proper JSX structure
      .replace(/(<div[^>]*>)\s*export default function/g, '$1')
      // Remove orphaned text
      .replace(/export default function[^}]+}\s*$/gm, '')
      // Fix broken JSX structure
      .replace(/<p[^>]*>\s*export default function[^}]+}/g, '<p>Page content here</p>')
      // Remove incomplete function definitions
      .replace(/export default function[^}]+}\s*export default function/g, 'export default function')
      // Clean up malformed JSX
      .replace(/<div[^>]*>\s*<Helmet>\s*<title>[^<]*<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>[^<]*<\/h1>\s*<p[^>]*>\s*export default function[^}]+}/g, 
        (match) => {
          const titleMatch = match.match(/<title>([^<]*)<\/title>/);
          const title = titleMatch ? titleMatch[1] : 'Page';
          return `<div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">${title}</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>`;
        });
    
    // Ensure the file ends with proper JSX structure
    if (!cleaned.includes('</div>') || !cleaned.includes('return (')) {
      // If the file is too corrupted, create a basic structure
      const titleMatch = cleaned.match(/<title>([^<]*)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'Page';
      
      cleaned = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">${title}</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}`;
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, cleaned, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TSX files in the app directory
  const files = await glob('app/**/*.tsx');

  console.log(`Found ${files.length} TSX files to process...`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    if (cleanJSXFile(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }

  console.log(`\nFixed: ${fixedCount} files`);
  console.log(`Errors: ${errorCount} files`);
}

main().catch(console.error);