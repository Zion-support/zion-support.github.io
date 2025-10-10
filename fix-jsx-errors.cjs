#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common JSX syntax error patterns and their fixes
const fixes = [
  // Fix unclosed tags like <h1>text<p>more text</p></h1> -> <h1>text</h1><p>more text</p>
  {
    pattern: /<(\w+)([^>]*)>([^<]*?)<(\w+)([^>]*)>([^<]*?)<\/\4><\/\1>/g,
    replacement: '<$1$2>$3</$1><$4$5>$6</$4>'
  },
  // Fix self-closing tags that should have content
  {
    pattern: /<(\w+)([^>]*?)\s*\/>([^<]+)<\/\1>/g,
    replacement: '<$1$2>$3</$1>'
  },
  // Fix missing closing tags for common elements
  {
    pattern: /<h([1-6])([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p><\/h\1>/g,
    replacement: '<h$1$2>$3</h$1><p$4>$5</p>'
  },
  // Fix nested paragraph tags
  {
    pattern: /<p([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p><\/p>/g,
    replacement: '<p$1>$2</p><p$3>$4</p>'
  },
  // Fix div tags with nested divs that should be separate
  {
    pattern: /<div([^>]*)>([^<]+)<div([^>]*)>([^<]+)<\/div><\/div>/g,
    replacement: '<div$1>$2</div><div$3>$4</div>'
  },
  // Fix span tags with nested spans
  {
    pattern: /<span([^>]*)>([^<]+)<span([^>]*)>([^<]+)<\/span><\/span>/g,
    replacement: '<span$1>$2</span><span$3>$4</span>'
  },
  // Fix unclosed Helmet tags
  {
    pattern: /<Helmet([^>]*)>([^<]+)<\/Helmet>/g,
    replacement: '<Helmet$1>$2</Helmet>'
  },
  // Fix malformed JSX expressions
  {
    pattern: /<(\w+)([^>]*)>([^<]+)<\/\1><\/\1>/g,
    replacement: '<$1$2>$3</$1>'
  }
];

// Additional specific fixes for common patterns
const specificFixes = [
  // Fix h1 tags with nested p tags
  {
    pattern: /<h1([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p><\/h1>/g,
    replacement: '<h1$1>$2</h1><p$3>$4</p>'
  },
  // Fix h2 tags with nested p tags
  {
    pattern: /<h2([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p><\/h2>/g,
    replacement: '<h2$1>$2</h2><p$3>$4</p>'
  },
  // Fix h3 tags with nested p tags
  {
    pattern: /<h3([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p><\/h3>/g,
    replacement: '<h3$1>$3</h3><p$2>$4</p>'
  },
  // Fix div tags with nested p tags
  {
    pattern: /<div([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p><\/div>/g,
    replacement: '<div$1>$2</div><p$3>$4</p>'
  },
  // Fix span tags with nested p tags
  {
    pattern: /<span([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p><\/span>/g,
    replacement: '<span$1>$2</span><p$3>$4</p>'
  }
];

function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply general fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Apply specific fixes
    specificFixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional manual fixes for common patterns
    // Fix unclosed tags that are commonly problematic
    content = content.replace(/<h1([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p>/g, '<h1$1>$2</h1><p$3>$4</p>');
    content = content.replace(/<h2([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p>/g, '<h2$1>$2</h2><p$3>$4</p>');
    content = content.replace(/<h3([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p>/g, '<h3$1>$2</h3><p$3>$4</p>');
    content = content.replace(/<div([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p>/g, '<div$1>$2</div><p$3>$4</p>');
    content = content.replace(/<span([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p>/g, '<span$1>$2</span><p$3>$4</p>');
    
    // Fix unclosed Helmet tags
    content = content.replace(/<Helmet([^>]*)>([^<]+)<\/Helmet>/g, '<Helmet$1>$2</Helmet>');
    
    // Fix malformed JSX expressions with unexpected tokens
    content = content.replace(/<(\w+)([^>]*)>([^<]+)<\/\1><\/\1>/g, '<$1$2>$3</$1>');
    
    // Fix JSX expressions that should be separate elements
    content = content.replace(/<(\w+)([^>]*)>([^<]+)<(\w+)([^>]*)>([^<]+)<\/\4><\/\1>/g, '<$1$2>$3</$1><$4$5>$6</$4>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TSX files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: process.cwd() });

console.log(`Found ${files.length} TSX files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixJSXErrors(file)) {
    fixedCount++;
  }
});

console.log(`Fixed JSX errors in ${fixedCount} files.`);