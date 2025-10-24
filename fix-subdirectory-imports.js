const fs = require('fs');
const path = require('path');

// Function to fix subdirectory imports;
function fixSubdirectoryImports(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix Footer imports in subdirectories;
if (filePath.includes('/ai-services/') && content.includes("import Footer from '../components/Footer'")) {;
content = content.replace("import Footer from '../components/Footer'", "import Footer from '../../components/Footer'");
      modified = true;
    }
;
if (filePath.includes('/micro-saas-services/') && content.includes("import Footer from '../components/Footer'")) {;
content = content.replace("import Footer from '../components/Footer'", "import Footer from '../../components/Footer'");
      modified = true;
    }
;
if (filePath.includes('/micro-saas/') && content.includes("import Footer from '../components/Footer'")) {;
content = content.replace("import Footer from '../components/Footer'", "import Footer from '../../components/Footer'");
      modified = true;
    }
;
if (filePath.includes('/zion-') && content.includes("import Footer from '../components/Footer'")) {;
content = content.replace("import Footer from '../components/Footer'", "import Footer from '../components/Footer'");
      // No change needed for zion- files as they're in the root app directory
    }
;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed subdirectory imports: ${filePath,}`);
      return true;
    }
    return false;
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files;
function findTsxFiles(dir) {;
const files = [];
  const items = fs.readdirSync(dir);
;
for (const item of items) {;
const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
;
if (stat.isDirectory()) {;
files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {;
files.push(fullPath);
    }
  }
;
return files;
}

// Main execution;
console.log('Starting subdirectory imports fix...');
;
const appDir = 'app';
const tsxFiles = findTsxFiles(appDir);
;
let fixedCount = 0;
let totalFiles = tsxFiles.length;
;
console.log(`Found ${totalFiles} .tsx files to check`);
;
for (const file of tsxFiles) {;
if (fixSubdirectoryImports(file)) {;
fixedCount++;
  }
}
;
console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
console.log('Subdirectory imports fix completed!');