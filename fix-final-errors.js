const fs = require('fs');
const path = require('path');

// Function to fix final JSX syntax errors
function fixFinalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove extra closing div tags with semicolons
    content = content.replace(/<Footer \/>\s*<\/div>;\s*\);/g, '      <Footer />\n    </div>\n  );');
    content = content.replace(/<Footer \/>\s*<\/div>;\s*\)\s*;\s*}/g, '      <Footer />\n    </div>\n  );\n}');

    // Fix 2: Fix malformed Link content
    content = content.replace(/\$2\s*<ArrowRight/g, 'Contact Us\n            <ArrowRight');

    // Fix 3: Fix missing semicolons in import statements
    content = content.replace(/(import[^;]+)(\n)/g, '$1;$2');

    // Fix 4: Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+(\w+)\(\)\s*{\s*return\s*\(\s*<div>\s*<Head>/g, 
      'export default function $1() {\n  return (\n    <div>\n      <Head>');

    // Fix 5: Fix missing closing parentheses in function returns
    content = content.replace(/<\/div>\s*\)\s*;\s*}/g, '    </div>\n  );\n}');

    // Fix 6: Fix malformed JSX structure
    content = content.replace(/<div>\s*<Head>/g, '<div>\n      <Head>');
    content = content.replace(/<\/Head>\s*<div className=/g, '</Head>\n      <div className=');

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

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting final error fixes...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFinalErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total TSX files.`);