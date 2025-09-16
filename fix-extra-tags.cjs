const fs = require('fs');
const path = require('path');

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Remove extra closing tags after export default
    const lines = content.split('\n');
    const exportIndex = lines.findIndex(line => line.includes('export default'));
    
    if (exportIndex !== -1) {
      // Remove any lines after export default that contain only closing tags
      const cleanedLines = lines.slice(0, exportIndex + 1);
      const extraLines = lines.slice(exportIndex + 1);
      
      const validExtraLines = extraLines.filter(line => {
        const trimmed = line.trim();
        return trimmed && !trimmed.match(/^<\/[^>]+>$/);
      });
      
      if (extraLines.length !== validExtraLines.length) {
        content = [...cleanedLines, ...validExtraLines].join('\n');
        fixed = true;
      }
    }

    // Remove standalone closing tags at the end of files
    content = content.replace(/\n\s*<\/[^>]+>\s*$/g, '');
    
    // Remove multiple consecutive closing tags
    content = content.replace(/(<\/[^>]+>\s*){2,}$/g, '');

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += fixDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from src directory
console.log('Starting extra tags cleanup...');
const fixedCount = fixDirectory('/workspace/src');
console.log(`Fixed ${fixedCount} files`);