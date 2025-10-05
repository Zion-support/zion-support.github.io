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

// Fix string literal issues
const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed string literals like 'string[]; -> string[];
    const stringArrayRegex = /:\s*'string\[\];/g;
    if (stringArrayRegex.test(content)) {
      content = content.replace(stringArrayRegex, ': string[];');
      modified = true;
    }

    // Fix malformed closing brackets like '}>; -> }>;
    const closingBracketRegex = /'\}>;/g;
    if (closingBracketRegex.test(content)) {
      content = content.replace(closingBracketRegex, '}>;');
      modified = true;
    }

    // Fix malformed string literals in template literals
    const templateStringRegex = /\$\{([^}]*?)'([^}]*?)\}/g;
    if (templateStringRegex.test(content)) {
      content = content.replace(templateStringRegex, '${$1$2}');
      modified = true;
    }

    // Fix malformed quotes in object properties
    const quoteRegex = /(\w+):\s*'([^']*?)'([^,}]*?)([,}])/g;
    if (quoteRegex.test(content)) {
      content = content.replace(quoteRegex, (match, key, value, extra, ending) => {
        if (extra.includes("'")) {
          return `${key}: '${value}${extra.replace(/'/g, '')}'${ending}`;
        }
        return match;
      });
      modified = true;
    }

    // Fix malformed JSX attributes
    const jsxAttrRegex = /className="([^"]*?)'([^"]*?)"/g;
    if (jsxAttrRegex.test(content)) {
      content = content.replace(jsxAttrRegex, 'className="$1$2"');
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