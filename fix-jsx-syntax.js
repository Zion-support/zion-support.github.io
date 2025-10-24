const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax in a single file
function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed closing div tags
    if (content.includes('        </div>\n        </div>')) {
      content = content.replace('        </div>\n        </div>', '        </div>\n      </div>');
      modified = true;
    }

    // Fix extra closing braces
    if (content.includes('  );\n}\n}')) {
      content = content.replace('  );\n}\n}', '  );\n}');
      modified = true;
    }

    // Fix malformed closing div with extra closing brace
    if (content.includes('      <Footer />\n          </div>\n    </div>\n  );\n}\n}')) {
      content = content.replace('      <Footer />\n          </div>\n    </div>\n  );\n}\n}', '      <Footer />\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix missing closing div tags
    if (content.includes('</div>);') && !content.includes('      </div>')) {
      content = content.replace('</div>);', '      </div>\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix malformed function endings
    if (content.includes(');}') && !content.includes('  );')) {
      content = content.replace(/\);}/g, '\n  );\n}');
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
console.log('Starting JSX syntax fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJsxSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('JSX syntax fix complete!');