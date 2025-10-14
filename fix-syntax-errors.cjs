const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix function declaration syntax
  fixed = fixed.replace(/function\s+(\w+)\s*\(\)\s*=>\s*{/g, 'function $1() {');
  
  // Fix array syntax issues
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*{/g, 'const $1 = [\n    {');
  
  // Fix CSS class syntax with spaces
  fixed = fixed.replace(/className="([^"]*?)\s+([^"]*?)"/g, (match, part1, part2) => {
    const cleanClass = (part1 + part2).replace(/\s+/g, '');
    return `className="${cleanClass}"`;
  });
  
  // Fix specific CSS class patterns
  fixed = fixed.replace(/bg-slate-9\s*0\s*0\s*0/g, 'bg-slate-900');
  fixed = fixed.replace(/text-gray-3\s*0\s*0\s*0/g, 'text-gray-300');
  fixed = fixed.replace(/text-gray-3\s*0\s*0/g, 'text-gray-300');
  fixed = fixed.replace(/from-purple-4\s*0\s*0/g, 'from-purple-400');
  fixed = fixed.replace(/to-cyan-4\s*0\s*0/g, 'to-cyan-400');
  fixed = fixed.replace(/from-purple-6\s*0\s*0/g, 'from-purple-600');
  fixed = fixed.replace(/to-cyan-6\s*0\s*0/g, 'to-cyan-600');
  fixed = fixed.replace(/hover:from-purple-7\s*0\s*0/g, 'hover:from-purple-700');
  fixed = fixed.replace(/hover:to-cyan-7\s*0\s*0/g, 'hover:to-cyan-700');
  fixed = fixed.replace(/border-purple-5\s*0\s*0/g, 'border-purple-500');
  fixed = fixed.replace(/hover:bg-purple-5\s*0\s*0/g, 'hover:bg-purple-500');
  fixed = fixed.replace(/duration-3\s*0\s*0/g, 'duration-300');
  fixed = fixed.replace(/mb-1\s*6/g, 'mb-16');
  fixed = fixed.replace(/py-2\s*0/g, 'py-20');
  fixed = fixed.replace(/py-1\s*6/g, 'py-16');
  fixed = fixed.replace(/px-4py-1\s*6/g, 'px-4 py-16');
  fixed = fixed.replace(/mt-1\s*2/g, 'mt-12');
  fixed = fixed.replace(/gap-8\s*mt-1\s*2/g, 'gap-8 mt-12');
  fixed = fixed.replace(/grid-cols-3gap-8/g, 'grid-cols-3 gap-8');
  fixed = fixed.replace(/font-boldtext-white/g, 'font-bold text-white');
  fixed = fixed.replace(/font-semiboldtext-/g, 'font-semibold text-');
  fixed = fixed.replace(/border-blue-20\s*0rounded-lgp-6/g, 'border-blue-200 rounded-lg p-6');
  fixed = fixed.replace(/border-green-20\s*0rounded-lgp-6/g, 'border-green-200 rounded-lg p-6');
  fixed = fixed.replace(/border-purple-20\s*0rounded-lgp-6/g, 'border-purple-200 rounded-lg p-6');
  fixed = fixed.replace(/text-blue-90\s*0mb-2/g, 'text-blue-900 mb-2');
  fixed = fixed.replace(/text-green-90\s*0mb-2/g, 'text-green-900 mb-2');
  fixed = fixed.replace(/text-blue-70\s*0/g, 'text-blue-700');
  fixed = fixed.replace(/text-green-70\s*0/g, 'text-green-700');
  fixed = fixed.replace(/text-purple-70\s*0/g, 'text-purple-700');
  fixed = fixed.replace(/w-1\s*2\s*h-1\s*2/g, 'w-12 h-12');
  fixed = fixed.replace(/text-purple-4\s*0\s*0/g, 'text-purple-400');
  fixed = fixed.replace(/bg-slate-8\s*0\s*0/g, 'bg-slate-800');
  fixed = fixed.replace(/border-slate-7\s*0\s*0/g, 'border-slate-700');
  fixed = fixed.replace(/hover:border-purple-5\s*0\s*0/g, 'hover:border-purple-500');
  fixed = fixed.replace(/hover:scale-1\s*0\s*5/g, 'hover:scale-105');
  fixed = fixed.replace(/hover:shadow-purple-5\s*0\s*0\/2\s*0/g, 'hover:shadow-purple-500/20');
  fixed = fixed.replace(/from-purple-9\s*0\s*0\/5\s*0/g, 'from-purple-900/50');
  fixed = fixed.replace(/to-cyan-9\s*0\s*0\/5\s*0/g, 'to-cyan-900/50');
  fixed = fixed.replace(/p-1\s*2/g, 'p-12');
  fixed = fixed.replace(/via-purple-9\s*0\s*0/g, 'via-purple-900');
  fixed = fixed.replace(/to-slate-9\s*0\s*0/g, 'to-slate-900');
  fixed = fixed.replace(/from-slate-9\s*0\s*0/g, 'from-slate-900');
  
  // Fix missing closing tags and JSX structure issues
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/}\s*;\s*$/gm, '}');
  
  // Fix missing closing tags for common elements
  fixed = fixed.replace(/<h3([^>]*)>([^<]*)<\/h3>\s*$/gm, '<h3$1>$2</h3>');
  fixed = fixed.replace(/<p([^>]*)>([^<]*)<\/p>\s*$/gm, '<p$1>$2</p>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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
console.log('Starting syntax error fixes...');

// Get all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log('Syntax error fixes completed!');