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

  // Fix malformed JSX return statements with empty fragments
  const emptyFragmentPattern = /return\s*\(\s*<>\s*<\/>\s*<([^>]+)>/g;
  if (emptyFragmentPattern.test(content)) {
    content = content.replace(emptyFragmentPattern, 'return (\n    <>\n      <$1>');
    modified = true;
  }

  // Fix unclosed JSX elements
  const unclosedElementPattern = /<([^>]+)>\s*([^<]+);\s*$/gm;
  if (unclosedElementPattern.test(content)) {
    content = content.replace(unclosedElementPattern, '<$1>$2</$1>');
    modified = true;
  }

  // Fix malformed div structures
  const malformedDivPattern = /<div[^>]*>\s*<\/div>\s*<\/div>/g;
  if (malformedDivPattern.test(content)) {
    content = content.replace(malformedDivPattern, '<div></div>');
    modified = true;
  }

  // Fix text content with semicolons
  const textSemicolonPattern = /([^>]+);\s*<\/span>/g;
  if (textSemicolonPattern.test(content)) {
    content = content.replace(textSemicolonPattern, '$1</span>');
    modified = true;
  }

  // Fix malformed h1 tags
  const malformedH1Pattern = /<h1>([^<]+)<\/h1>\s*<span>\s*([^<]+)<\/span>\s*<\/h1>/g;
  if (malformedH1Pattern.test(content)) {
    content = content.replace(malformedH1Pattern, '<h1>$1 <span>$2</span></h1>');
    modified = true;
  }

  // Fix malformed p tags
  const malformedPPattern = /<p>([^<]+);\s*<\/p>\s*<\/p>/g;
  if (malformedPPattern.test(content)) {
    content = content.replace(malformedPPattern, '<p>$1</p>');
    modified = true;
  }

  // Fix malformed button structures
  const malformedButtonPattern = /<button>\s*([^<]+)\s*<\/button>\s*<button>\s*([^<]+),\s*<\/button>/g;
  if (malformedButtonPattern.test(content)) {
    content = content.replace(malformedButtonPattern, '<button>$1</button>\n              <button>$2</button>');
    modified = true;
  }

  // Fix malformed section structures
  const malformedSectionPattern = /<section[^>]*>\s*<\/section>\s*<div[^>]*>\s*<\/div>/g;
  if (malformedSectionPattern.test(content)) {
    content = content.replace(malformedSectionPattern, '<section>\n          <div>');
    modified = true;
  }

  // Fix array syntax issues
  const arraySyntaxPattern = /benefits:\s*\[([^\]]+)\],;/g;
  if (arraySyntaxPattern.test(content)) {
    content = content.replace(arraySyntaxPattern, (match, benefits) => {
      const cleanBenefits = benefits.replace(/;+/g, '');
      return `benefits: [${cleanBenefits}],`;
    });
    modified = true;
  }

  // Fix object property semicolons
  const propertySemicolonPattern = /(\w+):\s*([^,}]+),;/g;
  if (propertySemicolonPattern.test(content)) {
    content = content.replace(propertySemicolonPattern, '$1: $2,');
    modified = true;
  }

  // Fix malformed JSX expressions
  const malformedJSXPattern = /{\s*([^}]+)\s*}\s*<\/div>/g;
  if (malformedJSXPattern.test(content)) {
    content = content.replace(malformedJSXPattern, (match, expression) => {
      if (expression.includes('map') && !expression.includes('return')) {
        return `{${expression}}\n                </div>`;
      }
      return match;
    });
    modified = true;
  }

  // Fix missing closing tags in JSX
  const missingClosingPattern = /<([^>]+)>\s*([^<]+)\s*$/gm;
  if (missingClosingPattern.test(content)) {
    content = content.replace(missingClosingPattern, '<$1>$2</$1>');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files out of ${files.length} total files.`);