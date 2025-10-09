#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JSX files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix common syntax errors
const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in object/array literals
    const commaFixes = [
      // Fix missing comma after object properties
      { pattern: /(\w+):\s*'([^']+)',\s*\n\s*(\w+):\s*'([^']+)'/, replacement: "$1: '$2',\n    $3: '$4'" },
      { pattern: /(\w+):\s*"([^"]+)",\s*\n\s*(\w+):\s*"([^"]+)"/, replacement: '$1: "$2",\n    $3: "$4"' },
      
      // Fix missing comma after object properties with different value types
      { pattern: /(\w+):\s*'([^']+)',\s*\n\s*(\w+):\s*(\d+)/, replacement: "$1: '$2',\n    $3: $4" },
      { pattern: /(\w+):\s*"([^"]+)",\s*\n\s*(\w+):\s*(\d+)/, replacement: '$1: "$2",\n    $3: $4' },
      
      // Fix missing comma in array elements
      { pattern: /(\w+):\s*'([^']+)',\s*\n\s*(\w+):\s*'([^']+)',\s*\n\s*(\w+):\s*'([^']+)'/, replacement: "$1: '$2',\n    $3: '$4',\n    $5: '$6'" },
      
      // Fix missing closing div tags
      { pattern: /<div([^>]*)>\s*<div([^>]*)>\s*([^<]+)\s*<\/div>\s*<\/div>\s*\);\s*$/, replacement: '<div$1>\n    <div$2>\n      $3\n    </div>\n  </div>\n);' },
      
      // Fix duplicate function declarations
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*\n\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{/, replacement: 'const $1: React.FC = () => {' },
      
      // Fix missing closing braces
      { pattern: /}\s*export\s+default\s+(\w+);\s*}/, replacement: '};\n\nexport default $1;' },
      
      // Fix missing closing div in JSX
      { pattern: /<div([^>]*)>\s*<div([^>]*)>\s*([^<]+)\s*<\/div>\s*\);\s*$/, replacement: '<div$1>\n    <div$2>\n      $3\n    </div>\n  </div>\n);' }
    ];
    
    for (const fix of commaFixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }
    
    // Fix specific patterns that are common
    const specificFixes = [
      // Fix missing closing div tags in simple components
      {
        pattern: /<div className="min-h-screen[^>]*>\s*<div className="text-center[^>]*>\s*<h1[^>]*>([^<]+)<\/h1>\s*<p[^>]*>([^<]+)<\/p>\s*<a[^>]*>([^<]+)<\/a>\s*<\/div>\s*\);\s*$/,
        replacement: '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n    <div className="text-center">\n      <h1 className="text-4xl font-bold text-white mb-4">$1</h1>\n      <p className="text-gray-300 mb-8">$2</p>\n      <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">\n        $3\n      </a>\n    </div>\n  </div>\n);'
      }
    ];
    
    for (const fix of specificFixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = getAllFiles(srcDir);

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);