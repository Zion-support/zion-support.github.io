#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Pattern to match malformed onClick handlers
const malformedOnClickPattern = /onClick=\{\(\) = aria-label="([^"]+)\}/g;

// Function to fix malformed onClick handlers
function fixOnClickHandlers(content) {
  return content.replace(malformedOnClickPattern, (match, ariaLabel) => {
    // Extract the actual function call from the aria-label
    const functionCall = ariaLabel.replace(/^.*?(\w+\([^)]*\))/, '$1');
    return `onClick={() => ${functionCall}}`;
  });
}

// Function to fix other common parsing errors
function fixCommonErrors(content) {
  // Fix malformed JSX with duplicate attributes
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/button>/g, '$1>$2</button>');
  
  // Fix malformed className attributes
  content = content.replace(/className=\{`([^`]+)`\}\s*>\s*([^<]+)\s*className=\{`([^`]+)`\}/g, 'className={`$1`}>$2');
  
  return content;
}

async function main() {
  // Get all TypeScript/JavaScript files in src/components
  const files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  let fixedFiles = 0;

  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let fixedContent = content;
      
      // Apply fixes
      fixedContent = fixOnClickHandlers(fixedContent);
      fixedContent = fixCommonErrors(fixedContent);
      
      // Only write if content changed
      if (fixedContent !== content) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedFiles++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log(`\nFixed ${fixedFiles} files`);
}

main().catch(console.error);