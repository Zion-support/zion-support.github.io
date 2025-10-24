const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix missing semicolons between imports
    content = content.replace(/import ([^;]+)import/g, 'import $1;\nimport');
    content = content.replace(/import ([^;]+)export/g, 'import $1;\nexport');
    content = content.replace(/import ([^;]+)const/g, 'import $1;\nconst');
    content = content.replace(/import ([^;]+)function/g, 'import $1;\nfunction');

    // Fix 2: Fix missing semicolons between exports
    content = content.replace(/export ([^;]+)import/g, 'export $1;\nimport');
    content = content.replace(/export ([^;]+)const/g, 'export $1;\nconst');
    content = content.replace(/export ([^;]+)function/g, 'export $1;\nfunction');

    // Fix 3: Fix missing semicolons between const declarations
    content = content.replace(/const ([^;]+)import/g, 'const $1;\nimport');
    content = content.replace(/const ([^;]+)export/g, 'const $1;\nexport');
    content = content.replace(/const ([^;]+)const/g, 'const $1;\nconst');
    content = content.replace(/const ([^;]+)function/g, 'const $1;\nfunction');

    // Fix 4: Fix malformed JSX attributes
    content = content.replace(/className=([^"']+)/g, 'className="$1"');
    content = content.replace(/href=([^"']+)/g, 'href="$1"');
    content = content.replace(/src=([^"']+)/g, 'src="$1"');
    content = content.replace(/alt=([^"']+)/g, 'alt="$1"');

    // Fix 5: Fix malformed object properties
    content = content.replace(/(\w+):\s*([^,}]+)(?=[,}])/g, '$1: "$2"');

    // Fix 6: Fix unterminated strings
    content = content.replace(/'([^']*)\n([^']*)'/g, "'$1$2'");
    content = content.replace(/"([^"]*)\n([^"]*)"/g, '"$1$2"');

    // Fix 7: Fix malformed function declarations
    content = content.replace(/const (\w+)="React\.FC "=/g, 'const $1: React.FC =');
    content = content.replace(/const (\w+)="React\.FC"=/g, 'const $1: React.FC =');

    // Fix 8: Fix malformed metadata exports
    content = content.replace(/export const metadata="Metadata "=/g, 'export const metadata: Metadata =');
    content = content.replace(/title="'/g, 'title: \'');
    content = content.replace(/description: '/g, 'description: \'');
    content = content.replace(/keywords: '/g, 'keywords: \'');
    content = content.replace(/openGraph: {/g, 'openGraph: {');
    content = content.replace(/type: '/g, 'type: \'');
    content = content.replace(/url: '/g, 'url: \'');

    // Fix 9: Fix missing closing braces and parentheses
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n' + '}'.repeat(openBraces - closeBraces);
      modified = true;
    }

    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
      modified = true;
    }

    // Fix 10: Clean up empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');

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
console.log('Starting final syntax fix...');

const appDir = path.join(__dirname, 'app');
const pagesDir = path.join(__dirname, 'pages');
const files = [...findFiles(appDir), ...findFiles(pagesDir)];

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  try {
    if (fixAllSyntaxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFinal syntax fix complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors encountered: ${errorCount}`);
console.log(`Total files processed: ${files.length}`);
