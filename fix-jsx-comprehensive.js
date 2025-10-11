#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Comprehensive JSX syntax fixes
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix missing opening braces in arrays
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*\n\s*icon:/g, 'const $1 = [\n    {\n      icon:');
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*\n\s*title:/g, 'const $1 = [\n    {\n      title:');
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*\n\s*description:/g, 'const $1 = [\n    {\n      description:');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in JSX attributes
  fixed = fixed.replace(/(\w+)="([^"]*)"\s+(\w+)="/g, '$1="$2", $3="');
  
  // Fix missing commas in array elements
  fixed = fixed.replace(/(\w+)\s+(\w+)(?=\s*[\]}])/g, '$1, $2');
  
  // Fix double semicolons and brackets
  fixed = fixed.replace(/;+;+/g, ';');
  fixed = fixed.replace(/\]+\]+/g, ']');
  fixed = fixed.replace(/\}+\}+/g, '}');
  
  // Fix malformed object syntax
  fixed = fixed.replace(/\{\s*icon:/g, '{\n      icon:');
  fixed = fixed.replace(/\{\s*title:/g, '{\n      title:');
  fixed = fixed.replace(/\{\s*description:/g, '{\n      description:');
  
  // Fix missing closing braces in objects
  fixed = fixed.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*\]/g, '$1: $2\n    }]');
  
  // Fix unclosed JSX tags - basic patterns
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
  
  // Fix specific patterns found in the files
  // Fix array with missing opening brace
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\n\s*icon:\s*(\w+),/g, 'const $1 = [\n    {\n      icon: $2,');
  
  // Fix missing commas in meta tags
  fixed = fixed.replace(/meta\s+name="([^"]*)"\s+content="([^"]*)"\s+(\w+)="/g, 'meta name="$1" content="$2", $3="');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in benefits arrays
  fixed = fixed.replace(/benefits:\s*\[([^\]]+)\]/g, (match, content) => {
    const items = content.split(/(?<=')\s+(?=')/).map(item => item.trim()).filter(item => item);
    return `benefits: [${items.map(item => `'${item}'`).join(', ')}]`;
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