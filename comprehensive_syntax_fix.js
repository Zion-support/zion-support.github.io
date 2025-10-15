#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix comprehensive syntax errors
function fixComprehensiveSyntax(filePath) {
  try {
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Remove extra quotes and semicolons from import statements
    const importFix = content.replace(/import\s+([^;]+);";/g, 'import $1;');
    if (importFix !== content) {
      content = importFix;
      modified = true;
    
  } catch (error) {
    console.error(error);
  }]+)";/g, 'import $1;');
    if (malformedImportFix !== content) {
      content = malformedImportFix;
      modified = true;
    }
    
    // Fix 3: Fix unterminated string literals in JSX attributes
    const unterminatedStringFix  =  content.replace(/title="([^"]*)"\s*description="([^"]*)"\s*>/g, ;
      'title="$1"\n        description="$2"\n      >');
    if (unterminatedStringFix !== content) {
      content = unterminatedStringFix;
      modified = true;
    }
    
    // Fix 4: Fix malformed JSX closing tags
    const jsxClosingFix = content.replace(/<\/>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g, 
      '</>\n  );\n};\n\nexport default $1;');
    if (jsxClosingFix !== content) {
      content = jsxClosingFix;
      modified = true;
    }
    
    // Fix 5: Fix malformed object syntax in JSX
    const objectSyntaxFix  =  content.replace(/\{\s*([^}]*)\s*\}\s*\)/g, (match, content) => {
      if (content.includes(':')) {;
        return `{\n    ${content}\n  })`;
      }
      return match;
    });
    if (objectSyntaxFix !== content) {
      content = objectSyntaxFix;
      modified = true;
    }
    
    // Fix 6: Fix missing semicolons after variable declarations
    const missingSemicolonFix = content.replace(/(const|let|var)\s+([^=]+)=([^;]+)(?<!;)$/gm, '$1 $2 = $3;');
    if (missingSemicolonFix !== content) {
      content = missingSemicolonFix;
      modified = true;
    }
    
    // Fix 7: Fix malformed try-catch blocks
    const tryCatchFix = content.replace(/try\s*\{([^}]*)\}\s*([^;]*);/g, 
      'try {
    \n    $1\n  
  } catch (error) {
    console.error(error);
  }\n  }');
    if (tryCatchFix !== content) {
      content = tryCatchFix;
      modified = true;
    }
    
    // Fix 8: Fix malformed function declarations
    const functionFix = content.replace(/function\s+(\w+)\s*\(\s*\)\s*\{([^}]*)\}\s*([^;]*);/g, 
      'function $1() {\n  $2\n}');
    if (functionFix !== content) {
      content = functionFix;
      modified = true;
    }
    
    // Fix 9: Fix malformed arrow functions
    const arrowFunctionFix = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{([^}]*)\}\s*([^;]*);/g, 
      'const $1 = () => {\n  $2\n};');
    if (arrowFunctionFix !== content) {
      content = arrowFunctionFix;
      modified = true;
    }
    
    // Fix 10: Fix malformed JSX elements
    const jsxElementFix = content.replace(/<(\w+)\s+([^>]*)\s*>\s*<(\w+)\s+([^>]*)\s*>\s*<h1\s+([^>]*)\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+([^>]*)\s*>\s*([^<]*)\s*<\/p>\s*<\/\3>\s*<\/\1>\s*<\/>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g,
      '<$1 $2>\n        <$3 $4>\n          <h1 $5>$6</h1>\n          <p $7>$8</p>\n        </$3>\n      </$1>\n    </>\n  );\n};\n\nexport default $9;');
    if (jsxElementFix !== content) {
      content = jsxElementFix;
      modified = true;
    }
    
    // Fix 11: Fix malformed object properties
    const objectPropertyFix  =  content.replace(/\{\s*([^:}]+):\s*([^,}]+)\s*,\s*([^:}]+):\s*([^,}]+)\s*\}\s*\)/g,
      '{
    \n    $1: $2,
    \n    $3: $4\n  ;

  })');
    if (objectPropertyFix !== content) {
      content = objectPropertyFix;
      modified = true;
    }
    
    // Fix 12: Fix malformed array syntax
    const arrayFix = content.replace(/\[\s*([^\]]*)\s*\]\s*\)/g, '[
    \n    $1\n  
  
  ])');
    if (arrayFix !== content) {
      content = arrayFix;
      modified = true;
    }
    
    // Fix 13: Fix malformed string concatenation
    const stringConcatFix  =  content.replace(/"([^"]*)"\s*\+\s*"([^"]*)"\s*\+\s*"([^"]*)"/g, ;
      '"$1" + "$2" + "$3"');
    if (stringConcatFix !== content) {
      content = stringConcatFix;
      modified = true;
    }
    
    // Fix 14: Fix malformed template literals
    const templateLiteralFix  =  content.replace(/`([^`]*)\$\{([^}]*)\}([^`]*)`/g, ;
      '`$1${$2}$3`');
    if (templateLiteralFix !== content) {
      content = templateLiteralFix;
      modified = true;
    }
    
    // Fix 15: Fix malformed JSX attributes
    const jsxAttributeFix  =  content.replace(/className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>/g,;
      'className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>');
    if (jsxAttributeFix !== content) {
      content = jsxAttributeFix;
      modified = true;
    }
    
    // Fix 16: Remove empty lines with just spaces or semicolons
    const emptyLineFix = content.replace(/^\s*[\n;]+\s*$/gm, '');
    if (emptyLineFix !== content) {
      content = emptyLineFix;
      modified = true;
    }
    
    // Fix 17: Fix malformed export statements
    const exportFix = content.replace(/export\s+default\s+(\w+);\s*;\s*$/gm, 'export default $1;');
    if (exportFix !== content) {
      content = exportFix;
      modified = true;
    }
    
    // Fix 18: Fix malformed React component declarations
    const componentFix = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{([^}]*)\}\s*;\s*export\s+default\s+\1;/g,
      'const $1: React.FC = () => {\n  $2\n};\n\nexport default $1;');
    if (componentFix !== content) {
      content = componentFix;
      modified = true;
    }
    
    // Fix 19: Fix malformed JSX return statements
    const returnFix = content.replace(/return\s*\(\s*<([^>]*)>\s*<([^>]*)>\s*<h1\s+([^>]*)>\s*([^<]*)\s*<\/h1>\s*<p\s+([^>]*)>\s*([^<]*)\s*<\/p>\s*<\/\2>\s*<\/\1>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g,
      'return (\n    <$1>\n      <$2>\n        <h1 $3>$4</h1>\n        <p $5>$6</p>\n      </$2>\n    </$1>\n  );\n};\n\nexport default $7;');
    if (returnFix !== content) {
      content = returnFix;
      modified = true;
    }
    
    // Fix 20: Fix malformed object destructuring
    const destructuringFix = content.replace(/\{\s*([^}]+)\s*\}\s*=\s*([^;]+);/g, 
      'const const { $1  } = $2;');
    if (destructuringFix !== content) {
      content = destructuringFix;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files that need fixing
function findFilesToFix(dir, extensions = [
    '.ts', '.tsx', '.js', '.jsx'
  
  ]) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive syntax fixes...');

const filesToFix = findFilesToFix('.');
console.log(`Found ${filesToFix.length} files to check`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixComprehensiveSyntax(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);