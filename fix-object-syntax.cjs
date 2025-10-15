const fs = require('fs');
const path = require('path');

// Function to fix object syntax errors
function fixObjectSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed object properties - add missing commas
    content = content.replace(/(\w+):\s*([^,}]+)(\n\s*)(\w+):/g, '$1: $2,$3$4:');
    modified = true;

    // Fix missing commas in arrays
    content = content.replace(/(\w+):\s*\[([^\]]+)\]([^,}]+)(\n\s*)(\w+):/g, '$1: [$2],$3$4:');
    modified = true;

    // Fix missing commas after string values
    content = content.replace(/(\w+):\s*["']([^"']+)["'](\n\s*)(\w+):/g, '$1: "$2",$3$4:');
    modified = true;

    // Fix missing commas after array values
    content = content.replace(/(\w+):\s*\[([^\]]+)\]([^,}]+)(\n\s*)(\w+):/g, '$1: [$2],$3$4:');
    modified = true;

    // Fix missing commas after object values
    content = content.replace(/(\w+):\s*{([^}]+)}(\n\s*)(\w+):/g, '$1: {$2},$3$4:');
    modified = true;

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed object syntax: ${filePath}`);
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
      if (fixObjectSyntax(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Fix files in the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix object syntax errors...');
const fixedCount = fixFilesInDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);