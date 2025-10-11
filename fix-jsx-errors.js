#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
<<<<<<< HEAD

// Common JSX fixes
const fixes = [
  // Fix missing closing tags for JSX fragments
  {
    pattern: /return\s*\(\s*<>\s*$/gm,
    replacement: 'return (\n    <>\n'
  },
  // Fix missing closing tags for div elements
  {
    pattern: /(\s*)<\/div>\s*$/gm,
    replacement: '$1</div>\n'
  },
  // Fix duplicate export statements
  {
    pattern: /export default \w+;\s*export default \w+;/g,
    replacement: (match) => {
      const exports = match.match(/export default (\w+);/g);
      return exports[0]; // Keep only the first export
    }
  },
  // Fix malformed JSX with missing content
  {
    pattern: /<h1[^>]*>\s*<\/p>/g,
    replacement: '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Analytics</span>\n              </h1>'
  },
  // Fix empty JSX elements
  {
    pattern: /<p[^>]*>\s*<\/p>/g,
    replacement: '<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Transform your data into actionable insights with our advanced AI analytics platform\n              </p>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

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
}

// Find all problematic files
const files = await glob('app/**/*.tsx', { cwd: process.cwd() });

console.log(`Found ${files.length} TSX files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
=======

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;

  // Fix duplicate imports
  const importLines = fixed.split('\n').filter(line => line.trim().startsWith('import'));
  const uniqueImports = [];
  const seenImports = new Set();
  
  importLines.forEach(line => {
    const importKey = line.trim();
    if (!seenImports.has(importKey)) {
      seenImports.add(importKey);
      uniqueImports.push(line);
    }
  });

  // Replace all imports with unique ones
  const importSection = uniqueImports.join('\n');
  fixed = fixed.replace(/import.*?from ['"][^'"]+['"];?\s*\n/g, '');
  fixed = importSection + '\n' + fixed;

  // Fix malformed JSX - remove orphaned closing tags
  fixed = fixed.replace(/^\s*<\/[^>]+>\s*$/gm, '');

  // Fix incomplete object definitions
  fixed = fixed.replace(/{\s*},\s*{/g, '},\n    {');
  fixed = fixed.replace(/{\s*},/g, '}');

  // Fix missing opening tags before closing tags
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>/g, '$1</div>');
  fixed = fixed.replace(/(\s*)<\/section>\s*<\/section>/g, '$1</section>');

  // Fix missing return statement
  if (fixed.includes('const') && fixed.includes('React.FC') && !fixed.includes('return (')) {
    fixed = fixed.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{)/, '$1\n  return (');
  }

  // Fix missing component wrapper
  if (fixed.includes('return (') && !fixed.includes('<div className=')) {
    fixed = fixed.replace(/return\s*\(\s*/, 'return (\n    <div className="min-h-screen bg-gray-50">\n      ');
    fixed = fixed.replace(/(\s*)\s*\)\s*;?\s*$/, '\n    </div>\n  );');
  }

  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;

  // Fix specific patterns for different file types
  if (filePath.includes('5g-implementation')) {
    // Fix the specific syntax error in 5g-implementation
    fixed = fixed.replace(/description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer\.',\s*},/, 
      'description: \'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.\',\n      benefits: [\'High-speed data transfer\', \'Seamless connectivity\', \'Enhanced user experience\', \'Future-proof technology\']\n    },');
  }

  if (filePath.includes('ai-3d-generation')) {
    // Fix the h1 closing tag issue
    fixed = fixed.replace(/<h1[^>]*>([^<]*)<\/h1>\s*<\/h1>/g, '<h1>$1</h1>');
  }

  if (filePath.includes('ai-analytics')) {
    // Fix the declaration issue
    fixed = fixed.replace(/^\s*<\/ul>\s*$/gm, '');
  }

  return fixed;
}

// Main function to process files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Scanning for TSX files...');
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} TSX files to process`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let fixed = fixJSXErrors(content);
      fixed = fixSpecificFile(file, fixed);
      
      if (fixed !== content) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${path.relative(process.cwd(), file)}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

// Run the script
main().catch(console.error);
>>>>>>> cursor/fix-errors-and-merge-to-main-c4fe
