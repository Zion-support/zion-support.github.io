#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixJsxComprehensively() {
  const files = await glob('app/**/*.{ts,tsx}', { 
    ignore: ['**/node_modules/**', '**/dist/**', '**/build/**'] 
  });

  console.log(`Processing ${files.length} files...`);

  let fixedFiles = 0;
  let totalFixes = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      let fileFixes = 0;

      // Fix 1: Remove duplicate closing tags
      const duplicateClosingTags = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
      content = content.replace(duplicateClosingTags, '</div>\n          </div>\n        </div>');
      fileFixes += (content.match(duplicateClosingTags) || []).length;

      // Fix 2: Fix malformed JSX fragments
      content = content.replace(/<>([^<]*)<\/>/g, '<div>$1</div>');
      content = content.replace(/<>\s*<\/>/g, '<div></div>');

      // Fix 3: Fix missing closing tags for common patterns
      content = content.replace(/<div className="[^"]*">\s*<h1[^>]*>([^<]*)<\/h1>\s*<\/h1>/g, 
        '<div className="max-w-7xl mx-auto text-center">\n            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">$1</h1>');

      // Fix 4: Fix malformed section elements
      content = content.replace(/<section className="[^"]*">\s*<div className="[^"]*">\s*<\/div>\s*<div className="[^"]*">\s*<\/div>/g,
        '<section className="py-20 px-4">\n        <div className="max-w-7xl mx-auto">\n          <div className="text-center mb-16">');

      // Fix 5: Fix malformed button elements
      content = content.replace(/<button className="[^"]*">\s*<\/button>\s*<button className="[^"]*">\s*<\/button>/g,
        '<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">\n              Get Started\n              <ArrowRight className="inline-block ml-2 w-5 h-5" />\n            </button>\n            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">\n              View Demo\n            </button>');

      // Fix 6: Fix malformed feature cards
      content = content.replace(/<div key={index} className="[^"]*">\s*<\/div>\s*<div className="[^"]*">\s*<\/div>\s*<feature\.icon className="[^"]*" \/>\s*<\/div>/g,
        '<div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">\n                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">\n                  <feature.icon className="w-6 h-6 text-white" />\n                </div>');

      // Fix 7: Fix malformed grid layouts
      content = content.replace(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\s*<\/div>\s*<div className="[^"]*">\s*<\/div>/g,
        '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\n            {features.map((feature, index) => (\n              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">');

      // Fix 8: Fix malformed closing tags
      content = content.replace(/<\/h1>\s*<\/h1>/g, '</h1>');
      content = content.replace(/<\/h2>\s*<\/h2>/g, '</h2>');
      content = content.replace(/<\/h3>\s*<\/h3>/g, '</h3>');
      content = content.replace(/<\/p>\s*<\/p>/g, '</p>');

      // Fix 9: Fix malformed JSX expressions
      content = content.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>/g,
        '<div className="max-w-7xl mx-auto">\n          <div className="text-center mb-16">\n            <h2 className="text-4xl font-bold text-white mb-4">Features</h2>\n            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our comprehensive solutions</p>\n          </div>');

      // Fix 10: Fix malformed return statements
      content = content.replace(/return \(\s*<div className="[^"]*">\s*<\/div>\s*<section[^>]*>/g,
        'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">\n      <Helmet>\n        <title>Page | Zion Tech Group</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Helmet>\n      \n      <Navigation />\n\n      <section className="relative py-20 px-4 overflow-hidden">');

      // Fix 11: Fix malformed closing tags in JSX
      content = content.replace(/<feature\.icon className="[^"]*" \/>\s*<\/div>\s*<h3 className="[^"]*">/g,
        '<feature.icon className="w-6 h-6 text-white" />\n                </div>\n                <h3 className="text-xl font-semibold text-white mb-3">');

      // Fix 12: Fix malformed benefits sections
      content = content.replace(/<div className="[^"]*">\s*<\/div>\s*<div className="[^"]*">\s*<\/div>\s*<div className="[^"]*">\s*<\/div>\s*<div className="[^"]*">\s*<\/div>/g,
        '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n            {benefits.map((benefit, index) => (\n              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">\n                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">\n                  <CheckCircle className="w-8 h-8 text-white" />\n                </div>\n                <h3 className="text-lg font-semibold text-white">{benefit}</h3>\n              </div>\n            ))}\n          </div>');

      // Fix 13: Fix malformed CTA sections
      content = content.replace(/<section className="[^"]*">\s*<div className="[^"]*">\s*<\/div>\s*<h2 className="[^"]*">/g,
        '<section className="py-20 px-4">\n        <div className="max-w-4xl mx-auto text-center">\n          <h2 className="text-4xl font-bold text-white mb-6">');

      // Fix 14: Fix malformed closing tags
      content = content.replace(/<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/div>/g,
        '</div>\n        </div>\n      </section>\n\n      <Footer />\n    </div>');

      // Fix 15: Fix malformed export statements
      content = content.replace(/export default PagePage;/g, 'export default PageName;');

      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        fixedFiles++;
        console.log(`Fixed issues in ${file}`);
      }

      totalFixes += fileFixes;
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log(`\nFixed ${totalFixes} total issues across ${fixedFiles} files.`);
}

fixJsxComprehensively().catch(console.error);