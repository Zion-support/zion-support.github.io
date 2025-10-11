#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX syntax fixes
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix missing commas in JSX attributes
  // Pattern: attribute="value" attribute2="value2" -> attribute="value", attribute2="value2"
  fixed = fixed.replace(/(\w+)="([^"]*)"\s+(\w+)="/g, '$1="$2", $3="');
  
  // Fix missing commas in object properties
  // Pattern: 'value' 'value2' -> 'value', 'value2'
  fixed = fixed.replace(/'([^']*)'\s+'([^']*)'/g, "'$1', '$2'");
  
  // Fix missing commas in array elements
  // Pattern: 'value' 'value2' -> 'value', 'value2'
  fixed = fixed.replace(/(\w+)\s+(\w+)(?=\s*[\]}])/g, '$1, $2');
  
  // Fix double semicolons and brackets
  fixed = fixed.replace(/;+;+/g, ';');
  fixed = fixed.replace(/\]+\]+/g, ']');
  fixed = fixed.replace(/\}+\}+/g, '}');
  
  // Fix unclosed JSX tags - basic patterns
  // Fix missing closing tags for common elements
  const commonTags = ['h1', 'h2', 'h3', 'p', 'div', 'span', 'button', 'section', 'article'];
  
  commonTags.forEach(tag => {
    // Fix missing closing tags
    const openTagRegex = new RegExp(`<${tag}([^>]*)>([^<]*)`, 'g');
    fixed = fixed.replace(openTagRegex, (match, attrs, content) => {
      if (!content.includes(`</${tag}>`)) {
        return `<${tag}${attrs}>${content}</${tag}>`;
      }
      return match;
    });
  });
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>([^<]*)<>/g, '<>$1</>');
  fixed = fixed.replace(/<>([^<]*)<([^>]*)>([^<]*)<>/g, '<>$1<$2>$3</>');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{([^}]*)\s*\{/g, '{$1');
  fixed = fixed.replace(/\}\s*\{/g, '} {');
  
  // Fix missing closing parentheses in JSX
  fixed = fixed.replace(/\(([^)]*)\s*$/gm, '($1)');
  
  // Fix missing semicolons after statements
  fixed = fixed.replace(/(\w+)\s*$/gm, (match, content) => {
    if (content && !content.endsWith(';') && !content.endsWith('}') && !content.endsWith(')') && !content.endsWith(']')) {
      return content + ';';
    }
    return match;
  });
  
  return fixed;
}

// Main function
async function main() {
  // Find all TypeScript/JSX files
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = fixJSXSyntax(content);
      
      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nProcessing complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Errors: ${errorCount}`);
}

main().catch(console.error);