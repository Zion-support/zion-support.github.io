const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the return statement pattern
    const returnPattern = /export default function ServicePage\(\) \{\s*\n\s*return \(<>\s*<Head>/;
    if (returnPattern.test(content)) {
      content = content.replace(
        /export default function ServicePage\(\) \{\s*\n\s*return \(<>\s*<Head>/,
        'export default function ServicePage() {\n  return (\n    <>\n      <Head>'
      );
      modified = true;
    }

    // Fix the closing pattern with Footer and div
    const closingPattern = /<\/div>\s*<Footer \/>\s*<\/div>\s*\)\s*\}/;
    if (closingPattern.test(content)) {
      content = content.replace(
        /<\/div>\s*<Footer \/>\s*<\/div>\s*\)\s*\}/,
        '</div>\n    </>\n  );\n}'
      );
      modified = true;
    }

    // Alternative closing pattern
    const altClosingPattern = /<\/div>\s*<Footer \/>\s*<\/div>\s*\)\s*\n\}/;
    if (altClosingPattern.test(content)) {
      content = content.replace(
        /<\/div>\s*<Footer \/>\s*<\/div>\s*\)\s*\n\}/,
        '</div>\n    </>\n  );\n}'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} page.tsx files to check...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total files.`);