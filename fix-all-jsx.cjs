#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common JSX structure issues
    const fixes = [
      // Fix missing closing tags for sections
      {
        pattern: /(\s*<\/div>\s*)(<\/React\.Fragment>)/g,
        replacement: '$1\n      </section>\n    $2'
      },
      // Fix missing closing tags for main sections
      {
        pattern: /(\s*<\/div>\s*)(<\/React\.Fragment>)/g,
        replacement: '$1\n    </main>\n  $2'
      },
      // Fix malformed closing tags
      {
        pattern: /<\/\s*div\s*>\s*<\/\s*section\s*>/g,
        replacement: '</div>\n      </section>'
      },
      // Fix missing closing tags before React.Fragment
      {
        pattern: /(\s*<\/div>\s*)(\s*<\/React\.Fragment>)/g,
        replacement: '$1\n    $2'
      },
      // Fix function closing issues
      {
        pattern: /(\s*\)\s*;\s*)(\s*export\s+default)/g,
        replacement: '$1\n  };\n\n  $2'
      },
      // Fix JSX element closing issues
      {
        pattern: /(\s*\)\s*;\s*)(\s*export\s+default)/g,
        replacement: '$1\n  };\n\n  $2'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    // Additional specific fixes for common patterns
    if (content.includes('</div>\n      </React.Fragment>')) {
      content = content.replace('</div>\n      </React.Fragment>', '</div>\n      </section>\n    </React.Fragment>');
      fixed = true;
    }
    
    if (content.includes('</div>\n    </React.Fragment>')) {
      content = content.replace('</div>\n    </React.Fragment>', '</div>\n    </section>\n  </React.Fragment>');
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX structure in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTSXFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.tsx$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
console.log(`Fixing JSX structure in: ${workspaceDir}`);

const tsxFiles = findTSXFiles(workspaceDir);
console.log(`Found ${tsxFiles.length} TSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXStructure(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX structure in ${fixedCount} files`);