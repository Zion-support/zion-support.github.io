#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix final syntax errors
function fixFinalSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Fix malformed const declarations with colons
    const constFix = content.replace(/const:\s*(\w+)\s*=/g, 'const $1 =');
    if (constFix !== content) {
      content = constFix;
      modified = true;
    }
    
    // Fix 2: Fix malformed let declarations with colons
    const letFix = content.replace(/let:\s*(\w+)\s*=/g, 'let $1 =');
    if (letFix !== content) {
      content = letFix;
      modified = true;
    }
    
    // Fix 3: Fix malformed var declarations with colons
    const varFix = content.replace(/var:\s*(\w+)\s*=/g, 'var $1 =');
    if (varFix !== content) {
      content = varFix;
      modified = true;
    }
    
    // Fix 4: Remove extra quotes and semicolons from JSX elements
    const jsxQuoteFix = content.replace(/<\/\w+>";/g, '</$1>');
    if (jsxQuoteFix !== content) {
      content = jsxQuoteFix;
      modified = true;
    }
    
    // Fix 5: Fix malformed JSX attributes with extra quotes
    const jsxAttrFix = content.replace(/className="([^"]*)"\s*>/g, 'className="$1">');
    if (jsxAttrFix !== content) {
      content = jsxAttrFix;
      modified = true;
    }
    
    // Fix 6: Fix malformed JSX closing tags with extra quotes
    const jsxClosingFix = content.replace(/<\/\w+>";/g, '</$1>');
    if (jsxClosingFix !== content) {
      content = jsxClosingFix;
      modified = true;
    }
    
    // Fix 7: Fix malformed import statements with extra quotes
    const importFix = content.replace(/import\s+([^;]+);";/g, 'import $1;');
    if (importFix !== content) {
      content = importFix;
      modified = true;
    }
    
    // Fix 8: Fix malformed export statements with extra quotes
    const exportFix = content.replace(/export\s+default\s+([^;]+);";/g, 'export default $1;');
    if (exportFix !== content) {
      content = exportFix;
      modified = true;
    }
    
    // Fix 9: Fix malformed function declarations with colons
    const functionFix = content.replace(/function:\s*(\w+)\s*\(/g, 'function $1(');
    if (functionFix !== content) {
      content = functionFix;
      modified = true;
    }
    
    // Fix 10: Fix malformed arrow function declarations with colons
    const arrowFix = content.replace(/const:\s*(\w+)\s*=\s*\(\s*\)\s*=>/g, 'const $1 = () =>');
    if (arrowFix !== content) {
      content = arrowFix;
      modified = true;
    }
    
    // Fix 11: Fix malformed object properties with colons
    const objectPropFix = content.replace(/\{\s*([^:}]+):\s*([^,}]+)\s*,\s*([^:}]+):\s*([^,}]+)\s*\}\s*\)/g,
      '{
    \n    $1: $2,
    \n    $3: $4\n  
  })');
    if (objectPropFix !== content) {
      content = objectPropFix;
      modified = true;
    }
    
    // Fix 12: Fix malformed array syntax with colons
    const arrayFix = content.replace(/\[\s*([^\]]*)\s*\]\s*\)/g, '[
    \n    $1\n  
  ])');
    if (arrayFix !== content) {
      content = arrayFix;
      modified = true;
    }
    
    // Fix 13: Fix malformed string literals with extra quotes
    const stringFix = content.replace(/"([^"]*)"\s*\+\s*"([^"]*)"\s*\+\s*"([^"]*)"/g, 
      '"$1" + "$2" + "$3"');
    if (stringFix !== content) {
      content = stringFix;
      modified = true;
    }
    
    // Fix 14: Fix malformed template literals with extra quotes
    const templateFix = content.replace(/`([^`]*)\$\{([^}]*)\}([^`]*)`/g, 
      '`$1${$2}$3`');
    if (templateFix !== content) {
      content = templateFix;
      modified = true;
    }
    
    // Fix 15: Fix malformed JSX elements with extra quotes
    const jsxElementFix = content.replace(/<(\w+)\s+([^>]*)\s*>\s*<(\w+)\s+([^>]*)\s*>\s*<h1\s+([^>]*)\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+([^>]*)\s*>\s*([^<]*)\s*<\/p>\s*<\/\3>\s*<\/\1>\s*<\/>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g,
      '<$1 $2>\n        <$3 $4>\n          <h1 $5>$6</h1>\n          <p $7>$8</p>\n        </$3>\n      </$1>\n    </>\n  );\n};\n\nexport default $9;');
    if (jsxElementFix !== content) {
      content = jsxElementFix;
      modified = true;
    }
    
    // Fix 16: Remove empty lines with just spaces or semicolons
    const emptyLineFix = content.replace(/^\s*[\n;]+\s*$/gm, '');
    if (emptyLineFix !== content) {
      content = emptyLineFix;
      modified = true;
    }
    
    // Fix 17: Fix malformed try-catch blocks with colons
    const tryCatchFix = content.replace(/try:\s*\{([^}]*)\}\s*([^;]*);/g, 
      'try {\n    $1\n  } catch (error) {\n    console.error(error);\n  }');
    if (tryCatchFix !== content) {
      content = tryCatchFix;
      modified = true;
    }
    
    // Fix 18: Fix malformed if statements with colons
    const ifFix = content.replace(/if:\s*\(([^)]*)\)\s*\{([^}]*)\}/g, 
      'if ($1) {\n    $2\n  }');
    if (ifFix !== content) {
      content = ifFix;
      modified = true;
    }
    
    // Fix 19: Fix malformed for loops with colons
    const forFix = content.replace(/for:\s*\(([^)]*)\)\s*\{([^}]*)\}/g, 
      'for ($1) {\n    $2\n  }');
    if (forFix !== content) {
      content = forFix;
      modified = true;
    }
    
    // Fix 20: Fix malformed while loops with colons
    const whileFix = content.replace(/while:\s*\(([^)]*)\)\s*\{([^}]*)\}/g, 
      'while ($1) {\n    $2\n  }');
    if (whileFix !== content) {
      content = whileFix;
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
console.log('Starting final syntax fixes...');

const filesToFix = findFilesToFix('.');
console.log(`Found ${filesToFix.length} files to check`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFinalSyntax(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);