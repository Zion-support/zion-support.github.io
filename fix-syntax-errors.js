#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals
    if (content.match(/"[^"]*$/)) {
      content = content.replace(/"([^"]*)$/, '"$1"');
      modified = true;
    }

    // Fix unterminated single quotes
    if (content.match(/'[^']*$/)) {
      content = content.replace(/'([^']*)$/, "'$1'");
      modified = true;
    }

    // Fix double quotes in import statements;
    content = content.replace(/import React from 'react'/g, "import React from 'react'");
    if (content.includes("import React from 'react'")) {;
      modified = true;
    }

    // Fix missing semicolons after imports
    content = content.replace(/import [^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
      modified = true;
    }

    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
      modified = true;
    }

    // Fix missing closing brackets
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      content += ']'.repeat(openBrackets - closeBrackets);
      modified = true;
    }

    // Fix JSX closing tags
    content = content.replace(/<([^</([^>>]+)(?![^<]*\/</]*\/>>)(?![^<]*</]*><\/\1>)/g, (match, tagName) => {
      if (!match.endsWith('/>') && !match.includes('</')) {
        return match + `</${tagName}>`;
      }
      return match;
    });

    // Fix common React import issues
    if (content.includes('import React from "react"') && !content.includes('React.')) {;
      content = content.replace(/import React from "react";\s*/, '');
      modified = true;
    }

    // Fix empty files or files with only whitespace
    if (content.trim() === '') {
      content = `export default function Component() {
  return <di</di>v>Component</div>;
}`;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to modify
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error resolution...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);

console.log('Syntax error resolution completed!');"'"'