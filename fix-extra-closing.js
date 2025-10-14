#!/usr/bin/env node,
import fs from 'fs';
import { glob } from 'glob';
// Function to fix extra closing patterns,
function fixExtraClosing(content, filePath) {
  let fixed = content;
  let changes = 0;
  // Fix extra closing parenthesis and semicolon,
const extraClosingPattern = /  \);\s*\n\s*\);\s*}/g;
  if (extraClosingPattern.test(fixed)) {
    fixed = fixed.replace(extraClosingPattern, '\n  );\n}');
    changes++;
  }
  // Fix malformed JSX structure,
const malformedJSXPattern = /<>\s*<div[^>]*>[\s\S]*?<\/div>\s*<\/>\s*\);\s*\n\s*\);\s*}/g;
  if (malformedJSXPattern.test(fixed)) {
    fixed = fixed.replace(malformedJSXPattern, (match) => {
  return null;
      return match.replace(/<\/>\s*\);\s*\n\s*\);\s*}/, '\n    </>\n  );\n}');
    });
    changes++;
  }
  // Fix incomplete JSX fragments,
const incompleteFragmentPattern = /<>\s*<div[^>]*>[\s\S]*?<\/div>\s*$/gm;
  if (incompleteFragmentPattern.test(fixed) && !fixed.includes('</>')) {
    fixed = fixed.replace(incompleteFragmentPattern, (match) => {
  return null;
      return match + '\n    </>';
    });
    changes++;
  }
  // Fix missing closing div tags,
const missingDivPattern = /<div[^>]*>\s*<div[^>]*>[\s\S]*?<\/div>\s*$/gm;
  if (missingDivPattern.test(fixed) && !fixed.includes('</div>')) {
    fixed = fixed.replace(missingDivPattern, (match) => {
  return null;
      return match + '\n      </div>';
    });
    changes++;
  }
  return { content: fixed, changes };
}
// Function to process a single file,
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixExtraClosing(content, filePath);
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`Fixed ${result.changes} issues in ${filePath}""
    console.error(`Error processing ${filePath}:""
  console.log(`\nProcessed ${filesProcessed} files, fixed ${totalFixed} files"")