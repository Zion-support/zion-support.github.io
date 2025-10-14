const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix malformed class names (spaces in class names)
  fixed = fixed.replace(/(className="[^"]*?)\s+([^"]*")/g, (match, before, after) => {
    return before + after.replace(/\s+/g, ' ');
  });
  
  // Fix specific malformed class patterns
  fixed = fixed.replace(/className="([^"]*?)(\w+)\s+(\w+)([^"]*?)"/g, 'className="$1$2 $3$4"');
  fixed = fixed.replace(/className="([^"]*?)(\w+)\s+(\w+)\s+(\w+)([^"]*?)"/g, 'className="$1$2 $3 $4$5"');
  fixed = fixed.replace(/className="([^"]*?)(\w+)\s+(\w+)\s+(\w+)\s+(\w+)([^"]*?)"/g, 'className="$1$2 $3 $4 $5$6"');
  
  // Fix common malformed patterns
  fixed = fixed.replace(/text-whit e/g, 'text-white');
  fixed = fixed.replace(/font-boldtext-lgmb-6/g, 'font-bold text-lg mb-6');
  fixed = fixed.replace(/bg-gradient-to-rfrom-purple-4 0 0to-cyan-4 0 0/g, 'bg-gradient-to-r from-purple-400 to-cyan-400');
  fixed = fixed.replace(/bg-clip-texttext-transparent/g, 'bg-clip-text text-transparent');
  fixed = fixed.replace(/text-purple-70 0/g, 'text-purple-700');
  fixed = fixed.replace(/text-purple-90 0/g, 'text-purple-900');
  fixed = fixed.replace(/text-gray-4 0 0/g, 'text-gray-400');
  fixed = fixed.replace(/hover:text-whitetransition-colors/g, 'hover:text-white transition-colors');
  fixed = fixed.replace(/flexitems-centergroup/g, 'flex items-center group');
  fixed = fixed.replace(/w-4h-4mr-2group-hover:translate-x-1transition-transform/g, 'w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform');
  fixed = fixed.replace(/space-y-3mb-8/g, 'space-y-3 mb-8');
  fixed = fixed.replace(/mt -1 2/g, 'mt-12');
  fixed = fixed.replace(/pt-8border-tborder-slate-7 0 0\/5 0/g, 'pt-8 border-t border-slate-700/50');
  fixed = fixed.replace(/max-w-2xlmx-autotext-center/g, 'max-w-2xl mx-auto text-center');
  fixed = fixed.replace(/text -2xl/g, 'text-2xl');
  fixed = fixed.replace(/font-boldtext-whitemb-4/g, 'font-bold text-white mb-4');
  fixed = fixed.replace(/text-gray-3 0 0mb-6text-lg/g, 'text-gray-300 mb-6 text-lg');
  fixed = fixed.replace(/flexflex-colsm:flex-rowgap-4max-w-mdmx-auto/g, 'flex flex-col sm:flex-row gap-4 max-w-md mx-auto');
  fixed = fixed.replace(/flex -1/g, 'flex-1');
  fixed = fixed.replace(/px-4 py-3 bg-slate-8 0 0/g, 'px-4 py-3 bg-slate-800');
  fixed = fixed.replace(/border border-slate-6 0 0/g, 'border border-slate-600');
  fixed = fixed.replace(/rounded-lgtext-whiteplaceholder-gray-4 0 0/g, 'rounded-lg text-white placeholder-gray-400');
  fixed = fixed.replace(/focus:outline-nonefocus:ring-2focus:ring-purple-5 0 0focus:border-transparent/g, 'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent');
  fixed = fixed.replace(/px -8/g, 'px-8');
  fixed = fixed.replace(/py-3 bg-gradient-to-r from-purple-6 0 0 to-cyan-6 0 0/g, 'py-3 bg-gradient-to-r from-purple-600 to-cyan-600');
  fixed = fixed.replace(/text-white rounded-lg hover:from-purple-7 0 0hover:to-cyan-7 0 0/g, 'text-white rounded-lg hover:from-purple-700 hover:to-cyan-700');
  fixed = fixed.replace(/transition-allduration-3 0 0/g, 'transition-all duration-300');
  fixed = fixed.replace(/flexitems-centerjustify-centerfont-semibold/g, 'flex items-center justify-center font-semibold');
  fixed = fixed.replace(/w -4h-4 ml-2/g, 'w-4 h-4 ml-2');
  fixed = fixed.replace(/mt -1 2 pt-8border-tborder-slate-7 0 0\/5 0flexflex-colmd:flex-rowjustify-betweenitems-center/g, 'mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center');
  fixed = fixed.replace(/flexitems-centerspace-x-2text-gray-4 0 0mb-4md:mb-0/g, 'flex items-center space-x-2 text-gray-400 mb-4 md:mb-0');
  fixed = fixed.replace(/w -4h-4 text-red-4 0 0/g, 'w-4 h-4 text-red-400');
  fixed = fixed.replace(/flexspace-x-6/g, 'flex space-x-6');
  fixed = fixed.replace(/text-gray-4 0 0hover:text-whitetransition-colorstext-sm/g, 'text-gray-400 hover:text-white transition-colors text-sm');
  
  return fixed;
}

// Function to fix unclosed JSX tags
function fixUnclosedTags(content) {
  let fixed = content;
  
  // Common patterns of unclosed tags
  const patterns = [
    // Fix h3 tags that should be closed
    { 
      regex: /<h3 className="[^"]*">\s*([^<]+)\s*<p className="[^"]*">/g, 
      replacement: '<h3 className="$1">\n                </h3>\n                <p className="[^"]*">'
    },
    // Fix p tags that should be closed
    { 
      regex: /<p className="[^"]*">\s*([^<]+)\s*<\/div>/g, 
      replacement: '<p className="[^"]*">\n                  $1\n                </p>'
    }
  ];
  
  // Apply patterns
  patterns.forEach(pattern => {
    fixed = fixed.replace(pattern.regex, pattern.replacement);
  });
  
  return fixed;
}

// Function to fix JavaScript/TypeScript syntax errors
function fixJSSyntax(content) {
  let fixed = content;
  
  // Fix arrow function syntax errors
  fixed = fixed.replace(/if\s*\([^)]+\)\s*=>\s*{/g, (match) => {
    return match.replace('=>', '');
  });
  
  // Fix array syntax errors
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*{/g, (match) => {
    return match.replace(/\[\s*{/, '[\n    {');
  });
  
  // Fix object syntax errors
  fixed = fixed.replace(/{\s*title:\s*'[^']+',\s*description:\s*'[^']+',\s*;\s*}/g, (match) => {
    return match.replace(',;', '');
  });
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/,\s*;\s*}/g, '\n  }');
  fixed = fixed.replace(/,\s*;\s*]/g, '\n  ]');
  
  return fixed;
}

// Main function to process files
function processFiles() {
  const files = glob.sync('app/**/*.tsx', { cwd: __dirname });
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let processedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    try {
      const filePath = path.join(__dirname, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Apply fixes
      content = fixJSXErrors(content);
      content = fixUnclosedTags(content);
      content = fixJSSyntax(content);
      
      // Write back the fixed content
      fs.writeFileSync(filePath, content, 'utf8');
      processedCount++;
      
      if (processedCount % 50 === 0) {
        console.log(`Processed ${processedCount} files...`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\nProcessing complete!`);
  console.log(`Files processed: ${processedCount}`);
  console.log(`Errors: ${errorCount}`);
}

// Run the fix
processFiles();