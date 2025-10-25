const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix LinkContact Us pattern
    if (content.includes('LinkContact Us')) {
      content = content.replace(
        /<LinkContact Us\s*>\s*\$\d+\s*<ArrowRight\$\d+ \/>\s*<\/Link>/g,
        `<Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>`
      );
      modified = true;
    }

    // Fix extra closing div tags
    if (content.includes('    </div>\n    </div>')) {
      content = content.replace(/    <\/div>\n    <\/div>/g, '    </div>');
      modified = true;
    }

    // Fix any remaining $2, $3 patterns
    content = content.replace(/\$\d+/g, '');
    if (content !== fs.readFileSync(filePath, 'utf8')) {
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

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting JSX syntax fixes...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);