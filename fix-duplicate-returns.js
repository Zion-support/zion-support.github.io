const fs = require('fs');
const path = require('path');

// Function to fix duplicate return statements and malformed JSX;
function fixDuplicateReturns(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate return statements;
if (content.includes('return \n  return (')) {;
content = content.replace(/return\s*\n\s*return\s*\(/g, 'return (');
      modified = true;
    }

    // Fix malformed JSX structure;
content = content.replace(/(\s*)<div />\s*$/gm, '$1  <div />');
    content = content.replace(/(\s*)<\/div>\s*$/gm, '$1  </div>');
    content = content.replace(/(\s*)<>\s*$/gm, '$1  <>');
    content = content.replace(/(\s*)<\/>\s*$/gm, '$1  </>');

    // Fix extra closing braces;
content = content.replace(/\}\s*\}\s*$/gm, '}');

    // Fix malformed function declarations;
content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n  ');
;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicate returns in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all files;
function fixAllFiles(dir) {;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
files.forEach(file => {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {;
fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {;
if (fixDuplicateReturns(filePath)) {;
fixedCount++;
      }
    }
  });
;
return fixedCount;
}

// Main execution;
console.log('Starting duplicate returns fixes...');

// Fix files in app directory;
const appFixed = fixAllFiles('./app');
console.log(`Fixed ${appFixed} files in app directory.`);

// Fix files in src directory if it exists;
let srcFixed = 0;
if (fs.existsSync('./src')) {;
srcFixed = fixAllFiles('./src');
  console.log(`Fixed ${srcFixed} files in src directory.`);
}
;
console.log(`Duplicate returns fixes completed. Total files fixed: ${appFixed + srcFixed,}`);
      </div>