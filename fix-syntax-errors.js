import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated strings with trailing quotes and commas
  fixed = fixed.replace(/(\w+):\s*'([^']*),'\s*$/gm, '$1: \'$2\'');
  fixed = fixed.replace(/(\w+):\s*"([^"]*),"\s*$/gm, '$1: "$2"');
  
  // Fix malformed object properties with extra quotes
  fixed = fixed.replace(/(\w+):\s*"([^"]*)",\s*"$/gm, '$1: "$2"');
  fixed = fixed.replace(/(\w+):\s*'([^']*)',\s*'$/gm, '$1: \'$2\'');
  
  // Fix missing closing braces in objects
  fixed = fixed.replace(/(\w+):\s*<(\w+)\s+className="[^"]*"\s*\/>,\s*$/gm, '$1: <$2 className="w-6 h-6" />,');
  
  // Fix missing properties in objects
  fixed = fixed.replace(/(\w+):\s*<(\w+)\s+className="[^"]*"\s*\/>,\s*$/gm, '$1: <$2 className="w-6 h-6" />,');
  
  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/(\w+):\s*\[([^\]]*)\s*$/gm, (match, key, value) => {
    if (value.trim().endsWith(',')) {
      return `${key}: [${value.trim().slice(0, -1)}]`;
    }
    return match;
  });
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(\w+):\s*\(([^)]*)\s*$/gm, (match, key, value) => {
    if (value.trim().endsWith(',')) {
      return `${key}: (${value.trim().slice(0, -1)})`;
    }
    return match;
  });
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*}\s*$/gm, '$1;');
  
  // Fix import statements
  fixed = fixed.replace(/import\s*{\s*([^}]*)\s*}\s*from\s*'([^']*)';?\s*$/gm, (match, imports, module) => {
    const cleanImports = imports.replace(/,\s*$/, '').trim();
    return `import { ${cleanImports} } from '${module}';`;
  });
  
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
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };