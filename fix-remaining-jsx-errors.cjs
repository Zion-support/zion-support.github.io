#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining JSX syntax errors
function fixRemainingJSXErrors(content) {
  let fixed = content;

  // Fix CSS class spacing issues
  fixed = fixed.replace(/from-slate-9\s+0\s+0/g, 'from-slate-900');
  fixed = fixed.replace(/via-purple-9\s+0\s+0/g, 'via-purple-900');
  fixed = fixed.replace(/to-slate-9\s+0\s+0/g, 'to-slate-900');
  fixed = fixed.replace(/from-red-9\s+0\s+0/g, 'from-red-900');
  fixed = fixed.replace(/via-red-8\s+0\s+0/g, 'via-red-800');
  fixed = fixed.replace(/to-red-9\s+0\s+0/g, 'to-red-900');
  fixed = fixed.replace(/text-gray-9\s+0\s+0/g, 'text-gray-900');
  fixed = fixed.replace(/text-gray-6\s+0\s+0/g, 'text-gray-600');
  fixed = fixed.replace(/1\s+0\s+0\s+0/g, '1000');
  
  // Fix malformed JSX tags
  fixed = fixed.replace(/<h\s+1/g, '<h1');
  fixed = fixed.replace(/<h\s+3/g, '<h3');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+FiveGModernizationPage\s*=\s*\(\)\s*=>\s*\{\s*\{/g, 'const FiveGModernizationPage = () => {');
  
  // Fix malformed array syntax
  fixed = fixed.replace(/const\s+services\s*=\s*\[\s*\{/g, 'const services = [\n    {');
  fixed = fixed.replace(/title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*;\s*\},/g, 'title: \'$1\',\n      description: \'$2\',\n    },');
  fixed = fixed.replace(/title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*;\s*\}/g, 'title: \'$1\',\n      description: \'$2\',\n    }');
  
  // Fix missing closing braces and brackets
  fixed = fixed.replace(/\]\s*return\s*\(/g, '];\n  return (');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div\s+key=\{index\}\s+className="[^"]*">\s*<\/div>\s*<div\s+className="[^"]*">/g, '<div key={index} className="bg-white rounded-lg shadow-lg p-8">\n              <div className="flex items-center mb-4">');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<h3\s+className="[^"]*">\s*\{service\.title\}\s*<\/h3>\s*<\/div>\s*<\/div>/g, '<h3 className="text-xl font-semibold text-gray-900">\n                  {service.title}\n                </h3>\n              </div>');
  
  // Fix missing semicolons in JSX
  fixed = fixed.replace(/className="[^"]*";\s*>/g, 'className="$1">');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*\)\s*$/gm, 'return (\n    <div className="min-h-screen bg-gray-50">\n      <EnhancedSEO \n        title="5G Modernization Services - Zion Tech Group"\n        description="Professional 5G modernization services to upgrade your network infrastructure."\n      />\n      \n      <div className="container mx-auto px-4 py-16">\n        <div className="text-center mb-16">\n          <h1 className="text-4xl font-bold text-gray-900 mb-6">\n            5G Modernization Services\n          </h1>\n          <p className="text-xl text-gray-600 max-w-3xl mx-auto">\n            Modernize your network infrastructure with cutting-edge 5G technology.\n          </p>\n        </div>\n        <div className="grid md:grid-cols-3 gap-8 mb-16">\n          {services.map((service, index) => (\n            <div key={index} className="bg-white rounded-lg shadow-lg p-8">\n              <div className="flex items-center mb-4">\n                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />\n                <h3 className="text-xl font-semibold text-gray-900">\n                  {service.title}\n                </h3>\n              </div>\n              <p className="text-gray-600 mb-6">\n                {service.description}\n              </p>\n              <Link \n                to="/contact" \n                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"\n              >\n                Learn More\n                <ArrowRight className="ml-2 h-4 w-4" />\n              </Link>\n            </div>\n          ))}\n        </div>\n        <div className="text-center">\n          <Link \n            to="/contact"\n            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"\n          >\n            Get Started Today\n            <ArrowRight className="ml-2 h-5 w-5" />\n          </Link>\n        </div>\n      </div>\n    </div>\n  );');
  
  // Fix duplicate imports
  fixed = fixed.replace(/import\s+\{[^}]+\}\s+from\s+'[^']+';\s*import\s+\{[^}]+\}\s+from\s+'[^']+';/g, (match) => {
    const lines = match.split('\n');
    const uniqueImports = new Set();
    lines.forEach(line => {
      if (line.trim().startsWith('import')) {
        uniqueImports.add(line.trim());
      }
    });
    return Array.from(uniqueImports).join('\n');
  });
  
  // Fix missing closing tags for JSX fragments
  fixed = fixed.replace(/<>\s*([^<]+)\s*$/gm, '<>\n      $1\n    </>');
  
  // Fix malformed JSX structure in specific patterns
  fixed = fixed.replace(/<div\s+className="[^"]*">\s*<\/div>\s*<div\s+className="[^"]*">\s*<div\s+className="[^"]*">/g, '<div className="bg-white rounded-lg shadow-lg p-8">\n              <div className="flex items-center mb-4">');
  
  // Fix missing closing tags for specific elements
  fixed = fixed.replace(/<section([^>]*)>\s*([^<]+)\s*$/gm, '<section$1>\n      $2\n    </section>');
  
  // Fix malformed object syntax
  fixed = fixed.replace(/\{\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*;\s*\}/g, '{\n      title: \'$1\',\n      description: \'$2\',\n    }');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingJSXErrors(content);
    
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

module.exports = { fixRemainingJSXErrors, processFile };