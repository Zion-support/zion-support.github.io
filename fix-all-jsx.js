const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJsxStructure(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't have the problematic pattern
    if (!content.includes('export default function') || !content.includes('return (')) {
      return false;
    }
    
    let fixedContent = content;
    let hasChanges = false;
    
    // Fix common JSX structure issues
    // 1. Fix missing closing divs
    const openDivs = (fixedContent.match(/<div/g) || []).length;
    const closeDivs = (fixedContent.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      const missingDivs = openDivs - closeDivs;
      for (let i = 0; i < missingDivs; i++) {
        // Add closing div before the closing parenthesis and semicolon
        fixedContent = fixedContent.replace(/(\s*\);\s*}$)/, '\n    </div>$1');
      }
      hasChanges = true;
    }
    
    // 2. Fix indentation issues
    if (fixedContent.includes('        <div className="max-w-7xl')) {
      fixedContent = fixedContent.replace(/        <div className="max-w-7xl/g, '      <div className="max-w-7xl');
      hasChanges = true;
    }
    
    // 3. Remove semicolon after return statement
    if (fixedContent.includes('  );')) {
      fixedContent = fixedContent.replace(/  \);/g, '  )');
      hasChanges = true;
    }
    
    // 4. Fix any remaining structural issues
    if (fixedContent.includes('      </div>\n  );')) {
      fixedContent = fixedContent.replace(/      <\/div>\n  \);/g, '    </div>\n  )');
      hasChanges = true;
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, fixedContent);
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
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
let totalCount = 0;

console.log(`Checking ${tsxFiles.length} .tsx files for JSX structure issues...`);

for (const file of tsxFiles) {
  totalCount++;
  if (fixJsxStructure(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed JSX structure in ${fixedCount} out of ${totalCount} files.`);