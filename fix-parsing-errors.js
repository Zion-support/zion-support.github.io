const fs = require('fs');
const path = require('path');

// Function to fix common parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing closing tags and fix malformed JSX
    if (content.includes('export default') && !content.includes('</div>') && content.includes('<div')) {
      // Find the last opening div and add closing tag
      const lastDivIndex = content.lastIndexOf('<div');
      if (lastDivIndex !== -1) {
        const beforeDiv = content.substring(0, lastDivIndex);
        const afterDiv = content.substring(lastDivIndex);
        const divEndIndex = afterDiv.indexOf('>');
        if (divEndIndex !== -1) {
          const divContent = afterDiv.substring(divEndIndex + 1);
          const exportIndex = divContent.indexOf('export default');
          if (exportIndex !== -1) {
            const beforeExport = divContent.substring(0, exportIndex);
            const afterExport = divContent.substring(exportIndex);
            content = beforeDiv + afterDiv.substring(0, divEndIndex + 1) + beforeExport + '</div>' + afterExport;
            modified = true;
          }
        }
      }
    }

    // Fix 2: Fix unterminated string constants
    content = content.replace(/"([^"]*)\n/g, '"$1"\n');
    content = content.replace(/'([^']*)\n/g, "'$1'\n");

    // Fix 3: Fix unexpected token issues with proper JSX structure
    if (content.includes('Unexpected token :') || content.includes('Unexpected token <')) {
      // Add proper React import if missing
      if (!content.includes("import React") && content.includes('<')) {
        content = 'import React from "react";\n' + content;
        modified = true;
      }
    }

    // Fix 4: Fix return outside function issues
    if (content.includes("'return' outside of function")) {
      // Wrap content in a proper function
      if (!content.includes('export default function') && !content.includes('const ') && content.includes('return')) {
        content = `import React from 'react';\n\nexport default function Page() {\n  return (\n    ${content}\n  );\n}`;
        modified = true;
      }
    }

    // Fix 5: Fix missing closing braces and parentheses
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n' + '}'.repeat(openBraces - closeBraces);
      modified = true;
    }

    // Fix 6: Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
      modified = true;
    }

    // Fix 7: Fix malformed JSX by ensuring proper structure
    if (content.includes('<') && !content.includes('</') && content.includes('export default')) {
      const lines = content.split('\n');
      let inJSX = false;
      let jsxContent = [];
      let exportLine = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<') && !inJSX) {
          inJSX = true;
          jsxContent.push(lines[i]);
        } else if (inJSX && lines[i].includes('export default')) {
          exportLine = i;
          break;
        } else if (inJSX) {
          jsxContent.push(lines[i]);
        }
      }
      
      if (jsxContent.length > 0 && exportLine !== -1) {
        const beforeJSX = lines.slice(0, lines.findIndex(line => line.includes('<')));
        const afterExport = lines.slice(exportLine);
        
        // Find the root element and close it
        const rootElement = jsxContent[0].match(/<(\w+)/);
        if (rootElement) {
          const closingTag = `</${rootElement[1]}>`;
          jsxContent.push(closingTag);
        }
        
        content = beforeJSX.join('\n') + '\n' + jsxContent.join('\n') + '\n' + afterExport.join('\n');
        modified = true;
      }
    }

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

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and .next directories
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
console.log('Starting comprehensive parsing error fix...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  try {
    if (fixParsingErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFix complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors encountered: ${errorCount}`);
console.log(`Total files processed: ${files.length}`);
