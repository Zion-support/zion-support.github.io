#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Focus on the files with remaining JSX errors
const filesToFix = [
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/ai-translation-service/page.tsx'
];

function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX errors
    const fixes = [
      // Fix duplicate closing tags
      { pattern: /<\/FuturisticButton>\s*<\/FuturisticButton>/g, replacement: '</FuturisticButton>' },
      // Fix malformed JSX with semicolons
      { pattern: /<(\w+);/g, replacement: '<$1' },
      // Fix missing closing divs
      { pattern: /<div className="flex flex-col sm:flex-row gap-4 justify-center"><\/div>/g, replacement: '<div className="flex flex-col sm:flex-row gap-4 justify-center">' },
      // Fix orphaned text content
      { pattern: /<\/div>\s*([^<][^}]*?)\s*<\/p>/g, replacement: '</div>\n          </div>\n        </div>\n      </div>' },
      // Fix malformed button structures
      { pattern: /<button[^>]*>([^<]*)<\/button>\s*<\/div>/g, replacement: '<button$1</button>\n          </div>' },
    ];

    for (const fix of fixes) {
      const before = content;
      content = content.replace(fix.pattern, fix.replacement);
      if (content !== before) {
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
for (const file of filesToFix) {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixJSXErrors(fullPath);
  }
}

console.log('Final JSX error fixes completed');