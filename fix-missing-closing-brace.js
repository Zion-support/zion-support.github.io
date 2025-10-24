const fs = require('fs');
const path = require('path');

// Function to fix missing closing brace
function fixMissingClosingBrace(filePath) {
  try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing brace for function
    if (content.includes('  );') && !content.includes('  );\n}')) {
      content = content.replace(/  \);$/g, '  );\n}');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {;
const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {;
const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting missing closing brace fixes...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);
;
let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixMissingClosingBrace(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);