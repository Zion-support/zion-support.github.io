#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;

  // Fix malformed JSX fragments and closing tags
  fixed = fixed.replace(/<>\s*<Helmet>[\s\S]*?<\/Helmet>">\s*<div>/g, (match) => {
    return match.replace(/"">\s*<div>/, '">\n      <div>');
  });

  // Fix unclosed JSX fragments
  fixed = fixed.replace(/<>\s*<div>[\s\S]*?<\/div>\s*\)\s*}/g, (match) => {
    return match.replace(/<>\s*/, '').replace(/\s*\)\s*}/, '\n  );\n}');
  });

  // Fix malformed closing tags
  fixed = fixed.replace(/export default (\w+)(?!;)/g, 'export default $1;');

  // Fix missing semicolons in function declarations
  fixed = fixed.replace(/const (\w+) = \(\) => \{[\s\S]*?\}\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });

  // Fix malformed JSX structure
  fixed = fixed.replace(/<div>\s*<div><\/div>\s*<\/div>\s*\)\s*}/g, '<div>\n        <div></div>\n      </div>\n  );\n}');

  // Fix missing closing tags
  fixed = fixed.replace(/<div>\s*<div><\/div>\s*\)\s*}/g, '<div>\n        <div></div>\n      </div>\n  );\n}');

  // Fix malformed Helmet closing
  fixed = fixed.replace(/<\/Helmet>">/g, '</Helmet>');

  // Fix missing closing tags for fragments
  fixed = fixed.replace(/<>\s*<div>[\s\S]*?<\/div>\s*\)\s*}/g, (match) => {
    return match.replace(/<>\s*/, '').replace(/\s*\)\s*}/, '\n  );\n}');
  });

  // Fix malformed function structure
  fixed = fixed.replace(/const (\w+) = \(\) => \{[\s\S]*?return \([\s\S]*?\)\s*}/g, (match) => {
    if (!match.includes(');')) {
      return match.replace(/\s*}\s*$/, '\n  );\n}');
    }
    return match;
  });

  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixJSXErrors(content);
    
    // Additional file-specific fixes for common patterns
    if (filePath.includes('page.tsx') && content.includes('PagePage')) {
      // Extract the actual page name from the file path
      const pageName = filePath.split('/').pop().replace('.tsx', '').replace('page', '');
      const properName = pageName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      content = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${properName.replace(/\s+/g, '')}Page = () => {
  return (
    <>
      <Helmet>
        <title>${properName} - Zion Tech Group</title>
        <meta name="description" content="${properName} - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">${properName}</h1>
          <p className="text-gray-300 text-lg">This page is under development.</p>
        </div>
      </div>
    </>
  );
};

export default ${properName.replace(/\s+/g, '')}Page;`;
    }
    
    if (content !== originalContent) {
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

// Main execution
async function main() {
  console.log('Starting JSX error fixes...');

  // Get all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files.`);
}

main().catch(console.error);