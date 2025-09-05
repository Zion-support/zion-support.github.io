const fs = require('fs');
const path = require('path');

// Function to fix common syntax issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix common syntax patterns
    content = content
      // Fix function calls with missing semicolons
      .replace(/(\w+)\s*\(\s*\)\s*}/g, '$1();')
      .replace(/(\w+)\s*\(\s*\)\s*,/g, '$1();')
      // Fix missing semicolons after statements
      .replace(/(\w+)\s*\(\s*\)\s*$/gm, '$1();')
      // Fix object method calls
      .replace(/(\w+)\s*\(\s*\)\s*}/g, '$1();')
      // Fix missing semicolons in variable declarations
      .replace(/(const|let|var)\s+(\w+)\s*=\s*[^;]+$/gm, match => {
        if (!match.endsWith(';')) {
          return match + ';';
        }
        return match;
      })
      // Fix missing semicolons in function calls
      .replace(/(\w+)\s*\(\s*[^)]*\)\s*$/gm, match => {
        if (
          !match.endsWith(';') &&
          !match.includes('{') &&
          !match.includes('}')
        ) {
          return match + ';';
        }
        return match;
      })
      // Fix malformed function calls
      .replace(/(\w+)\s*\(\s*\)\s*}/g, '$1();')
      .replace(/(\w+)\s*\(\s*\)\s*,/g, '$1();')
      // Fix missing semicolons in useEffect
      .replace(
        /useEffect\s*\(\s*\(\)\s*=>\s*\{[^}]*\}\s*,\s*\[\s*\]\s*\)\s*$/gm,
        match => {
          if (!match.endsWith(';')) {
            return match + ';';
          }
          return match;
        }
      )
      // Fix missing semicolons in return statements
      .replace(/return\s+[^;]+$/gm, match => {
        if (
          !match.endsWith(';') &&
          !match.includes('{') &&
          !match.includes('}')
        ) {
          return match + ';';
        }
        return match;
      })
      // Fix trailing commas in function calls
      .replace(/,\s*\)/g, ')')
      .replace(/,\s*}/g, '}')
      .replace(/,\s*]/g, ']')
      // Fix multiple semicolons
      .replace(/;\s*;/g, ';')
      // Fix missing semicolons in if statements
      .replace(/if\s*\([^)]+\)\s*\{[^}]*\}\s*$/gm, match => {
        if (!match.endsWith(';')) {
          return match + ';';
        }
        return match;
      })
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/^\s+$/gm, '');

    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files to fix
const filesToFix = [















];

console.log('🔧 Starting comprehensive syntax fixes...');

let fixedCount = 0;
filesToFix.forEach(file => {
  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  }
});

console.log(`\n🎉 Fixed ${fixedCount}/${filesToFix.length} files`);
