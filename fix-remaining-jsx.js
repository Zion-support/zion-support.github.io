#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// More specific JSX syntax fixes
const fixes = [
  // Fix malformed h1 tags with missing closing tags
  {
    pattern: /<h1([^>]*)>([^<]*?)<p([^>]*)>([^<]*?)<\/p>\s*<\/p>/g,
    replacement: '<h1$1>$2</h1>\n            <p$3>$4</p>'
  },
  // Fix malformed h2 tags with missing closing tags
  {
    pattern: /<h2([^>]*)>([^<]*?)<p([^>]*)>([^<]*?)<\/p>\s*<\/p>/g,
    replacement: '<h2$1>$2</h2>\n            <p$3>$4</p>'
  },
  // Fix malformed h3 tags with missing closing tags
  {
    pattern: /<h3([^>]*)>([^<]*?)<p([^>]*)>([^<]*?)<\/p>\s*<\/p>/g,
    replacement: '<h3$1>$2</h3>\n            <p$3>$4</p>'
  },
  // Fix malformed p tags with missing closing tags
  {
    pattern: /<p([^>]*)>([^<]*?)<p([^>]*)>([^<]*?)<\/p>\s*<\/p>/g,
    replacement: '<p$1>$2</p>\n            <p$3>$4</p>'
  },
  // Fix malformed div tags with missing closing tags
  {
    pattern: /<div([^>]*)>([^<]*?)<div([^>]*)>([^<]*?)<\/div>\s*<\/div>/g,
    replacement: '<div$1>$2</div>\n            <div$3>$4</div>'
  },
  // Fix malformed span tags with missing closing tags
  {
    pattern: /<span([^>]*)>([^<]*?)<span([^>]*)>([^<]*?)<\/span>\s*<\/span>/g,
    replacement: '<span$1>$2</span>\n            <span$3>$4</span>'
  },
  // Fix malformed JSX with missing closing tags for h1
  {
    pattern: /<h1([^>]*)>([^<]*?)<([^>]+)>([^<]*?)<\/\3>\s*<\/h1>/g,
    replacement: '<h1$1>$2</h1>\n            <$3>$4</$3>'
  },
  // Fix malformed JSX with missing closing tags for h2
  {
    pattern: /<h2([^>]*)>([^<]*?)<([^>]+)>([^<]*?)<\/\3>\s*<\/h2>/g,
    replacement: '<h2$1>$2</h2>\n            <$3>$4</$3>'
  },
  // Fix malformed JSX with missing closing tags for h3
  {
    pattern: /<h3([^>]*)>([^<]*?)<([^>]+)>([^<]*?)<\/\3>\s*<\/h3>/g,
    replacement: '<h3$1>$2</h3>\n            <$3>$4</$3>'
  },
  // Fix malformed JSX with missing closing tags for div
  {
    pattern: /<div([^>]*)>([^<]*?)<([^>]+)>([^<]*?)<\/\3>\s*<\/div>/g,
    replacement: '<div$1>$2</div>\n            <$3>$4</$3>'
  },
  // Fix malformed JSX with missing closing tags for span
  {
    pattern: /<span([^>]*)>([^<]*?)<([^>]+)>([^<]*?)<\/\3>\s*<\/span>/g,
    replacement: '<span$1>$2</span>\n            <$3>$4</$3>'
  },
  // Fix self-closing icon tags that should be self-closing
  {
    pattern: /<(\w+)\s+className="[^"]*"\s*>\s*<\/\1>/g,
    replacement: '<$1 className="$2" />'
  },
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<div([^>]*)>([^<]*?)<\/div>\s*<\/>/g,
    replacement: '<div$1>$2</div>'
  },
  // Fix missing closing tags for Helmet
  {
    pattern: /<Helmet([^>]*)>([^<]*?)<([^>]+)>([^<]*?)<\/\3>\s*<\/Helmet>/g,
    replacement: '<Helmet$1>$2</Helmet>\n            <$3>$4</$3>'
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
        modified = true;
      }
    });
    
    if (modified) {
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

// Main function
async function main() {
  // Get all TSX files in the app directory
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });

  console.log(`Found ${files.length} TSX files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);