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

  // Fix duplicated className attributes
  const duplicateClassNamePattern = /className="([^"]+)"[^>]*className="([^"]+)"[^>]*>/g;
  if (duplicateClassNamePattern.test(content)) {
    content = content.replace(duplicateClassNamePattern, 'className="$1 $2">');
    modified = true;
  }

  // Fix malformed JSX elements with duplicated attributes
  const malformedElementPattern = /<([^>]+)>\s*([^<]+)<\/\1>\s*<([^>]+)>\s*([^<]+)<\/\3>/g;
  if (malformedElementPattern.test(content)) {
    content = content.replace(malformedElementPattern, '<$1>$2 $4</$1>');
    modified = true;
  }

  // Fix elements with duplicated closing tags
  const duplicateClosingPattern = /<\/div>\s*<\/div>/g;
  if (duplicateClosingPattern.test(content)) {
    content = content.replace(duplicateClosingPattern, '</div>');
    modified = true;
  }

  // Fix malformed JSX with extra attributes
  const extraAttributePattern = /className="([^"]+)"[^>]*>\s*([^<]+)<\/div>\s*className="([^"]+)"[^>]*>/g;
  if (extraAttributePattern.test(content)) {
    content = content.replace(extraAttributePattern, 'className="$1 $3">$2</div>');
    modified = true;
  }

  // Fix malformed return statements
  const malformedReturnPattern = /return\s*\(\s*<>\s*<\/>\s*<([^>]+)>/g;
  if (malformedReturnPattern.test(content)) {
    content = content.replace(malformedReturnPattern, 'return (\n    <>\n      <$1>');
    modified = true;
  }

  // Fix JSX fragments with missing closing tags
  const fragmentPattern = /<>\s*<([^>]+)>\s*([^<]+)<\/\1>\s*$/gm;
  if (fragmentPattern.test(content)) {
    content = content.replace(fragmentPattern, '<>\n      <$1>$2</$1>\n    </>');
    modified = true;
  }

  // Fix array syntax with semicolons
  const arraySemicolonPattern = /benefits:\s*\[([^\]]+)\],;/g;
  if (arraySemicolonPattern.test(content)) {
    content = content.replace(arraySemicolonPattern, (match, benefits) => {
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