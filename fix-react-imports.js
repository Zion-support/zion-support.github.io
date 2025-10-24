const fs = require('fs');
const path = require('path');

// Function to fix React imports in a single file
function fixReactImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has 'use client' but missing React import
    if (content.includes("'use client'") && !content.includes("import React")) {
      // Add React import after 'use client'
      content = content.replace("'use client';", "'use client';\nimport React from 'react';");
      modified = true;
    }

    // Fix missing semicolons in imports
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Fix import statements missing semicolons
      if (line.trim().startsWith('import') && !line.trim().endsWith(';') && !line.trim().endsWith('{')) {
        line = line + ';';
        modified = true;
      }
      
      // Fix malformed import statements
      if (line.includes('import  ArrowRight  from')) {
        line = line.replace('import  ArrowRight  from', 'import { ArrowRight } from');
        modified = true;
      }
      
      newLines.push(line);
    }
    
    content = newLines.join('\n');

    // Fix malformed JSX closing tags
    if (content.includes('</>')) {
      content = content.replace(/<\/>/g, '');
      modified = true;
    }

    // Fix malformed function endings
    if (content.includes(');}') && !content.includes('  );')) {
      content = content.replace(/\);}/g, '\n  );\n}');
      modified = true;
    }

    // Fix missing closing div tags
    if (content.includes('</div>);') && !content.includes('      </div>')) {
      content = content.replace('</div>);', '      </div>\n    </div>\n  );\n}');
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
console.log('Starting React import fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixReactImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('React import fix complete!');