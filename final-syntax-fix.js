const fs = require('fs');
const path = require('path');

// Function to fix syntax issues
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove duplicate closing parentheses
    content = content.replace(/\s*\);\s*\);/g, ');');
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      modified = true;
    }

    // Fix 2: Remove extra semicolons after closing braces
    content = content.replace(/\s*}\s*;\s*$/gm, '}');
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      modified = true;
    }

    // Fix 3: Fix malformed function endings
    content = content.replace(/\s*}\s*;\s*\n\s*export default/g, '}\n\nexport default');
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      modified = true;
    }

    // Fix 4: Remove orphaned closing braces
    const lines = content.split('\n');
    const cleanedLines = [];
    let inFunction = false;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('export default function')) {
        inFunction = true;
        braceCount = 0;
      }
      
      if (inFunction) {
        const openBraces = (line.match(/\{/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length;
        braceCount += openBraces - closeBraces;
        
        // If we've closed all braces and this is the last line or next line is empty/export
        if (braceCount <= 0 && (i === lines.length - 1 || lines[i + 1].trim() === '' || lines[i + 1].includes('export'))) {
          inFunction = false;
        }
      }
      
      // Skip lines that are just orphaned closing braces
      if (line.trim() === '}' && !inFunction && i > 0 && lines[i - 1].trim() === '') {
        continue;
      }
      
      cleanedLines.push(line);
    }
    
    const cleanedContent = cleanedLines.join('\n');
    if (cleanedContent !== content) {
      content = cleanedContent;
      modified = true;
    }

    // Fix 5: Ensure proper JSX structure
    if (content.includes('</>') && !content.includes('  );\n}')) {
      content = content.replace(/(\s*)(<\/>)/, '$1$2\n  );\n}');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax: ${filePath}`);
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
console.log('Starting final syntax fix...');

const appDir = 'app';
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
let totalFiles = tsxFiles.length;

console.log(`Found ${totalFiles} .tsx files to check`);

for (const file of tsxFiles) {
  if (fixSyntaxIssues(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
console.log('Final syntax fixing completed!');