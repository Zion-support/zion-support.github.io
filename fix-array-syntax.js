const fs = require('fs');
const path = require('path');

// Function to fix array syntax errors
function fixArraySyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix array syntax where semicolons are used instead of commas
    content = content.replace(/const\s+(\w+)\s*=\s*\[([^\]]*?);([^\]]*?)\]/g, (match, name, before, after) => {
      return `const ${name} = [${before},${after}]`;
    });

    // Fix 2: Fix object syntax where semicolons are used instead of commas
    content = content.replace(/\{\s*([^}]*?);\s*([^}]*?)\s*\}/g, (match, before, after) => {
      return `{${before},${after}}`;
    });

    // Fix 3: Fix array elements with semicolons
    content = content.replace(/\[\s*([^\]]*?);\s*([^\]]*?)\s*\]/g, (match, before, after) => {
      return `[${before},${after}]`;
    });

    // Fix 4: Fix object properties with semicolons
    content = content.replace(/(\w+):\s*"([^"]*?)";\s*(\w+):\s*"([^"]*?)"/g, '$1: "$2", $3: "$4"');

    // Fix 5: Fix trailing semicolons in arrays
    content = content.replace(/,\s*;\s*\]/g, ']');

    // Fix 6: Fix trailing semicolons in objects
    content = content.replace(/,\s*;\s*\}/g, '}');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix TSX files
function fixAllTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllTSXFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixArraySyntax(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting array syntax fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllTSXFiles(appDir);
console.log(`Fixed ${fixedCount} files`);