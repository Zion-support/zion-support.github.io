#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix common syntax errors in a file
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-813e
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
<<<<<<< HEAD
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
=======
    // Fix unclosed button tags
    content = content.replace(/<button([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<button$1>$2</button>');
    content = content.replace(/<button([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<button$1>$2</button>');
    
    // Fix unclosed div tags
    content = content.replace(/<div([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<div$1>$2</div>');
    
    // Fix unclosed h1, h2, h3, h4, h5, h6 tags
    content = content.replace(/<(h[1-6])([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<$1$2>$3</$1>');
    
    // Fix unclosed p tags
    content = content.replace(/<p([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<p$1>$2</p>');
    
    // Fix unclosed span tags
    content = content.replace(/<span([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<span$1>$2</span>');
    
    // Fix unclosed li tags
    content = content.replace(/<li([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<li$1>$2</li>');
    
    // Fix unclosed ul/ol tags
    content = content.replace(/<(ul|ol)([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<$1$2>$3</$1>');
    
    // Fix malformed JSX attributes with semicolons
    content = content.replace(/(\w+)=\{([^}]+)\}\s*;/g, '$1={$2}');
    
    // Fix standalone semicolons in JSX
    content = content.replace(/;\s*<\/[^>]+>/g, '</$1>');
    
    // Fix any remaining malformed closing tags
    content = content.replace(/<\/\s*$/gm, '');
    
    // Remove any remaining standalone semicolons
    content = content.replace(/^\s*;\s*$/gm, '');
    
    // Fix any malformed React.Fragment
    content = content.replace(/<React\.Fragment>\s*([^<]*?)\s*<\/\s*$/gm, '<React.Fragment>$1</React.Fragment>');
    
    // Fix any malformed <> fragments
    content = content.replace(/<>\s*([^<]*?)\s*<\/\s*$/gm, '<>$1</>');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed syntax errors in: ${filePath}`);
    return true;
>>>>>>> cursor/fix-errors-and-merge-to-main-813e
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
=======
function findFilesWithSyntaxErrors(dir) {
  const files = [];
>>>>>>> cursor/fix-errors-and-merge-to-main-813e
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
<<<<<<< HEAD
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to modify
      if (!['node_modules', '.git', 'dist', '.next'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
=======
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
>>>>>>> cursor/fix-errors-and-merge-to-main-813e
      }
    }
  }
  
  return fixedCount;
}

<<<<<<< HEAD
// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix syntax errors...');
const fixedCount = fixAllFiles(appDir);
console.log(`Fixed ${fixedCount} files`);
=======
// Main execution
const workspaceDir = process.cwd();
console.log('Finding and fixing syntax errors...');

const files = findFilesWithSyntaxErrors(workspaceDir);
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files processed: ${fixedCount}`);
console.log(`- Files with errors: ${errorCount}`);
console.log(`- Total files: ${files.length}`);

if (errorCount === 0) {
  console.log('\nAll syntax errors have been fixed!');
} else {
  console.log('\nSome files had errors and may need manual review.');
}
>>>>>>> cursor/fix-errors-and-merge-to-main-813e
