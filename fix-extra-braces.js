const fs = require('fs');
const path = require('path');

// Function to fix extra braces and syntax issues
function fixExtraBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove extra closing braces at the end
    const lines = content.split('\n');
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip extra closing braces that appear after the main function
      if (line === '}' && i > 0) {
        // Check if this is the last line or if the next line is empty
        if (i === lines.length - 1 || (i + 1 < lines.length && lines[i + 1].trim() === '')) {
          // Check if we already have a proper function closing
          const hasProperClosing = content.includes(');\n}') || content.includes('  );\n}');
          if (hasProperClosing) {
            continue; // Skip this extra brace
          }
        }
      }
      
      cleanedLines.push(lines[i]);
    }
    
    const cleanedContent = cleanedLines.join('\n');
    if (cleanedContent !== content) {
      content = cleanedContent;
      modified = true;
    }

    // Fix 2: Fix missing semicolons after closing parentheses
    if (content.includes('  );\n}') && !content.includes('  );\n}\n')) {
      content = content.replace('  );\n}', '  );\n}\n');
      modified = true;
    }

    // Fix 3: Remove duplicate function declarations
    const functionMatches = content.match(/export default function \w+/g);
    if (functionMatches && functionMatches.length > 1) {
      // Keep only the first function declaration
      const firstFunctionIndex = content.indexOf('export default function');
      const secondFunctionIndex = content.indexOf('export default function', firstFunctionIndex + 1);
      
      if (secondFunctionIndex > firstFunctionIndex) {
        content = content.substring(0, secondFunctionIndex).trim();
        modified = true;
      }
    }

    // Fix 4: Ensure proper JSX structure
    if (content.includes('</>') && !content.includes('  );\n}')) {
      content = content.replace(/(\s*)(<\/>)/, '$1$2\n  );\n}');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed extra braces: ${filePath}`);
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
console.log('Starting extra braces fix...');

const appDir = 'app';
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
let totalFiles = tsxFiles.length;

console.log(`Found ${totalFiles} .tsx files to check`);

for (const file of tsxFiles) {
  if (fixExtraBraces(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
console.log('Extra braces fixing completed!');