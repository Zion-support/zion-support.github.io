const fs = require('fs');
const path = require('path');

// Function to fix JSX structure in a single file
function fixJsxStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if this is a page component with the standard structure
    if (content.includes('export default function') && content.includes('return (') && content.includes('<div>')) {
      // Look for the pattern where there are malformed closing divs
      if (content.includes('      <Footer />\n          </div>\n    </div>')) {
        content = content.replace('      <Footer />\n          </div>\n    </div>', '      <Footer />\n    </div>');
        modified = true;
      }

      // Fix other malformed closing patterns
      if (content.includes('      <Footer />\n        </div>\n      </div>')) {
        content = content.replace('      <Footer />\n        </div>\n      </div>', '      </div>\n      <Footer />\n    </div>');
        modified = true;
      }

      // Fix missing closing div before Footer
      if (content.includes('        </div>\n      <Footer />')) {
        content = content.replace('        </div>\n      <Footer />', '        </div>\n      </div>\n      <Footer />');
        modified = true;
      }

      // Fix extra closing divs
      if (content.includes('      </div>\n      </div>\n      <Footer />')) {
        content = content.replace('      </div>\n      </div>\n      <Footer />', '      </div>\n      <Footer />');
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
console.log('Starting JSX structure fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJsxStructure(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('JSX structure fix complete!');