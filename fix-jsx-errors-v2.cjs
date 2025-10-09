#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate closing braces and divs
    if (content.includes('  );\n};\n};')) {
      content = content.replace(/  \);\n\};\n\};/g, '  );\n};');
      modified = true;
    }

    // Fix extra closing divs
    if (content.includes('    </div>\n  \n    </div>\n  \n    </div>')) {
      content = content.replace(/    <\/div>\n  \n    <\/div>\n  \n    <\/div>/g, '    </div>\n  </div>');
      modified = true;
    }

    // Fix misplaced imports in the middle of code
    const importMatch = content.match(/(\s+}\s*)\s*import\s+.*?from\s+['"][^'"]+['"];?\s*(\s+const\s+)/);
    if (importMatch) {
      const beforeImport = content.substring(0, importMatch.index);
      const afterImport = content.substring(importMatch.index + importMatch[0].length);
      const importStatement = content.substring(importMatch.index + importMatch[1].length, importMatch.index + importMatch[0].length - importMatch[2].length);
      
      // Move import to the top
      const lines = beforeImport.split('\n');
      const lastImportIndex = lines.findLastIndex(line => line.trim().startsWith('import '));
      if (lastImportIndex !== -1) {
        lines.splice(lastImportIndex + 1, 0, importStatement.trim());
        content = lines.join('\n') + '\n' + afterImport;
        modified = true;
      }
    }

    // Fix missing closing braces in object arrays
    if (content.includes('    },\n    {') && !content.includes('    },\n    {\n      name:')) {
      content = content.replace(/    \},\n    \{/g, '    },\n    {\n      name:');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\n//') && !content.includes('  );\n};\n\n//')) {
      content = content.replace(/  \);\n\};\n\/\//g, '  );\n};\n\n//');
      modified = true;
    }

    // Fix missing closing tags in JSX
    const unclosedDivMatch = content.match(/<div([^>]*)>\s*([^<]+)\s*$/m);
    if (unclosedDivMatch) {
      content = content.replace(/<div([^>]*)>\s*([^<]+)\s*$/m, `<div$1>$2</div>`);
      modified = true;
    }

    // Fix missing closing tags in sections
    const unclosedSectionMatch = content.match(/<section([^>]*)>\s*([^<]+)\s*$/m);
    if (unclosedSectionMatch) {
      content = content.replace(/<section([^>]*)>\s*([^<]+)\s*$/m, `<section$1>$2</section>`);
      modified = true;
    }

    // Fix JSX expressions with missing parent elements
    if (content.includes('return (\n    <') && !content.includes('return (\n    <div>')) {
      content = content.replace(/return \(\s*\n\s*</g, 'return (\n    <div>\n      <');
      content = content.replace(/<\/div>\s*\n\s*\)/g, '</div>\n    </div>\n  )');
      modified = true;
    }

    // Fix missing commas in object arrays
    if (content.includes('    }\n    {\n      name:')) {
      content = content.replace(/    \}\n    \{\n      name:/g, '    },\n    {\n      name:');
      modified = true;
    }

    // Fix missing closing braces in object arrays
    if (content.includes('    },\n    {\n      name:') && !content.includes('    },\n    {\n      name:')) {
      content = content.replace(/    \},\n    \{\n      name:/g, '    },\n    {\n      name:');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\nimport') && !content.includes('  );\n};\n\nimport')) {
      content = content.replace(/  \);\n\};\nimport/g, '  );\n};\n\nimport');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\nconst') && !content.includes('  );\n};\n\nconst')) {
      content = content.replace(/  \);\n\};\nconst/g, '  );\n};\n\nconst');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\n//') && !content.includes('  );\n};\n\n//')) {
      content = content.replace(/  \);\n\};\n\/\//g, '  );\n};\n\n//');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\nexport') && !content.includes('  );\n};\n\nexport')) {
      content = content.replace(/  \);\n\};\nexport/g, '  );\n};\n\nexport');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\nimport') && !content.includes('  );\n};\n\nimport')) {
      content = content.replace(/  \);\n\};\nimport/g, '  );\n};\n\nimport');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\nconst') && !content.includes('  );\n};\n\nconst')) {
      content = content.replace(/  \);\n\};\nconst/g, '  );\n};\n\nconst');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\n//') && !content.includes('  );\n};\n\n//')) {
      content = content.replace(/  \);\n\};\n\/\//g, '  );\n};\n\n//');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\nexport') && !content.includes('  );\n};\n\nexport')) {
      content = content.replace(/  \);\n\};\nexport/g, '  );\n};\n\nexport');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\nimport') && !content.includes('  );\n};\n\nimport')) {
      content = content.replace(/  \);\n\};\nimport/g, '  );\n};\n\nimport');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\nconst') && !content.includes('  );\n};\n\nconst')) {
      content = content.replace(/  \);\n\};\nconst/g, '  );\n};\n\nconst');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\n//') && !content.includes('  );\n};\n\n//')) {
      content = content.replace(/  \);\n\};\n\/\//g, '  );\n};\n\n//');
      modified = true;
    }

    // Fix missing closing braces in functions
    if (content.includes('  );\n};\nexport') && !content.includes('  );\n};\n\nexport')) {
      content = content.replace(/  \);\n\};\nexport/g, '  );\n};\n\nexport');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Find all TypeScript/JSX files
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);