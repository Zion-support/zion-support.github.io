#!/usr/bin/env node

import fs from 'fs';

// Read the accessibility page
let content = fs.readFileSync('/workspace/app/accessibility/page.tsx', 'utf8');

// Fix the malformed JSX structure
content = content.replace(
  /<div key={index} className="bg-white\/10 backdrop-blur-sm rounded-lg p-6 border border-white\/20">\s*key={index}className="bg-white\/5 backdrop-blur-lg rounded-2xl p-8 border border-white\/10 hover: border-cyan-400\/50 transition-all duration-300 group",\s*>\s*<div>\s*<feature\.icon className="w-8 h-8 text-white" \/>\s*<\/div>/g,
  `<div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>`
);

// Fix any remaining syntax issues
content = content.replace(/,\s*>/g, '>');
content = content.replace(/;\s*>/g, '>');
content = content.replace(/;\s*$/gm, '');

// Write the fixed content back
fs.writeFileSync('/workspace/app/accessibility/page.tsx', content, 'utf8');

console.log('Fixed accessibility page');