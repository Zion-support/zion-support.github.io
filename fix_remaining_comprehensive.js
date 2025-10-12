#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix all remaining comprehensive issues
function fixRemainingComprehensive(content) {
  // Fix malformed meta tags with spaces
  content = content.replace(/<meta name="([^"]*)" content="([^"]*)" \/  \/>/g, '<meta name="$1" content="$2" />');
  content = content.replace(/<meta name="([^"]*)" content="([^"]*)" \/>/g, '<meta name="$1" content="$2" />');
  
  // Fix malformed className attributes with spaces
  content = content.replace(/className="([^"]*?)\s+([^"]*?)"/g, (match, part1, part2) => {
    return `className="${part1}${part2}"`;
  });
  
  // Fix specific patterns
  content = content.replace(/className="min-h-screenbg-gradient-to-br/g, 'className="min-h-screen bg-gradient-to-br');
  content = content.replace(/className="max-w-7xlmx-auto/g, 'className="max-w-7xl mx-auto');
  content = content.replace(/className="text-center"/g, 'className="text-center"');
  content = content.replace(/className="text-4xlfont-bold/g, 'className="text-4xl font-bold');
  content = content.replace(/className="text-xltext-gray-300/g, 'className="text-xl text-gray-300');
  content = content.replace(/className="bg-gradient-to-rfrom-cyan-500/g, 'className="bg-gradient-to-r from-cyan-500');
  content = content.replace(/className="flexitems-center/g, 'className="flex items-center');
  content = content.replace(/className="justify-centermx-auto/g, 'className="justify-center mx-auto');
  content = content.replace(/className="w-5h-5/g, 'className="w-5 h-5');
  content = content.replace(/className="ml-2"/g, 'className="ml-2"');
  content = content.replace(/className="mb-4"/g, 'className="mb-4"');
  content = content.replace(/className="mb-6"/g, 'className="mb-6"');
  content = content.replace(/className="mb-8"/g, 'className="mb-8"');
  content = content.replace(/className="py-12"/g, 'className="py-12"');
  content = content.replace(/className="py-16"/g, 'className="py-16"');
  content = content.replace(/className="pt-20"/g, 'className="pt-20"');
  content = content.replace(/className="pb-16"/g, 'className="pb-16"');
  content = content.replace(/className="space-x-4"/g, 'className="space-x-4"');
  content = content.replace(/className="space-y-2"/g, 'className="space-y-2"');
  content = content.replace(/className="space-y-3"/g, 'className="space-y-3"');
  content = content.replace(/className="gap-8"/g, 'className="gap-8"');
  content = content.replace(/className="transition-colors"/g, 'className="transition-colors"');
  content = content.replace(/className="hover:text-cyan-400"/g, 'className="hover:text-cyan-400"');
  
  // Fix malformed JSX structure - fix self-closing divs that should be opening tags
  content = content.replace(/<div className="([^"]*)"\s*\/>/g, '<div className="$1">');
  
  // Fix malformed JSX structure - fix self-closing Helmet that should be opening tag
  content = content.replace(/<Helmet\s*\/>/g, '<Helmet>');
  
  // Fix malformed JSX structure - fix self-closing Link elements that should contain text
  content = content.replace(/<Link\s+to="([^"]*)"\s+className="([^"]*)"\s*\/>\s*([^<]+)\s*<ArrowRight[^>]*\/>/g, '<Link\n          to="$1"\n          className="$2"\n        >\n          $3\n          <ArrowRight className="w-5 h-5 ml-2" />\n        </Link>');
  
  // Fix any remaining malformed JSX structure
  content = content.replace(/<div className="([^"]*)"\s*\/>/g, '<div className="$1">');
  
  // Fix any remaining self-closing elements that should contain text
  content = content.replace(/<h1 className="([^"]*)"\s*\/>\s*([^<]+)\s*<\/h1>/g, '<h1 className="$1">$2</h1>');
  content = content.replace(/<p className="([^"]*)"\s*\/>\s*([^<]+)\s*<\/p>/g, '<p className="$1">$2</p>');
  content = content.replace(/<button className="([^"]*)"\s*\/>\s*([^<]+)\s*<\/button>/g, '<button className="$1">$2</button>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingComprehensive(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed comprehensive issues: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process TSX files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

// Main execution
console.log('Starting comprehensive remaining fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files.`);