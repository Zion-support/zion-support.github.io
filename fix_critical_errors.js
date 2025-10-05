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

// Fix critical TypeScript/JSX syntax issues
const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed template literals in className
    const classNameRegex = /className=\{`([^`]*)\$\{([^}]+)\}\s*\+/g;
    if (classNameRegex.test(content)) {
      content = content.replace(classNameRegex, 'className={`$1${$2} +');
      modified = true;
    }

    // Fix malformed template literals with ${> pattern
    const templateRegex = /\$\{>\}/g;
    if (templateRegex.test(content)) {
      content = content.replace(templateRegex, "'>'");
      modified = true;
    }

    // Fix missing closing tags for input elements
    const inputRegex = /<input([^>]*?)\s*className="([^"]*)"\s*([^>]*?)\s*>/g;
    if (inputRegex.test(content)) {
      content = content.replace(inputRegex, '<input$1 className="$2" $3 />');
      modified = true;
    }

    // Fix malformed object literals with missing quotes
    const objectRegex = /(\w+):\s*([^,}]+)\s*([,}])/g;
    if (objectRegex.test(content)) {
      content = content.replace(objectRegex, (match, key, value, ending) => {
        if (value.includes("'") && !value.startsWith("'") && !value.endsWith("'")) {
          return `${key}: '${value}'${ending}`;
        }
        return match;
      });
      modified = true;
    }

    // Fix malformed JSX with unexpected tokens
    const jsxTokenRegex = /\{'>'\}/g;
    if (jsxTokenRegex.test(content)) {
      content = content.replace(jsxTokenRegex, "'>'");
      modified = true;
    }

    // Fix missing closing tags for self-closing elements
    const selfClosingRegex = /<(\w+)([^>]*?)\s*>\s*<\/\1>/g;
    if (selfClosingRegex.test(content)) {
      content = content.replace(selfClosingRegex, '<$1$2 />');
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