#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix J SX structure issues
function fix JS XStructure(content) {
  let fixed = content;
  
  // Fix remaining class Name spacing issues
  fixed = fixed.replace(/text-whitemb-/g, 'text-white mb-');
  fixed = fixed.replace(/text-gray-300mb-/g, 'text-gray-300 mb-');
  fixed = fixed.replace(/flexspace-/g, 'flex space-');
  fixed = fixed.replace(/flexitems-/g, 'flex items-');
  fixed = fixed.replace(/w-4 h-4ml-/g, 'w-4 h-4 ml-');
  fixed = fixed.replace(/w-5 h-5ml-/g, 'w-5 h-5 ml-');
  fixed = fixed.replace(/text-whitemb-/g, 'text-white mb-');
  fixed = fixed.replace(/hover:text-cyan-400transition-colors/g, 'hover:text-cyan-400 transition-colors');
  fixed = fixed.replace(/items-centertext-gray-300/g, 'items-center text-gray-300');
  fixed = fixed.replace(/w-4 h-4mr-/g, 'w-4 h-4 mr-');
  fixed = fixed.replace(/pt-8text-center/g, 'pt-8 text-center');
  fixed = fixed.replace(/from-slate-900pt-20/g, 'from-slate-900 pt-20');
  fixed = fixed.replace(/py-16text-center/g, 'py-16 text-center');
  
  // Fix self-closing divs that should be opening tags
  fixed = fixed.replace(/<d iv class Name="([^"]*)" \/>\s*<([^>]+)>/g, '<d iv class Name="$1">\n        <$2>');
  fixed = fixed.replace(/<f ooter class Name="([^"]*)" \/>\s*<d iv/g, '<footer class Name="$1">\n      <d iv');
  fixed = fixed.replace(/<ul class Name="([^"]*)" \/>\s*<l i/g, '<ul class Name="$1">\n              <l i');
  fixed = fixed.replace(/<p class Name="([^"]*)" \/>\s*([^<]+)/g, '<p c lass Name="$1">\n              $2');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<d iv \/>\s*<h4/g, '<d iv>\n            <h4');
  f ixed = fixed.replace(/<div \/>\s*<h4/g, '<d iv>\n            <h4');
  
  // F ix Link components that should be self-closing
  fixed = fixed.replace(/<Link\s+([^>]+)\s*\/>\s*([^<]+)\s*<([^>]+)\s*\/>/g, '<L ink $1>\n          $2\n          <$3 />\n        </L ink>');
  
  // Fix specific patterns
  fixed = fixed.replace(/<L ink\s+to="\/contact"\s+class Name="[^"]*"\s*\/>\s*Contact Us\s*<A rrow Right[^>]*\/>/g, 
    '<L ink\n          to="/contact"\n          class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"\n        >\n          Contact Us\n          <A rrow Right class Name="w-5 h-5 m l-2" />\n        </L ink>');
  
  // Fix malformed p tags
  fixed = fixed.replace(/<p c lass Name="([^"]*)" \/>\s*([^<]+)\s*<\/p>/g, '<p c lass Name="$1">\n              $2\n            </p>');
  
  return fixed;
}

// Function to process a single file
function process File(file Path) {
  try {
    const content = fs.read File Sync(file Path, 'utf8');
    const fixed = fix JS XStructure(content);
    
    if (content !== fixed) {
      fs.write File Sync(file Path, fixed, 'utf8');
      console.log(`Fixed J SX structure: ${file Path}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${file Path}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting to fix J SX structure issues...');
  
  // Get all Type Script/T SX files
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
  });
  
  let fixed Count = 0;
  
  files.for Each(file => {
    if (process File(file)) {
      fixed Count++;
    }
  });
  
  console.log(`\n Fixed J SX structure in ${fixed Count} files out of ${files.length} total files.`);
}

main().catch(console.error);