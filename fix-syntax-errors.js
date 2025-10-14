#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/content="([^"]*?)(?=\s*\/>)/g, 'content="$1"');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/[^>]*>\s*<\/[^>]*>/g, (match) => {
    const tags = match.match(/<\/[^>]*>/g);
    return tags[tags.length - 1]; // Keep only the last closing tag
  });

  // Fix orphaned closing tags
  fixed = fixed.replace(/<\/[^>]*>\s*<\/[^>]*>\s*<\/[^>]*>/g, (match) => {
    const tags = match.match(/<\/[^>]*>/g);
    return tags[tags.length - 1];
  });

  // Fix malformed function returns
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;\s*\)\s*;/g, 'return (');
  
  // Fix multiple closing parentheses
  fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*\)\s*;/g, ');');
  
  // Fix orphaned semicolons and braces
  fixed = fixed.replace(/;\s*}\s*;\s*}\s*;\s*}/g, '}');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<([^>]+)>\s*<\/\1>\s*<([^>]+)>/g, '<$1>');
  
  // Fix unterminated JSX elements
  fixed = fixed.replace(/<([^>]+)(?![^<]*\/>)(?![^<]*<\/\1>)/g, (match, tagName) => {
    if (match.includes('=') && !match.includes('/>')) {
      return match + '>';
    }
    return match;
  });

  // Fix orphaned closing tags that don't match opening tags
  const lines = fixed.split('\n');
  const fixedLines = [];
  const openTags = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip lines that are just orphaned closing tags
    if (/^\s*<\/[^>]*>\s*$/.test(line) && openTags.length === 0) {
      continue;
    }
    
    // Track opening tags
    const openingTags = line.match(/<([^\/][^>]*?)>/g);
    if (openingTags) {
      openingTags.forEach(tag => {
        const tagName = tag.match(/<([^\s>]+)/);
        if (tagName && !tag.includes('/>')) {
          openTags.push(tagName[1]);
        }
      });
    }
    
    // Track closing tags
    const closingTags = line.match(/<\/([^>]+)>/g);
    if (closingTags) {
      closingTags.forEach(tag => {
        const tagName = tag.match(/<\/([^>]+)>/);
        if (tagName) {
          const index = openTags.lastIndexOf(tagName[1]);
          if (index !== -1) {
            openTags.splice(index, 1);
          }
        }
      });
    }
    
    fixedLines.push(line);
  }
  
  fixed = fixedLines.join('\n');

  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting syntax error fixes...');

  // Get all TypeScript/JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts'
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }

  console.log(`Fixed ${totalFixed} files.`);
}

main().catch(console.error);