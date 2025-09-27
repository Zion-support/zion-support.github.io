import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Fix specific syntax errors
const fixSyntaxErrors = (content) => {
  // Fix malformed variable declarations with commas
  content = content.replace(/const,\s+/g, 'const ');
  content = content.replace(/let,\s+/g, 'let ');
  content = content.replace(/var,\s+/g, 'var ');
  
  // Fix malformed function parameters with commas
  content = content.replace(/\(\s*([^)]*),\s*([^)]*)\s*\)/g, (match, p1, p2) => {
    if (p1 && p2 && !p1.includes(',') && !p2.includes(',')) {
      return `(${p1}, ${p2})`;
    }
    return match;
  });
  
  // Fix malformed destructuring with commas
  content = content.replace(/\{\s*([^}]*),\s*([^}]*)\s*\}/g, (match, p1, p2) => {
    if (p1 && p2 && !p1.includes(',') && !p2.includes(',')) {
      return `{${p1}, ${p2}}`;
    }
    return match;
  });
  
  // Fix malformed JSX className props with commas
  content = content.replace(/className=\{`([^`]*),\s*([^`]*)`\}/g, 'className={`$1$2`}');
  
  // Fix malformed template literals with commas
  content = content.replace(/`([^`]*),\s*([^`]*)`/g, '`$1$2`');
  
  // Fix malformed function calls with commas in wrong places
  content = content.replace(/if\s*\(([^)]*),\s*([^)]*)\)/g, 'if ($1 === $2)');
  
  // Fix malformed variable assignments with commas
  content = content.replace(/(\w+),\s*(\w+)\s*=/g, '$1, $2 =');
  
  // Fix malformed selector queries
  content = content.replace(/querySelectorAll\('([^']*),\s*([^']*)'\)/g, "querySelectorAll('$1, $2')");
  
  // Fix malformed object properties with commas
  content = content.replace(/(\w+),\s*(\w+)\s*:/g, '$1, $2:');
  
  // Fix malformed array/object syntax
  content = content.replace(/\[\s*([^\]]*),\s*([^\]]*)\s*\]/g, '[$1, $2]');
  
  // Fix malformed JSX props
  content = content.replace(/<(\w+),\s*([^>]*)>/g, '<$1 $2>');
  
  // Fix malformed useEffect dependencies
  content = content.replace(/\[([^\]]*),\s*([^\]]*)\]/g, '[$1, $2]');
  
  // Fix malformed string concatenations
  content = content.replace(/'\s*([^']*),\s*([^']*)'/g, "'$1$2'");
  
  // Fix malformed comments with commas
  content = content.replace(/\/\/\s*([^,]*),\s*([^,]*)/g, '// $1, $2');
  
  // Fix malformed ternary operators
  content = content.replace(/\?\s*([^:]*),\s*([^:]*)\s*:/g, '? $1 : $2 :');
  
  // Fix malformed arrow function parameters
  content = content.replace(/\(\s*([^)]*),\s*([^)]*)\s*\)\s*=>/g, '($1, $2) =>');
  
  // Fix malformed destructuring in function parameters
  content = content.replace(/\(\s*\{\s*([^}]*),\s*([^}]*)\s*\}\s*\)/g, '({$1, $2})');
  
  return content;
};

// Main function to fix remaining syntax errors
async function fixRemainingErrors() {
  console.log('🔧 Fixing remaining syntax errors...');
  
  try {
    // Get all TypeScript and JavaScript files
    const files = await glob('src/**/*.{ts,tsx,js,jsx}', { 
      ignore: ['node_modules/**', 'dist/**', 'build/**'] 
    });

    let fixedCount = 0;
    let errorCount = 0;

    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;

        // Apply fixes
        content = fixSyntaxErrors(content);

        // Only write if content changed
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          console.log(`✅ Fixed: ${file}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`❌ Error fixing ${file}:`, error.message);
        errorCount++;
      }
    }

    console.log(`\n🎉 Fixed ${fixedCount} files with ${errorCount} errors`);
  } catch (error) {
    console.error('❌ Error during fix process:', error.message);
  }
}

fixRemainingErrors();