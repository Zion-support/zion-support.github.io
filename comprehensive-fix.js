const fs = require('fs');
const path = require('path');

// Function to fix all parsing errors
function fixAllErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove extra quotes after semicolons
    content = content.replace(/';'/g, "'");
    content = content.replace(/";"/g, '"');
    modified = true;

    // Fix 2: Fix unterminated strings
    content = content.replace(/"([^"]*)\n([^"]*)"([^"]*)\n/g, '"$1$2$3"\n');
    content = content.replace(/'([^']*)\n([^']*)'([^']*)\n/g, "'$1$2$3'\n");

    // Fix 3: Fix malformed JSX attributes
    content = content.replace(/(\w+):\s*([^=}]+)/g, '$1="$2"');

    // Fix 4: Fix return outside function
    if (content.includes('return') && !content.includes('export default function') && !content.includes('const ')) {
      content = `import React from 'react';\n\nexport default function Page() {\n  return (\n    <div>\n      ${content}\n    </div>\n  );\n}`;
      modified = true;
    }

    // Fix 5: Fix unexpected token const
    if (content.includes('const ') && !content.includes('export default function')) {
      content = `import React from 'react';\n\n${content}\n\nexport default function Page() {\n  return <div>Page content</div>;\n}`;
      modified = true;
    }

    // Fix 6: Remove unused imports
    if (content.includes("import React from 'react';") && !content.includes('<')) {
      content = content.replace("import React from 'react';\n", '');
      modified = true;
    }
    if (content.includes("import { Helmet } from 'react-helmet-async';") && !content.includes('<Helmet')) {
      content = content.replace("import { Helmet } from 'react-helmet-async';\n", '');
      modified = true;
    }

    // Fix 7: Fix malformed JSX structure
    if (content.includes('<') && !content.includes('</div>') && content.includes('export default')) {
      const lines = content.split('\n');
      let jsxStart = -1;
      let exportLine = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<') && jsxStart === -1) {
          jsxStart = i;
        }
        if (lines[i].includes('export default')) {
          exportLine = i;
          break;
        }
      }
      
      if (jsxStart !== -1 && exportLine !== -1) {
        const beforeJSX = lines.slice(0, jsxStart);
        const jsxLines = lines.slice(jsxStart, exportLine);
        const afterExport = lines.slice(exportLine);
        
        // Find the root element
        const rootElement = jsxLines[0].match(/<(\w+)/);
        if (rootElement) {
          const closingTag = `</${rootElement[1]}>`;
          jsxLines.push(closingTag);
        }
        
        content = beforeJSX.join('\n') + '\n' + jsxLines.join('\n') + '\n' + afterExport.join('\n');
        modified = true;
      }
    }

    // Fix 8: Fix double return statements
    if (content.includes('return;') && content.includes('return (')) {
      content = content.replace(/return;\s*return \(/g, 'return (');
      modified = true;
    }

    // Fix 9: Fix malformed JSX tags
    content = content.replace(/<(\w+)\s*\/>/g, '<$1></$1>');
    content = content.replace(/<(\w+)\s*\/\s*>/g, '<$1></$1>');

    if (modified) {
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
console.log('Starting comprehensive error fix...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  try {
    if (fixAllErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nComprehensive fix complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors encountered: ${errorCount}`);
console.log(`Total files processed: ${files.length}`);
