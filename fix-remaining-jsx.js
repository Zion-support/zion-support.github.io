#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining JSX errors
function fixRemainingJSX(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix duplicate closing Helmet tags
  const duplicateHelmetPattern = /<\/Helmet>\s*<\/Helmet>/g;
  if (duplicateHelmetPattern.test(fixed)) {
    fixed = fixed.replace(duplicateHelmetPattern, '</Helmet>');
    changes++;
  }

  // Fix malformed Helmet structure
  const malformedHelmetPattern = /<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>\s*<meta[^>]*\/>\s*<\/Helmet>/g;
  if (malformedHelmetPattern.test(fixed)) {
    fixed = fixed.replace(malformedHelmetPattern, (match, title) => {
      return `<Helmet>
        <title>${title}</title>
        <meta name="description" content="${title} - Zion Tech Group" />
        <meta name="keywords" content="${title.toLowerCase().replace(/\s+/g, ', ')}, AI solutions, IT services" />
      </Helmet>`;
    });
    changes++;
  }

  // Fix missing closing JSX fragments
  const missingFragmentPattern = /<>\s*<div[^>]*>[\s\S]*?<\/div>\s*$/gm;
  if (missingFragmentPattern.test(fixed) && !fixed.includes('</>')) {
    fixed = fixed.replace(missingFragmentPattern, (match) => {
      return match + '\n    </>';
    });
    changes++;
  }

  // Fix JSX expressions must have one parent element
  const jsxParentPattern = /<>\s*<div[^>]*>[\s\S]*?<\/div>\s*<\/>\s*<div/g;
  if (jsxParentPattern.test(fixed)) {
    fixed = fixed.replace(jsxParentPattern, (match) => {
      return match.replace(/<\/>\s*<div/, '<div');
    });
    changes++;
  }

  // Fix incomplete JSX structure
  const incompleteJSXPattern = /<>\s*<div[^>]*>[\s\S]*?<\/div>\s*$/gm;
  if (incompleteJSXPattern.test(fixed) && !fixed.includes('</>')) {
    fixed = fixed.replace(incompleteJSXPattern, (match) => {
      return match + '\n    </>';
    });
    changes++;
  }

  // Fix extra closing tags at the end
  const extraClosingPattern = /}\s*<\/div>\s*<\/>\s*\);\s*}\s*$/g;
  if (extraClosingPattern.test(fixed)) {
    fixed = fixed.replace(extraClosingPattern, '\n  );\n}');
    changes++;
  }

  // Fix malformed JSX with extra content
  const malformedJSXPattern = /}\s*<\/div>\s*<\/>\s*\);\s*}\s*<\/div>\s*<\/>\s*\);\s*}/g;
  if (malformedJSXPattern.test(fixed)) {
    fixed = fixed.replace(malformedJSXPattern, '\n  );\n}');
    changes++;
  }

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixRemainingJSX(content, filePath);
    
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
  console.log('Starting remaining JSX error fixes...');

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
  console.log('Remaining JSX error fixes completed!');
}

main().catch(console.error);