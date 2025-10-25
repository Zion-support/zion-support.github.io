const fs = require('fs');
const path = require('path');

console.log('Starting JSX structure fix...');

// Function to fix JSX structure issues
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX structure issues
    const fixes = [
      // Fix missing return statement wrapper
      {
        pattern: /return\s*\(\s*<div[^>]*><\/div>\s*<Navigation\s*\/>/,
        replacement: 'return (\n    <>\n      <Navigation />'
      },
      // Fix missing closing tags
      {
        pattern: /<div[^>]*><\/div>\s*<Head>/,
        replacement: '<>\n      <Head>'
      },
      // Fix missing closing tags for Head
      {
        pattern: /<\/Head>\s*<div[^>]*><\/div>/,
        replacement: '</Head>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">'
      },
      // Fix missing closing tags for main div
      {
        pattern: /<div[^>]*><\/div>\s*<div[^>]*><\/div>\s*$/,
        replacement: '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\n          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n            Professional Services\n          </h1>\n          <p className="text-xl text-gray-300 mb-8">\n            Comprehensive solutions for your business needs\n          </p>\n        </div>\n      </div>\n    </>'
      },
      // Fix function structure
      {
        pattern: /export\s+default\s+function\s+(\w+)\(\)\s*{\s*return\s*\(\s*<div>/,
        replacement: 'export default function $1() {\n  return (\n    <div>'
      },
      // Fix missing closing parenthesis
      {
        pattern: /<\/div>\s*$/,
        replacement: '</div>\n  );'
      }
    ];
    
    for (const fix of fixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }
    
    // Ensure proper JSX structure
    if (content.includes('return (') && !content.includes('</>') && !content.includes('</div>);')) {
      // Add proper closing tags
      content = content.replace(/<\/div>\s*$/, '</div>\n  );');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX structure in: ${filePath}`);
    }
  } catch (error) {
    console.log(`Error fixing ${filePath}: ${error.message}`);
  }
}

// Function to recursively find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'components-disabled') {
      fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fixJSXStructure(filePath);
    }
  }
}

// Start fixing
console.log('Scanning for files with JSX structure issues...');
fixAllFiles('./app');

console.log('JSX structure fix completed!');