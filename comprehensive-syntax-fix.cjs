#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix the specific corruption patterns found in the files
function fixCorruptedSyntax(content) {
  let fixed = content;
  
  // Fix the most common patterns
  fixed = fixed
    // Fix lines that start with }; and have corrupted syntax
    .replace(/^};\s*const\s+([^=]+)=\s*([^;]+);\s*$/gm, 'const $1 = $2;')
    .replace(/^};\s*interface\s+([^{]+)\s*{/gm, 'interface $1 {')
    .replace(/^};\s*type\s+([^=]+)=\s*([^;]+);\s*$/gm, 'type $1 = $2;')
    .replace(/^};\s*import\s+([^;]+);\s*$/gm, 'import $1;')
    .replace(/^};\s*export\s+([^;]+);\s*$/gm, 'export $1;')
    
    // Fix function declarations
    .replace(/^};\s*const\s+([^=]+):\s*React\.FC[^=]*=\s*\([^)]*\)\s*=>\s*{/gm, 'const $1: React.FC = () => {')
    .replace(/^};\s*const\s+([^=]+):\s*React\.FC<[^>]*>\s*=\s*\([^)]*\)\s*=>\s*{/gm, 'const $1: React.FC<$2> = ($3) => {')
    
    // Fix object literals with semicolons instead of commas
    .replace(/\{\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*\}/g, '{\n    $1,\n    $2,\n    $3,\n  }')
    .replace(/\{\s*([^}]+);\s*([^}]+);\s*\}/g, '{\n    $1,\n    $2,\n  }')
    
    // Fix array literals
    .replace(/\[\s*([^\]]+);\s*([^\]]+);\s*([^\]]+);\s*\]/g, '[\n    $1,\n    $2,\n    $3,\n  ]')
    .replace(/\[\s*([^\]]+);\s*([^\]]+);\s*\]/g, '[\n    $1,\n    $2,\n  ]')
    
    // Fix function calls with semicolons instead of commas
    .replace(/\(\s*([^)]+);\s*([^)]+);\s*([^)]+);\s*\)/g, '($1, $2, $3)')
    .replace(/\(\s*([^)]+);\s*([^)]+);\s*\)/g, '($1, $2)')
    
    // Fix JSX attributes
    .replace(/className="([^"]*);\s*([^"]*);\s*([^"]*)"/g, 'className="$1 $2 $3"')
    .replace(/onClick=\{([^}]+);\s*([^}]+);\s*([^}]+)\}/g, 'onClick={$1 $2 $3}')
    .replace(/onChange=\{([^}]+);\s*([^}]+);\s*([^}]+)\}/g, 'onChange={$1 $2 $3}')
    
    // Fix template literals
    .replace(/`\s*([^`]+);\s*([^`]+);\s*([^`]+);\s*`/g, '`$1 $2 $3`')
    .replace(/`\s*([^`]+);\s*([^`]+);\s*`/g, '`$1 $2`')
    
    // Fix specific corrupted patterns
    .replace(/,\s*;\s*/g, ', ')
    .replace(/;\s*,\s*/g, ', ')
    .replace(/,\s*$/gm, '')
    .replace(/;\s*$/gm, ';')
    
    // Fix React component patterns
    .replace(/React\.FC<([^>]*)>\s*=\s*\(\s*\{\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*\}\s*\)\s*=>\s*\{/g, 'React.FC<$1> = ({ $2, $3, $4 }) => {')
    .replace(/React\.FC<([^>]*)>\s*=\s*\(\s*\{\s*([^}]+);\s*([^}]+);\s*\}\s*\)\s*=>\s*\{/g, 'React.FC<$1> = ({ $2, $3 }) => {')
    .replace(/React\.FC\s*=\s*\(\s*\{\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*\}\s*\)\s*=>\s*\{/g, 'React.FC = ({ $1, $3, $4 }) => {')
    .replace(/React\.FC\s*=\s*\(\s*\{\s*([^}]+);\s*([^}]+);\s*\}\s*\)\s*=>\s*\{/g, 'React.FC = ({ $1, $2 }) => {')
    
    // Fix useState patterns
    .replace(/useState<([^>]*)>\s*\(\s*\{\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*\}\s*\)/g, 'useState<$1>({\n    $2,\n    $3,\n    $4,\n    $5,\n    $6,\n    $7,\n  })')
    .replace(/useState<([^>]*)>\s*\(\s*\{\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*\}\s*\)/g, 'useState<$1>({\n    $2,\n    $3,\n    $4,\n    $5,\n    $6,\n  })')
    
    // Fix useEffect patterns
    .replace(/useEffect\s*\(\s*\(\s*\)\s*=>\s*\{\s*([^}]+);\s*([^}]+);\s*([^}]+);\s*\}\s*,\s*\[\s*\]\s*\)/g, 'useEffect(() => {\n    $1\n    $2\n    $3\n  }, [])')
    
    // Fix return statements
    .replace(/return\s*\(\s*([^)]+);\s*([^)]+);\s*([^)]+);\s*\)/g, 'return (\n    $1\n    $2\n    $3\n  )')
    .replace(/return\s*\(\s*([^)]+);\s*([^)]+);\s*\)/g, 'return (\n    $1\n    $2\n  )')
    
    // Fix export statements
    .replace(/export\s+default\s+([^,]+);\s*$/gm, 'export default $1;')
    
    // Clean up any remaining issues
    .replace(/\s+,\s*$/gm, '')
    .replace(/\s+;\s*$/gm, ';')
    .replace(/\n\s*,\s*\n/g, '\n')
    .replace(/\n\s*;\s*\n/g, '\n');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCorruptedSyntax(content);
    
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
console.log('Starting comprehensive syntax error fixes...');

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
console.log('Comprehensive syntax error fixes completed!');