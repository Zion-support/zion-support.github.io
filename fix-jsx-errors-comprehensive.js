#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;

  // Fix malformed component names and function declarations
  fixed = fixed.replace(/const(\w+)Page\s*=\s*\(\)\s*=>\s*{/g, 'const $1Page = () => {');
  fixed = fixed.replace(/const(\w+)\s*=\s*\(\)\s*=>\s*{/g, 'const $1 = () => {');
  
  // Fix malformed JSX tags
  fixed = fixed.replace(/<Linkt\s+/g, '<Link ');
  fixed = fixed.replace(/<divke\s+/g, '<div ');
  fixed = fixed.replace(/<h-(\d+)\s+/g, '<h$1 ');
  fixed = fixed.replace(/<Check\s+Circle/g, '<CheckCircle');
  fixed = fixed.replace(/<Arrow\s+Right/g, '<ArrowRight');
  fixed = fixed.replace(/<Enhanced\s+SEO/g, '<EnhancedSEO');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/Linkt>/g, '</Link>');
  fixed = fixed.replace(/<\/divke>/g, '</div>');
  fixed = fixed.replace(/<\/h-(\d+)>/g, '</h$1>');
  fixed = fixed.replace(/<\/Check\s+Circle>/g, '</CheckCircle>');
  fixed = fixed.replace(/<\/Arrow\s+Right>/g, '</ArrowRight>');
  fixed = fixed.replace(/<\/Enhanced\s+SEO>/g, '</EnhancedSEO>');
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className="([^"]*?)-([^"]*?)"/g, (match, p1, p2) => {
    return `className="${p1} ${p2}"`;
  });
  
  // Fix malformed text content with missing spaces
  fixed = fixed.replace(/([a-z])([A-Z])/g, '$1 $2');
  fixed = fixed.replace(/([a-z])(\d)/g, '$1 $2');
  fixed = fixed.replace(/(\d)([a-z])/g, '$1 $2');
  
  // Fix malformed export statements
  fixed = fixed.replace(/exportdefault\s+(\w+)/g, 'export default $1');
  fixed = fixed.replace(/export\s+default\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+);/g, 'export default $1$2$3$4;');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/\s+(\w+)\s*=\s*{([^}]+)}\s*/g, ' $1={$2}');
  fixed = fixed.replace(/\s+(\w+)\s*=\s*"([^"]+)"\s*/g, ' $1="$2"');
  
  // Fix malformed array/object syntax
  fixed = fixed.replace(/,\s*}/g, '}');
  fixed = fixed.replace(/,\s*]/g, ']');
  fixed = fixed.replace(/,\s*\)/g, ')');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*{/g, '<>');
  fixed = fixed.replace(/}\s*<\/>/g, '</>');
  
  // Fix malformed function calls and expressions
  fixed = fixed.replace(/\s+{([^}]+)}\s*/g, ' {$1}');
  fixed = fixed.replace(/\s+\(([^)]+)\)\s*/g, ' ($1)');
  
  // Fix malformed template literals and strings
  fixed = fixed.replace(/"([^"]*?)-([^"]*?)"/g, (match, p1, p2) => {
    if (p1.includes(' ') || p2.includes(' ')) {
      return `"${p1} ${p2}"`;
    }
    return match;
  });
  
  // Fix malformed grid and flex classes
  fixed = fixed.replace(/gridmd:/g, 'grid md:');
  fixed = fixed.replace(/grid-cols-1-md:/g, 'grid-cols-1 md:');
  fixed = fixed.replace(/flexflex-colsm:/g, 'flex flex-col sm:');
  fixed = fixed.replace(/flexflex-row/g, 'flex flex-row');
  fixed = fixed.replace(/inline-flexitems-center/g, 'inline-flex items-center');
  
  // Fix malformed spacing classes
  fixed = fixed.replace(/mb-126/g, 'mb-12');
  fixed = fixed.replace(/mb-3-xl/g, 'mb-3xl');
  fixed = fixed.replace(/max-w-3-xl/g, 'max-w-3xl');
  fixed = fixed.replace(/max-w-7-xlmx-auto/g, 'max-w-7xl mx-auto');
  fixed = fixed.replace(/max-w-4-xlmx-auto/g, 'max-w-4xl mx-auto');
  fixed = fixed.replace(/max-w-2-xl/g, 'max-w-2xl');
  
  // Fix malformed text size classes
  fixed = fixed.replace(/text-4-xlfont-bold/g, 'text-4xl font-bold');
  fixed = fixed.replace(/text-xltext-gray-600/g, 'text-xl text-gray-600');
  fixed = fixed.replace(/text-xltext-gray-3/g, 'text-xl text-gray-3');
  fixed = fixed.replace(/text-3-xlmd:text-4-xl/g, 'text-3xl md:text-4xl');
  fixed = fixed.replace(/text-4-xlmd:text-6-xl/g, 'text-4xl md:text-6xl');
  
  // Fix malformed color classes
  fixed = fixed.replace(/text-gray-90-mb-4/g, 'text-gray-900 mb-4');
  fixed = fixed.replace(/text-gray-60-mb-4/g, 'text-gray-600 mb-4');
  fixed = fixed.replace(/text-blue-600-hover:text-blue-800/g, 'text-blue-600 hover:text-blue-800');
  fixed = fixed.replace(/bg-blue-600-hover:bg-blue-700/g, 'bg-blue-600 hover:bg-blue-700');
  fixed = fixed.replace(/from-slate-9/g, 'from-slate-900');
  fixed = fixed.replace(/via-purple-9/g, 'via-purple-900');
  fixed = fixed.replace(/to-slate-9/g, 'to-slate-900');
  fixed = fixed.replace(/from-cyan-4/g, 'from-cyan-400');
  fixed = fixed.replace(/to-purple-4/g, 'to-purple-400');
  fixed = fixed.replace(/from-cyan-5/g, 'from-cyan-500');
  fixed = fixed.replace(/to-purple-6/g, 'to-purple-600');
  fixed = fixed.replace(/hover:from-cyan-6-hover:to-purple-7/g, 'hover:from-cyan-600 hover:to-purple-700');
  fixed = fixed.replace(/border-cyan-4/g, 'border-cyan-400');
  fixed = fixed.replace(/text-cyan-4/g, 'text-cyan-400');
  fixed = fixed.replace(/hover:bg-cyan-4\/1\s+0/g, 'hover:bg-cyan-400/10');
  fixed = fixed.replace(/bg-slate-8\/3\s+0/g, 'bg-slate-800/30');
  fixed = fixed.replace(/text-gray-30/g, 'text-gray-300');
  
  // Fix malformed padding and margin classes
  fixed = fixed.replace(/py-2\s+px-4-sm:px-6-lg:px-8/g, 'py-20 px-4 sm:px-6 lg:px-8');
  fixed = fixed.replace(/py-20\s+px-4-sm:px-6-lg:px-8/g, 'py-20 px-4 sm:px-6 lg:px-8');
  fixed = fixed.replace(/px-8\s+py-4/g, 'px-8 py-4');
  fixed = fixed.replace(/py-3\s+px-6/g, 'py-3 px-6');
  
  // Fix malformed rounded classes
  fixed = fixed.replace(/rounded-lghover:/g, 'rounded-lg hover:');
  fixed = fixed.replace(/rounded-lgshadow-lgp-6/g, 'rounded-lg shadow-lg p-6');
  
  // Fix malformed transition classes
  fixed = fixed.replace(/transition-colors/g, 'transition-colors');
  fixed = fixed.replace(/transition-all\s+duration-3/g, 'transition-all duration-300');
  fixed = fixed.replace(/group-hover:translate-x-1\s+transition-transform/g, 'group-hover:translate-x-1 transition-transform');
  
  // Fix malformed icon classes
  fixed = fixed.replace(/ml-2-w-4\s+h-4/g, 'ml-2 w-4 h-4');
  fixed = fixed.replace(/ml-2-w-5\s+h-5/g, 'ml-2 w-5 h-5');
  fixed = fixed.replace(/w-8-h-8/g, 'w-8 h-8');
  fixed = fixed.replace(/w-16\s+h-1/g, 'w-16 h-16');
  
  // Fix malformed grid classes
  fixed = fixed.replace(/gridgrid-cols-1-md:grid-cols-3/g, 'grid grid-cols-1 md:grid-cols-3');
  fixed = fixed.replace(/gridmd:grid-cols-3/g, 'grid md:grid-cols-3');
  fixed = fixed.replace(/gridmd:grid-cols-2-lg:grid-cols-3/g, 'grid md:grid-cols-2 lg:grid-cols-3');
  
  // Fix malformed container classes
  fixed = fixed.replace(/container\s+mx-auto\s+px-4/g, 'container mx-auto px-4');
  
  // Fix malformed text center classes
  fixed = fixed.replace(/text-center\s+mb-12/g, 'text-center mb-12');
  
  // Fix malformed font classes
  fixed = fixed.replace(/font-semiboldtext-gray-90-mb-4/g, 'font-semibold text-gray-900 mb-4');
  fixed = fixed.replace(/font-semibold\s+text-white/g, 'font-semibold text-white');
  fixed = fixed.replace(/font-medium/g, 'font-medium');
  
  // Fix malformed border classes
  fixed = fixed.replace(/bg-blue-50-border\s+border-blue-200/g, 'bg-blue-50 border border-blue-200');
  fixed = fixed.replace(/bg-green-50-border\s+border-green-200/g, 'bg-green-50 border border-green-200');
  fixed = fixed.replace(/bg-purple-50-border\s+border-purple-200/g, 'bg-purple-50 border border-purple-200');
  
  // Fix malformed text color classes
  fixed = fixed.replace(/text-blue-900\s+mb-2/g, 'text-blue-900 mb-2');
  fixed = fixed.replace(/text-blue-700/g, 'text-blue-700');
  fixed = fixed.replace(/text-green-900\s+mb-2/g, 'text-green-900 mb-2');
  fixed = fixed.replace(/text-green-700/g, 'text-green-700');
  fixed = fixed.replace(/text-purple-900\s+mb-2/g, 'text-purple-900 mb-2');
  fixed = fixed.replace(/text-purple-700/g, 'text-purple-700');
  
  // Fix malformed gradient classes
  fixed = fixed.replace(/bg-gradient-to-r\s+from-cyan-5\s+to-purple-6/g, 'bg-gradient-to-r from-cyan-500 to-purple-600');
  fixed = fixed.replace(/bg-gradient-to-br\s+from-slate-9\s+via-purple-9\s+to-slate-9/g, 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900');
  fixed = fixed.replace(/bg-gradient-to-r\s+from-cyan-4\s+to-purple-4/g, 'bg-gradient-to-r from-cyan-400 to-purple-400');
  
  // Fix malformed background classes
  fixed = fixed.replace(/bg-clip-text\s+text-transparent/g, 'bg-clip-text text-transparent');
  
  // Fix malformed spacing
  fixed = fixed.replace(/\s+/g, ' ');
  fixed = fixed.replace(/\s*{\s*/g, ' {');
  fixed = fixed.replace(/\s*}\s*/g, ' }');
  fixed = fixed.replace(/\s*\(\s*/g, ' (');
  fixed = fixed.replace(/\s*\)\s*/g, ' )');
  fixed = fixed.replace(/\s*\[\s*/g, ' [');
  fixed = fixed.replace(/\s*\]\s*/g, ' ]');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(content, filePath) {
  let fixed = content;
  
  // Fix specific issues in 404 page
  if (filePath.includes('404')) {
    fixed = fixed.replace(/exportdefault\s+Not\s+Found\s+Page;/g, 'export default NotFoundPage;');
    fixed = fixed.replace(/const\s+NotFoundPage:\s+React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const NotFoundPage: React.FC = () => {');
  }
  
  // Fix specific issues in 5G pages
  if (filePath.includes('5g-')) {
    // Fix malformed function names
    fixed = fixed.replace(/constFiveG(\w+)Page\s*=\s*\(\)\s*=>\s*{/g, 'const FiveG$1Page = () => {');
    fixed = fixed.replace(/constFiveG(\w+)\s*=\s*\(\)\s*=>\s*{/g, 'const FiveG$1 = () => {');
    
    // Fix malformed export statements
    fixed = fixed.replace(/exportdefault\s+Five\s+G(\w+)\s+Page;/g, 'export default FiveG$1Page;');
    fixed = fixed.replace(/exportdefault\s+Five\s+G(\w+);/g, 'export default FiveG$1;');
    fixed = fixed.replace(/exportdefault\s+FiveG(\w+)Page;/g, 'export default FiveG$1Page;');
    fixed = fixed.replace(/exportdefault\s+FiveG(\w+);/g, 'export default FiveG$1;');
  }
  
  return fixed;
}

// Main function to process files
async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} TypeScript files to process...`);
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const filePath of files) {
    try {
      console.log(`Processing: ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = fixJSXErrors(content);
      fixed = fixSpecificFile(fixed, filePath);
      
      // Write the fixed content back
      fs.writeFileSync(filePath, fixed, 'utf8');
      
      processedCount++;
      console.log(`✓ Fixed: ${filePath}`);
    } catch (error) {
      console.error(`✗ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`✓ Successfully processed: ${processedCount} files`);
  console.log(`✗ Errors: ${errorCount} files`);
}

// Run the script
main().catch(console.error);