const fs = require('fs');
const path = require('path');




<<<<<<< HEAD
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
function fixTestFile(filePath) {
  try {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
// Function to fix malformed test files;
function fixTestFile(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors in test files
    content = content.replace(/render\(<[^>]+>\)""/g, 'render(<$1>);');
    content = content.replace(/render\(<[^>]+>\)\n\s*expect/g, 'render(<$1>);\n    expect');
    content = content.replace(/it\('displays expected content', \(\) => \{\s*render\(<[^>]+>\)\s*\}/g, 'it(\'displays expected content\', () => {\n    render(<$1>);\n  });');
    
    // Fix missing semicolons after render calls
    content = content.replace(/(render\(<[^>]+>\))(?!;)/g, '$1;');
    
    // Fix missing closing braces and semicolons
    content = content.replace(/(\s+it\('displays expected content', \(\) => \{\s*render\(<[^>]+>\);\s*)(?!\})/g, '$1  });');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findAndFixTestFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAndFixTestFiles(filePath);
    } else if (file.endsWith('.test.tsx') || file.endsWith('.test.ts')) {
      fixTestFile(filePath);
    }
  }
}

console.log('Fixing test files...');
findAndFixTestFiles('./src');
console.log('Done fixing test files.');