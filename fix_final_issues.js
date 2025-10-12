#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix final issues
function fixFinalIssues(content) {
  // Fix malformed className attributes with spaces
  content = content.replace(/className="([^"]*?)\s+([^"]*?)"/g, (match, part1, part2) => {
    return `className="${part1}${part2}"`;
  });
  
  // Fix specific patterns
  content = content.replace(/className="m\s+i\s+n-h-screen/g, 'className="min-h-screen');
  content = content.replace(/className="m\s+a\s+x-w-7xl/g, 'className="max-w-7xl');
  content = content.replace(/className="t\s+e\s+xt-center/g, 'className="text-center');
  content = content.replace(/className="t\s+e\s+xt-xl/g, 'className="text-xl');
  content = content.replace(/className="t\s+e\s+xt-4xl/g, 'className="text-4xl');
  content = content.replace(/className="t\s+e\s+xt-lg/g, 'className="text-lg');
  content = content.replace(/className="t\s+e\s+xt-white/g, 'className="text-white');
  content = content.replace(/className="t\s+e\s+xt-gray-300/g, 'className="text-gray-300');
  content = content.replace(/className="b\s+g-gradient-to-r/g, 'className="bg-gradient-to-r');
  content = content.replace(/className="f\s+l\s+ex/g, 'className="flex');
  content = content.replace(/className="i\s+tems-center/g, 'className="items-center');
  content = content.replace(/className="j\s+ustify-center/g, 'className="justify-center');
  content = content.replace(/className="m\s+x-auto/g, 'className="mx-auto');
  content = content.replace(/className="w\s+-fit/g, 'className="w-fit');
  content = content.replace(/className="w\s+-4/g, 'className="w-4');
  content = content.replace(/className="h\s+-4/g, 'className="h-4');
  content = content.replace(/className="w\s+-5/g, 'className="w-5');
  content = content.replace(/className="h\s+-5/g, 'className="h-5');
  content = content.replace(/className="m\s+l-2/g, 'className="ml-2');
  content = content.replace(/className="m\s+r-2/g, 'className="mr-2');
  content = content.replace(/className="m\s+b-4/g, 'className="mb-4');
  content = content.replace(/className="m\s+b-6/g, 'className="mb-6');
  content = content.replace(/className="m\s+b-8/g, 'className="mb-8');
  content = content.replace(/className="p\s+y-12/g, 'className="py-12');
  content = content.replace(/className="p\s+y-16/g, 'className="py-16');
  content = content.replace(/className="p\s+t-20/g, 'className="pt-20');
  content = content.replace(/className="p\s+b-16/g, 'className="pb-16');
  content = content.replace(/className="s\s+pace-x-4/g, 'className="space-x-4');
  content = content.replace(/className="s\s+pace-y-2/g, 'className="space-y-2');
  content = content.replace(/className="s\s+pace-y-3/g, 'className="space-y-3');
  content = content.replace(/className="g\s+ap-8/g, 'className="gap-8');
  content = content.replace(/className="t\s+e\s+xt-center/g, 'className="text-center');
  content = content.replace(/className="t\s+r\s+ansition-colors/g, 'className="transition-colors');
  content = content.replace(/className="h\s+over:text-cyan-400/g, 'className="hover:text-cyan-400');
  
  // Fix any remaining malformed JSX structure
  content = content.replace(/<div className="([^"]*?)"\s*\/>/g, '<div className="$1">');
  
  // Fix any remaining self-closing Link elements
  content = content.replace(/<Link\s+to="([^"]*)"\s+className="([^"]*)"\s*\/>\s*([^<]+)\s*<ArrowRight[^>]*\/>/g, '<Link\n          to="$1"\n          className="$2"\n        >\n          $3\n          <ArrowRight className="w-5 h-5 ml-2" />\n        </Link>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixFinalIssues(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed final issues: ${filePath}`);
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
console.log('Starting final issue fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files.`);