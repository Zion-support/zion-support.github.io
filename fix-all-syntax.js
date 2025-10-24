const fs = require('fs');
const path = require('path');

// Function to fix syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix malformed metadata exports
    content = content.replace(/export const metadata="Metadata "=/g, 'export const metadata: Metadata =');
    content = content.replace(/title="'/g, 'title: \'');
    content = content.replace(/description: '/g, 'description: \'');
    content = content.replace(/keywords: '/g, 'keywords: \'');
    content = content.replace(/openGraph: {/g, 'openGraph: {');
    content = content.replace(/type: '/g, 'type: \'');
    content = content.replace(/url: '/g, 'url: \'');

    // Fix 2: Fix malformed function declarations
    content = content.replace(/const (\w+)="React\.FC "=/g, 'const $1: React.FC =');
    content = content.replace(/const (\w+)="React\.FC"=/g, 'const $1: React.FC =');

    // Fix 3: Fix malformed object properties
    content = content.replace(/(\w+)="(\w+)"/g, '$1: $2');
    content = content.replace(/(\w+):\s*"(\w+)"/g, '$1: \'$2\'');

    // Fix 4: Fix unterminated strings
    content = content.replace(/'([^']*)\n([^']*)'/g, "'$1$2'");
    content = content.replace(/"([^"]*)\n([^"]*)"/g, '"$1$2"');

    // Fix 5: Fix malformed JSX attributes
    content = content.replace(/(\w+)="([^"]*)"([^"]*)"([^"]*)"/g, '$1="$2$3$4"');

    // Fix 6: Fix missing semicolons
    content = content.replace(/(\w+)\nimport/g, '$1;\nimport');
    content = content.replace(/(\w+)\nexport/g, '$1;\nexport');

    // Fix 7: Fix malformed imports
    content = content.replace(/import { ([^}]+) } from '([^']+)'\n([^;])/g, "import { $1 } from '$2';\n$3");

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Main execution
console.log('Starting comprehensive syntax fix...');

const appDir = path.join(__dirname, 'app');
const pagesDir = path.join(__dirname, 'pages');
const files = [...findFiles(appDir), ...findFiles(pagesDir)];

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  try {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSyntax fix complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors encountered: ${errorCount}`);
console.log(`Total files processed: ${files.length}`);
