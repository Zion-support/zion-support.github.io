#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix 5G pages with specific patterns
function fix5GPages(content) {
  let fixed = content;

  // Fix CSS class spacing issues
  fixed = fixed.replace(/from-slate-900 via-purple-900to-slate-900/g, 'from-slate-900 via-purple-900 to-slate-900');
  fixed = fixed.replace(/text-gray-3\s+0\s+0/g, 'text-gray-300');
  fixed = fixed.replace(/bg-blue-5\s+0/g, 'bg-blue-50');
  fixed = fixed.replace(/border-blue-2\s+0\s+0rounded-lgp-6/g, 'border-blue-200 rounded-lg p-6');
  fixed = fixed.replace(/text-blue-9\s+0\s+0mb-2/g, 'text-blue-900 mb-2');
  fixed = fixed.replace(/text-blue-7\s+0\s+0/g, 'text-blue-700');
  fixed = fixed.replace(/bg-green-5\s+0/g, 'bg-green-50');
  fixed = fixed.replace(/border-green-2\s+0\s+0rounded-lgp-6/g, 'border-green-200 rounded-lg p-6');
  fixed = fixed.replace(/text-green-7\s+0\s+0/g, 'text-green-700');
  fixed = fixed.replace(/bg-purple-5\s+0/g, 'bg-purple-50');
  fixed = fixed.replace(/border-purple-2\s+0\s+0rounded-lgp-6/g, 'border-purple-200 rounded-lg p-6');
  fixed = fixed.replace(/text-purple-7\s+0\s+0/g, 'text-purple-700');
  fixed = fixed.replace(/font-semiboldtext-blue-9\s+0\s+0mb-2/g, 'font-semibold text-blue-900 mb-2');
  fixed = fixed.replace(/font-semibold text-blue-900 mb-2">Custom Implementation/g, 'font-semibold text-green-900 mb-2">Custom Implementation');
  fixed = fixed.replace(/font-semibold text-blue-900 mb-2">24\/7 Support/g, 'font-semibold text-purple-900 mb-2">24/7 Support');

  // Fix malformed JSX structure
  fixed = fixed.replace(/<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;\s*<div className="[^"]*">\s*<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>\s*<\/div>\s*<\/div>\s*<div className="[^"]*">\s*<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p><div className="[^"]*">\s*<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>/g, 
    '<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">\n              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">\n                <h3 className="text-lg font-semibold text-blue-900 mb-2">\n                  $1\n                </h3>\n                <p className="text-blue-700">\n                  $2\n                </p>\n              </div>\n              <div className="bg-green-50 border border-green-200 rounded-lg p-6">\n                <h3 className="text-lg font-semibold text-green-900 mb-2">\n                  $3\n                </h3>\n                <p className="text-green-700">\n                  $4\n                </p>\n              </div>\n              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">\n                <h3 className="text-lg font-semibold text-purple-900 mb-2">\n                  $5\n                </h3>\n                <p className="text-purple-700">\n                  $6\n                </p>\n              </div>\n            </div>');

  // Fix specific malformed patterns
  fixed = fixed.replace(/<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;\s*<div className="[^"]*">\s*<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>\s*<\/div>\s*<\/div>\s*<div className="[^"]*">\s*<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p><div className="[^"]*">\s*<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>/g, 
    '<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">\n              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">\n                <h3 className="text-lg font-semibold text-blue-900 mb-2">\n                  $1\n                </h3>\n                <p className="text-blue-700">\n                  $2\n                </p>\n              </div>\n              <div className="bg-green-50 border border-green-200 rounded-lg p-6">\n                <h3 className="text-lg font-semibold text-green-900 mb-2">\n                  $3\n                </h3>\n                <p className="text-green-700">\n                  $4\n                </p>\n              </div>\n              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">\n                <h3 className="text-lg font-semibold text-purple-900 mb-2">\n                  $5\n                </h3>\n                <p className="text-purple-700">\n                  $6\n                </p>\n              </div>\n            </div>');

  // Fix missing closing tags and malformed JSX
  fixed = fixed.replace(/<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>\s*<\/div>\s*<\/div>\s*<div[^>]*>\s*<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p><div[^>]*>\s*<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>/g, 
    '<h3 className="text-lg font-semibold text-blue-900 mb-2">$1</h3>\n                <p className="text-blue-700">$2</p>\n              </div>\n              <div className="bg-green-50 border border-green-200 rounded-lg p-6">\n                <h3 className="text-lg font-semibold text-green-900 mb-2">$3</h3>\n                <p className="text-green-700">$4</p>\n              </div>\n              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">\n                <h3 className="text-lg font-semibold text-purple-900 mb-2">$5</h3>\n                <p className="text-purple-700">$6</p>\n              </div>\n            </div>');

  // Fix missing closing tags for JSX fragments
  fixed = fixed.replace(/<>\s*([^<]+)\s*$/gm, '<>\n      $1\n    </>');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fix5GPages(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  const patterns = [
    'app/5g-*/page.tsx',
    'app/about/page.tsx',
    'app/accessibility*/page.tsx',
    'app/ad-management/page.tsx',
    'app/advanced-security-suite/page.tsx',
    'app/ai-*/page.tsx'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fix5GPages, processFile };