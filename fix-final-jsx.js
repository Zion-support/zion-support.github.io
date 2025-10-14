#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final JSX errors
function fixFinalJSX(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Remove empty lines at the beginning
  if (fixed.startsWith('\n')) {
    fixed = fixed.replace(/^\n+/, '');
    changes++;
  }

  // Fix missing import statements
  if (!fixed.includes("import React from 'react'") && !fixed.includes('import React from "react"')) {
    if (fixed.includes('export default function') || fixed.includes('const ') || fixed.includes('function ')) {
      fixed = "import React from 'react';\n" + fixed;
      changes++;
    }
  }

  // Fix missing Helmet import
  if (fixed.includes('<Helmet>') && !fixed.includes("import { Helmet }")) {
    const importIndex = fixed.indexOf("import React");
    if (importIndex !== -1) {
      const nextLineIndex = fixed.indexOf('\n', importIndex);
      fixed = fixed.slice(0, nextLineIndex) + '\nimport { Helmet } from "react-helmet-async";' + fixed.slice(nextLineIndex);
      changes++;
    }
  }

  // Fix malformed JSX structure
  const malformedPattern = /<>\s*<Helmet>\s*<\/Helmet>\s*<div[^>]*>[\s\S]*?<\/div>\s*<\/>/g;
  if (malformedPattern.test(fixed)) {
    fixed = fixed.replace(malformedPattern, (match) => {
      const titleMatch = match.match(/<div[^>]*>[\s\S]*?<h1[^>]*>([^<]*)<\/h1>/);
      const title = titleMatch ? titleMatch[1] : 'Page';
      return `<>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} - Zion Tech Group" />
      </Helmet>
      ${match.replace(/<>\s*<Helmet>\s*<\/Helmet>\s*/, '')}`;
    });
    changes++;
  }

  // Fix incomplete JSX fragments
  const incompleteFragmentPattern = /<>\s*<div[^>]*>[\s\S]*?<\/div>\s*$/gm;
  if (incompleteFragmentPattern.test(fixed) && !fixed.includes('</>')) {
    fixed = fixed.replace(incompleteFragmentPattern, (match) => {
      return match + '\n    </>';
    });
    changes++;
  }

  // Fix extra closing tags
  const extraClosingPattern = /}\s*<\/div>\s*<\/>\s*\);\s*}\s*$/g;
  if (extraClosingPattern.test(fixed)) {
    fixed = fixed.replace(extraClosingPattern, '\n  );\n}');
    changes++;
  }

  // Fix missing export statements
  if (fixed.includes('const Page = () =>') && !fixed.includes('export default')) {
    fixed = fixed + '\n\nexport default Page;';
    changes++;
  }

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixFinalJSX(content, filePath);
    
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`Fixed ${result.changes} issues in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting final JSX error fixes...');

  // Get all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  let totalFixed = 0;
  let filesProcessed = 0;

  files.forEach(file => {
    if (processFile(file)) {
      totalFixed++;
    }
    filesProcessed++;
  });

  console.log(`\nProcessed ${filesProcessed} files, fixed ${totalFixed} files`);
  console.log('Final JSX error fixes completed!');
}

main().catch(console.error);