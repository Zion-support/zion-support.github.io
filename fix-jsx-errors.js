#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

// Function to fix JSX errors in a file
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

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
console.log('Starting JSX error fixes...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);
=======
const glob = require('glob');

function fixFile(filePath) {
  let modified = false;
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix extra semicolons at the beginning of lines
    content = content.replace(/^;import/gm, 'import');
    content = content.replace(/^;export/gm, 'export');
    content = content.replace(/^;const/gm, 'const');
    content = content.replace(/^;function/gm, 'function');
    content = content.replace(/^;class/gm, 'class');
    
    // Fix malformed JSX closing tags
    content = content.replace(/\s*\}\s*\)\s*;\s*\}/g, '\n  );\n}');
    content = content.replace(/\s*\}\s*\)\s*;\s*}\s*$/g, '\n  );\n}');
    
    // Fix unterminated JSX elements
    content = content.replace(/>\s*\}\s*$/gm, '>\n  );');
    
    // Fix malformed function declarations
    content = content.replace(/export default function (\w+)\(\) \{\s*return\s*\(\s*<>/g, 'export default function $1() {\n  return (\n    <>');
    
    // Fix extra closing braces
    content = content.replace(/\s*\}\s*\}\s*$/gm, '\n  );\n}');
    
    // Fix malformed JSX attributes
    content = content.replace(/className=\"([^"]*)\"\s*>/g, 'className="$1">');
    
    // Fix unterminated strings in JSX
    content = content.replace(/title=\"([^"]*)\"\s*>/g, 'title="$1">');
    content = content.replace(/content=\"([^"]*)\"\s*>/g, 'content="$1">');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<>\s*$/gm, 'return (\n    <>');
    
    // Fix extra semicolons in JSX
    content = content.replace(/;\s*import/g, ';\nimport');
    content = content.replace(/;\s*export/g, ';\nexport');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  
  return modified;
}

// Find all TypeScript and TSX files
const patterns = [
  'app/**/*.{ts,tsx}',
  'src/**/*.{ts,tsx}',
  'components/**/*.{ts,tsx}'
];

let totalFixed = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { ignore: ['node_modules/**', '.next/**'] });
  files.forEach(file => {
    if (fixFile(file)) {
      totalFixed++;
    }
  });
});

console.log(`\nFixed ${totalFixed} files`);
>>>>>>> origin/main
