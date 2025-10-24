const fs = require('fs');
const path = require('path');

// Function to clean corrupted TypeScript/JSX files
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common corruption patterns
    content = content
      // Remove extra quotes and semicolons
      .replace(/";"/g, '";')
      .replace(/";\n"/g, '";\n')
      .replace(/";\n/g, ';\n')
      .replace(/";\s*$/gm, ';')
      .replace(/";\s*}/g, ';}')
      .replace(/";\s*\)/g, ';)')
      .replace(/";\s*>/g, ';>')
      .replace(/";\s*</g, ';<')
      
      // Fix import statements
      .replace(/import,\s*/g, 'import ')
      .replace(/from\s+from\s+/g, 'from ')
      .replace(/from\s+from\s+/g, 'from ')
      
      // Fix JSX syntax
      .replace(/className\s*=\s*{([^}]+),;}/g, 'className={$1}')
      .replace(/className\s*=\s*{([^}]+),}/g, 'className={$1}')
      .replace(/className\s*=\s*{([^}]+),;}/g, 'className={$1}')
      
      // Fix function declarations
      .replace(/:\s*"React\.FC<([^>]+)>\s*=\s*\(\{/g, ': React.FC<$1> = ({')
      .replace(/:\s*"React\.FC<([^>]+)>\s*=\s*\(\{\n\s*([^}]+),/g, ': React.FC<$1> = ({\n  $2,')
      
      // Fix return statements
      .replace(/return\(\s*<([^>]+)>\s*([^<]+)<\/\1>\s*\)\s*"/g, 'return(\n    <$1>\n      $2\n    </$1>\n  )')
      .replace(/return\(\s*<([^>]+)>\s*([^<]+)<\/\1>\s*\)\s*"/g, 'return(\n    <$1>\n      $2\n    </$1>\n  )')
      
      // Fix export statements
      .replace(/export\s+default\s+([^;]+);\s*"'\s*"/g, 'export default $1;')
      .replace(/export\s+default\s+([^;]+);\s*"'\s*"/g, 'export default $1;')
      
      // Remove trailing quotes and semicolons
      .replace(/;\s*"'\s*"$/gm, ';')
      .replace(/;\s*"'\s*$/gm, ';')
      .replace(/;\s*"$/gm, ';')
      
      // Fix interface declarations
      .replace(/interface\s+([^{]+)\{\s*([^}]+)\}\s*"\s*}\s*"\s*$/gm, 'interface $1 {\n  $2\n}')
      
      // Fix component declarations
      .replace(/const\s+([^:]+):\s*"React\.FC<([^>]+)>\s*=\s*\(\{([^}]+)\}\s*\)\s*=>\s*\{/g, 'const $1: React.FC<$2> = ({ $3 }) => {')
      
      // Clean up extra whitespace and newlines
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/\s+$/gm, '')
      
      // Fix specific patterns
      .replace(/;\s*}\s*"\s*$/gm, ';\n}')
      .replace(/;\s*\)\s*"\s*$/gm, ';\n)')
      .replace(/;\s*>\s*"\s*$/gm, ';\n>')
      .replace(/;\s*<\s*"\s*$/gm, ';\n<');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (cleanFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix corrupted files...');
const fixedCount = fixFilesInDirectory('.');
console.log(`Fixed ${fixedCount} files.`);