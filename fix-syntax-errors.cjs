const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Remove trailing commas before semicolons
      .replace(/,;/g, ';')
      // Remove standalone commas
      .replace(/^,;$/gm, '')
      // Fix JSX syntax issues
      .replace(/,;$/gm, '')
      // Fix object property syntax
      .replace(/(\w+),;/g, '$1;')
      // Fix function parameters
      .replace(/\(([^)]+),\)/g, '($1)')
      // Fix array syntax
      .replace(/\[([^\]]+),\]/g, '[$1]')
      // Fix object syntax
      .replace(/\{([^}]+),(\s*)\}/g, '{$1$2}')
      // Remove extra commas in JSX
      .replace(/,(\s*[<>])/g, '$1')
      // Fix import statements
      .replace(/import\s+([^;]+),;/g, 'import $1;')
      // Fix export statements
      .replace(/export\s+([^;]+),;/g, 'export $1;')
      // Clean up multiple semicolons
      .replace(/;+/g, ';')
      // Clean up multiple commas
      .replace(/,+/g, ',')
      // Remove empty lines with just commas
      .replace(/^\s*,?\s*$/gm, '')
      // Fix CSS in template literals
      .replace(/`([^`]+),;([^`]+)`/g, '`$1$2`')
      // Fix JSX attributes
      .replace(/(\w+)=/g, '$1=')
      .replace(/=([^=]+),;/g, '=$1')
      // Clean up trailing commas in objects
      .replace(/,(\s*[}\]])/g, '$1');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
=======
// Function to fix corrupted syntax in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax issues
    content = content
      // Remove trailing commas before semicolons
      .replace(/,;/g, ';')
      // Remove standalone commas at end of lines
      .replace(/,(\s*)$/gm, '$1')
      // Fix JSX attributes with trailing commas
      .replace(/,(\s*[}>])/g, '$1')
      // Fix object properties with trailing commas
      .replace(/,(\s*[}\]])/g, '$1')
      // Fix function parameters with trailing commas
      .replace(/,(\s*\))/g, '$1')
      // Fix array elements with trailing commas
      .replace(/,(\s*\])/g, '$1')
      // Remove multiple consecutive commas
      .replace(/,+/g, ',')
      // Fix spacing around operators
      .replace(/\s*:\s*/g, ': ')
      .replace(/\s*=\s*/g, ' = ')
      // Fix JSX closing tags
      .replace(/>\s*,/g, '>')
      // Remove empty lines with just commas
      .replace(/^\s*,\s*$/gm, '')
      // Fix missing spaces in JSX
      .replace(/(\w)>\s*</g, '$1> <')
      // Fix className spacing
      .replace(/className="([^"]*)\s*"/g, 'className="$1"')
      // Fix hover: spacing
      .replace(/hover:\s*/g, 'hover:')
      // Fix group-hover: spacing
      .replace(/group-hover:\s*/g, 'group-hover:')
      // Fix md: spacing
      .replace(/md:\s*/g, 'md:')
      // Fix lg: spacing
      .replace(/lg:\s*/g, 'lg:')
      // Fix sm: spacing
      .replace(/sm:\s*/g, 'sm:')
      // Fix xl: spacing
      .replace(/xl:\s*/g, 'xl:')
      // Fix 2xl: spacing
      .replace(/2xl:\s*/g, '2xl:')
      // Fix last: spacing
      .replace(/last:\s*/g, 'last:')
      // Fix first: spacing
      .replace(/first:\s*/g, 'first:')
      // Fix not-sr-only spacing
      .replace(/not-sr-only:\s*/g, 'not-sr-only:')
      // Fix focus: spacing
      .replace(/focus:\s*/g, 'focus:')
      // Fix using-mouse spacing
      .replace(/using-mouse\s*\*/g, 'using-mouse *')
      // Fix focus-visible spacing
      .replace(/focus-visible:\s*/g, 'focus-visible:')
      // Fix sr-only spacing
      .replace(/sr-only\./g, 'sr-only.')
      // Fix not-sr-only spacing
      .replace(/not-sr-only\./g, 'not-sr-only.')
      // Fix multiple spaces
      .replace(/\s{2,}/g, ' ')
      // Fix missing semicolons at end of statements
      .replace(/([^;}])\s*$/gm, '$1;')
      // Remove semicolons from JSX
      .replace(/;\s*>/g, '>')
      .replace(/;\s*}/g, '}')
      // Fix import statements
      .replace(/import\s+([^,]+),\s*{([^}]+)}\s+from\s+['"]([^'"]+)['"]\s*,/g, 'import $1, { $2 } from "$3";')
      // Fix export statements
      .replace(/export\s+default\s+([^,;]+)\s*,/g, 'export default $1;')
      // Fix interface definitions
      .replace(/interface\s+(\w+)\s*{\s*([^}]+)\s*}\s*,/g, 'interface $1 {\n  $2\n}')
      // Fix type definitions
      .replace(/type\s+(\w+)\s*=\s*([^;]+)\s*,/g, 'type $1 = $2;')
      // Fix function declarations
      .replace(/const\s+(\w+)\s*:\s*([^=]+)\s*=\s*([^;]+)\s*,/g, 'const $1: $2 = $3;')
      // Fix arrow functions
      .replace(/=>\s*{\s*([^}]+)\s*}\s*,/g, ' => {\n  $1\n};')
      // Fix JSX return statements
      .replace(/return\s*\(\s*([^)]+)\s*\)\s*,/g, 'return (\n  $1\n);')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim();
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
>>>>>>> 5bad2f01dd0f29c6f0de4c56301cb2ebee38bc06
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
<<<<<<< HEAD
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  });
}

// Start fixing from components directory
walkDir('./components');
walkDir('./hooks');
walkDir('./lib');
walkDir('./pages');

console.log('Syntax error fixing completed!');
=======
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixAllFiles('/workspace');
console.log(`Fixed ${fixedCount} files`);
>>>>>>> 5bad2f01dd0f29c6f0de4c56301cb2ebee38bc06
