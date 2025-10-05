#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all .tsx files in src/components
const findFiles = () => {
  try {
    const result = execSync('find src/components -name "*.tsx"', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
};

// Fix common TypeScript/JSX syntax issues
const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed style objects: style={{> -> style={{
    const styleRegex = /style=\{\{\>/g;
    if (styleRegex.test(content)) {
      content = content.replace(styleRegex, 'style={{');
      modified = true;
    }

    // Fix malformed object literals with icon: '> },'
    const iconRegex = /icon:\s*'>\s*\},\s*'/g;
    if (iconRegex.test(content)) {
      content = content.replace(iconRegex, "icon: '>' },");
      modified = true;
    }

    // Fix malformed object literals with icon: '> }'
    const iconRegex2 = /icon:\s*'>\s*\}'/g;
    if (iconRegex2.test(content)) {
      content = content.replace(iconRegex2, "icon: '>' }");
      modified = true;
    }

    // Fix malformed JSX with unexpected tokens like {'>'}
    const jsxTokenRegex = /\{'>'\}/g;
    if (jsxTokenRegex.test(content)) {
      content = content.replace(jsxTokenRegex, "'>'");
      modified = true;
    }

    // Fix missing commas in object arrays
    const arrayCommaRegex = /}\s*\n\s*{/g;
    if (arrayCommaRegex.test(content)) {
      content = content.replace(arrayCommaRegex, '},\n    {');
      modified = true;
    }

    // Fix malformed template literals in JSX
    const templateRegex = /\$\{([^}]+)\}\s*\+/g;
    if (templateRegex.test(content)) {
      content = content.replace(templateRegex, '${$1} +');
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
};

// Main execution
const files = findFiles();
let fixedCount = 0;

console.log(`Found ${files.length} .tsx files to check...`);

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);