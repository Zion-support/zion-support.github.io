#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    //Fix malformed JSX elements like: className="..." <span> -> className="..." /> <span>
    const patterns = [
      {
        //Fix CheckCircleIcon and similar patterns
        pattern: /(<CheckCircleIcon[^>]*>)\s*<span/g,
        replacement: '$1 />\n                  <span',
      },
      {
        //Fix other icon patterns
        pattern: /(<[A-Z][a-zA-Z]*Icon[^>]*>)\s*<[^/]/g,
        replacement: '$1 />\n                <',
      },
      {
        //Fix closing tag issues
        pattern: /(<[A-Z][a-zA-Z]*Icon[^>]*>)\s*<\/[^>]*>/g,
        replacement: '$1 />\n              </',
      },
      {
        //Fix ArrowRightIcon patterns
        pattern: /(<ArrowRightIcon[^>]*>)\s*<\/Link>/g,
        replacement: '$1 />\n            </Link>',
      },
      {
        //Fix TruckIcon patterns
        pattern: /(<TruckIcon[^>]*>)\s*<\/div>/g,
        replacement: '$1 />\n          </div>',
      },
    ];

    patterns.forEach(fix => {
//       const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
//       console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
//     console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix the specific file
// const filePath = process.argv[2];
if (filePath) {
  fixJSXErrors(filePath);
} else {
//   console.log('Usage: node fix_jsx_errors.js <file_path>');
}
