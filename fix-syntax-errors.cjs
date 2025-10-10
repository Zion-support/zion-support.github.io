#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of files with TypeScript errors
function getFilesWithErrors() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const files = new Set();
    
    lines.forEach(line => {
      const match = line.match(/^([^(]+)\(/);
      if (match && match[1].endsWith('.tsx')) {
        files.add(match[1]);
      }
    });
    
    return Array.from(files);
  } catch (error) {
    console.log('Error getting files with errors:', error.message);
    return [];
  }
}

// Common fixes for syntax errors
function fixCommonErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals in meta tags
  fixed = fixed.replace(/<meta name="description" content="([^"]*?)(?:\n|$)/g, (match, content) => {
    if (!content.includes('"') && !content.endsWith('"')) {
      return `<meta name="description" content="${content.trim()}" />`;
    }
    return match;
  });
  
  fixed = fixed.replace(/<meta name="keywords" content="([^"]*?)(?:\n|$)/g, (match, content) => {
    if (!content.includes('"') && !content.endsWith('"')) {
      return `<meta name="keywords" content="${content.trim()}" />`;
    }
    return match;
  });
  
  // Fix unterminated title tags
  fixed = fixed.replace(/<title>([^<]*?)(?:\n|$)/g, (match, content) => {
    if (!content.includes('<') && !content.endsWith('</title>')) {
      return `<title>${content.trim()}</title>`;
    }
    return match;
  });
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\s*$/gm, '');
  fixed = fixed.replace(/^\s*>\s*$/gm, '');
  
  // Fix incomplete JSX elements
  fixed = fixed.replace(/<(\w+)([^>]*?)(?:\n|$)(?!>)/g, (match, tag, attrs) => {
    if (attrs.trim() && !attrs.includes('>')) {
      return `<${tag}${attrs}>`;
    }
    return match;
  });
  
  // Fix incomplete closing tags
  fixed = fixed.replace(/<\s*$/gm, '');
  fixed = fixed.replace(/^\s*>\s*$/gm, '');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)(?:\n|$)/g, (match, className) => {
    if (!className.includes('"') && !className.endsWith('"')) {
      return `className="${className.trim()}"`;
    }
    return match;
  });
  
  // Fix incomplete JSX elements that should be self-closing
  fixed = fixed.replace(/<(\w+)([^>]*?)(?:\n|$)(?!>)/g, (match, tag, attrs) => {
    if (attrs.trim() && !attrs.includes('>') && !attrs.includes('/>')) {
      return `<${tag}${attrs} />`;
    }
    return match;
  });
  
  return fixed;
}

// Fix a single file
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCommonErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Getting list of files with errors...');
  const files = getFilesWithErrors();
  
  if (files.length === 0) {
    console.log('No files with errors found.');
    return;
  }
  
  console.log(`Found ${files.length} files with errors.`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files.`);
  
  // Run type check again to see if we fixed anything
  console.log('Running type check again...');
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
  } catch (error) {
    console.log('Type check still has errors. Some files may need manual fixing.');
  }
}

main();