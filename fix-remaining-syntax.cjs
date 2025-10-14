const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining syntax issues
function fixRemainingSyntax(content) {
  // Fix malformed variable declarations
  content = content.replace(/constRoot\s*=/g, 'const root =');
  content = content.replace(/constHandlekeydown\s*=/g, 'const handleKeyDown =');
  content = content.replace(/constMaincontent\s*=/g, 'const mainContent =');
  content = content.replace(/constPrefersreducedmotion\s*=/g, 'const prefersReducedMotion =');
  
  // Fix malformed function calls
  content = content.replace(/add Event Listener/g, 'addEventListener');
  content = content.replace(/remove Event Listener/g, 'removeEventListener');
  content = content.replace(/handle Key Down/g, 'handleKeyDown');
  
  // Fix malformed interface names
  content = content.replace(/Accessibilityenhancerprops/g, 'AccessibilityEnhancerProps');
  
  // Fix malformed property names
  content = content.replace(/enableScreenreadersupport/g, 'enableScreenReaderSupport');
  
  // Fix malformed variable names
  content = content.replace(/prefersReducedMotion/g, 'prefersReducedMotion');
  content = content.replace(/mainContent/g, 'mainContent');
  content = content.replace(/root/g, 'root');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*"/g, 'className="');
  content = content.replace(/id\s*=\s*"/g, 'id="');
  content = content.replace(/onClick\s*=\s*{/g, 'onClick={');
  content = content.replace(/onChange\s*=\s*{/g, 'onChange={');
  content = content.replace(/onSubmit\s*=\s*{/g, 'onSubmit={');
  
  // Fix malformed function parameters
  content = content.replace(/{\s*(\w+)\s*=\s*([^,}]+)/g, (match, param, value) => {
    const validParam = param.charAt(0).toLowerCase() + param.slice(1);
    return `{ ${validParam} = ${value}`;
  });
  
  // Fix malformed destructuring
  content = content.replace(/{\s*(\w+)\s+(\w+)\s*}/g, (match, first, second) => {
    const validProp = first + second.charAt(0).toUpperCase() + second.slice(1);
    return `{ ${validProp} }`;
  });
  
  // Fix malformed object properties
  content = content.replace(/(\w+)\s+(\w+)\s*:/g, (match, first, second) => {
    const validProp = first + second.charAt(0).toUpperCase() + second.slice(1);
    return `${validProp}:`;
  });
  
  // Fix malformed method calls
  content = content.replace(/\.classList\.add\s*\(/g, '.classList.add(');
  content = content.replace(/\.classList\.remove\s*\(/g, '.classList.remove(');
  content = content.replace(/\.focus\s*\(/g, '.focus(');
  content = content.replace(/\.preventDefault\s*\(/g, '.preventDefault(');
  
  // Fix malformed string literals
  content = content.replace(/'\s*high-contrast\s*'/g, "'high-contrast'");
  content = content.replace(/'\s*reduced-motion\s*'/g, "'reduced-motion'");
  content = content.replace(/'\s*main-content\s*'/g, "'main-content'");
  
  // Fix malformed event listeners
  content = content.replace(/document\.addEventListener\s*\(\s*'keydown'\s*,\s*handleKeyDown\s*\)/g, "document.addEventListener('keydown', handleKeyDown)");
  content = content.replace(/document\.removeEventListener\s*\(\s*'keydown'\s*,\s*handleKeyDown\s*\)/g, "document.removeEventListener('keydown', handleKeyDown)");
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingSyntax(content);
    
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
console.log('Starting remaining syntax fixes...');

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
console.log('Remaining syntax fixes completed!');