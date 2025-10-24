const fs = require('fs');
const path = require('path');

// Function to fix function names that start with numbers
function fixFunctionName(serviceName) {
  // Remove numbers and special characters, then convert to proper case
  let cleanName = serviceName.replace(/^[0-9]+/, '').replace(/[^a-zA-Z0-9]/g, '');
  if (cleanName.length === 0) {
    cleanName = 'Service';
  }
  return cleanName.charAt(0).toUpperCase() + cleanName.slice(1) + 'Page';
}

// Function to fix all remaining issues
function fixAllRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix function names that start with numbers
    const functionMatch = content.match(/export default function (\w+)\(\)/);
    if (functionMatch) {
      const functionName = functionMatch[1];
      if (/^[0-9]/.test(functionName)) {
        const serviceName = path.basename(path.dirname(filePath));
        const newFunctionName = fixFunctionName(serviceName);
        content = content.replace(`export default function ${functionName}()`, `export default function ${newFunctionName}()`);
        modified = true;
      }
    }

    // Fix 2: Add missing closing tags and braces
    if (content.includes('return (') && !content.includes('  );')) {
      // Find the last closing tag and add proper closing
      const lastClosingTag = content.lastIndexOf('</>');
      if (lastClosingTag > 0) {
        const beforeClosing = content.substring(0, lastClosingTag + 4);
        const afterClosing = content.substring(lastClosingTag + 4);
        
        // Check if we need to add proper closing
        if (!afterClosing.includes('  );') && !afterClosing.includes(');')) {
          content = beforeClosing + '\n  );\n}' + afterClosing;
          modified = true;
        }
      }
    }

    // Fix 3: Fix malformed function names with spaces or special characters
    content = content.replace(/export default function ([^()]+)\(\)/g, (match, functionName) => {
      const cleanName = functionName.replace(/[^a-zA-Z0-9]/g, '');
      if (cleanName !== functionName) {
        modified = true;
        return `export default function ${cleanName}()`;
      }
      return match;
    });

    // Fix 4: Ensure proper JSX structure
    if (content.includes('return (') && !content.includes('  );\n}')) {
      // Find the last return statement and fix structure
      const returnMatch = content.match(/(\s*return\s*\([\s\S]*?)(\s*)(<\/>)/);
      if (returnMatch) {
        const beforeReturn = content.substring(0, returnMatch.index);
        const returnContent = returnMatch[1];
        const afterReturn = content.substring(returnMatch.index + returnMatch[0].length);
        
        content = beforeReturn + returnContent + returnMatch[2] + returnMatch[3] + '\n  );\n}';
        modified = true;
      }
    }

    // Fix 5: Remove any remaining duplicate exports
    const exportMatches = content.match(/export default/g);
    if (exportMatches && exportMatches.length > 1) {
      const firstExportIndex = content.indexOf('export default');
      const secondExportIndex = content.indexOf('export default', firstExportIndex + 1);
      
      if (secondExportIndex > firstExportIndex) {
        content = content.substring(0, secondExportIndex).trim();
        modified = true;
      }
    }

    // Fix 6: Clean up empty lines at the end
    content = content.replace(/\n\s*\n\s*$/g, '\n');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining issues: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting final comprehensive fix...');

const appDir = 'app';
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
let totalFiles = tsxFiles.length;

console.log(`Found ${totalFiles} .tsx files to check`);

for (const file of tsxFiles) {
  if (fixAllRemainingIssues(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
console.log('Final comprehensive fix completed!');