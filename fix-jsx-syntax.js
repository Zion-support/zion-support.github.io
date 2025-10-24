const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors in a file
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has the problematic pattern
    if (content.includes('<Footer />') && content.includes('    </div>') && !content.includes('</>')) {
      // Add Footer import if missing
      if (!content.includes("import Footer from '../components/Footer'") && !content.includes("import Footer from './components/Footer'")) {
        const importMatch = content.match(/import.*from.*["'].*["'];\s*\n/);
        if (importMatch) {
          const lastImport = importMatch[importMatch.length - 1];
          const lastImportIndex = content.lastIndexOf(lastImport);
          const insertIndex = lastImportIndex + lastImport.length;
          content = content.slice(0, insertIndex) + "import Footer from '../components/Footer';\n" + content.slice(insertIndex);
          modified = true;
        }
      }

      // Fix the JSX structure
      // Replace the malformed ending with proper React Fragment closing
      content = content.replace(
        /      <Footer \/>\n    <\/div>\n  \)/,
        '      <Footer />\n    </>\n  )'
      );

      // Also handle cases where there might be different spacing
      content = content.replace(
        /<Footer \/>\s*<\/div>\s*\)\s*}/,
        '<Footer />\n    </>\n  )\n}'
      );

      if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
        return true;
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files in app directory
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting JSX syntax fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total files.`);