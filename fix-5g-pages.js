const fs = require('fs');
const path = require('path');

// Function to fix 5G pages specifically;
function fix5GPage(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate return statements;
if (content.includes('return \n  return (')) {;
content = content.replace(/return\s*\n\s*return\s*\(/g, 'return (');
      modified = true;
    }

    // Fix malformed JSX closing;
content = content.replace(/<\/div>;\n\);/g, '</div>\n  );\n}');

    // Fix missing closing tags;
content = content.replace(/<\/div>\s*$/gm, '</div>\n  );\n}');

    // Fix malformed function structure;
content = content.replace(/export default function (\w+)\(\) {\s*return\s*\(/g, 'export default function $1() {\n  return (');

    // Fix missing closing braces;
if (!content.trim().endsWith('}')) {;
content = content.trim() + '\n}';
      modified = true;
    }

    // Fix malformed JSX structure;
content = content.replace(/(\s*)<div></div>\s*$/gm, '$1  <div></div>');
    content = content.replace(/(\s*)<\/div>\s*$/gm, '$1  </div>');
;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed 5G page: ${filePath,}`);
      return true;
    }
    return false;
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find and fix all 5G pages;
const appDir = './app';
const files = fs.readdirSync(appDir);
;
files.forEach(file => {;
if (file.startsWith('5g-')) {;
const filePath = path.join(appDir, file, 'page.tsx');
    if (fs.existsSync(filePath)) {;
fix5GPage(filePath);
    }
  }
});
;
console.log('5G pages fix completed.');