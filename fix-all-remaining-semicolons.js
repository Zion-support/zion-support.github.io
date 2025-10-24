const fs = require('fs');
const path = require('path');

// Function to fix all remaining semicolon errors
function fixAllRemainingSemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific pattern: </div> followed by <Footer /> followed by </div>;
    content = content.replace(/<\/div>\s*<Footer \/>\s*<\/div>;\s*\);\s*}/g, 
      '      </div>\n      <Footer />\n    </div>\n  );\n}');

    // Fix any remaining semicolons after JSX closing tags
    content = content.replace(/<\/div>;\s*\);/g, '</div>\n  );');
    content = content.replace(/<\/div>;\s*\)\s*;\s*}/g, '</div>\n  );\n}');

    // Fix malformed Footer placement
    content = content.replace(/<\/div>\s*<Footer \/>\s*<\/div>;/g, '      </div>\n      <Footer />\n    </div>');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
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
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting comprehensive semicolon fixes...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixAllRemainingSemicolons(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total TSX files.`);