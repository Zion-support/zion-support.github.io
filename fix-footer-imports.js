const fs = require('fs');
const path = require('path');

function fixFooterImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix incorrect Footer import paths
    content = content.replace(/import Footer from '\.\.\/components\/Footer'/g, "import Footer from '../../components/Footer'");
    content = content.replace(/import Footer from '\.\.\/\.\.\/components\/Footer'/g, "import Footer from '../../components/Footer'");
    content = content.replace(/import Footer from '\.\.\/\.\.\/\.\.\/components\/Footer'/g, "import Footer from '../../../components/Footer'");

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed Footer import in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting Footer import fixes...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFooterImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);