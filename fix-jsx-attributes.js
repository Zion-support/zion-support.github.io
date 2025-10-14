#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX attributes
function fixJSXAttributes(content) {
  let fixed = content;

  // Fix JSX attributes that are missing quotes or have incorrect syntax
  fixed = fixed.replace(/className="([^"]*?)"\s+([a-zA-Z0-9\-_]+)=([^>]*?)(?=\s|>)/g, 'className="$1" $2=$3');
  fixed = fixed.replace(/className="([^"]*?)"\s+([a-zA-Z0-9\-_]+)=([^>]*?)(?=\s|>)/g, 'className="$1" $2=$3');
  
  // Fix specific patterns
  fixed = fixed.replace(/className="min-h-screen"\s+bg-white/g, 'className="min-h-screen bg-white"');
  fixed = fixed.replace(/className="py-20"\s+px-4\s+bg-gradient-to-br\s+from-blue-50\s+to-indigo-100/g, 'className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100"');
  fixed = fixed.replace(/className="max-w-6xl"\s+mx-auto\s+text-center/g, 'className="max-w-6xl mx-auto text-center"');
  fixed = fixed.replace(/className="text-5xl"\s+font-bold\s+text-gray-900\s+mb-6/g, 'className="text-5xl font-bold text-gray-900 mb-6"');
  fixed = fixed.replace(/className="text-xl"\s+text-gray-600\s+max-w-3xl\s+mx-auto/g, 'className="text-xl text-gray-600 max-w-3xl mx-auto"');
  fixed = fixed.replace(/className="py-16"\s+px-4/g, 'className="py-16 px-4"');
  fixed = fixed.replace(/className="max-w-6xl"\s+mx-auto/g, 'className="max-w-6xl mx-auto"');
  fixed = fixed.replace(/className="grid\s+md:grid-cols-2\s+gap-12\s+items-center"/g, 'className="grid md:grid-cols-2 gap-12 items-center"');
  fixed = fixed.replace(/className="text-3xl"\s+font-bold\s+text-gray-900\s+mb-6/g, 'className="text-3xl font-bold text-gray-900 mb-6"');
  fixed = fixed.replace(/className="text-lg"\s+text-gray-600\s+mb-6/g, 'className="text-lg text-gray-600 mb-6"');
  fixed = fixed.replace(/className="space-y-3"/g, 'className="space-y-3"');
  fixed = fixed.replace(/className="flex\s+items-center"/g, 'className="flex items-center"');
  fixed = fixed.replace(/className="w-2\s+h-2\s+bg-blue-600\s+rounded-full\s+mr-3"/g, 'className="w-2 h-2 bg-blue-600 rounded-full mr-3"');
  fixed = fixed.replace(/className="bg-gradient-to-br\s+from-blue-500\s+to-purple-600\s+rounded-lg\s+p-8\s+text-white"/g, 'className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white"');
  fixed = fixed.replace(/className="text-2xl"\s+font-bold\s+mb-4/g, 'className="text-2xl font-bold mb-4"');
  fixed = fixed.replace(/className="mb-6"/g, 'className="mb-6"');
  fixed = fixed.replace(/className="inline-block\s+bg-white\s+text-blue-600\s+font-semibold\s+py-3\s+px-6\s+rounded-lg\s+hover:bg-gray-100\s+transition-colors"/g, 'className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"');
  fixed = fixed.replace(/className="py-16"\s+px-4\s+bg-blue-600/g, 'className="py-16 px-4 bg-blue-600"');
  fixed = fixed.replace(/className="max-w-4xl"\s+mx-auto\s+text-center/g, 'className="max-w-4xl mx-auto text-center"');
  fixed = fixed.replace(/className="text-3xl"\s+font-bold\s+text-white\s+mb-6/g, 'className="text-3xl font-bold text-white mb-6"');
  fixed = fixed.replace(/className="text-xl"\s+text-blue-100\s+mb-8/g, 'className="text-xl text-blue-100 mb-8"');
  fixed = fixed.replace(/className="inline-block\s+bg-white\s+text-blue-600\s+font-semibold\s+py-3\s+px-8\s+rounded-lg\s+hover:bg-gray-100\s+transition-colors"/g, 'className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"');

  // Fix 5G implementation specific patterns
  fixed = fixed.replace(/className="min-h-screen"\s+bg-gradient-to-br\s+from-slate-900\s+via-purple-900\s+to-slate-900/g, 'className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"');
  fixed = fixed.replace(/className="container"\s+mx-auto\s+px-4\s+py-16/g, 'className="container mx-auto px-4 py-16"');
  fixed = fixed.replace(/className="text-center"/g, 'className="text-center"');
  fixed = fixed.replace(/className="text-4xl"\s+font-bold\s+text-white\s+mb-8/g, 'className="text-4xl font-bold text-white mb-8"');
  fixed = fixed.replace(/className="text-gray-300"\s+text-lg/g, 'className="text-gray-300 text-lg"');

  // Fix href attributes
  fixed = fixed.replace(/href=([^"'\s][^"'>\s]*)/g, 'href="$1"');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXAttributes(content);
    
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
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
    });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixJSXAttributes, processFile };