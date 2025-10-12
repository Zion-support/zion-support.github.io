#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Specific fixes for remaining JSX issues
const fixes = [
  // Fix malformed className attributes
  { pattern: /className="max-w-7xlmx-auto/g, replacement: 'className="max-w-7xl mx-auto' },
  { pattern: /className="w-16h-16/g, replacement: 'className="w-16 h-16' },
  { pattern: /className="text-4xlmd:text-6xl/g, replacement: 'className="text-4xl md:text-6xl' },
  { pattern: /className="text-xltext-gray-300/g, replacement: 'className="text-xl text-gray-300' },
  { pattern: /className="hover:border-cyan-400\/50transition-all/g, replacement: 'className="hover:border-cyan-400/50 transition-all' },
  { pattern: /className="text-gray-300mb-4"/g, replacement: 'className="text-gray-300 mb-4"' },
  { pattern: /className="flex items-centertext-sm text-gray-400"/g, replacement: 'className="flex items-center text-sm text-gray-400"' },
  
  // Fix malformed JSX elements with self-closing tags that should be containers
  { pattern: /<div key=\{index\} className="bg-slate-800\/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400\/50 transition-all duration-300" \/>\s*<div className=\{\`w-16 h-16 rounded-lg bg-gradient-to-r \$\{feature\.color\} flex items-center justify-center mb-4\`\} \/>\s*<div>\s*\{feature\.icon\}\s*<\/div>\s*<\/div>\s*<h3 className="text-xl font-semibold text-white mb-3">\{feature\.title\}<\/h3>\s*<p className="text-gray-300">\{feature\.description\}<\/p>\s*<\/div>/g, 
    replacement: '<div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">\n                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>\n                  {feature.icon}\n                </div>\n                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>\n                <p className="text-gray-300">{feature.description}</p>\n              </div>' },
  
  // Fix malformed use case elements
  { pattern: /<div key=\{index\} className="bg-slate-800\/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">\s*<div className="flex items-center mb-4">\s*\{useCase\.icon\}\s*<h3 className="text-xl font-semibold text-white ml-3">\{useCase\.title\}<\/h3>\s*<\/div>\s*<p className="text-gray-300">\{useCase\.description\}<\/p>\s*<\/div>\s*<p className="text-gray-300 mb-4">\{useCase\.description\}<\/p>\s*<ul className="w-5 h-5 ml-2" \/>\s*\{useCase\.benefits\.map\(\(benefit, idx\) => \(\s*<li key=\{idx\} className="flex items-center text-sm text-gray-400" \/>\s*<CheckCircle className="w-5 h-5 ml-2" \/>\s*\{benefit\}\s*<\/li>\s*\)\)\}\s*<\/ul>\s*<\/div>/g, 
    replacement: '<div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">\n                <div className="flex items-center mb-4">\n                  {useCase.icon}\n                  <h3 className="text-xl font-semibold text-white ml-3">{useCase.title}</h3>\n                </div>\n                <p className="text-gray-300 mb-4">{useCase.description}</p>\n                <ul className="space-y-2">\n                  {useCase.benefits.map((benefit, idx) => (\n                    <li key={idx} className="flex items-center text-sm text-gray-400">\n                      <CheckCircle className="w-5 h-5 ml-2" />\n                      {benefit}\n                    </li>\n                  ))}\n                </ul>\n              </div>' },
  
  // Fix malformed h2 elements
  { pattern: /<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">([^<]+)\s*<\/h2>/g, 
    replacement: '<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">$1</h2>' },
  
  // Fix malformed closing tags
  { pattern: /(\s+)<\/div>\s*<\/div>\s*<\/section>/g, replacement: '$1        </div>\n      </section>' },
  
  // Fix malformed closing tags for complex structures
  { pattern: /(\s+)<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, replacement: '$1        </div>\n      </section>' },
  
  // Fix missing closing tags for sections
  { pattern: /(\s+)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, replacement: '$1        </div>\n      </section>' },
  
  // Fix malformed Layout elements
  { pattern: /<Layout>\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">/g, 
    replacement: '<Layout>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">' },
  
  // Fix missing closing Layout tags
  { pattern: /(\s+)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/Layout>/g, replacement: '$1      </div>\n    </Layout>' },
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