const fs = require('fs');
const path = require('path');

// Function to fix common parsing errors
function fixParsingErrors(content) {
  let fixed = content;
  
  // Fix merge conflict markers
  fixed = fixed.replace(/[\s\S]*?[\s\S]*?  fixed = fixed.replace(/<<<<<<< [a-f0-9]+[\s\S]*?[\s\S]*?  
  // Fix unterminated string literals
  fixed = fixed.replace(/('|")([^'"]*?)(\n|$)/g, (match, quote, content, newline) => {
    if (content.includes(quote)) return match;
    return quote + content + quote + (newline === '\n' ? ';' : '');
  });
  
  // Fix malformed object properties
  fixed = fixed.replace(/\{\s*,\s*,/g, '{');
  fixed = fixed.replace(/,\s*,\s*\}/g, '}');
  fixed = fixed.replace(/,\s*,\s*,/g, ',');
  
  // Fix malformed JSX
  fixed = fixed.replace(/<\s*>\s*<\s*\/\s*>/g, '<></>');
  
  // Fix function declarations
  fixed = fixed.replace(/const\s+Page:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const PageComponent: React.FC = () => {');
  fixed = fixed.replace(/export\s+default\s+Page;/g, 'export default PageComponent;');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\s*\n\s*([a-zA-Z_$])/g, '$1;\n$2');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*\)\s*;/g, 'return null;');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*;\s*\}/g, '');
  fixed = fixed.replace(/\{\s*,\s*\}/g, '');
  
  // Fix malformed array/object syntax
  fixed = fixed.replace(/\[\s*,\s*\]/g, '[]');
  fixed = fixed.replace(/\{\s*,\s*\}/g, '{}');
  
  // Fix malformed template literals
  fixed = fixed.replace(/`([^`]*?)\n([^`]*?)`/g, '`$1$2`');
  
  // Fix malformed class names
  fixed = fixed.replace(/className\s*=\s*['"]([^'"]*?)\s*,\s*([^'"]*?)['"]/g, 'className="$1 $2"');
  
  // Fix malformed function calls
  fixed = fixed.replace(/\(\s*,\s*\)/g, '()');
  fixed = fixed.replace(/\(\s*,\s*,/g, '(');
  fixed = fixed.replace(/,\s*,\s*\)/g, ')');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixParsingErrors(content);
    
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting parsing error fixes...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files.`);
