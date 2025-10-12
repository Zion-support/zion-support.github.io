import fs from 'fs';
#!/usr/bin/env node;
// Function to fix JSX structure issues;
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix remaining className spacing issues;
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
  
  // Fix self-closing divs that should be opening tags;
  fixed = fixed.replace(/<div className="([^"]*)" \/>\s*<([^>]+)>/g, '<div className="$1">\n        <$2>');
  fixed = fixed.replace(/<footer className="([^"]*)" \/>\s*<div/g, '<footer className="$1">\n      <div');
  fixed = fixed.replace(/<ul className="([^"]*)" \/>\s*<li/g, '<ul className="$1">\n              <li');
  fixed = fixed.replace(/<p className="([^"]*)" \/>\s*([^<]+)/g, '<p className="$1">\n              $2');
  
  // Fix missing closing tags;
  fixed = fixed.replace(/<div \/>\s*<h4/g, '<div>\n            <h4');
  fixed = fixed.replace(/<div \/>\s*<h4/g, '<div>\n            <h4');
  
  // Fix Link components that should be self-closing;
  fixed = fixed.replace(/<Link\s+([^>]+)\s*\/>\s*([^<]+)\s*<([^>]+)\s*\/>/g, '<Link $1>\n          $2\n          <$3 />\n        </Link>');
  
  // Fix specific patterns;
  fixed = fixed.replace(/<Link\s+to="\/contact"\s+className="[^"]*"\s*\/>\s*Contact Us\s*<ArrowRight[^>]*\/>/g, 
    '<Link\n          to="/contact"\n          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"\n        >\n          Contact Us\n          <ArrowRight className="w-5 h-5 ml-2" />\n        </Link>');
  
  // Fix malformed p tags;
  fixed = fixed.replace(/<p className="([^"]*)" \/>\s*([^<]+)\s*<\/p>/g, '<p className="$1">\n              $2\n            </p>');
  
  return fixed;

// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed JSX structure: ${filePath}`);
      return true;
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;

// Main function;
async function main() {
  console.log('Starting to fix JSX structure issues...');
  
  // Get all TypeScript/TSX files;
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
  });
  
  let fixedCount = 0;
  
    if (processFile(file)) {
      fixedCount++;
  });
  
  console.log(`\nFixed JSX structure in ${fixedCount} files out of ${files.length} total files.`);

main().catch(console.error);
}}}}}