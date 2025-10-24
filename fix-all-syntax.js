const fs = require('fs');
const path = require('path');

// Function to fix all syntax issues
function fixAllSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix function declarations missing opening parenthesis
    content = content.replace(/function\s+([a-zA-Z0-9_]+)\)\s*{/g, 'function $1() {');
    
    // Fix any other malformed function syntax
    content = content.replace(/function\s+([a-zA-Z0-9_]+)\s*\)\s*{/g, 'function $1() {');
    
    // Fix function names that start with numbers
    content = content.replace(/function\s+(\d+[a-zA-Z]+)/g, (match, functionName) => {
      const fixedName = functionName
        .replace(/^5g/, 'FiveG')
        .replace(/^4g/, 'FourG')
        .replace(/^3g/, 'ThreeG')
        .replace(/^2g/, 'TwoG')
        .replace(/^1g/, 'OneG');
      modified = true;
      return `function ${fixedName}`;
    });

    // Fix function names with dots
    content = content.replace(/function\s+([a-zA-Z]+\.xml)/g, (match, functionName) => {
      const fixedName = functionName.replace('.xml', 'Xml');
      modified = true;
      return `function ${fixedName}`;
    });

    // Fix empty h1 tags
    content = content.replace(/<h1[^>]*>\s*<\/h1>/g, '<h1 className="text-4xl font-bold text-gray-900 mb-8">Page Title</h1>');
    
    // Fix empty displayName assignments
    content = content.replace(/(\w+)\.displayName\s*=\s*'';?\s*$/gm, '');
    
    // Fix generic content in paragraphs
    content = content.replace(/Professional\s+services and solutions\./g, 'Professional services and solutions for your business needs.');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      if (fixAllSyntax(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax fixes...');

// Fix files in app directory
const appFixed = fixAllFiles('./app');
console.log(`Fixed ${appFixed} files in app directory.`);

console.log('Comprehensive syntax fixes completed.');