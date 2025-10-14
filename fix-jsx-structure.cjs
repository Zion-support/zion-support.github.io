const fs = require('fs');
const path = require('path');
  // Fix CSS class syntax with spaces
  fixed = fixed.replace(/className="([^"]*?)\s+([^"]*?)"/g, (match, part1, part2) => {
    const cleanClass = (part1 + part2).replace(/\s+/g, '');
    return `className="${cleanClass}"`;
  });
  
  // Fix specific CSS class patterns
  fixed = fixed.replace(/min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900to-slate-900/g, 'min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900');
  fixed = fixed.replace(/containermx-autopx-4 py-16/g, 'container mx-auto px-4 py-16');
  fixed = fixed.replace(/text-4xlfont-bold text-whitemb-8/g, 'text-4xl font-bold text-white mb-8');
  fixed = fixed.replace(/text-xltext-gray-300mb-8/g, 'text-xl text-gray-300 mb-8');
  fixed = fixed.replace(/gridmd:grid-cols-2lg:grid-cols-3 gap-8 mt-12/g, 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12');
  fixed = fixed.replace(/bg-blue-50borderborder-blue-200 rounded-lg p-6/g, 'bg-blue-50 border border-blue-200 rounded-lg p-6');
  fixed = fixed.replace(/bg-green-50borderborder-green-200 rounded-lg p-6/g, 'bg-green-50 border border-green-200 rounded-lg p-6');
  fixed = fixed.replace(/bg-purple-50borderborder-purple-200 rounded-lg p-6/g, 'bg-purple-50 border border-purple-200 rounded-lg p-6');
  fixed = fixed.replace(/text-lgfont-semibold text-blue-900 mb-2/g, 'text-lg font-semibold text-blue-900 mb-2');
  fixed = fixed.replace(/text-lgfont-semibold text-green-900 mb-2/g, 'text-lg font-semibold text-green-900 mb-2');
  fixed = fixed.replace(/text-lgfont-semibold text-purple-900mb-2/g, 'text-lg font-semibold text-purple-900 mb-2');
  
  // Fix broken JSX structure patterns
  fixed = fixed.replace(/<\/p>\s*<\/div>\s*<\/div>\s*<div className="bg-green-50/g, '</p>\n              </div>\n              <div className="bg-green-50');
  fixed = fixed.replace(/<\/p><div className="bg-purple-50/g, '</p>\n              </div>\n              <div className="bg-purple-50');
  fixed = fixed.replace(/<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*}\s*export default/g, '</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    
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
console.log('Starting JSX structure fixes...');

// Get all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log('JSX structure fixes completed!');
