#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with JSX syntax errors
const filesWithErrors = execSync('find src -name "*.tsx" -type f -exec grep -l "className=[^\\"]" {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim());

console.log(`Found ${filesWithErrors.length} files with JSX syntax errors`);

let totalFixed = 0;

filesWithErrors.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let fileFixed = false;

    // Fix malformed className attributes with trailing quotes
    // Pattern: className="some-class">", -> className="some-class"
    const classNameRegex1 = /className="([^"]+?)">"/g;
    fixedContent = fixedContent.replace(classNameRegex1, (match, className) => {
      fileFixed = true;
      return `className="${className}"`;
    });

    // Fix malformed className attributes without quotes
    // Pattern: className=some-class">" -> className="some-class"
    const classNameRegex2 = /className=([^"]+?)">"/g;
    fixedContent = fixedContent.replace(classNameRegex2, (match, className) => {
      fileFixed = true;
      return `className="${className}"`;
    });

    // Fix malformed className with trailing comma and quote
    // Pattern: className="some-class">", -> className="some-class"
    const classNameRegex3 = /className="([^"]+?)">",/g;
    fixedContent = fixedContent.replace(classNameRegex3, (match, className) => {
      fileFixed = true;
      return `className="${className}"`;
    });

    // Fix malformed JSX tags with trailing quotes
    // Pattern: <Component className="...">", -> <Component className="...">
    const jsxTagRegex = /(<\w+[^>]*?)">",/g;
    fixedContent = fixedContent.replace(jsxTagRegex, (match, tag) => {
      fileFixed = true;
      return `${tag}>`;
    });

    // Fix malformed closing tags
    // Pattern: </Component>", -> </Component>
    const closingTagRegex = /(<\/\w+>)">",/g;
    fixedContent = fixedContent.replace(closingTagRegex, (match, tag) => {
      fileFixed = true;
      return tag;
    });

    // Fix malformed self-closing tags
    // Pattern: <Component />">" -> <Component />
    const selfClosingRegex = /(<[^>]*\/>)">"/g;
    fixedContent = fixedContent.replace(selfClosingRegex, (match, tag) => {
      fileFixed = true;
      return tag;
    });

    if (fileFixed) {
      fs.writeFileSync(filePath, fixedContent);
      totalFixed++;
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nTotal files fixed: ${totalFixed}`);