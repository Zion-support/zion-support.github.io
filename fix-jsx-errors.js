#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common patterns to fix
const fixes = [
  // Fix malformed className attributes
  { pattern: /w-5h-5ml-2/g, replacement: 'w-5 h-5 ml-2' },
  { pattern: /min-h-screenbg-gradient-to-br/g, replacement: 'min-h-screen bg-gradient-to-br' },
  { pattern: /className="w-5h-5ml-2"/g, replacement: 'className="w-5 h-5 ml-2"' },
  { pattern: /className="min-h-screenbg-gradient-to-br/g, replacement: 'className="min-h-screen bg-gradient-to-br' },
  
  // Fix malformed JSX elements
  { pattern: /<section className="w-5h-5ml-2" \/>/g, replacement: '' },
  { pattern: /<h1 className="w-5h-5ml-2" \/>/g, replacement: '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">' },
  { pattern: /<span className="w-5h-5ml-2" \/>/g, replacement: '<span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">' },
  
  // Fix missing closing tags
  { pattern: /(\s+)<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<h1 className="w-5h-5ml-2" \/>\s*AI Chatbot\s*<span className="w-5h-5ml-2" \/>\s*\{\s*'\s*'\s*\}Builder\s*<\/span>\s*<\/h1>/g, 
    replacement: '$1<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n$1  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n$1    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n$1      AI Chatbot Builder\n$1    </h1>\n$1  </div>\n$1</div>' },
];

// Find all TSX files in the app directory
const files = await glob('app/**/*.tsx');

console.log(`Found ${files.length} TSX files to process...`);

let fixedCount = 0;

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files.`);