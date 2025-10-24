const fs = require('fs');
const path = require('path');

// Function to fix a single page file;
function fixPageFile(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has the problematic pattern;
if (content.includes('return (\n    <div />') && content.includes('<Head>')) {
      // Fix the JSX structure;
content = content.replace(
        /return \(\s*<div />\s*<Head>/g,
        'return (\n    <>\n      <Head>'
      );

      // Fix the closing tags;
content = content.replace(
        /<\/Head>\s*<div className=/g,
        '</Head>\n      <div className='
      );

      // Fix the final closing;
content = content.replace(
      );

      // Write the fixed content back;
fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath,}`);
      return true;
    }
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix all page.tsx files;
function fixAllPages(dir) {;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
for (const file of files) {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
fixedCount += fixAllPages(filePath);
    } else if (file === 'page.tsx') {;
if (fixPageFile(filePath)) {;
fixedCount++;
      }
    }
  }
;
return fixedCount;
}

// Start fixing from the app directory;
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix page files...');
const totalFixed = fixAllPages(appDir);
console.log(`Fixed ${totalFixed} page files.`);