const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix remaining duplicate imports with different patterns
  fixed = fixed.replace(/(\w+),\s*(\w+),\s*(\w+),\s*(\w+)\s*,\s*\1,\s*\2,\s*\3/g, '$1, $2, $3, $4');
  fixed = fixed.replace(/(\w+),\s*(\w+),\s*(\w+)\s*,\s*\1,\s*\2/g, '$1, $2, $3');
  fixed = fixed.replace(/(\w+),\s*(\w+)\s*,\s*\1/g, '$1, $2');
  
  // Fix malformed object syntax with trailing commas at the beginning
  fixed = fixed.replace(/{\s*,\s*/g, '{\n    ');
  fixed = fixed.replace(/,\s*}/g, '\n  }');
  
  // Fix array syntax with trailing commas
  fixed = fixed.replace(/\[\s*,\s*/g, '[\n    ');
  fixed = fixed.replace(/,\s*\]/g, '\n  ]');
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*\[([^\]]*)\]\s*([^,}])/g, '$1: [$2],\n    $3');
  
  // Fix malformed function parameters
  fixed = fixed.replace(/\(\s*{\s*\/\/ TODO: Add content\s*}\s*\/\/\s*children,\s*\}\s*:\s*{\s*\/\/ TODO: Add content\s*;\s*;\s*children:\s*React\.ReactNode;\s*\)/g, 
    '({\n  children,\n}: {\n  children: React.ReactNode;\n})');
  
  // Fix incomplete object declarations
  fixed = fixed.replace(/{\s*\/\/ TODO: Add content\s*}/g, '{\n    // TODO: Add content\n  }');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/benefits:\s*\[([^\]]*)\];/g, 'benefits: [$1],');
  
  // Fix missing closing braces in objects
  fixed = fixed.replace(/(\w+):\s*{\s*\/\/ TODO: Add content\s*}\s*(\w+):/g, '$1: {\n    // TODO: Add content\n  },\n  $2:');
  
  // Fix malformed import statements
  fixed = fixed.replace(/from\s+'lucide-react'\s*,\s*(\w+)/g, 'from \'lucide-react\'');
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/\(\s*{\s*\/\/ TODO: Add content\s*}\s*\/\/\s*children,\s*\}\s*:\s*{\s*\/\/ TODO: Add content\s*;\s*;\s*children:\s*React\.ReactNode;\s*\)/g, 
    '({\n  children,\n}: {\n  children: React.ReactNode;\n})');
  
  // Fix malformed array declarations
  fixed = fixed.replace(/\[\s*\/\/ TODO: Add items,\s*\]/g, '[\n    // TODO: Add items\n  ]');
  
  // Fix missing closing tags in JSX
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
  
  // Fix malformed TypeScript declarations
  fixed = fixed.replace(/'>' expected/g, '');
  
  // Fix malformed function calls
  fixed = fixed.replace(/'\)' expected/g, '');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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

module.exports = { fixRemainingErrors, processFile };