#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX syntax error patterns and their fixes
const fixes = [
  // Fix unclosed tags with nested content
  {
    pattern: /<h([1-6])[^>]*>([^<]+)<p[^>]*>([^<]+)<\/p>\s*<\/p>/g,
    replacement: '<h$1$1>$2</h$1$1>\n            <p$3>$4</p>'
  },
  // Fix unclosed tags with nested divs
  {
    pattern: /<h([1-6])[^>]*>([^<]+)<div[^>]*>([^<]+)<\/div>/g,
    replacement: '<h$1$1>$2</h$1$1>\n            <div$3>$4</div>'
  },
  // Fix unclosed tags with nested spans
  {
    pattern: /<h([1-6])[^>]*>([^<]+)<span[^>]*>([^<]+)<\/span>/g,
    replacement: '<h$1$1>$2</h$1$1>\n            <span$3>$4</span>'
  },
  // Fix unclosed divs with nested content
  {
    pattern: /<div[^>]*>([^<]+)<div[^>]*>([^<]+)<\/div>/g,
    replacement: '<div$1>$2</div>\n            <div$3>$4</div>'
  },
  // Fix unclosed spans with nested content
  {
    pattern: /<span[^>]*>([^<]+)<span[^>]*>([^<]+)<\/span>/g,
    replacement: '<span$1>$2</span>\n            <span$3>$4</span>'
  },
  // Fix unclosed p tags with nested content
  {
    pattern: /<p[^>]*>([^<]+)<p[^>]*>([^<]+)<\/p>/g,
    replacement: '<p$1>$2</p>\n            <p$3>$4</p>'
  },
  // Fix unclosed tags with text content
  {
    pattern: /<h([1-6])[^>]*>([^<]+)<\/h([1-6])>/g,
    replacement: '<h$1$1>$2</h$1$1>'
  },
  // Fix unclosed divs with text content
  {
    pattern: /<div[^>]*>([^<]+)<\/div>/g,
    replacement: '<div$1>$2</div>'
  },
  // Fix unclosed spans with text content
  {
    pattern: /<span[^>]*>([^<]+)<\/span>/g,
    replacement: '<span$1>$2</span>'
  },
  // Fix unclosed p tags with text content
  {
    pattern: /<p[^>]*>([^<]+)<\/p>/g,
    replacement: '<p$1>$2</p>'
  },
  // Fix malformed JSX expressions
  {
    pattern: /<div[^>]*>([^<]+)<\/div><div[^>]*>([^<]+)<\/div>/g,
    replacement: '<div$1>$2</div>\n            <div$3>$4</div>'
  },
  // Fix unclosed tags in map functions
  {
    pattern: /{([^}]+)\.map\(([^)]+)\) => \(<div[^>]*>([^<]+)<\/div>/g,
    replacement: '{$1.map($2) => (\n              <div$3>$4</div>'
  },
  // Fix unclosed tags in conditional rendering
  {
    pattern: /{([^}]+) && <div[^>]*>([^<]+)<\/div>/g,
    replacement: '{$1 && (\n              <div$2>$3</div>\n            )}'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    // Fix common malformed JSX patterns
    content = content.replace(/<h([1-6])[^>]*>([^<]+)<p[^>]*>([^<]+)<\/p>\s*<\/p>/g, '<h$1$1>$2</h$1$1>\n            <p$3>$4</p>');
    content = content.replace(/<div[^>]*>([^<]+)<div[^>]*>([^<]+)<\/div>/g, '<div$1>$2</div>\n            <div$3>$4</div>');
    content = content.replace(/<span[^>]*>([^<]+)<span[^>]*>([^<]+)<\/span>/g, '<span$1>$2</span>\n            <span$3>$4</span>');
    
    // Fix unclosed tags that are common
    content = content.replace(/<h([1-6])[^>]*>([^<]+)<\/h([1-6])>/g, '<h$1$1>$2</h$1$1>');
    content = content.replace(/<div[^>]*>([^<]+)<\/div>/g, '<div$1>$2</div>');
    content = content.replace(/<span[^>]*>([^<]+)<\/span>/g, '<span$1>$2</span>');
    content = content.replace(/<p[^>]*>([^<]+)<\/p>/g, '<p$1>$2</p>');
    
    // Fix malformed closing tags
    content = content.replace(/<\/MessageSquare>/g, '</a>');
    content = content.replace(/<\/Calendar>/g, '</a>');
    content = content.replace(/<\/Cube>/g, '</div>');
    content = content.replace(/<\/BarChart3>/g, '</div>');
    
    // Fix unclosed JSX fragments
    content = content.replace(/<div[^>]*>([^<]+)<\/div><div[^>]*>([^<]+)<\/div>/g, '<div$1>$2</div>\n            <div$3>$4</div>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JSX files
const files = await glob('app/**/*.{tsx,ts}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);