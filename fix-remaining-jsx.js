#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining J SX issues
function fix Remaining JS X(content) {
  let fixed = content;
  
  // Fix remaining class Name spacing issues
  fixed = fixed.replace(/from-slate-900pt-20/g, 'from-slate-900 pt-20');
  fixed = fixed.replace(/py-16text-center/g, 'py-16 text-center');
  fixed = fixed.replace(/text-whitemb-/g, 'text-white mb-');
  fixed = fixed.replace(/text-gray-300mb-/g, 'text-gray-300 mb-');
  fixed = fixed.replace(/flexspace-/g, 'flex space-');
  fixed = fixed.replace(/flexitems-/g, 'flex items-');
  fixed = fixed.replace(/w-4 h-4ml-/g, 'w-4 h-4 ml-');
  fixed = fixed.replace(/w-5 h-5ml-/g, 'w-5 h-5 ml-');
  fixed = fixed.replace(/hover:text-cyan-400transition-colors/g, 'hover:text-cyan-400 transition-colors');
  fixed = fixed.replace(/items-centertext-gray-300/g, 'items-center text-gray-300');
  fixed = fixed.replace(/w-4 h-4mr-/g, 'w-4 h-4 mr-');
  fixed = fixed.replace(/pt-8text-center/g, 'pt-8 text-center');
  
  // Fix duplicate closing tags
  fixed = fixed.replace(/<\/L ink>\s*<\/L ink>/g, '</L ink>');
  fixed = fixed.replace(/<\/d iv>\s*<\/d iv>/g, '</d iv>');
  
  // Fix malformed Link components - single line format
  fixed = fixed.replace(/<L ink\s+to="([^"]+)"\s+class Name="([^"]+)"\s*\/>\s*([^<]+)\s*<([^>]+)\s*\/>/g, 
    '<L ink to="$1" class Name="$2">\n          $3\n          <$4 />\n        </L ink>');
  
  // Fix malformed Link components - multi-line format
  fixed = fixed.replace(/<L ink\s+to="([^"]+)"\s+class Name="([^"]+)"\s*>\s*([^<]+)\s*<([^>]+)\s*\/>\s*<\/L ink>\s*<\/L ink>/g,
    '<L ink to="$1" class Name="$2">\n          $3\n          <$4 />\n        </L ink>');
  
  // Fix Link components with extra spaces and malformed structure
  fixed = fixed.replace(/<L ink\s+to="([^"]+)"\s+class Name="([^"]+)"\s*>\s*([^<]+)\s*<([^>]+)\s*\/>\s*<\/L ink>\s*<\/L ink>/g,
    '<L ink to="$1" class Name="$2">\n          $3\n          <$4 />\n        </L ink>');
  
  // Fix specific patterns for 5 G pages
  fixed = fixed.replace(/<L ink\s+to="\/contact"\s+class Name="([^"]+)"\s*\/>\s*Contact Us\s*<A rrow Right[^>]*\/>/g,
    '<L ink to="/contact" class Name="$1">\n          Contact Us\n          <A rrow Right class Name="w-5 h-5 m l-2" />\n        </L ink>');
  
  // Fix malformed p tags
  fixed = fixed.replace(/<p c lass Name="([^"]*)" \/>\s*([^<]+)\s*<\/p>/g, '<p c lass Name="$1">\n              $2\n            </p>');
  
  // Fix self-closing divs that should be opening tags
  fixed = fixed.replace(/<d iv \/>\s*<h4/g, '<d iv>\n            <h4');
  f ixed = fixed.replace(/<div \/>\s*<h3/g, '<d iv>\n            <h3');
  
  // F ix ul tags
  fixed = fixed.replace(/<ul class Name="([^"]*)" \/>\s*<l i/g, '<ul class Name="$1">\n              <l i');
  
  return fixed;
}

// Function to process a single file
function process File(file Path) {
  try {
    const content = fs.read File Sync(file Path, 'utf8');
    const fixed = fix Remaining JS X(content);
    
    if (content !== fixed) {
      fs.write File Sync(file Path, fixed, 'utf8');
      console.log(`Fixed remaining J SX: ${file Path}`);
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
  console.log('Starting to fix remaining J SX issues...');
  
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
  
  console.log(`\n Fixed remaining J SX issues in ${fixed Count} files out of ${files.length} total files.`);
}

main().catch(console.error);