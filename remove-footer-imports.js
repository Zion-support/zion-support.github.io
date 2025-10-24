const fs = require('fs');
const path = require('path');

// Function to remove Footer imports and usage;
function removeFooterImports(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove Footer import;
if (content.includes("import Footer from")) {;
content = content.replace(/import Footer from ['"][^'"]*['"];?\n?/g, '');
      modified = true;
    }

    // Remove Footer usage;
if (content.includes('<Footer />')) {;
content = content.replace(/<Footer\ />/g, '');
      modified = true;
    }
;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed Footer from: ${filePath,}`);
      return true;
    }
    return false;
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files;
function removeAllFooterImports(dir) {;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
for (const file of files) {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
fixedCount += removeAllFooterImports(filePath);
    } else if (file.endsWith('.tsx')) {;
if (removeFooterImports(filePath)) {;
fixedCount++;
      }
    }
  }
;
return fixedCount;
}

// Start fixing from the app directory;
const appDir = path.join(__dirname, 'app');
console.log('Removing Footer imports...');
const totalFixed = removeAllFooterImports(appDir);
console.log(`Removed Footer from ${totalFixed} files`);
      </Footer>