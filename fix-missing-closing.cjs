const fs = require('fs');
const path = require('path');

function fixMissingClosing(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file is missing closing function braces
    if (content.includes('export default function') && !content.includes('  );\n}')) {
      // Find the last closing div tag
      const lastDivMatch = content.match(/.*<\/div>\s*$/);
      if (lastDivMatch) {
        // Add the missing closing braces
        content = content.trim() + '\n  );\n}';
        modified = true;
      }
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

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixMissingClosing(filePath)) {
        console.log(`Fixed missing closing in: ${filePath}`);
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting missing closing braces fixes...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed missing closing braces in ${fixedCount} files.`);