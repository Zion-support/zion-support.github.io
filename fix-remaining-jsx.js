#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Comprehensive fixes for remaining JSX issues
const fixes = [
  // Fix malformed className attributes
  { pattern: /className="borderborder-cyan-400/g, replacement: 'className="border border-cyan-400' },
  { pattern: /className="bg-slate-800\/50backdrop-blur-sm/g, replacement: 'className="bg-slate-800/50 backdrop-blur-sm' },
  { pattern: /className="hover:border-cyan-400\/50transition-all/g, replacement: 'className="hover:border-cyan-400/50 transition-all' },
  { pattern: /className="text-xlfont-semiboldtext-whitemb-3"/g, replacement: 'className="text-xl font-semibold text-white mb-3"' },
  { pattern: /className="hover:text-slate-900transition-all/g, replacement: 'className="hover:text-slate-900 transition-all' },
  
  // Fix malformed JSX elements
  { pattern: /<h2 className="w-5 h-5 ml-2" \/>\s*([^<]+)\s*<\/h2>/g, replacement: '<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">$1</h2>' },
  { pattern: /<div className="w-16 h-16 rounded-lg bg-gradient-to-r \${feature\.color} flex items-center justify-center mb-4" \/>\s*<div>\s*\{feature\.icon\}\s*<\/div>/g, 
    replacement: '<div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>\n                  {feature.icon}\n                </div>' },
  
  // Fix malformed Link elements
  { pattern: /<Link to="\/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300" \/>\s*View Demo\s*<\/Link>/g, 
    replacement: '<Link to="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">\n              View Demo\n            </Link>' },
  
  // Fix malformed div elements in features map
  { pattern: /<div key=\{index\} className="bg-slate-800\/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400\/50 transition-all duration-300" \/>\s*<div className=\{\`w-16 h-16 rounded-lg bg-gradient-to-r \$\{feature\.color\} flex items-center justify-center mb-4\`\} \/>\s*<div>\s*\{feature\.icon\}\s*<\/div>\s*<\/div>\s*<h3 className="text-xl font-semibold text-white mb-3">\{feature\.title\}<\/h3>\s*<p className="text-gray-300">\{feature\.description\}<\/p>\s*<\/div>/g, 
    replacement: '<div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">\n                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>\n                  {feature.icon}\n                </div>\n                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>\n                <p className="text-gray-300">{feature.description}</p>\n              </div>' },
  
  // Fix missing closing tags
  { pattern: /(\s+)<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<h2 className="w-5 h-5 ml-2" \/>\s*([^<]+)\s*<\/h2>\s*<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">([^<]+)<\/p>\s*<\/div>/g, 
    replacement: '$1<div className="text-center">\n$1  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">$2</h2>\n$1  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">$3</p>\n$1</div>' },
  
  // Fix malformed grid layouts
  { pattern: /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*\{features\.map\(\(feature, index\) => \(/g, 
    replacement: '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\n            {features.map((feature, index) => (' },
  
  // Fix missing closing tags for sections
  { pattern: /(\s+)<\/div>\s*<\/div>\s*<\/section>/g, replacement: '$1        </div>\n      </section>' },
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