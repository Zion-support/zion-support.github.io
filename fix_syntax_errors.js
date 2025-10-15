#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix 1: Remove extra semicolons and quotes from import statements;
    const importFix = content.replace(/import\s+([^;]+);";/g, 'import $1;');
    if (importFix !== content) {
      content = importFix;
      modified = true;

  } catch (error) {
    console.error(error);
  }
  }+/g, ';');
    if (semicolonFix !== content) {
      content = semicolonFix;
      modified = true;
    }
    // Fix 3: Fix unterminated string literals in JSX"
    const stringFix  =  content.replace(/title="([^"]*)"\s*description="([^"]*)"\s*>/g, ";
      'title="$1"\n        description="$2"\n      >');
    if (stringFix !== content) {
      content = stringFix;
      modified = true;
    }
    // Fix 4: Remove duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {;
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          cleanedLines.push(line);
        } else {
          modified = true;
        }
      } else {
        cleanedLines.push(line);
      }
    }
    if (modified) {
      content = cleanedLines.join('\n');
    }
    // Fix 5: Fix malformed JSX closing tags
    const jsxFix = content.replace(/<\/>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g, 
      '</>\n  );\n};\n\nexport default $1;');
    if (jsxFix !== content) {
      content = jsxFix;
      modified = true;
    }
    // Fix 6: Fix missing semicolons after imports
    const missingSemicolonFix = content.replace(/import\s+([^;]+)(?<!;)$/gm, 'import $1;');
    if (missingSemicolonFix !== content) {
      content = missingSemicolonFix;
      modified = true;
    }
    // Fix 7: Fix malformed object syntax
    const objectFix  =  content.replace(/\{\s*([^}]*)\s*\}\s*\)/g, '{
    \n    $1\n  ;
  })');
    if (objectFix !== content) {
      content = objectFix;
      modified = true;
    }
    // Fix 8: Remove empty lines with just spaces
    const emptyLineFix = content.replace(/^\s*\n/gm, '');
    if (emptyLineFix !== content) {
      content = emptyLineFix;
      modified = true;
    }
    // Fix 9: Fix malformed try-catch blocks
    const tryCatchFix = content.replace(/try\s*\{([^}]*)\}\s*([^;]*);/g, 
      'try {
    
    \n    $1\n  
  
  } catch (error) {
    console.error(error);
  }
  }\n  }');
    if (tryCatchFix !== content) {
      content = tryCatchFix;
      modified = true;
    }
    // Fix 10: Fix unterminated string literals"
    const unterminatedStringFix  =  content.replace(/"[^"]*$/gm, (match) => {";
    if (match.endsWith('"')) return match;"
      return match + '"';
  });
    if (unterminatedStringFix !== content) {
      content = unterminatedStringFix;
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
console.log('Starting syntax error fixes...');
const filesToFix = findFilesToFix('.');
console.log(`Found ${filesToFix.length} files to check`);
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}
console.log(`Fixed ${fixedCount} files`);"