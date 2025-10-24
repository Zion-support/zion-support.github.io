const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix LinkContact Us pattern
    if (content.includes('LinkContact Us')) {
      content = content.replace(/<LinkContact Us\s*>/g, '<Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">Contact Us');
      modified = true;
    }

    // Fix $2 pattern (remove it)
    if (content.includes('$2')) {
      content = content.replace(/\s*\$2\s*/g, '');
      modified = true;
    }

    // Fix ArrowRight$3 pattern
    if (content.includes('ArrowRight$3')) {
      content = content.replace(/<ArrowRight\$3\s*\/>/g, '<ArrowRight className="ml-2 h-4 w-4" />');
      modified = true;
    }

    // Fix extra closing div tags (look for patterns like </div>\n    </div>)
    const extraDivPattern = /(\s*<\/div>\s*\n\s*<\/div>\s*)(?=\s*\);\s*})/g;
    if (extraDivPattern.test(content)) {
      content = content.replace(extraDivPattern, '\n    </div>');
      modified = true;
    }

    // Fix any remaining malformed Link tags
    if (content.includes('</Link>') && !content.includes('href=')) {
      content = content.replace(/<Link([^>]*)>/g, '<Link href="/contact"$1>');
      modified = true;
    }

    if (modified) {
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

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting JSX syntax fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of tsxFiles) {
  try {
    if (fixJSXSyntax(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nFix complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors: ${errorCount}`);