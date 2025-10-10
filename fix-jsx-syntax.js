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

    // Fix malformed JSX closing tags
    // Pattern: </ followed by whitespace and semicolon
    content = content.replace(/<\/(\s*);/g, '</$1>');
    
    // Fix standalone semicolons that should be closing tags
    // Look for patterns like: text; followed by whitespace and </
    content = content.replace(/([^>])\s*;\s*<\//g, '$1</');
    
    // Fix specific patterns where semicolons are used instead of closing tags
    // Pattern: text; followed by newline and whitespace
    content = content.replace(/([^>])\s*;\s*\n\s*<\//g, '$1\n  </');
    
    // Fix cases where there's a semicolon at the end of a line that should be a closing tag
    content = content.replace(/([^>])\s*;\s*$/gm, '$1');
    
    // Fix specific malformed patterns
    // Pattern: Get Started; followed by </
    content = content.replace(/Get Started;\s*<\//g, 'Get Started</');
    content = content.replace(/Schedule Demo;\s*<\//g, 'Schedule Demo</');
    content = content.replace(/Learn More;\s*<\//g, 'Learn More</');
    content = content.replace(/Get Accessibility Audit;\s*<\//g, 'Get Accessibility Audit</');
    content = content.replace(/Advanced 5G Features;\s*<\//g, 'Advanced 5G Features</');
    content = content.replace(/Solutions;\s*<\//g, 'Solutions</');
    
    // Fix button closing tags specifically
    content = content.replace(/button>\s*;\s*<\//g, 'button>\n              </');
    content = content.replace(/h1>\s*;\s*<\//g, 'h1>\n            </');
    content = content.replace(/h2>\s*;\s*<\//g, 'h2>\n            </');
    content = content.replace(/p>\s*;\s*<\//g, 'p>\n            </');
    content = content.replace(/span>\s*;\s*<\//g, 'span>\n            </');
    
    // Fix cases where there are orphaned semicolons
    content = content.replace(/;\s*<\/(button|h1|h2|h3|p|span|div|section|article|header|footer|main|nav|aside)/g, '</$1');
    
    // Fix malformed closing tags that are missing the tag name
    content = content.replace(/<\/(\s*)\s*$/gm, '');
    
    // Clean up extra whitespace and newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
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