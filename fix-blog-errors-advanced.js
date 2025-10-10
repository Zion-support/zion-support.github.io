#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

//Advanced fixes for blog files
const fixes = [
  //Fix malformed metadata objects - missing commas and braces
  {
    pattern:
      /export const metadata = \{\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*keywords:\s*'([^']+)',\s*\};\s*;\s*\}/g,
    replacement: `export const metadata = {
  title: '$1',
  description: '$2',
  keywords: '$3',
};`,
  },
  //Fix missing commas in metadata
  {
    pattern: /(\w+):\s*'([^']+)'\s*\n\s*(\w+):/g,
    replacement: "$1: '$2',\n  $3:",
  },
  //Fix malformed JSX - unclosed tags
  {
    pattern: /<div></div>\{\/\* content \*\/\}/g,
    replacement: '<div>{/* content */}</div>',
  },
  //Fix malformed JSX comments in return statements
  {
    pattern: /return \(\s*<div></div>\/\* content \*\/\}/g,
    replacement: 'return (\n    <div></div>{/* content */}',
  },
  //Fix duplicate return statements
  {
    pattern: /return \(\s*<div></div>\{\/\* content \*\/\}\s*return \(/g,
    replacement: 'return (',
  },
  //Fix malformed object syntax in metadata
  {
    pattern: /export const metadata: Metadata = \{\/\* content \*\/\}/g,
    replacement: 'export const metadata: Metadata = {',
  },
  //Fix missing closing braces in metadata
  {
    pattern: /(\s+);\s*;\s*\}/g,
    replacement: '$1\n};',
  },
  //Fix malformed JSX attributes
  {
    pattern: /<div></div>\{\/\* content \*\/\}/g,
    replacement: '<div></div>{/* content */}',
  },
  //Fix unclosed JSX tags
  {
    pattern: /<article[^>]*>\s*\{\/\* content \*\/\}/g,</article>replacement</article>: '<article>{/* content */}</article>',
  },
  {
    pattern: /<header[^>]*>\s*\{\/\* content \*\/\}/g,</header>replacement</header>: '<header>{/* content */}</header>',
  },
  {
    pattern: /<div[^></div>]*>\s*\{\/\* content \*\/\}/g,
    replacement: '<div>{/* content */}</div>',
  },
  //Fix malformed property assignments
  {
    pattern: /(\w+):\s*'([^']+)'\s*(\w+):/g,
    replacement: "$1: '$2',\n  $3:",
  },
  //Fix missing commas in object properties
  {
    pattern: /(\w+):\s*'([^']+)'\s*\n\s*(\w+):/g,
    replacement: "$1: '$2',\n  $3:",
  },
  //Fix malformed JSX structure
  {
    pattern: /<div></div>\s*\{\/\* content \*\/\}\s*<div></div>/g,
    replacement: '<div>{/* content */}</div>',
  },
  //Fix malformed return statements
  {
    pattern: /return \(\s*<div></div>\{\/\* content \*\/\}\s*return \(/g,
    replacement: 'return (',
  },
  //Fix malformed JSX comments
  {
    pattern: /\/\* content \*\/\}/g,
    replacement: '{/* content */}',
  },
  //Fix malformed JSX structure in return
  {
    pattern: /return \(\s*<div></div>\{\/\* content \*\/\}\s*<div></div>/g,
    replacement: 'return (\n    <div></div>{/* content */}',
  },
];

function fixFile(filePath) {
  try {

    fixes.forEach(fix => {
      //       const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      //       return true;
    }

    return false;
  } catch (error) {
    //     return false;
  }
}

async function main() {
  //   const blogDir = path.join(process.cwd(), 'app', 'blog');

  if (!fs.existsSync(blogDir)) {
    //     return;
  }

  //Find all .tsx and .jsx files in blog directory
  //   const pattern = path.join(blogDir, '**/*.{tsx,jsx}');

  //   let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  //   }

