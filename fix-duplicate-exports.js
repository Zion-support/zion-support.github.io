const fs = require('fs');
const path = require('path');

// Function to fix duplicate default exports
function fixDuplicateExports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has duplicate export default statements
    const exportDefaultMatches = content.match(/export default/g);
    if (exportDefaultMatches && exportDefaultMatches.length > 1) {
      // Remove the duplicate export default statement at the end
      content = content.replace(/\n\s*export default \w+;\s*$/, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed duplicate exports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TSX files
function fixAllDuplicateExports(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllDuplicateExports(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixDuplicateExports(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting duplicate exports fixes...');
const fixedCount = fixAllDuplicateExports(appDir);
console.log(`Fixed ${fixedCount} files`);