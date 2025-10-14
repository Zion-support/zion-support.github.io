const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in JSX files
function fixJSXSyntax(content) {
  let fixed = content;

  // Fix spacing issues in class names
  fixed = fixed.replace(/(\w+)-(\d+)(\w+)-(\d+)/g, '$1-$2 $3-$4');
  fixed = fixed.replace(/(\w+)-(\d+)([A-Z])/g, '$1-$2 $3');
  fixed = fixed.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  // Fix common class name spacing issues
  const classFixes = [
    { from: /w-8h-8/g, to: 'w-8 h-8' },
    { from: /text-4xlmd:/g, to: 'text-4xl md:' },
    { from: /text-3xlmd:/g, to: 'text-3xl md:' },
    { from: /text-xltext-/g, to: 'text-xl text-' },
    { from: /text-centermb-/g, to: 'text-center mb-' },
    { from: /max-w-7xlmx-auto/g, to: 'max-w-7xl mx-auto' },
    { from: /max-w-4xlmx-auto/g, to: 'max-w-4xl mx-auto' },
    { from: /max-w-3xlmx-auto/g, to: 'max-w-3xl mx-auto' },
    { from: /max-w-2xlmx-auto/g, to: 'max-w-2xl mx-auto' },
    { from: /py-2 0/g, to: 'py-20' },
    { from: /px-4sm:/g, to: 'px-4 sm:' },
    { from: /px-4sm:/g, to: 'px-4 sm:' },
    { from: /px-6lg:/g, to: 'px-6 lg:' },
    { from: /px-8/g, to: 'px-8' },
    { from: /from-slate-9 00/g, to: 'from-slate-900' },
    { from: /via-purple-9 0 0/g, to: 'via-purple-900' },
    { from: /to-slate-9 0 0/g, to: 'to-slate-900' },
    { from: /to-slate-9 0 0/g, to: 'to-slate-900' },
    { from: /bg-gradient-to-r from-cyan-4 0 0/g, to: 'bg-gradient-to-r from-cyan-400' },
    { from: /to-purple-4 0 0/g, to: 'to-purple-400' },
    { from: /text-gray-3 0 0/g, to: 'text-gray-300' },
    { from: /text-gray-30 0/g, to: 'text-gray-300' },
    { from: /text-gray-60 0/g, to: 'text-gray-600' },
    { from: /text-gray-90 0/g, to: 'text-gray-900' },
    { from: /flexflex-col/g, to: 'flex flex-col' },
    { from: /sm:flex-row/g, to: 'sm:flex-row' },
    { from: /gap-4justify-center/g, to: 'gap-4 justify-center' },
    { from: /inline-flexitems-center/g, to: 'inline-flex items-center' },
    { from: /px-8py-4/g, to: 'px-8 py-4' },
    { from: /bg-gradient-to-r from-cyan-5 00/g, to: 'bg-gradient-to-r from-cyan-500' },
    { from: /to-purple-6 00/g, to: 'to-purple-600' },
    { from: /text-whitefont-semibold/g, to: 'text-white font-semibold' },
    { from: /rounded-lghover:/g, to: 'rounded-lg hover:' },
    { from: /from-cyan-6 00/g, to: 'from-cyan-600' },
    { from: /to-purple-7 0 0/g, to: 'to-purple-700' },
    { from: /transition-allduration-3 0 0/g, to: 'transition-all duration-300' },
    { from: /group-hover:translate-x-1/g, to: 'group-hover:translate-x-1' },
    { from: /transition-transform/g, to: 'transition-transform' },
    { from: /border border-cyan-4 00/g, to: 'border border-cyan-400' },
    { from: /text-cyan-4 00/g, to: 'text-cyan-400' },
    { from: /hover:bg-cyan-4 0 0\/1 0/g, to: 'hover:bg-cyan-400/10' },
    { from: /py-20px-4/g, to: 'py-20 px-4' },
    { from: /sm:px-6lg:px-8/g, to: 'sm:px-6 lg:px-8' },
    { from: /max-w-7xlmx-auto/g, to: 'max-w-7xl mx-auto' },
    { from: /text-centermb-1 6/g, to: 'text-center mb-16' },
    { from: /text-3xlmd:text-4xl/g, to: 'text-3xl md:text-4xl' },
    { from: /text-xltext-gray-3 0 0/g, to: 'text-xl text-gray-300' },
    { from: /max-w-2xlmx-auto/g, to: 'max-w-2xl mx-auto' },
    { from: /gridgrid-cols-1/g, to: 'grid grid-cols-1' },
    { from: /md:grid-cols-3/g, to: 'md:grid-cols-3' },
    { from: /gap-8/g, to: 'gap-8' },
    { from: /text-center/g, to: 'text-center' },
    { from: /w-16h-1 6/g, to: 'w-16 h-16' },
    { from: /bg-gradient-to-r from-cyan-5 0 0/g, to: 'bg-gradient-to-r from-cyan-500' },
    { from: /to-purple-6 0 0/g, to: 'to-purple-600' },
    { from: /rounded-fullflex/g, to: 'rounded-full flex' },
    { from: /items-centerjustify-center/g, to: 'items-center justify-center' },
    { from: /mx-automb-4/g, to: 'mx-auto mb-4' },
    { from: /text-xlfont-semibold/g, to: 'text-xl font-semibold' },
    { from: /text-white mb-3/g, to: 'text-white mb-3' },
    { from: /text-gray-30 0/g, to: 'text-gray-300' },
    { from: /py-20px-4/g, to: 'py-20 px-4' },
    { from: /sm:px-6lg:px-8/g, to: 'sm:px-6 lg:px-8' },
    { from: /bg-slate-8 0 0\/3 0/g, to: 'bg-slate-800/30' },
    { from: /max-w-4xlmx-auto/g, to: 'max-w-4xl mx-auto' },
    { from: /text-3xlmd:text-4xl/g, to: 'text-3xl md:text-4xl' },
    { from: /text-xltext-gray-3 0 0/g, to: 'text-xl text-gray-300' },
    { from: /flexflex-col/g, to: 'flex flex-col' },
    { from: /sm:flex-row/g, to: 'sm:flex-row' },
    { from: /gap-4justify-center/g, to: 'gap-4 justify-center' },
    { from: /inline-flexitems-center/g, to: 'inline-flex items-center' },
    { from: /px-8py-4/g, to: 'px-8 py-4' },
    { from: /bg-gradient-to-r from-cyan-5 00/g, to: 'bg-gradient-to-r from-cyan-500' },
    { from: /to-purple-6 00/g, to: 'to-purple-600' },
    { from: /text-whitefont-semibold/g, to: 'text-white font-semibold' },
    { from: /rounded-lghover:/g, to: 'rounded-lg hover:' },
    { from: /from-cyan-6 00/g, to: 'from-cyan-600' },
    { from: /to-purple-7 0 0/g, to: 'to-purple-700' },
    { from: /transition-allduration-3 0 0/g, to: 'transition-all duration-300' },
    { from: /group-hover:translate-x-1/g, to: 'group-hover:translate-x-1' },
    { from: /transition-transform/g, to: 'transition-transform' },
    { from: /border border-cyan-4 00/g, to: 'border border-cyan-400' },
    { from: /text-cyan-4 00/g, to: 'text-cyan-400' },
    { from: /hover:bg-cyan-4 0 0\/1 0/g, to: 'hover:bg-cyan-400/10' },
    { from: /ml-2w-5/g, to: 'ml-2 w-5' },
    { from: /h-5group-hover:/g, to: 'h-5 group-hover:' },
    { from: /translate-x-1transition-transform/g, to: 'translate-x-1 transition-transform' },
    { from: /ml-2w-5/g, to: 'ml-2 w-5' },
    { from: /h-5group-hover:/g, to: 'h-5 group-hover:' },
    { from: /translate-x-1transition-transform/g, to: 'translate-x-1 transition-transform' }
  ];

  classFixes.forEach(fix => {
    fixed = fixed.replace(fix.from, fix.to);
  });

  // Fix array syntax issues
  fixed = fixed.replace(/const services = \[\s*\]\s*{/g, 'const services = [');
  fixed = fixed.replace(/}\s*\]/g, '}]');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)\[([^"]*)\]/g, 'className="$1$2"');
  
  // Fix missing spaces in JSX
  fixed = fixed.replace(/(\w+)([A-Z])/g, '$1 $2');
  
  // Fix specific parsing errors
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/,\s*;/g, ',');
  fixed = fixed.replace(/;\s*{/g, ' {');
  fixed = fixed.replace(/}\s*]/g, '}]');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div className="([^"]*)"[^>]*>\s*<\/div>/g, '');
  fixed = fixed.replace(/<h3[^>]*>\s*<\/h3>/g, '');
  fixed = fixed.replace(/<p[^>]*>\s*<\/p>/g, '');
  
  // Fix broken class names with spaces
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
  
  // Fix specific issues found in the files
  fixed = fixed.replace(/from-slate-9 00via-purple-9 0 0to-slate-9 0 0/g, 'from-slate-900 via-purple-900 to-slate-900');
  fixed = fixed.replace(/bg-blue-50 border border-blue-200/g, 'bg-blue-50 border border-blue-200');
  fixed = fixed.replace(/text-blue-900mb-2/g, 'text-blue-900 mb-2');
  fixed = fixed.replace(/text-blue-700/g, 'text-blue-700');
  fixed = fixed.replace(/bg-green-50border border-green-20 0rounded-lgp-6/g, 'bg-green-50 border border-green-200 rounded-lg p-6');
  fixed = fixed.replace(/text-purple-900 mb-2/g, 'text-purple-900 mb-2');
  fixed = fixed.replace(/\[[^\]]*\]/g, '');
  fixed = fixed.replace(/bg-purple-50 border border-purple-200 rounded-lg p-6/g, 'bg-purple-50 border border-purple-200 rounded-lg p-6');
  
  // Fix array syntax
  fixed = fixed.replace(/const services = \[\s*\]\s*{/g, 'const services = [');
  fixed = fixed.replace(/}\s*\]/g, '}]');
  fixed = fixed.replace(/,\s*;/g, ',');
  
  // Fix JSX structure issues
  fixed = fixed.replace(/<div className="([^"]*)"[^>]*>\s*<\/div>/g, '');
  fixed = fixed.replace(/<h3[^>]*>\s*<\/h3>/g, '');
  fixed = fixed.replace(/<p[^>]*>\s*<\/p>/g, '');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<section[^>]*>(?!.*<\/section>)/g, (match) => {
    if (!fixed.includes('</section>')) {
      return match + '\n      </section>';
    }
    return match;
  });
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
  
  return fixed;
}

// Function to process all TSX files
function processFiles() {
  const appDir = path.join('/workspace', 'app');
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const fixed = fixJSXSyntax(content);
          
          if (content !== fixed) {
            fs.writeFileSync(filePath, fixed, 'utf8');
            console.log(`Fixed: ${filePath}`);
          }
        } catch (error) {
          console.error(`Error processing ${filePath}:`, error.message);
        }
      }
    });
  }
  
  processDirectory(appDir);
  console.log('All files processed!');
}

// Run the fix
processFiles();
