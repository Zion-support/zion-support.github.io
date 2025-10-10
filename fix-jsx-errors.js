#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { execSync } from 'child_process';

<<<<<<< HEAD
// Function to process a file;
function processFile(filePath) {
  try {
    // Fix malformed JSX closing tags;
    if (content.includes('< />')) {
      content = content.replace(/< \/>/g, '</div>');
      modified = true;
    }

    // Fix malformed JSX fragments;
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/<>/g, '<div>');
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }

    // Fix missing closing tags by counting opening and closing divs;
    if (openDivs > closeDivs) {
      // Add missing closing divs before the last closing brace;
      if (lastBraceIndex > 0) {
        content = beforeBrace + missingDivsStr + afterBrace;
=======
// Common JSX syntax fixes
const fixes = [
  // Fix unclosed h1 tags
  {
    pattern: /<h1([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<h1$1>$2</h1>',
    description: 'Fix unclosed h1 tags'
  },
  // Fix unclosed h2 tags
  {
    pattern: /<h2([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<h2$1>$2</h2>',
    description: 'Fix unclosed h2 tags'
  },
  // Fix unclosed h3 tags
  {
    pattern: /<h3([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<h3$1>$2</h3>',
    description: 'Fix unclosed h3 tags'
  },
  // Fix unclosed p tags
  {
    pattern: /<p([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<p$1>$2</p>',
    description: 'Fix unclosed p tags'
  },
  // Fix unclosed div tags
  {
    pattern: /<div([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<div$1>$2</div>',
    description: 'Fix unclosed div tags'
  },
  // Fix unclosed span tags
  {
    pattern: /<span([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<span$1>$2</span>',
    description: 'Fix unclosed span tags'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
        modified = true;
        console.log(`Applied ${fix.description} to ${filePath}`);
      }
<<<<<<< HEAD
    }

    // Fix malformed Helmet tags;
    if (content.includes('<Helmet>') && !content.includes('</Helmet>')) {
      content = content.replace(/<Helmet>/g, '<div>');
      content = content.replace(/<\/Helmet>/g, '</div>');
      modified = true;
    }

    // Fix other common JSX issues;
    if (content.includes('</Helmet>') && !content.includes('<Helmet>')) {
      content = content.replace(/<\/Helmet>/g, '</div>');
      modified = true;
    }

=======
    });
    
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
    if (modified) {
      fs.writeFileSync(filePath, content);
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
      return true;
    }
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error processing ${filePath}:`, error.message);
=======
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
    return false;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
// Main execution;
async function main() {
  // Find all TypeScript/JavaScript files in app directory;
  files.forEach(file => {)
    if (processFile(file)) {
      fixedCount++;
=======
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
    }
  }
  
  return files;
}

// Main execution
console.log('🔧 Starting JSX syntax fixes...');

const tsxFiles = findTsxFiles('/workspace');
let fixedCount = 0;

tsxFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`✅ Fixed ${fixedCount} files`);
console.log('🎉 JSX syntax fixes completed!');
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
