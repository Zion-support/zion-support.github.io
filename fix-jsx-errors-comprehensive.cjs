const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing semicolons after array/object declarations
  fixed = fixed.replace(/(\s+]\s*)(\n\s*return)/g, '$1;\n$2');
  fixed = fixed.replace(/(\s+}\s*)(\n\s*return)/g, '$1;\n$2');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*=>\s*{/g, 'function $1() {');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
  
  // Fix missing closing tags for common elements
  fixed = fixed.replace(/<h3([^>]*)>([^<]*)</g, '<h3$1>$2</h3>');
  fixed = fixed.replace(/<p([^>]*)>([^<]*)</g, '<p$1>$2</p>');
  fixed = fixed.replace(/<section([^>]*)>([^<]*)</g, '<section$1>$2</section>');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<div([^>]*)>([^<]*)</g, '<>\n      <div$1>$2</div>');
  
  // Fix spacing issues in class names
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)\s+([^"]*)"/g, 'className="$1 $2 $3"');
  
  // Fix missing closing div tags
  fixed = fixed.replace(/(<div[^>]*>)([^<]*)(<\/div>)\s*$/gm, '$1$2$3');
  
  // Fix malformed grid classes
  fixed = fixed.replace(/grid\s+md:grid-cols-(\d+)\s+lg:grid-cols-(\d+)gap-(\d+)/g, 'grid md:grid-cols-$1 lg:grid-cols-$2 gap-$3');
  fixed = fixed.replace(/grid\s+md:grid-cols-(\d+)\s+gap-(\d+)/g, 'grid md:grid-cols-$1 gap-$2');
  
  // Fix container classes
  fixed = fixed.replace(/container\s+mx-autopx-(\d+)py-(\d+)\s+(\d+)/g, 'container mx-auto px-$1 py-$2');
  
  // Fix text color classes
  fixed = fixed.replace(/text-(\w+)-(\d+)\s+(\d+)/g, 'text-$1-$2');
  fixed = fixed.replace(/text-(\w+)-(\d+)\s+(\d+)\s+(\d+)/g, 'text-$1-$2');
  
  // Fix background gradient classes
  fixed = fixed.replace(/bg-gradient-to-br\s+from-slate-(\d+)\s+via-purple-(\d+)\s+to-slate-(\d+)/g, 'bg-gradient-to-br from-slate-$1 via-purple-$2 to-slate-$3');
  
  // Fix border classes
  fixed = fixed.replace(/border\s+border-(\w+)-(\d+)\s+(\d+)/g, 'border border-$1-$2');
  
  // Fix rounded classes
  fixed = fixed.replace(/rounded-lgp-(\d+)/g, 'rounded-lg p-$1');
  
  // Fix font classes
  fixed = fixed.replace(/font-boldtext-(\w+)/g, 'font-bold text-$1');
  fixed = fixed.replace(/font-semiboldtext-(\w+)/g, 'font-semibold text-$1');
  
  // Fix missing closing tags in complex structures
  fixed = fixed.replace(/(<div[^>]*>)\s*<h3([^>]*)>([^<]*)<\/h3>\s*<p([^>]*)>([^<]*)<\/p>\s*<\/div>\s*<\/div>/g, '$1\n                <h3$2>$3</h3>\n                <p$4>$5</p>\n              </div>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n            </div>\n          </div>\n        </div>\n      </div>');
  
  // Fix missing semicolons at end of functions
  fixed = fixed.replace(/(\s+}\s*)(\n\s*export\s+default)/g, '$1;\n$2');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix specific issues in 5g-monitoring page
  if (filePath.includes('5g-monitoring')) {
    fixed = fixed.replace(/const services = \[([\s\S]*?)\]\s*return/g, 'const services = [\n    {\n      title: \'5G Network Monitoring\',\n      description: \'Real-time monitoring and analysis of 5G network performance.\',\n    },\n    {\n      title: \'Security Monitoring\',\n      description: \'Advanced security monitoring and threat detection for 5G networks.\',\n    },\n    {\n      title: \'Team Training\',\n      description: \'Comprehensive training for 5G network monitoring and management.\',\n    }\n  ];\n\n  return');
  }
  
  // Fix specific issues in 5g-network-infrastructure page
  if (filePath.includes('5g-network-infrastructure')) {
    fixed = fixed.replace(/<div className="container mx-autopx-4py-1 6">/g, '<div className="container mx-auto px-4 py-16">');
    fixed = fixed.replace(/<h1 className="text-4xl font-boldtext-white mb-8">/g, '<h1 className="text-4xl font-bold text-white mb-8">');
    fixed = fixed.replace(/<p className="text-xl text-gray-30 0 mb-8">/g, '<p className="text-xl text-gray-300 mb-8">');
    fixed = fixed.replace(/<div className="grid md:grid-cols-2 lg:grid-cols-3gap-8 mt-1 2">;/g, '<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">');
    fixed = fixed.replace(/<div className="bg-blue-50 border border-blue-20 0rounded-lgp-6">/g, '<div className="bg-blue-50 border border-blue-200 rounded-lg p-6">');
    fixed = fixed.replace(/<h3 className="text-lg font-semiboldtext-blue-90 0mb-2">/g, '<h3 className="text-lg font-semibold text-blue-900 mb-2">');
    fixed = fixed.replace(/<p className="text-blue-70 0">/g, '<p className="text-blue-700">');
  }
  
  // Fix App.tsx function syntax
  if (filePath.includes('App.tsx')) {
    fixed = fixed.replace(/function App\(\) => \{/g, 'function App() {');
  }
  
  return fixed;
}

// Main function to process all files
async function fixAllFiles() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let fixed = fixJSXErrors(content);
      fixed = fixSpecificFile(file, fixed);
      
      // Write the fixed content back
      fs.writeFileSync(file, fixed, 'utf8');
      console.log(`Fixed: ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('All files processed!');
}

// Run the fix
fixAllFiles().catch(console.error);