#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix malformed JSX
function fixMalformedJSX(content) {
  let fixed = content;

  // Fix missing closing tags
  fixed = fixed.replace(/<h1[^>]*>([^<]*)<\/h1>\s*$/gm, '<h1>$1</h1>');
  fixed = fixed.replace(/<p[^>]*>([^<]*)<\/p>\s*$/gm, '<p>$1</p>');
  fixed = fixed.replace(/<h2[^>]*>([^<]*)<\/h2>\s*$/gm, '<h2>$1</h2>');
  fixed = fixed.replace(/<button[^>]*>([^<]*)<\/button>\s*$/gm, '<button>$1</button>');

  // Fix missing closing tags in JSX
  fixed = fixed.replace(/<h1[^>]*>([^<]*)\s*$/gm, '<h1>$1</h1>');
  fixed = fixed.replace(/<p[^>]*>([^<]*)\s*$/gm, '<p>$1</p>');
  fixed = fixed.replace(/<h2[^>]*>([^<]*)\s*$/gm, '<h2>$1</h2>');
  fixed = fixed.replace(/<button[^>]*>([^<]*)\s*$/gm, '<button>$1</button>');

  // Fix missing closing tags for sections
  fixed = fixed.replace(/<section[^>]*>([^<]*)\s*$/gm, '<section>$1</section>');
  fixed = fixed.replace(/<div[^>]*>([^<]*)\s*$/gm, '<div>$1</div>');

  // Fix orphaned closing tags
  fixed = fixed.replace(/^\s*<\/[^>]+>\s*$/gm, '');

  // Fix missing return statement
  if (fixed.includes('const') && fixed.includes('React.FC') && !fixed.includes('return (')) {
    fixed = fixed.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{)/, '$1\n  return (');
  }

  // Fix component structure
  if (fixed.includes('return (') && !fixed.includes('<div className=')) {
    fixed = fixed.replace(/return\s*\(\s*/, 'return (\n    <div className="min-h-screen bg-gray-50">\n      ');
    fixed = fixed.replace(/(\s*)\s*\)\s*;?\s*$/, '\n    </div>\n  );');
  }

  return fixed;
}

// Main function to process files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');

  console.log('Fixing malformed JSX in TSX files...');
  const files = await glob(pattern);

  let fixedCount = 0;

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixMalformedJSX(content);

      if (fixed !== content) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${path.relative(process.cwd(), file)}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log(`\nFixed ${fixedCount} files`);
}

// Run the script
main().catch(console.error);