#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix broken class names with spaces in the middle
  fixed = fixed.replace(/from-(\w+)-(\d+)\s+(\d+)via-(\w+)-(\d+)\s+(\d+)to-(\w+)-(\d+)\s+(\d+)/g, 'from-$1-$2 via-$4-$5 to-$7-$8');
  fixed = fixed.replace(/from-(\w+)-(\d+)\s+(\d+)to-(\w+)-(\d+)\s+(\d+)/g, 'from-$1-$2 to-$4-$5');
  fixed = fixed.replace(/via-(\w+)-(\d+)\s+(\d+)/g, 'via-$1-$2');
  fixed = fixed.replace(/to-(\w+)-(\d+)\s+(\d+)/g, 'to-$1-$2');
  
  // Fix broken class names with spaces
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)/g, '$1-$2');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)/g, '$1-$2');
  
  // Fix broken class names in general
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)(\w+)/g, '$1-$2$4');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)(\w+)/g, '$1-$2$4');
  
  // Fix specific broken patterns
  fixed = fixed.replace(/bg-gradient-to-br from-slate-9\s+00via-purple-9\s+0\s+0to-slate-9\s+0\s+0/g, 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900');
  fixed = fixed.replace(/from-emerald-90\s+0to-teal-9\s+0\s+0/g, 'from-emerald-900 to-teal-900');
  fixed = fixed.replace(/text-whitepy-2\s+0/g, 'text-white py-20');
  fixed = fixed.replace(/containermx-autopx-4/g, 'container mx-auto px-4');
  fixed = fixed.replace(/max-w-4xlmx-autotext-center/g, 'max-w-4xl mx-auto text-center');
  fixed = fixed.replace(/text-4xlmd:text-6xlfont-boldmb-6/g, 'text-4xl md:text-6xl font-bold mb-6');
  fixed = fixed.replace(/text-xlmd:text-2xlmb-8text-emerald-10\s+0/g, 'text-xl md:text-2xl mb-8 text-emerald-100');
  fixed = fixed.replace(/min-h-screenbg-gray-50/g, 'min-h-screen bg-gray-50');
  fixed = fixed.replace(/bg-blue-50border border-blue-20\s+0rounded-lgp-6/g, 'bg-blue-50 border border-blue-200 rounded-lg p-6');
  fixed = fixed.replace(/text-blue-900mb-2/g, 'text-blue-900 mb-2');
  fixed = fixed.replace(/bg-green-50border border-green-20\s+0rounded-lgp-6/g, 'bg-green-50 border border-green-200 rounded-lg p-6');
  fixed = fixed.replace(/bg-purple-50border border-purple-20\s+0rounded-lgp-6/g, 'bg-purple-50 border border-purple-200 rounded-lg p-6');
  
  // Fix broken regex patterns in className
  fixed = fixed.replace(/className="\[\\^"\]\*"/g, 'className="text-gray-600"');
  
  // Fix missing spaces in class names
  fixed = fixed.replace(/(\w+)([A-Z])/g, '$1 $2');
  fixed = fixed.replace(/(\w+)-(\w+)([A-Z])/g, '$1-$2 $3');
  
  // Fix broken JSX structure - fix missing array brackets
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{/g, 'const $1 = [\n    {');
  fixed = fixed.replace(/,\s*title:/g, ',\n      title:');
  fixed = fixed.replace(/,\s*description:/g, ',\n      description:');
  fixed = fixed.replace(/,\s*;\s*title:/g, ',\n    {\n      title:');
  fixed = fixed.replace(/,\s*;\s*title:/g, ',\n    {\n      title:');
  
  // Fix missing semicolons and brackets
  fixed = fixed.replace(/}\s*\]\s*$/gm, '  }\n];');
  fixed = fixed.replace(/}\s*$/gm, '  },');
  
  // Fix broken JSX elements
  fixed = fixed.replace(/<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;/g, '<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">');
  
  // Fix unclosed JSX elements
  fixed = fixed.replace(/<section([^>]*)>\s*$/gm, '<section$1>\n        <div className="container mx-auto px-4">');
  fixed = fixed.replace(/<\/section>/g, '        </div>\n      </section>');
  
  // Fix broken object syntax
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{\s*$/gm, 'const $1 = [\n    {');
  fixed = fixed.replace(/^\s*\{\s*$/gm, '    {');
  fixed = fixed.replace(/^\s*\}\s*$/gm, '  }');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
  fixed = fixed.replace(/<\/div>\s*$/gm, '</div>');
  
  // Fix broken imports
  fixed = fixed.replace(/import\s+\{\s*([^}]+)\s*\}\s*from\s+'([^']+)';\s*import\s+\{\s*([^}]+)\s*\}\s*from\s+'([^']+)';/g, 'import { $1, $3 } from \'$2\';');
  
  // Fix duplicate imports
  const lines = fixed.split('\n');
  const importLines = lines.filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  const nonImportLines = lines.filter(line => !line.trim().startsWith('import'));
  fixed = [...uniqueImports, ...nonImportLines].join('\n');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };