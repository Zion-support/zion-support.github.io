#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TSX files
const tsxFiles = execSync('find . -name "*.tsx" -not -path "./node_modules/*" -not -path "./dist/*" | head -50', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Found ${tsxFiles.length} TSX files to check`);

function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix malformed closing tags - pattern: text followed by ; or < or > on new line
  fixed = fixed.replace(/(\w+)\s*;\s*$/gm, '$1');
  fixed = fixed.replace(/(\w+)\s*<\s*$/gm, '$1');
  fixed = fixed.replace(/(\w+)\s*>\s*$/gm, '$1');
  
  // Fix broken button tags
  fixed = fixed.replace(/<button([^>]*)>\s*([^<]+)\s*;\s*$/gm, '<button$1>$2</button>');
  fixed = fixed.replace(/<button([^>]*)>\s*([^<]+)\s*<\s*$/gm, '<button$1>$2</button>');
  fixed = fixed.replace(/<button([^>]*)>\s*([^<]+)\s*>\s*$/gm, '<button$1>$2</button>');
  
  // Fix broken heading tags
  fixed = fixed.replace(/<(h[1-6])([^>]*)>\s*([^<]+)\s*;\s*$/gm, '<$1$2>$3</$1>');
  fixed = fixed.replace(/<(h[1-6])([^>]*)>\s*([^<]+)\s*<\s*$/gm, '<$1$2>$3</$1>');
  fixed = fixed.replace(/<(h[1-6])([^>]*)>\s*([^<]+)\s*>\s*$/gm, '<$1$2>$3</$1>');
  
  // Fix broken paragraph tags
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*;\s*$/gm, '<p$1>$2</p>');
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*<\s*$/gm, '<p$1>$2</p>');
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*>\s*$/gm, '<p$1$2>$3</$1>');
  
  // Fix broken span tags
  fixed = fixed.replace(/<span([^>]*)>\s*([^<]+)\s*;\s*$/gm, '<span$1>$2</span>');
  fixed = fixed.replace(/<span([^>]*)>\s*([^<]+)\s*<\s*$/gm, '<span$1>$2</span>');
  fixed = fixed.replace(/<span([^>]*)>\s*([^<]+)\s*>\s*$/gm, '<span$1>$2</span>');
  
  // Fix broken div tags
  fixed = fixed.replace(/<div([^>]*)>\s*([^<]+)\s*;\s*$/gm, '<div$1>$2</div>');
  fixed = fixed.replace(/<div([^>]*)>\s*([^<]+)\s*<\s*$/gm, '<div$1>$2</div>');
  fixed = fixed.replace(/<div([^>]*)>\s*([^<]+)\s*>\s*$/gm, '<div$1>$2</div>');
  
  // Fix broken section tags
  fixed = fixed.replace(/<section([^>]*)>\s*([^<]+)\s*;\s*$/gm, '<section$1>$2</section>');
  fixed = fixed.replace(/<section([^>]*)>\s*([^<]+)\s*<\s*$/gm, '<section$1>$2</section>');
  fixed = fixed.replace(/<section([^>]*)>\s*([^<]+)\s*>\s*$/gm, '<section$1>$2</section>');
  
  // Fix broken ul/li tags
  fixed = fixed.replace(/<ul([^>]*)>\s*([^<]+)\s*;\s*$/gm, '<ul$1>$2</ul>');
  fixed = fixed.replace(/<ul([^>]*)>\s*([^<]+)\s*<\s*$/gm, '<ul$1>$2</ul>');
  fixed = fixed.replace(/<ul([^>]*)>\s*([^<]+)\s*>\s*$/gm, '<ul$1>$2</ul>');
  
  fixed = fixed.replace(/<li([^>]*)>\s*([^<]+)\s*;\s*$/gm, '<li$1>$2</li>');
  fixed = fixed.replace(/<li([^>]*)>\s*([^<]+)\s*<\s*$/gm, '<li$1>$2</li>');
  fixed = fixed.replace(/<li([^>]*)>\s*([^<]+)\s*>\s*$/gm, '<li$1>$2</li>');
  
  // Fix broken React.Fragment tags
  fixed = fixed.replace(/<React\.Fragment>\s*([^<]+)\s*;\s*$/gm, '<React.Fragment>$1</React.Fragment>');
  fixed = fixed.replace(/<React\.Fragment>\s*([^<]+)\s*<\s*$/gm, '<React.Fragment>$1</React.Fragment>');
  fixed = fixed.replace(/<React\.Fragment>\s*([^<]+)\s*>\s*$/gm, '<React.Fragment>$1</React.Fragment>');
  
  // Fix broken JSX expressions
  fixed = fixed.replace(/\{\s*>\s*\}/g, '>');
  fixed = fixed.replace(/\{\s*<\s*\}/g, '<');
  fixed = fixed.replace(/\{\s*\/\s*\}/g, '/');
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className=\{\s*>\s*\}/g, 'className=""');
  fixed = fixed.replace(/className=\{\s*<\s*\}/g, 'className=""');
  fixed = fixed.replace(/className=\{\s*\/\s*\}/g, 'className=""');
  
  // Fix broken string literals
  fixed = fixed.replace(/=\{\s*>\s*\}/g, '=""');
  fixed = fixed.replace(/=\{\s*<\s*\}/g, '=""');
  fixed = fixed.replace(/=\{\s*\/\s*\}/g, '=""');
  
  // Fix orphaned closing tags
  fixed = fixed.replace(/^\s*;\s*$/gm, '');
  fixed = fixed.replace(/^\s*<\s*$/gm, '');
  fixed = fixed.replace(/^\s*>\s*$/gm, '');
  
  return fixed;
}

let processedCount = 0;
let errorCount = 0;

for (const filePath of tsxFiles) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      continue;
    }
    
    const originalContent = fs.readFileSync(filePath, 'utf8');
    let fixedContent = fixJSXErrors(originalContent);
    
    // Only write if content changed
    if (fixedContent !== originalContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      processedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorCount++;
  }
}

console.log(`\nProcessed ${processedCount} files, ${errorCount} errors`);