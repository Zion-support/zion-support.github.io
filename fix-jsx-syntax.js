const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues in a file
function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the pattern where there's a missing React import and Head usage
    if (content.includes("'use client';") && content.includes('<Head>') && !content.includes('import React')) {
      // Add React import after 'use client'
      content = content.replace(
        /('use client';)/,
        "$1\nimport React from 'react';"
      );
      modified = true;
    }

    // Fix the pattern where Head is used but not imported
    if (content.includes('<Head>') && !content.includes("import Head from 'next/head'")) {
      // Remove Head usage and replace with proper structure
      content = content.replace(
        /<Head>\s*<title>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/>\s*<\/Head>/g,
        ''
      );
      modified = true;
    }

    // Fix the pattern where there's a div with Head inside but missing proper JSX structure
    if (content.includes('<div>\n      <Head>')) {
      content = content.replace(
        /<div>\s*<Head>[\s\S]*?<\/Head>\s*/g,
        '<div>\n      '
      );
      modified = true;
    }

    // Fix missing closing tags and proper JSX structure
    if (content.includes('</main>') && !content.includes('<main')) {
      content = content.replace(/<\/main>/g, '');
      modified = true;
    }

    // Fix the pattern where there's a div with Head but missing proper structure
    if (content.includes('return (\n    <div>\n      <Head>')) {
      content = content.replace(
        /return \(\s*<div>\s*<Head>[\s\S]*?<\/Head>\s*/g,
        'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n      '
      );
      modified = true;
    }

    // Clean up any remaining Head references
    if (content.includes('<Head>')) {
      content = content.replace(/<Head>[\s\S]*?<\/Head>/g, '');
      modified = true;
    }

    // Fix Footer import if it exists but is not used properly
    if (content.includes("import Footer from '../components/Footer';") && !content.includes('<Footer')) {
      content = content.replace(/import Footer from '\.\.\/components\/Footer';\n/g, '');
      modified = true;
    }

    // Fix unused imports
    if (content.includes("import Link from 'next/link';") && !content.includes('<Link')) {
      content = content.replace(/import Link from 'next\/link';\n/g, '');
      modified = true;
    }

    if (content.includes("import { ArrowRight } from 'lucide-react';") && !content.includes('<ArrowRight')) {
      content = content.replace(/import { ArrowRight } from 'lucide-react';\n/g, '');
      modified = true;
    }

    // Fix the title in h1 tags to be more descriptive
    if (content.includes('<h1 className="text-4xl font-bold text-white mb-6">\n            Page\n          </h1>')) {
      const pageName = path.basename(path.dirname(filePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      content = content.replace(
        /<h1 className="text-4xl font-bold text-white mb-6">\n            Page\n          <\/h1>/g,
        `<h1 className="text-4xl font-bold text-white mb-6">\n            ${pageName}\n          </h1>`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting JSX syntax fixes...');
const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixJsxSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${pageFiles.length} total page files.`);