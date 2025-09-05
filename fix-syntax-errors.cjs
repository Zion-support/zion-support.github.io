#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(content) {
  // Remove extra commas and semicolons that are causing parsing errors
  let fixed = content
    // Fix common patterns of extra commas and semicolons
    .replace(/,\s*;/g, ';') // Remove comma before semicolon
    .replace(/,\s*,\s*/g, ',') // Remove duplicate commas
    .replace(/;\s*;\s*/g, ';') // Remove duplicate semicolons
    .replace(/,\s*$/gm, '') // Remove trailing commas at end of lines
    .replace(/;\s*$/gm, ';') // Ensure single semicolon at end of lines
    // Fix specific patterns that are common in the corrupted files
    .replace(/import\s+([^,]+),\s*;/g, 'import $1;') // Fix import statements
    .replace(/export\s+([^,]+),\s*;/g, 'export $1;') // Fix export statements
    .replace(/const\s+([^=]+)=\s*([^,]+),\s*;/g, 'const $1 = $2;') // Fix const declarations
    .replace(/let\s+([^=]+)=\s*([^,]+),\s*;/g, 'let $1 = $2;') // Fix let declarations
    .replace(/var\s+([^=]+)=\s*([^,]+),\s*;/g, 'var $1 = $2;') // Fix var declarations
    .replace(/function\s+([^(]+)\(([^)]*)\)\s*{\s*([^}]+)},\s*;/g, 'function $1($2) { $3; }') // Fix function declarations
    .replace(/=>\s*{\s*([^}]+)},\s*;/g, '=> { $1; }') // Fix arrow functions
    .replace(/if\s*\(([^)]+)\)\s*{\s*([^}]+)},\s*;/g, 'if ($1) { $2; }') // Fix if statements
    .replace(/else\s*{\s*([^}]+)},\s*;/g, 'else { $1; }') // Fix else statements
    .replace(/for\s*\(([^)]+)\)\s*{\s*([^}]+)},\s*;/g, 'for ($1) { $2; }') // Fix for loops
    .replace(/while\s*\(([^)]+)\)\s*{\s*([^}]+)},\s*;/g, 'while ($1) { $2; }') // Fix while loops
    .replace(/try\s*{\s*([^}]+)},\s*;/g, 'try { $1; }') // Fix try blocks
    .replace(/catch\s*\(([^)]+)\)\s*{\s*([^}]+)},\s*;/g, 'catch ($1) { $2; }') // Fix catch blocks
    .replace(/finally\s*{\s*([^}]+)},\s*;/g, 'finally { $1; }') // Fix finally blocks
    // Fix JSX specific issues
    .replace(/className="([^"]*),\s*"/g, 'className="$1"') // Fix className attributes
    .replace(/onClick={([^}]+)},\s*}/g, 'onClick={$1}') // Fix onClick handlers
    .replace(/onChange={([^}]+)},\s*}/g, 'onChange={$1}') // Fix onChange handlers
    .replace(/onSubmit={([^}]+)},\s*}/g, 'onSubmit={$1}') // Fix onSubmit handlers
    .replace(/onMouseEnter={([^}]+)},\s*}/g, 'onMouseEnter={$1}') // Fix onMouseEnter handlers
    .replace(/onMouseLeave={([^}]+)},\s*}/g, 'onMouseLeave={$1}') // Fix onMouseLeave handlers
    // Fix object literals
    .replace(/{\s*([^}]+)},\s*}/g, '{ $1 }') // Fix object literals
    .replace(/\[\s*([^\]]+)\],\s*]/g, '[ $1 ]') // Fix array literals
    // Fix template literals
    .replace(/`\s*([^`]+),\s*`/g, '`$1`') // Fix template literals
    // Fix specific corrupted patterns
    .replace(/,\s*\/\*([^*]+)\*\/\s*,/g, ' /*$1*/') // Fix comments with commas
    .replace(/,\s*\/\/\s*([^\n]+)\s*,/g, ' // $1') // Fix line comments with commas
    // Clean up any remaining issues
    .replace(/\s+,\s+/g, ', ') // Normalize comma spacing
    .replace(/\s+;\s+/g, '; ') // Normalize semicolon spacing
    .replace(/,\s*$/, '') // Remove trailing commas
    .replace(/;\s*$/, ';') // Ensure proper semicolon ending
    // Fix specific corrupted patterns found in the files
    .replace(/,\s*{\s*\/\*([^*]+)\*\/\s*}/g, ' { /*$1*/ }') // Fix comment blocks
    .replace(/,\s*\/\*([^*]+)\*\/\s*,/g, ' /*$1*/') // Fix inline comments
    // Fix React component specific issues
    .replace(/React\.FC\s*=\s*\(\)\s*=>\s*{\s*([^}]+)},\s*;/g, 'React.FC = () => { $1; };') // Fix React.FC
    .replace(/useState\s*<([^>]+)>\s*\(\s*([^)]+)\s*\),\s*;/g, 'useState<$1>($2);') // Fix useState
    .replace(/useEffect\s*\(\s*\(\)\s*=>\s*{\s*([^}]+)},\s*\[\s*\]\s*\),\s*;/g, 'useEffect(() => { $1; }, []);') // Fix useEffect
    // Fix return statements
    .replace(/return\s+([^;]+),\s*;/g, 'return $1;') // Fix return statements
    .replace(/return\s+null,\s*;/g, 'return null;') // Fix return null
    .replace(/return\s+\(\s*([^)]+)\s*\),\s*;/g, 'return ($1);') // Fix return with parentheses
    // Fix export statements
    .replace(/export\s+default\s+([^,]+),\s*;/g, 'export default $1;') // Fix default exports
    .replace(/export\s+{\s*([^}]+)\s*},\s*;/g, 'export { $1 };') // Fix named exports
    // Final cleanup
    .replace(/\s+,\s*$/, '') // Remove trailing commas
    .replace(/\s+;\s*$/, ';') // Ensure proper ending
    .replace(/\n\s*,\s*\n/g, '\n') // Remove standalone commas
    .replace(/\n\s*;\s*\n/g, '\n'); // Remove standalone semicolons

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

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

// Main execution
console.log('Starting syntax error fixes...');

const directories = [
  '/workspace/components',
  '/workspace/hooks',
  '/workspace/lib',
  '/workspace/pages',
  '/workspace/api'
];

let totalProcessed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    const count = processDirectory(dir);
    totalProcessed += count;
    console.log(`Processed ${count} files in ${dir}`);
  }
}

console.log(`\nTotal files processed: ${totalProcessed}`);
console.log('Syntax error fixes completed!');