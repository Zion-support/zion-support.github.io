#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get files with syntax errors
const filesWithErrors = execSync('pnpm run lint 2>&1 | grep -E "\\.tsx?:" | cut -d: -f1 | sort -u | head -20', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && file.includes('.tsx'));

console.log(`Found ${filesWithErrors.length} files with syntax errors`);

function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix common JSX syntax issues
  // Fix unclosed tags by adding proper closing
  fixed = fixed.replace(/<(\w+)([^>]*?)(?<!\s\/)>/g, (match, tagName, attributes) => {
    if (attributes.includes('/')) return match; // Self-closing tag
    if (tagName.toLowerCase() === 'img' || tagName.toLowerCase() === 'br' || tagName.toLowerCase() === 'hr') {
      return match; // Self-closing tags
    }
    return match;
  });
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*>\s*\}/g, '>');
  fixed = fixed.replace(/\{\s*<\s*\}/g, '<');
  fixed = fixed.replace(/\{\s*\/\s*\}/g, '/');
  
  // Fix broken JSX expressions like {>} or {<}
  fixed = fixed.replace(/\{\s*>\s*\}/g, '>');
  fixed = fixed.replace(/\{\s*<\s*\}/g, '<');
  fixed = fixed.replace(/\{\s*\/\s*\}/g, '/');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/(\w+)\s*>\s*\{\s*>\s*\}/g, '</$1>');
  fixed = fixed.replace(/<\/(\w+)\s*>\s*\{\s*<\s*\}/g, '</$1>');
  fixed = fixed.replace(/<\/(\w+)\s*>\s*\{\s*\/\s*\}/g, '</$1>');
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/=\{\s*>\s*\}/g, '>');
  fixed = fixed.replace(/=\{\s*<\s*\}/g, '<');
  fixed = fixed.replace(/=\{\s*\/\s*\}/g, '/');
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className=\{\s*>\s*\}/g, 'className=""');
  fixed = fixed.replace(/className=\{\s*<\s*\}/g, 'className=""');
  fixed = fixed.replace(/className=\{\s*\/\s*\}/g, 'className=""');
  
  // Fix broken string literals in JSX
  fixed = fixed.replace(/=\{\s*>\s*\}/g, '=""');
  fixed = fixed.replace(/=\{\s*<\s*\}/g, '=""');
  fixed = fixed.replace(/=\{\s*\/\s*\}/g, '=""');
  
  // Remove orphaned JSX fragments
  fixed = fixed.replace(/<>\s*\{\s*>\s*\}\s*<\/>/g, '<></>');
  fixed = fixed.replace(/<>\s*\{\s*<\s*\}\s*<\/>/g, '<></>');
  fixed = fixed.replace(/<>\s*\{\s*\/\s*\}\s*<\/>/g, '<></>');
  
  // Fix broken React.Fragment
  fixed = fixed.replace(/<React\.Fragment>\s*\{\s*>\s*\}\s*<\/React\.Fragment>/g, '<React.Fragment></React.Fragment>');
  fixed = fixed.replace(/<React\.Fragment>\s*\{\s*<\s*\}\s*<\/React\.Fragment>/g, '<React.Fragment></React.Fragment>');
  fixed = fixed.replace(/<React\.Fragment>\s*\{\s*\/\s*\}\s*<\/React\.Fragment>/g, '<React.Fragment></React.Fragment>');
  
  return fixed;
}

let processedCount = 0;
let errorCount = 0;

for (const filePath of filesWithErrors) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      continue;
    }
    
    const originalContent = fs.readFileSync(filePath, 'utf8');
    let fixedContent = fixSyntaxErrors(originalContent);
    
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