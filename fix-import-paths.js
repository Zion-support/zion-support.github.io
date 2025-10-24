const fs = require('fs');
const path = require('path');

function fixImportPath(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Count the depth of the file
    const depth = filePath.split('/').length - 2; // -2 for 'app' and filename
    
    // Generate the correct import path
    const importPath = '../'.repeat(depth) + 'components/Footer';
    
    // Fix the import path
    if (content.includes("import Footer from '../components/Footer';")) {
      content = content.replace("import Footer from '../components/Footer';", `import Footer from '${importPath}';`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed import path in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDir(filePath);
    } else if (file === 'page.tsx') {
      if (fixImportPath(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

console.log('Fixing import paths...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);