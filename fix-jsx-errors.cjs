#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Pattern to find files with JSX errors
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  ignore: [
    'src/components/**',
    'src/pages/**',
    'src/content/**',
    'src/data/**',
    'src/hooks/**',
    'src/types/**',
    'src/utils/**',
    'src/config/**'
  ]
});

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed JSX elements like <div</div>
    content = content.replace(/<div<\/div>/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">');
    
    // Fix malformed JSX with missing opening tags
    content = content.replace(/<div<\/div>\s*<div className="text-center">/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n      <div className="text-center">');
    
    // Fix malformed JSX with missing closing tags
    content = content.replace(/<\/a><\/div><\/div>/g, '</a>\n      </div>\n    </div>');
    
    // Fix malformed JSX with missing opening tags and proper structure
    content = content.replace(/<div<\/div>\s*<div className="text-center"><h1[^>]*>([^<]*)<\/h1><p[^>]*>([^<]*)<\/p><a[^>]*>([^<]*)<\/a><\/div><\/div>/g, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n      <div className="text-center">\n        <h1 className="text-4xl font-bold text-white mb-4">$1</h1>\n        <p className="text-gray-300 mb-8">$2</p>\n        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">\n          $3\n        </a>\n      </div>\n    </div>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);