const fs = require('fs');
const path = require('path');

// Function to fix React Fragment issues in a file
function fixFragmentFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has React Fragment syntax issues
    if (content.includes('<>') && !content.includes('</>')) {
      // Add missing closing fragment tag before the closing parenthesis
      content = content.replace(/(\s*<Footer \/>\s*)(\s*\)\s*;\s*})/g, '$1    </>\n  );');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed Fragment in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TSX files
function fixAllFragmentFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllFragmentFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixFragmentFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting Fragment fixes...');
const fixedCount = fixAllFragmentFiles(appDir);
console.log(`Fixed ${fixedCount} files`);