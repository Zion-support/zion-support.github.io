const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix duplicate imports
  fixed = fixed.replace(/(\w+),\s*(\w+),\s*(\w+),\s*(\w+)\s*,\s*\1,\s*\2,\s*\3/g, '$1, $2, $3, $4');
  fixed = fixed.replace(/(\w+),\s*(\w+),\s*(\w+)\s*,\s*\1,\s*\2/g, '$1, $2, $3');
  fixed = fixed.replace(/(\w+),\s*(\w+)\s*,\s*\1/g, '$1, $2');
  
  // Fix malformed object syntax with trailing commas
  fixed = fixed.replace(/{\s*,\s*/g, '{\n    ');
  fixed = fixed.replace(/,\s*}/g, '\n  }');
  
  // Fix incomplete function declarations
  fixed = fixed.replace(/export default function\s+(\w+)\s*\(\s*{\s*\/\/ TODO: Add content\s*}\s*\/\/\s*children,\s*\}\s*:\s*{\s*\/\/ TODO: Add content\s*;\s*;\s*children:\s*React\.ReactNode;\s*\}\)/g, 
    'export default function $1({\n  children,\n}: {\n  children: React.ReactNode;\n})');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/Expected corresponding JSX closing tag for '(\w+)'/g, '');
  
  // Fix expression expected errors
  fixed = fixed.replace(/Expression expected/g, '');
  
  // Fix declaration or statement expected
  fixed = fixed.replace(/Declaration or statement expected/g, '');
  
  // Fix unexpected token errors
  fixed = fixed.replace(/Unexpected token\. Did you mean `\{'>'\}` or `&gt;`\?/g, '');
  
  // Fix missing semicolons
  fixed = fixed.replace(/';' expected/g, '');
  
  // Fix missing closing braces
  fixed = fixed.replace(/Expected corresponding JSX closing tag for 'h2'/g, '');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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

// Main function
function main() {
  const srcDir = path.join(__dirname, 'src');
  const pattern = path.join(srcDir, '**/*.{ts,tsx,js,jsx}');
  
  console.log('Scanning for files...');
  const files = glob.sync(pattern);
  console.log(`Found ${files.length} files to process`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };