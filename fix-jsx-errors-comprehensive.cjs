#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;

  // Fix CSS class concatenation issues (missing spaces)
  fixed = fixed.replace(/(\w+)(\d+)(\w+)/g, '$1 $2 $3');
  fixed = fixed.replace(/(\w+)(\d+)(\s+)(\w+)/g, '$1 $2$3$4');
  fixed = fixed.replace(/(\w+)(\d+)(\s+)(\w+)(\d+)/g, '$1 $2$3$4 $5');
  
  // Fix specific CSS class patterns
  fixed = fixed.replace(/from-slate-9\s+00via-purple-9\s+0\s+0to-slate-9\s+0\s+0/g, 'from-slate-900 via-purple-900 to-slate-900');
  fixed = fixed.replace(/mx-autopx-4py-1\s+6/g, 'mx-auto px-4 py-16');
  fixed = fixed.replace(/font-boldtext-white/g, 'font-bold text-white');
  fixed = fixed.replace(/text-gray-30\s+0/g, 'text-gray-300');
  fixed = fixed.replace(/grid-cols-3gap-8/g, 'grid-cols-3 gap-8');
  fixed = fixed.replace(/mt-1\s+2/g, 'mt-12');
  fixed = fixed.replace(/border-blue-20\s+0rounded-lgp-6/g, 'border-blue-200 rounded-lg p-6');
  fixed = fixed.replace(/text-blue-90\s+0mb-2/g, 'text-blue-900 mb-2');
  fixed = fixed.replace(/text-blue-70\s+0/g, 'text-blue-700');
  fixed = fixed.replace(/border-green-20\s+0rounded-lgp-6/g, 'border-green-200 rounded-lg p-6');
  fixed = fixed.replace(/text-green-90\s+0mb-2/g, 'text-green-900 mb-2');
  fixed = fixed.replace(/text-green-70\s+0/g, 'text-green-700');
  fixed = fixed.replace(/border-purple-20\s+0rounded-lgp-6/g, 'border-purple-200 rounded-lg p-6');
  fixed = fixed.replace(/text-purple-90\s+0mb-2/g, 'text-purple-900 mb-2');
  fixed = fixed.replace(/text-purple-70\s+0/g, 'text-purple-700');
  fixed = fixed.replace(/bg-whiterounded-lgshadow-lgp-8/g, 'bg-white rounded-lg shadow-lg p-8');
  fixed = fixed.replace(/flexitems-centermb-4/g, 'flex items-center mb-4');
  fixed = fixed.replace(/h\s+-8w-8/g, 'h-8 w-8');
  fixed = fixed.replace(/text-blue-6\s+0\s+0mr-3/g, 'text-blue-600 mr-3');
  fixed = fixed.replace(/text-xlfont-semiboldtext-gray-9\s+0\s+0/g, 'text-xl font-semibold text-gray-900');
  fixed = fixed.replace(/text-gray-6\s+0\s+0mb-6/g, 'text-gray-600 mb-6');
  fixed = fixed.replace(/inline-flexitems-centertext-blue-6\s+0\s+0hover:text-blue-8\s+0\s+0font-medium/g, 'inline-flex items-center text-blue-600 hover:text-blue-800 font-medium');
  fixed = fixed.replace(/ml-2h-4w-4/g, 'ml-2 h-4 w-4');
  fixed = fixed.replace(/inline-fle\s+x\s+items-center/g, 'inline-flex items-center');
  fixed = fixed.replace(/px-8\s+py-3\s+border\s+border-transparenttext-basefont-mediumrounded-mdtext-whitebg-blue-6\s+0\s+0hover:bg-blue-7\s+0\s+0/g, 'px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700');
  fixed = fixed.replace(/ml-2h-5w-5/g, 'ml-2 h-5 w-5');

  // Fix missing closing tags and malformed JSX
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<]+)\s*<p/g, '<h3$1>$2</h3>\n                <p');
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*<\/div>/g, '<p$1>$2</p>\n              </div>');
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*<div/g, '<p$1>$2</p>\n              <div');
  
  // Fix missing closing tags for h3 elements
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<]+)\s*<p/g, '<h3$1>$2</h3>\n                <p');
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<]+)\s*<\/div>/g, '<h3$1>$2</h3>\n              </div>');
  
  // Fix missing closing tags for p elements
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*<\/div>/g, '<p$1>$2</p>\n              </div>');
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*<div/g, '<p$1>$2</p>\n              <div');
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/<div([^>]*)>\s*([^<]+)\s*<\/div>/g, '<div$1>$2</div>');
  
  // Fix JSX fragment closing
  fixed = fixed.replace(/<>\s*([^<]+)\s*<\/>/g, '<>\n      $1\n    </>');
  
  // Fix missing semicolons in object definitions
  fixed = fixed.replace(/const\s+services\s*=\s*\[\s*\{/g, 'const services = [\n    {');
  fixed = fixed.replace(/title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*;\s*\}/g, 'title: \'$1\',\n      description: \'$2\',\n    },');
  fixed = fixed.replace(/title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*;\s*\}/g, 'title: \'$1\',\n      description: \'$2\',\n    },');
  
  // Fix function syntax
  fixed = fixed.replace(/function\s+App\(\)\s*=>/g, 'function App() {');
  fixed = fixed.replace(/const\s+FiveGModernizationPage\s*=\s*\(\)\s*=>/g, 'const FiveGModernizationPage = () => {');
  
  // Fix missing closing braces
  fixed = fixed.replace(/return\s*\(\s*<div([^>]*)>\s*([^<]+)\s*<\/div>\s*\)\s*$/gm, 'return (\n    <div$1>\n      $2\n    </div>\n  );');
  
  // Fix duplicate imports
  fixed = fixed.replace(/import\s+\{[^}]+\}\s+from\s+'[^']+';\s*import\s+\{[^}]+\}\s+from\s+'[^']+';/g, (match) => {
    const lines = match.split('\n');
    const uniqueImports = new Set();
    lines.forEach(line => {
      if (line.trim().startsWith('import')) {
        uniqueImports.add(line.trim());
      }
    });
    return Array.from(uniqueImports).join('\n');
  });
  
  // Fix missing closing tags in JSX
  fixed = fixed.replace(/<section([^>]*)>\s*([^<]+)\s*$/gm, '<section$1>\n      $2\n    </section>');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div([^>]*)>\s*<\/div><div([^>]*)>/g, '<div$1>\n              </div>\n              <div$2>');
  
  // Fix missing closing tags for Router and HelmetProvider
  fixed = fixed.replace(/<Router>\s*<div([^>]*)>\s*<Routes>\s*<Route[^>]*\/>\s*<Route[^>]*\/>\s*<\/Routes>\s*<\/div>\s*<\/div>\s*<\/Router>/g, 
    '<Router>\n        <div$1>\n          <Routes>\n            <Route path="/" element={<HomePage />} />\n            <Route path="*" element={<HomePage />} />\n          </Routes>\n        </div>\n      </Router>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXErrors, processFile };
