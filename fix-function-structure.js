const fs = require('fs');
const path = require('path');

// Function to fix function structure issues
function fixFunctionStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has proper function structure
    if (content.includes('const') && content.includes('return') && !content.includes('export default')) {
      // Add export default if missing
      content = content.replace(/(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{[\s\S]*?};\s*)$/m, '$1\nexport default $1;');
      modified = true;
    }

    // Fix missing function wrapper for files that have arrays but no function
    if (content.includes('const') && content.includes('[') && !content.includes('return') && !content.includes('function')) {
      const lines = content.split('\n');
      let newContent = '';
      let inArray = false;
      let arrayEndLine = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('const') && lines[i].includes('[')) {
          inArray = true;
        }
        if (inArray && lines[i].includes('];')) {
          arrayEndLine = i;
          break;
        }
      }
      
      if (arrayEndLine > 0) {
        // Insert function wrapper
        const beforeArray = lines.slice(0, 2).join('\n'); // Keep imports
        const arrayContent = lines.slice(2, arrayEndLine + 1).join('\n');
        const afterArray = lines.slice(arrayEndLine + 1).join('\n');
        
        newContent = beforeArray + '\n\nexport default function Page() {\n' + arrayContent + '\n\n  return (\n' + afterArray + '\n  );\n}';
        content = newContent;
        modified = true;
      }
    }

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    // Fix missing export default
    if (content.includes('function') && !content.includes('export default')) {
      content = content.replace(/function\s+(\w+)/, 'export default function $1');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix TSX files
function fixAllTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllTSXFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixFunctionStructure(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting function structure fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllTSXFiles(appDir);
console.log(`Fixed ${fixedCount} files`);