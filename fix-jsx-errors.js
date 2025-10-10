#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX syntax fixes
const fixes = [
  // Fix malformed closing tags
  {
    pattern: /<\/div>\s*<\/div>\s*<\/div>/g,
    replacement: '</div>\n          </div>\n        </div>'
  },
  // Fix missing opening tags
  {
    pattern: /<div className="[^"]*">\s*<\/div>\s*<div className="[^"]*">\s*<\/div>/g,
    replacement: '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n            <div className="text-center mb-12">'
  },
  // Fix malformed JSX expressions
  {
    pattern: /<div key={index} className="[^"]*">\s*<\/div>\s*<div className="[^"]*">\s*<\/div>/g,
    replacement: '<div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">\n                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">'
  },
  // Fix missing closing tags in JSX
  {
    pattern: /<feature\.icon className="[^"]*" \/>\s*<\/div>\s*<h3 className="[^"]*">/g,
    replacement: '<feature.icon className="w-6 h-6 text-white" />\n                </div>\n                <h3 className="text-xl font-semibold text-white mb-3">'
  },
  // Fix malformed button elements
  {
    pattern: /<button className="[^"]*">\s*<\/button>\s*<button className="[^"]*">/g,
    replacement: '<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">\n              Get Started\n              <ArrowRight className="inline-block ml-2 w-5 h-5" />\n            </button>\n            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">'
  },
  // Fix missing closing tags
  {
    pattern: /<section className="[^"]*">\s*<div className="[^"]*">\s*<\/div>\s*<div className="[^"]*">\s*<\/div>/g,
    replacement: '<section className="py-20 px-4">\n        <div className="max-w-7xl mx-auto">\n          <div className="text-center mb-16">'
  }
];

async function fixJsxErrors() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { 
    ignore: ['**/node_modules/**', '**/dist/**', '**/build/**'] 
  });

  console.log(`Found ${files.length} files to process...`);

  let fixedFiles = 0;
  let totalErrors = 0;

  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      let fileErrors = 0;

      // Apply fixes
      fixes.forEach(fix => {
        const matches = content.match(fix.pattern);
        if (matches) {
          fileErrors += matches.length;
          content = content.replace(fix.pattern, fix.replacement);
        }
      });

      // Additional specific fixes for common patterns
      // Fix missing closing tags
      content = content.replace(/<h1[^>]*>([^<]+)<\/h1>\s*<\/h1>/g, '<h1>$1</h1>');
      content = content.replace(/<h2[^>]*>([^<]+)<\/h2>\s*<\/h2>/g, '<h2>$1</h2>');
      content = content.replace(/<h3[^>]*>([^<]+)<\/h3>\s*<\/h3>/g, '<h3>$1</h3>');
      
      // Fix malformed JSX expressions
      content = content.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>/g, 
        '<div className="max-w-7xl mx-auto">\n          <div className="text-center mb-16">\n            <h2 className="text-4xl font-bold text-white mb-4">Features</h2>\n            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our comprehensive solutions</p>\n          </div>');

      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        fixedFiles++;
        console.log(`Fixed ${fileErrors} issues in ${file}`);
      }

      totalErrors += fileErrors;
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log(`\nFixed ${totalErrors} total issues across ${fixedFiles} files.`);
}

fixJsxErrors().catch(console.error);