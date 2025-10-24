const fs = require('fs');
const path = require('path');

// Function to fix JSX errors in a file
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix extra closing div tags
    if (content.includes('      </div>\n      </div>\n    </>')) {
      content = content.replace(/      <\/div>\n      <\/div>\n    <\/>/g, '      </div>\n    </>');
      modified = true;
    }

    // Fix missing closing fragment tag
    if (content.includes('<Footer />') && !content.includes('</>')) {
      content = content.replace(/<Footer \/>\s*<\/div>\s*\)\s*}/g, '</div>\n    </>\n  );');
      modified = true;
    }

    // Fix missing closing fragment tag for other patterns
    if (content.includes('return (') && content.includes('<>') && !content.includes('</>')) {
      // Look for patterns like: <Footer />\n    </div>\n  )\n}
      content = content.replace(/<Footer \/>\s*<\/div>\s*\)\s*}/g, '</div>\n    </>\n  );');
      modified = true;
    }

    // Fix missing semicolon after return statement
    if (content.includes('  )\n}') && !content.includes('  );\n}')) {
      content = content.replace(/  \)\n}/g, '  );\n}');
      modified = true;
    }

    // Fix any remaining Footer references that shouldn't be there
    if (content.includes('<Footer />')) {
      content = content.replace(/<Footer \/>\s*/g, '');
      modified = true;
    }

    // Fix any orphaned closing div tags
    if (content.includes('</div>\n  )\n}') && !content.includes('</>')) {
      content = content.replace(/<\/div>\s*\)\s*}/g, '</div>\n    </>\n  );');
      modified = true;
    }

    // Fix extra closing div tags before closing fragment
    if (content.includes('      </div>\n      </div>\n    </>')) {
      content = content.replace(/      <\/div>\n      <\/div>\n    <\/>/g, '      </div>\n    </>');
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
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting JSX error fixes v2...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);