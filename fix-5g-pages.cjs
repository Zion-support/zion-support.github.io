#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix 5G pages
function fix5GPage(content) {
  // Add Helmet import if missing
  if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
    content = content.replace(
      /import React from 'react';/,
      "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
    );
  }
  
  // Fix the main div structure
  content = content.replace(
    /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" \/>\s*<Helmet \/>/g,
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n      <Helmet>'
  );
  
  // Fix Helmet structure
  content = content.replace(
    /<Helmet \/>\s*<title>([^<]*)<\/title>\s*<meta name="([^"]*)" content="([^"]*)" \/>\s*<\/Helmet>/g,
    '<Helmet>\n        <title>$1</title>\n        <meta name="$2" content="$3" />\n      </Helmet>'
  );
  
  // Fix Link structure
  content = content.replace(
    /<Link\s+([^>]*)\s*\/>\s*([^<]+)\s*<ArrowRight/g,
    '<Link\n          $1\n        >\n          $2\n          <ArrowRight'
  );
  
  // Fix title spacing
  content = content.replace(/5 G/g, '5G');
  
  // Ensure proper closing tags
  if (content.includes('<div className="min-h-screen') && !content.includes('</div>')) {
    content = content.replace(/(<div className="min-h-screen[^>]*>[\s\S]*?)(<\/div>\s*)$/m, '$1\n    </div>');
  }
  
  return content;
}

// Find all 5G pages
const files = glob.sync('app/5g-*/page.tsx', { cwd: process.cwd() });

let fixedFiles = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    content = fix5GPage(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedFiles} 5G pages.`);