#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX closing tag issues
function fixJSXClosingTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX closing tag issues
    const fixes = [
      // Fix missing closing tags for self-closing elements
      { pattern: /<(\w+)([^>]*?)(?<!/)>(?!\s*<\/\1>)/g, replacement: (match, tagName, attributes) => {
        // Check if it's a self-closing tag
        const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'];
        if (selfClosingTags.includes(tagName)) {
          return `<${tagName}${attributes} />`;
        }
        return match;
      }},
      
      // Fix missing closing tags for JSX fragments
      { pattern: /<>\s*<div[^>]*>([^<]*)<\/div>\s*<\/>/, replacement: '<>\n      <div>$1</div>\n    </>' },
      
      // Fix malformed JSX structure
      { pattern: /<div className="min-h-screen bg-slate-900 text-white flex items-center justify-center"><\/div>\s*<div className="text-center"><\/div>/, replacement: '<div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">\n        <div className="text-center">' },
      
      // Fix missing closing tags for common elements
      { pattern: /<h1([^>]*)>([^<]*)<\/h1>\s*<p([^>]*)>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>/, replacement: '<h1$1>$2</h1>\n          <p$3>$4</p>\n        </div>\n      </div>\n    </>' },
      
      // Fix unterminated string literals
      { pattern: /"[^"]*$/, replacement: '"' },
      
      // Fix missing commas in object literals
      { pattern: /(\w+):\s*"([^"]*)"\s*(\w+):/, replacement: '$1: "$2",\n      $3:' },
      
      // Fix missing closing tags for JSX elements
      { pattern: /<(\w+)([^>]*?)>(?!\s*<\/\1>)([^<]*)<\/div>\s*<\/div>\s*<\/>/, replacement: '<$1$2>$3</$1>\n        </div>\n      </div>\n    </>' }
    ];
    
    let modified = false;
    for (const fix of fixes) {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX closing tags in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting JSX closing tags fix...');

const patterns = [
  '/workspace/app/ai-*/page.tsx',
  '/workspace/app/analytics*/page.tsx',
  '/workspace/app/api-*/page.tsx',
  '/workspace/app/blockchain-*/page.tsx',
  '/workspace/app/cloud-*/page.tsx',
  '/workspace/app/cybersecurity-*/page.tsx',
  '/workspace/app/devops-*/page.tsx',
  '/workspace/app/email-*/page.tsx',
  '/workspace/app/financial-*/page.tsx',
  '/workspace/app/inventory-*/page.tsx',
  '/workspace/app/it-*/page.tsx',
  '/workspace/app/smart-*/page.tsx',
  '/workspace/app/zion-*/page.tsx'
];

let allFiles = [];
for (const pattern of patterns) {
  const files = await glob(pattern);
  allFiles = allFiles.concat(files);
}

console.log(`Found ${allFiles.length} files to fix`);

let fixedCount = 0;
for (const file of allFiles) {
  if (fixJSXClosingTags(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX closing tags in ${fixedCount} files`);
console.log('JSX closing tags fix completed!');