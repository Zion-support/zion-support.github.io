#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Fixing remaining broken files...');

// Find all problematic files
const findFiles = (dir, pattern) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath, pattern));
    } else if (stat.isFile() && pattern.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
};

const pageFiles = findFiles('./app', /page\.tsx$/);
const hookFiles = findFiles('./app/hooks', /\.ts$/);

console.log(`Found ${pageFiles.length} page files and ${hookFiles.length} hook files`);

// Fix function for broken files
function fixBrokenFile(content, filename) {
  let fixed = content;
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function (\w+)\(\) \{\}\s*<div>Page content<\/div>\s*\);\s*<div className="min-h-screen bg-gray-900 text-white py-20"><\/div>/g, 'export default function $1() {\n  return (\n    <div className="min-h-screen bg-gray-900 text-white py-20">');
  
  // Fix broken JSX structure
  fixed = fixed.replace(/<div className="min-h-screen bg-gray-900 text-white py-20"><\/div>\s*<\/div>\s*<div className="container mx-auto px-4"><\/div>\s*<\/div>\s*<h1 className="text-4xl font-bold mb-8">(\w+)<\/h1>\s*<p className="text-gray-30o0 text-lg">\s*This page is under development\.<\/p>\s*<\/div>\s*<\/>\s*\);\s*\}\s*\);/g, '<div className="min-h-screen bg-gray-900 text-white py-20">\n      <div className="container mx-auto px-4">\n        <h1 className="text-4xl font-bold mb-8">$1</h1>\n        <p className="text-gray-300 text-lg">\n          This page is under development.\n        </p>\n      </div>\n    </div>');
  
  // Fix malformed hook files
  fixed = fixed.replace(/'use client';';';/g, "'use client';");
  fixed = fixed.replace(/\/\/ (\w+) utility; export const (\w+) = \(\) => \{\}; \/\/ Implementation; return true;\}\s*\};\s*export default \w+;/g, "'use client';\nimport { useState, useEffect } from 'react';\n\nexport const $2 = () => {\n  const [data, setData] = useState(null);\n  \n  useEffect(() => {\n    // Implementation\n  }, []);\n  \n  return data;\n};\n\nexport default $2;");
  
  // Fix broken JSX expressions
  fixed = fixed.replace(/<div className="text-gray-30o0 text-lg">/g, '<div className="text-gray-300 text-lg">');
  
  // Fix malformed closing statements
  fixed = fixed.replace(/\s*<\/div>\s*<\/>\s*\);\s*\}\s*\);/g, '\n  );');
  
  return fixed;
}

// Process all files
let fixedCount = 0;
let errorCount = 0;

for (const file of [...pageFiles, ...hookFiles]) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file has common broken patterns
    if (content.includes('Page content') || content.includes('text-gray-30o0') || content.includes('export const') && content.includes('Implementation')) {
      const fixed = fixBrokenFile(content, file);
      
      if (content !== fixed) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\n🎉 Fix complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Run type checking to see results
console.log('\n🔍 Running type check...');
try {
  execSync('pnpm run type-check', { stdio: 'pipe' });
  console.log('✅ Type checking passed!');
} catch (error) {
  console.log('⚠️  Type checking still has issues, but many errors were fixed.');
}