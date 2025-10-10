#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Pattern to find all JSX files
const jsxFiles = glob.sync('app/**/*.tsx', { cwd: process.cwd() });

console.log(`Found ${jsxFiles.length} JSX files to process...`);

let fixedFiles = 0;
let totalFixes = 0;

jsxFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileFixes = 0;

    // Fix missing closing tags for buttons
    // Pattern: <button ...>text followed by another <button
    content = content.replace(
      /(<button[^>]*>[\s\S]*?)([^<]*?)(\s*<button)/g,
      '$1$2</button>$3'
    );
    
    // Fix missing closing tags for h1, h2, h3
    content = content.replace(
      /(<h[1-3][^>]*>[\s\S]*?)([^<]*?)(\s*<h[1-3])/g,
      '$1$2</h1>$3'
    );
    
    // Fix missing closing tags for p
    content = content.replace(
      /(<p[^>]*>[\s\S]*?)([^<]*?)(\s*<p)/g,
      '$1$2</p>$3'
    );
    
    // Fix missing closing tags for span
    content = content.replace(
      /(<span[^>]*>[\s\S]*?)([^<]*?)(\s*<span)/g,
      '$1$2</span>$3'
    );
    
    // Fix missing closing tags for div
    content = content.replace(
      /(<div[^>]*>[\s\S]*?)([^<]*?)(\s*<div)/g,
      '$1$2</div>$3'
    );
    
    // Fix missing closing tags for section
    content = content.replace(
      /(<section[^>]*>[\s\S]*?)([^<]*?)(\s*<section)/g,
      '$1$2</section>$3'
    );
    
    // Fix missing closing tags for main
    content = content.replace(
      /(<main[^>]*>[\s\S]*?)([^<]*?)(\s*<main)/g,
      '$1$2</main>$3'
    );
    
    // Fix specific patterns where closing tags are missing at the end of elements
    // Pattern: <button ...>text followed by </div> or </section>
    content = content.replace(
      /(<button[^>]*>[\s\S]*?)([^<]*?)(\s*<\/div>)/g,
      '$1$2</button>$3'
    );
    
    content = content.replace(
      /(<button[^>]*>[\s\S]*?)([^<]*?)(\s*<\/section>)/g,
      '$1$2</button>$3'
    );
    
    content = content.replace(
      /(<button[^>]*>[\s\S]*?)([^<]*?)(\s*<\/main>)/g,
      '$1$2</button>$3'
    );
    
    // Fix h1, h2, h3 patterns
    content = content.replace(
      /(<h[1-3][^>]*>[\s\S]*?)([^<]*?)(\s*<\/div>)/g,
      '$1$2</h1>$3'
    );
    
    content = content.replace(
      /(<h[1-3][^>]*>[\s\S]*?)([^<]*?)(\s*<\/section>)/g,
      '$1$2</h1>$3'
    );
    
    // Fix p patterns
    content = content.replace(
      /(<p[^>]*>[\s\S]*?)([^<]*?)(\s*<\/div>)/g,
      '$1$2</p>$3'
    );
    
    content = content.replace(
      /(<p[^>]*>[\s\S]*?)([^<]*?)(\s*<\/section>)/g,
      '$1$2</p>$3'
    );
    
    // Fix span patterns
    content = content.replace(
      /(<span[^>]*>[\s\S]*?)([^<]*?)(\s*<\/div>)/g,
      '$1$2</span>$3'
    );
    
    content = content.replace(
      /(<span[^>]*>[\s\S]*?)([^<]*?)(\s*<\/section>)/g,
      '$1$2</span>$3'
    );
    
    // Fix specific malformed patterns
    // Pattern: text followed by </div> without proper closing tag
    content = content.replace(
      /([^>])\s*(\s*<\/div>)/g,
      '$1$2'
    );
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fileFixes = 1; // Count as 1 fix per file
      totalFixes += fileFixes;
      fixedFiles++;
      console.log(`Fixed ${fileFixes} issues in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${totalFixes} JSX syntax issues across ${fixedFiles} files.`);