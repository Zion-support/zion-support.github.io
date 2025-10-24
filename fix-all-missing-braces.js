const fs = require('fs');
const path = require('path');

// Function to fix missing closing braces
function fixMissingBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific pattern: Footer /> followed by empty line, then </>, then ); without closing }
    if (content.match(/<Footer \/>\s*\n\s*<\/>\s*\n\s*\);\s*$/)) {
      content = content.replace(/(<Footer \/>\s*\n\s*<\/>\s*\n\s*\);\s*)$/, '    <Footer />\n    </>\n  );\n}');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed missing braces in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TSX files
function fixAllMissingBraces(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllMissingBraces(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixMissingBraces(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting comprehensive missing braces fixes...');
const fixedCount = fixAllMissingBraces(appDir);
console.log(`Fixed ${fixedCount} files`);