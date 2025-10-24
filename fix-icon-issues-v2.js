const fs = require('fs');
const path = require('path');

// Function to fix icon issues in a file
function fixIconIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the pattern where we have extra /> characters
    const extraPattern = /iconProps:\s*\{\s*className:\s*"([^"]+)"\s*\}\s*\/>/g;
    content = content.replace(extraPattern, (match, className) => {
      modified = true;
      return `iconProps: { className: "${className}" }`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed extra characters in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.next', '.git'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx')) {
      if (fixIconIssues(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix extra characters...');
const fixedCount = fixAllFiles(appDir);
console.log(`Fixed ${fixedCount} files`);