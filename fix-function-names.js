const fs = require('fs');
const path = require('path');

// Function to fix function names that start with numbers
function fixFunctionNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix function names that start with numbers
    content = content.replace(/function\s+(\d+[a-zA-Z]+)/g, (match, functionName) => {
      // Convert 5g to FiveG, etc.
      const fixedName = functionName
        .replace(/^5g/, 'FiveG')
        .replace(/^4g/, 'FourG')
        .replace(/^3g/, 'ThreeG')
        .replace(/^2g/, 'TwoG')
        .replace(/^1g/, 'OneG');
      modified = true;
      return `function ${fixedName}`;
    });

    // Fix function names with dots (like sitemap.xml)
    content = content.replace(/function\s+([a-zA-Z]+\.xml)/g, (match, functionName) => {
      const fixedName = functionName.replace('.xml', 'Xml');
      modified = true;
      return `function ${fixedName}`;
    });

    // Fix other special characters
    content = content.replace(/function\s+([a-zA-Z]+[^a-zA-Z0-9_][a-zA-Z0-9]*)/g, (match, functionName) => {
      const fixedName = functionName.replace(/[^a-zA-Z0-9_]/g, '');
      modified = true;
      return `function ${fixedName}`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed function names in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      if (fixFunctionNames(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting function name fixes...');

// Fix files in app directory
const appFixed = fixAllFiles('./app');
console.log(`Fixed ${appFixed} files in app directory.`);

console.log('Function name fixes completed.');