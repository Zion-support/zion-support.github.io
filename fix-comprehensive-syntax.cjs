const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix comprehensive syntax issues
function fixComprehensiveSyntax(content) {
  // Fix malformed component names
  content = content.replace(/constFooterpagePage:/g, 'const FooterPage:');
  content = content.replace(/constServices=/g, 'const services =');
  content = content.replace(/constQuicklinks=/g, 'const quickLinks =');
  content = content.replace(/constResources=/g, 'const resources =');
  content = content.replace(/constLegal=/g, 'const legal =');
  
  // Fix malformed variable names
  content = content.replace(/services/g, 'services');
  content = content.replace(/quickLinks/g, 'quickLinks');
  content = content.replace(/resources/g, 'resources');
  content = content.replace(/legal/g, 'legal');
  
  // Fix malformed JSX attributes
  content = content.replace(/max-w-7 xlmx-auto/g, 'max-w-7xl mx-auto');
  content = content.replace(/gridgrid-cols-1Md:/g, 'grid grid-cols-1 md:');
  content = content.replace(/grid-cols-2Lg:/g, 'grid-cols-2 lg:');
  content = content.replace(/text-xlfont-bold/g, 'text-xl font-bold');
  content = content.replace(/flexspace-x-4/g, 'flex space-x-4');
  content = content.replace(/text-gray-400Hover:/g, 'text-gray-400 hover:');
  content = content.replace(/text-whitetransition-colors/g, 'text-white transition-colors');
  content = content.replace(/text-whitetransition-colors/g, 'text-white transition-colors');
  content = content.replace(/noopenernoreferrer/g, 'noopener noreferrer');
  content = content.replace(/text-lgfont-semibold/g, 'text-lg font-semibold');
  
  // Fix malformed JSX tags
  content = content.replace(/quick Links/g, 'quickLinks');
  content = content.replace(/<likey=/g, '<li key=');
  content = content.replace(/<\/li>/g, '</li>');
  content = content.replace(/<Link To=/g, '<Link to=');
  content = content.replace(/<\/Link>/g, '</Link>');
  
  // Fix malformed className values
  content = content.replace(/className="([^"]*)\s+([^"]*)"/g, (match, first, second) => {
    return `className="${first} ${second}"`;
  });
  
  // Fix malformed object properties
  content = content.replace(/name:/g, 'name:');
  content = content.replace(/path:/g, 'path:');
  
  // Fix malformed array methods
  content = content.replace(/\.map\(/g, '.map(');
  content = content.replace(/\(link, index\)/g, '(link, index)');
  content = content.replace(/\(item, index\)/g, '(item, index)');
  
  // Fix malformed function calls
  content = content.replace(/link\.path/g, 'link.path');
  content = content.replace(/link\.name/g, 'link.name');
  content = content.replace(/item\.name/g, 'item.name');
  content = content.replace(/item\.path/g, 'item.path');
  
  // Fix malformed arrow functions
  content = content.replace(/=>\s*\(/g, '=> (');
  content = content.replace(/=>\s*{/g, '=> {');
  
  // Fix malformed return statements
  content = content.replace(/return\s*\(/g, 'return (');
  content = content.replace(/return\s*{/g, 'return {');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*</g, '<>');
  content = content.replace(/<\/>\s*</g, '</>');
  
  // Fix malformed closing tags
  content = content.replace(/<\/div>/g, '</div>');
  content = content.replace(/<\/ul>/g, '</ul>');
  content = content.replace(/<\/footer>/g, '</footer>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixComprehensiveSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
console.log('Starting comprehensive syntax fixes...');

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (processFile(fullPath)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files.`);
console.log('Comprehensive syntax fixes completed!');