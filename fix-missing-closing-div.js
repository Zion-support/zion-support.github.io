const fs = require('fs');
const path = require('path');

// Function to fix missing closing div in a single file
function fixMissingClosingDiv(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if this is a page component with the standard structure
    if (content.includes('export default function') && content.includes('return (') && content.includes('<div>')) {
      // Look for the pattern where there's a missing closing div before Footer
      if (content.includes('        </div>\n      <Footer />')) {
        content = content.replace('        </div>\n      <Footer />', '        </div>\n      </div>\n      <Footer />');
        modified = true;
      }

      // Fix other missing closing div patterns
      if (content.includes('          </div>\n      <Footer />')) {
        content = content.replace('          </div>\n      <Footer />', '          </div>\n        </div>\n      </div>\n      <Footer />');
        modified = true;
      }

      // Fix missing closing div for the main content wrapper
      if (content.includes('        </div>\n    </div>\n  );\n}') && !content.includes('      </div>')) {
        content = content.replace('        </div>\n    </div>\n  );\n}', '        </div>\n      </div>\n    </div>\n  );\n}');
        modified = true;
      }
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
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting missing closing div fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixMissingClosingDiv(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Missing closing div fix complete!');