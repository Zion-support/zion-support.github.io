#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix extra closing patterns
function fixExtraClosing(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix extra closing parenthesis and semicolon
  const extraClosingPattern = /  \);\s*\n\s*\);\s*}/g;
  if (extraClosingPattern.test(fixed)) {
    fixed = fixed.replace(extraClosingPattern, '\n  );\n}');
    changes++;
  }

  // Fix malformed JSX structure
  const malformedJSXPattern = /<>\s*<div[^>]*>[\s\S]*?<\/div>\s*<\/>\s*\);\s*\n\s*\);\s*}/g;
  if (malformedJSXPattern.test(fixed)) {
    fixed = fixed.replace(malformedJSXPattern, (match) => {
      return match.replace(/<\/>\s*\);\s*\n\s*\);\s*}/, '\n    </>\n  );\n}');
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

  // Fix missing closing div tags
  const missingDivPattern = /<div[^>]*>\s*<div[^>]*>[\s\S]*?<\/div>\s*$/gm;
  if (missingDivPattern.test(fixed) && !fixed.includes('</div>')) {
    fixed = fixed.replace(missingDivPattern, (match) => {
      return match + '\n      </div>';
    });
    changes++;
  }

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixExtraClosing(content, filePath);
    
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
  console.log('Starting fix for extra closing patterns...');

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
  console.log('Extra closing patterns fix completed!');
}

main().catch(console.error);