const fs = require('fs');
const path = require('path');

// Function to fix Footer import paths in a file
function fixFooterImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix incorrect Footer import paths
    if (content.includes("import Footer from '../components/Footer'")) {
      // Calculate the correct relative path to components/Footer
      const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'app', 'components', 'Footer'));
      const correctImport = `import Footer from '${relativePath.replace(/\\/g, '/')}'`;
      
      content = content.replace(
        /import Footer from '\.\.\/components\/Footer'/g,
        correctImport
      );
      modified = true;
    }

    if (modified) {
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

// Function to recursively find and fix all TSX files
function fixAllFooterImports(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllFooterImports(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixFooterImport(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting Footer import fixes...');
const fixedCount = fixAllFooterImports(appDir);
console.log(`Fixed ${fixedCount} files`);