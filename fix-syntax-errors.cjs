const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix semicolons in object properties (should be commas)
    const semicolonInObject = /(\w+):\s*\[[^\]]*\]\s*;/g;
    content = content.replace(semicolonInObject, (match) => {
      modified = true;
      return match.replace(';', ',');
    });
    
    // Fix semicolons in array elements (should be commas)
    const semicolonInArray = /(\w+):\s*\[[^\]]*\]\s*;\s*(\w+):/g;
    content = content.replace(semicolonInArray, (match) => {
      modified = true;
      return match.replace(';', ',');
    });
    
    // Fix malformed JSX return statements
    const malformedReturn = /return\s*\(\s*\n\s*onChange=/g;
    content = content.replace(malformedReturn, (match) => {
      modified = true;
      return 'return (\n    <>\n      <Helmet>\n        <title>Services - Zion Tech Group</title>\n        <meta name="description" content="Comprehensive AI and IT services for modern businesses." />\n      </Helmet>\n      <Navigation />\n      <main className="pt-16">\n        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n          <div className="container mx-auto px-4">\n            <div className="max-w-4xl mx-auto text-center">\n              <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>\n              <p className="text-xl text-gray-300 mb-8">Comprehensive AI and IT solutions for your business</p>\n              <div className="relative max-w-md mx-auto">\n                <input\n                  type="text"\n                  placeholder="Search services..."\n                  value={searchTerm}\n                  onChange=';
    });
    
    // Fix duplicate closing tags
    const duplicateClosing = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
    content = content.replace(duplicateClosing, '</div>\n        </section>\n      </main>\n      <Footer />\n    </>\n  );');
    
    // Fix malformed JSX elements
    const malformedJSX = /<(\w+)\s*\/\s*\/\s*>/g;
    content = content.replace(malformedJSX, '<$1 />');
    
    // Fix missing closing braces in objects
    const missingBrace = /(\w+):\s*\[[^\]]*\]\s*;\s*(\w+):\s*\[/g;
    content = content.replace(missingBrace, (match) => {
      modified = true;
      return match.replace(';', ',');
    });
    
    // Write the fixed content back
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to modify
      if (!['node_modules', '.git', 'dist', '.next'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix syntax errors...');
const fixedCount = fixAllFiles(appDir);
console.log(`Fixed ${fixedCount} files`);