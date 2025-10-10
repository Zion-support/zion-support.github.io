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

    // Fix malformed JSX closing tags - more comprehensive patterns
    // Pattern: text; followed by </
    content = content.replace(/([^>])\s*;\s*<\//g, '$1</');
    
    // Fix specific button patterns
    content = content.replace(/button>\s*;\s*<\//g, 'button>\n              </');
    content = content.replace(/button>\s*;\s*$/gm, 'button>');
    
    // Fix h1, h2, h3 patterns
    content = content.replace(/h[1-3]>\s*;\s*<\//g, 'h1>\n            </');
    content = content.replace(/h[1-3]>\s*;\s*$/gm, 'h1>');
    
    // Fix p patterns
    content = content.replace(/p>\s*;\s*<\//g, 'p>\n            </');
    content = content.replace(/p>\s*;\s*$/gm, 'p>');
    
    // Fix span patterns
    content = content.replace(/span>\s*;\s*<\//g, 'span>\n            </');
    content = content.replace(/span>\s*;\s*$/gm, 'span>');
    
    // Fix div patterns
    content = content.replace(/div>\s*;\s*<\//g, 'div>\n            </');
    content = content.replace(/div>\s*;\s*$/gm, 'div>');
    
    // Fix section patterns
    content = content.replace(/section>\s*;\s*<\//g, 'section>\n            </');
    content = content.replace(/section>\s*;\s*$/gm, 'section>');
    
    // Fix main patterns
    content = content.replace(/main>\s*;\s*<\//g, 'main>\n            </');
    content = content.replace(/main>\s*;\s*$/gm, 'main>');
    
    // Fix React.Fragment patterns
    content = content.replace(/React\.Fragment>\s*;\s*<\//g, 'React.Fragment>\n            </');
    content = content.replace(/React\.Fragment>\s*;\s*$/gm, 'React.Fragment>');
    
    // Fix specific text patterns that end with semicolon
    content = content.replace(/Get Started;\s*<\//g, 'Get Started</');
    content = content.replace(/Schedule Demo;\s*<\//g, 'Schedule Demo</');
    content = content.replace(/Learn More;\s*<\//g, 'Learn More</');
    content = content.replace(/Get Accessibility Audit;\s*<\//g, 'Get Accessibility Audit</');
    content = content.replace(/Advanced 5G Features;\s*<\//g, 'Advanced 5G Features</');
    content = content.replace(/Solutions;\s*<\//g, 'Solutions</');
    content = content.replace(/About Zion Tech Group;\s*<\//g, 'About Zion Tech Group</');
    content = content.replace(/Accessibility;\s*<\//g, 'Accessibility</');
    
    // Fix orphaned semicolons at end of lines
    content = content.replace(/;\s*$/gm, '');
    
    // Fix malformed closing tags that are missing the tag name
    content = content.replace(/<\/(\s*)\s*$/gm, '');
    
    // Fix cases where there are extra characters after closing tags
    content = content.replace(/<\/([^>]+)>\s*[^<\s]/g, '</$1>');
    
    // Clean up extra whitespace and newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix specific patterns where semicolons are in the middle of JSX
    content = content.replace(/([^>])\s*;\s*([^<])/g, '$1 $2');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fileFixes = (originalContent.match(/;\s*<\//g) || []).length;
      totalFixes += fileFixes;
      fixedFiles++;
      console.log(`Fixed ${fileFixes} issues in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${totalFixes} JSX syntax issues across ${fixedFiles} files.`);