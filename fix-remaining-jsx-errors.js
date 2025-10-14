#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific JSX issues
function fixJSXIssues(content) {
  let fixed = content;
  
  // Fix malformed className strings with spaces in the middle
  fixed = fixed.replace(/className="([^"]*[a-zA-Z0-9])\s+([a-zA-Z0-9][^"]*)"/g, 'className="$1 $2"');
  
  // Fix specific patterns like "min-h-scre e n" -> "min-h-screen"
  fixed = fixed.replace(/min-h-scre\s+e\s+n/g, 'min-h-screen');
  fixed = fixed.replace(/contain\s+e\s+r/g, 'container');
  fixed = fixed.replace(/tex\s+t\s+-4xl/g, 'text-4xl');
  fixed = fixed.replace(/text-whitemb-8/g, 'text-white mb-8');
  fixed = fixed.replace(/text-\s+x\s+ltext-gray-3\s+0\s+0mb-8/g, 'text-xl text-gray-300 mb-8');
  fixed = fixed.replace(/gr\s+i\s+d/g, 'grid');
  fixed = fixed.replace(/gap-8mt-1\s+2/g, 'gap-8 mt-12');
  fixed = fixed.replace(/bg-blu\s+e\s+-5\s+0/g, 'bg-blue-50');
  fixed = fixed.replace(/border-blue-2\s+0\s+0/g, 'border-blue-200');
  fixed = fixed.replace(/text-\s+l\s+g/g, 'text-lg');
  fixed = fixed.replace(/text-blue-9\s+0\s+0/g, 'text-blue-900');
  fixed = fixed.replace(/text-blue-7\s+0\s+0/g, 'text-blue-700');
  fixed = fixed.replace(/bg-gree\s+n\s+-5\s+0/g, 'bg-green-50');
  fixed = fixed.replace(/border-green-2\s+0\s+0/g, 'border-green-200');
  fixed = fixed.replace(/text-green-9\s+0\s+0/g, 'text-green-900');
  fixed = fixed.replace(/text-green-7\s+0\s+0/g, 'text-green-700');
  fixed = fixed.replace(/bg-purpl\s+e\s+-5\s+0/g, 'bg-purple-50');
  fixed = fixed.replace(/border-purple-2\s+0\s+0/g, 'border-purple-200');
  fixed = fixed.replace(/text-purple-9\s+0\s+0/g, 'text-purple-900');
  fixed = fixed.replace(/text-purple-7\s+0\s+0/g, 'text-purple-700');
  
  // Fix missing array brackets
  fixed = fixed.replace(/const\s+services\s*=\s*\[\s*$/gm, 'const services = [');
  fixed = fixed.replace(/const\s+services\s*=\s*\[\s*{/gm, 'const services = [');
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*'([^']*)'(\s*[^,}])/g, '$1: \'$2\',$3');
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"(\s*[^,}])/g, '$1: "$2",$3');
  
  // Fix malformed className patterns
  fixed = fixed.replace(/className="([^"]*[a-zA-Z0-9])([A-Z][^"]*)"/g, 'className="$1 $2"');
  fixed = fixed.replace(/className="([^"]*[a-zA-Z0-9])(\d[^"]*)"/g, 'className="$1 $2"');
  
  // Fix missing spaces in className
  fixed = fixed.replace(/className="([^"]*[a-z])([A-Z][^"]*)"/g, 'className="$1 $2"');
  fixed = fixed.replace(/className="([^"]*[a-zA-Z])(\d[^"]*)"/g, 'className="$1 $2"');
  
  // Fix specific 5G page patterns
  fixed = fixed.replace(/min-h-screenbg-gray-5\s+0/g, 'min-h-screen bg-gray-50');
  fixed = fixed.replace(/contain\s+e\s+r mx-autopx-4py-1\s+6/g, 'container mx-auto px-4 py-16');
  fixed = fixed.replace(/text-centermb-1\s+6/g, 'text-center mb-16');
  fixed = fixed.replace(/text-4xlfont-boldtext-gray-9\s+0\s+0mb-6/g, 'text-4xl font-bold text-gray-900 mb-6');
  fixed = fixed.replace(/text-xltext-gray-6\s+0\s+0max-w-3xlmx-auto/g, 'text-xl text-gray-600 max-w-3xl mx-auto');
  fixed = fixed.replace(/gridmd:grid-cols-3gap-8mb-1\s+6/g, 'grid md:grid-cols-3 gap-8 mb-16');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<h3([^>]*)>([^<]*)<\/h3>/g, '<h3$1>$2</h3>');
  fixed = fixed.replace(/<p([^>]*)>([^<]*)<\/p>/g, '<p$1>$2</p>');
  fixed = fixed.replace(/<div([^>]*)>([^<]*)<\/div>/g, '<div$1>$2</div>');
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>([^<]*)<\/>/g, '<>$1</>');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (');
  
  // Fix missing closing brackets for arrays
  fixed = fixed.replace(/\[\s*$/gm, '[]');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFilePatterns(filePath, content) {
  let fixed = content;
  
  // Fix 404 page specific issues
  if (filePath.includes('404/page.tsx')) {
    // Fix the malformed JSX structure
    fixed = fixed.replace(
      /<div className="gr i d md:grid-cols-2 lg:grid-cols-3gap-8mt-1 2">;/g,
      '<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">'
    );
    
    // Fix the closing tag structure
    fixed = fixed.replace(
      /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g,
      '</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>'
    );
  }
  
  // Fix 5G pages specific issues
  if (filePath.includes('5g-')) {
    // Fix missing array brackets
    fixed = fixed.replace(/const\s+services\s*=\s*\[\s*$/gm, 'const services = [');
    fixed = fixed.replace(/const\s+services\s*=\s*\[\s*{/gm, 'const services = [');
    
    // Fix missing semicolons in object properties
    fixed = fixed.replace(/(\w+):\s*'([^']*)'(\s*[^,}])/g, '$1: \'$2\',$3');
    fixed = fixed.replace(/(\w+):\s*"([^"]*)"(\s*[^,}])/g, '$1: "$2",$3');
  }
  
  return fixed;
}

// Main function to process files
async function fixFiles() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = fixJSXIssues(content);
      fixed = fixSpecificFilePatterns(filePath, fixed);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`Files fixed: ${fixedCount}`);
  console.log(`Errors: ${errorCount}`);
}

// Run the fix
fixFiles().catch(console.error);