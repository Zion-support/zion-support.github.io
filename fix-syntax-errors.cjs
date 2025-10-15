const fs = require('fs');
const path = require('path');

// Function to fix syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed object properties like {, -> {
    content = content.replace(/{\s*,/g, '{');
    modified = true;

    // Fix malformed interface properties like string;, -> string;
    content = content.replace(/(\w+):\s*(\w+);,/g, '$1: $2;');
    modified = true;

    // Fix missing property names before colons
    content = content.replace(/{\s*:\s*/g, '{');
    modified = true;

    // Fix malformed array elements
    content = content.replace(/\[\s*,/g, '[');
    modified = true;

    // Fix missing commas between object properties
    content = content.replace(/(\w+):\s*([^,}]+)(\n\s*)(\w+):/g, '$1: $2,$3$4:');
    modified = true;

    // Fix missing commas between array elements
    content = content.replace(/(\w+):\s*\[([^\]]+)\]([^,}]+)(\n\s*)(\w+):/g, '$1: [$2],$3$4:');
    modified = true;

    // Fix missing closing braces
    content = content.replace(/(\w+):\s*{([^}]+)(\n\s*)(\w+):/g, '$1: {$2},$3$4:');
    modified = true;

    // Fix extra commas in interface definitions
    content = content.replace(/(\w+):\s*(\w+);,/g, '$1: $2;');
    modified = true;

    // Fix extra commas in object properties
    content = content.replace(/(\w+):\s*([^,}]+),(\n\s*})/g, '$1: $2$3');
    modified = true;

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors: ${filePath}`);
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
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Fix files in the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix syntax errors...');
const fixedCount = fixFilesInDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);