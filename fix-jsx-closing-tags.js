#!/usr/bin/env node,
import fs from 'fs';
import { glob } from 'glob';
async function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix common JSX closing tag issues,
const fixes = [
      // Fix unclosed Helmet tags
      {
        pattern: /<Helmet>\s*<title>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/>\s*$/gm,
        replacement: '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="$2" />\n      </Helmet>'
      }
      // Fix unclosed JSX fragments
      {
        pattern: /<>\s*<Helmet>\s*<title>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/>\s*<\/Helmet>\s*$/gm,
        replacement: '<>\n      <Helmet>\n        <title>$1</title>\n        <meta name="description" content="$2" />\n      </Helmet>'
      }
      // Fix malformed JSX structure
      {
        pattern: /<>\s*<div[^>]*>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*$/gm,
        replacement: '<>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <div className="container mx-auto px-4 py-16">\n          <div className="text-center">\n            <h1 className="text-4 xl font-bold text-white mb-8">$1</h1>\n            <p className="text-gray-300 text-lg">\n              $2\n            </p>\n          </div>\n        </div>\n      </div>\n    </>';
      };
    ];
    fixes.forEach(fix => {)
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX: ${filePath}""
    console.error(`Error fixing ${filePath}:""
  console.log(`\nTotal JSX files fixed: ${totalFixed}"")