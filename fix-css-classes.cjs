#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix CSS class spacing issues
function fixCSSClasses(content) {
  let fixed = content;

  // Fix spacing in CSS class numbers
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)/g, '$1-$2$3');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4$5');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4$5$6');
  
  // Fix specific patterns
  fixed = fixed.replace(/bg-slate-8\s+0\s+0/g, 'bg-slate-800');
  fixed = fixed.replace(/border-slate-7\s+0\s+0/g, 'border-slate-700');
  fixed = fixed.replace(/hover:border-purple-5\s+0\s+0/g, 'hover:border-purple-500');
  fixed = fixed.replace(/duration-3\s+0\s+0/g, 'duration-300');
  fixed = fixed.replace(/hover:scale-1\s+0\s+5/g, 'hover:scale-105');
  fixed = fixed.replace(/shadow-purple-5\s+0\s+0\/2\s+0/g, 'shadow-purple-500/20');
  fixed = fixed.replace(/w-1\s+2/g, 'w-12');
  fixed = fixed.replace(/h-1\s+2/g, 'h-12');
  fixed = fixed.replace(/text-purple-4\s+0\s+0/g, 'text-purple-400');
  fixed = fixed.replace(/text-gray-3\s+0\s+0/g, 'text-gray-300');
  fixed = fixed.replace(/from-purple-9\s+0\s+0\/5\s+0/g, 'from-purple-900/50');
  fixed = fixed.replace(/to-cyan-9\s+0\s+0\/5\s+0/g, 'to-cyan-900/50');
  fixed = fixed.replace(/p-1\s+2/g, 'p-12');
  fixed = fixed.replace(/<h\s+2/g, '<h2');
  fixed = fixed.replace(/<h\s+1/g, '<h1');
  fixed = fixed.replace(/<h\s+3/g, '<h3');
  
  // Fix animation delay
  fixed = fixed.replace(/\$\{index \* 1\s+0\s+0\}/g, '${index * 100}');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCSSClasses(content);
    
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

module.exports = { fixCSSClasses, processFile };