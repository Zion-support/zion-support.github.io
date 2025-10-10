#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of files with errors
const lintOutput = execSync('cd /workspace && pnpm run lint 2>&1', { encoding: 'utf8' });
const errorFiles = [...new Set(
  lintOutput
    .split('\n')
    .filter(line => line.includes('error') && line.includes('.tsx:'))
    .map(line => line.split(':')[0])
    .filter(file => file.startsWith('/workspace/'))
)];

console.log(`Found ${errorFiles.length} files with errors`);

// Common fixes
const fixes = [
  // Fix array syntax with semicolons
  {
    pattern: /(\s+)([^;]+),;/g,
    replacement: '$1$2,'
  },
  // Fix array closing with semicolon
  {
    pattern: /(\s+)\];\s*$/gm,
    replacement: '$1];'
  },
  // Fix JSX self-closing tags
  {
    pattern: /<meta>\s*<meta>/g,
    replacement: '<meta name="description" content="AI-powered solution" />\n        <meta name="keywords" content="AI, artificial intelligence, business solutions" />'
  },
  // Fix Navigation component
  {
    pattern: /<Navigation>\s*<div/g,
    replacement: '<Navigation />\n      <div'
  },
  // Fix malformed JSX elements
  {
    pattern: /<(\w+)>\s*<\/div>/g,
    replacement: '<$1 />'
  },
  // Fix text content with semicolons
  {
    pattern: /([^>])\s*;(\s*<\/[^>]+>)/g,
    replacement: '$1$2'
  },
  // Fix malformed feature mapping
  {
    pattern: /{\s*features\.map\(\(feature, index\) => \(\s*}\s*<div/g,
    replacement: '{features.map((feature, index) => (\n                <div'
  },
  // Fix malformed benefits mapping
  {
    pattern: /{\s*benefits\.map\(\(benefit, index\) => \(\s*}\s*<div/g,
    replacement: '{benefits.map((benefit, index) => (\n                <div'
  },
  // Fix feature.icon usage
  {
    pattern: /<feature>\s*<\/div>/g,
    replacement: '<feature.icon className="w-8 h-8 text-white" />'
  },
  // Fix CheckCircle usage
  {
    pattern: /<CheckCircle>\s*<\/div>/g,
    replacement: '<CheckCircle className="w-8 h-8 text-white" />'
  },
  // Fix malformed JSX structure
  {
    pattern: /<(\w+)>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g,
    replacement: '</div>\n          </div>\n        </section>'
  },
  // Fix return statement
  {
    pattern: /return \(\s*<>\s*<Helmet>/g,
    replacement: 'return (\n    <>\n      <Helmet>'
  },
  // Fix export statement
  {
    pattern: /}\s*export default/g,
    replacement: '};\n\nexport default'
  },
  // Fix function closing
  {
    pattern: /,\s*}\s*$/g,
    replacement: ';\n};'
  }
];

let fixedCount = 0;

errorFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    // Fix array syntax issues
    content = content.replace(/(\s+)([^,;]+),;(\s*[^,;]+),;(\s*[^,;]+),;(\s*[^,;]+),;(\s*[^,;]+);/g, 
      '$1$2,\n$3,\n$4,\n$5,\n$6');
    
    // Fix JSX structure issues
    content = content.replace(/<section[^>]*>\s*<\/section>/g, '<section className="py-20 px-4">\n          <div className="max-w-7xl mx-auto">\n            <div className="text-center mb-16">\n              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>\n              <p className="text-xl text-gray-300">Section description</p>\n            </div>\n          </div>\n        </section>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);