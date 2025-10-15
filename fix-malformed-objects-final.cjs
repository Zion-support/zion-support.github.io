const fs = require('fs');
const path = require('path');

// Function to fix malformed object patterns
function fixMalformedObjects(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific pattern: {, -> {
    if (content.includes('{,')) {
      content = content.replace(/{\s*,/g, '{');
      modified = true;
    }

    // Fix the specific pattern: { : -> {
    if (content.includes('{ :')) {
      content = content.replace(/{\s*:/g, '{');
      modified = true;
    }

    // Fix the specific pattern: [ , -> [
    if (content.includes('[ ,')) {
      content = content.replace(/\[\s*,/g, '[');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed malformed objects: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixMalformedObjects(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Fix files in the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix malformed objects...');
const fixedCount = fixFilesInDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);