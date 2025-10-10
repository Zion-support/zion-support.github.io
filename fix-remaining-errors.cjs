#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Pattern to find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix JSX fragment issues - replace empty fragments with proper structure
  const emptyFragmentPattern = /return\s*\(\s*<>\s*<\/>\s*<([^>]+)>/g;
  if (emptyFragmentPattern.test(content)) {
    content = content.replace(emptyFragmentPattern, 'return (\n    <>\n      <$1>');
    modified = true;
  }

  // Fix malformed JSX closing tags
  const malformedClosingPattern = /<\/div>\s*<\/div>/g;
  if (malformedClosingPattern.test(content)) {
    content = content.replace(malformedClosingPattern, '</div>');
    modified = true;
  }

  // Fix array syntax with semicolons in benefits
  const benefitsPattern = /benefits:\s*\[([^\]]+)\],;/g;
  if (benefitsPattern.test(content)) {
    content = content.replace(benefitsPattern, (match, benefits) => {
      const cleanBenefits = benefits.replace(/;+/g, '');
      return `benefits: [${cleanBenefits}],`;
    });
    modified = true;
  }

  // Fix array items with semicolons
  const arrayItemPattern = /'([^']+)',;/g;
  if (arrayItemPattern.test(content)) {
    content = content.replace(arrayItemPattern, "'$1',");
    modified = true;
  }

  // Fix object property semicolons
  const propertySemicolonPattern = /(\w+):\s*([^,}]+),;/g;
  if (propertySemicolonPattern.test(content)) {
    content = content.replace(propertySemicolonPattern, '$1: $2,');
    modified = true;
  }

  // Fix missing closing brackets in arrays
  const missingBracketPattern = /}\s*}\s*],;/g;
  if (missingBracketPattern.test(content)) {
    content = content.replace(missingBracketPattern, '}\n  ],');
    modified = true;
  }

  // Fix malformed JSX elements
  const malformedJSXPattern = /<div[^>]*>\s*<\/div>\s*<\/div>/g;
  if (malformedJSXPattern.test(content)) {
    content = content.replace(malformedJSXPattern, '<div></div>');
    modified = true;
  }

  // Fix text content with semicolons
  const textSemicolonPattern = /([^>]+);\s*<\/span>/g;
  if (textSemicolonPattern.test(content)) {
    content = content.replace(textSemicolonPattern, '$1</span>');
    modified = true;
  }

  // Fix unclosed JSX elements
  const unclosedElementPattern = /<([^>]+)>\s*([^<]+);\s*$/gm;
  if (unclosedElementPattern.test(content)) {
    content = content.replace(unclosedElementPattern, '<$1>$2</$1>');
    modified = true;
  }

  // Fix malformed return statements
  const malformedReturnPattern = /return\s*\(\s*<>\s*<\/>\s*<([^>]+)>\s*<([^>]+)>/g;
  if (malformedReturnPattern.test(content)) {
    content = content.replace(malformedReturnPattern, 'return (\n    <>\n      <$1>\n        <$2>');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files out of ${files.length} total files.`);