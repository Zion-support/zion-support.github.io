const fs = require('fs');
const path = require('path');

function fixUnusedProps(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unused props parameter
    if (content.includes('(props) =>') && !content.includes('_props')) {
      content = content.replace(/\(props\) =>/g, '(_props) =>');
      modified = true;
    }

    // Fix unused props in function parameters
    if (content.includes('props:') && !content.includes('_props:')) {
      content = content.replace(/props:/g, '_props:');
      modified = true;
    }

    // Fix unused props in destructuring
    if (content.includes('{ props }') && !content.includes('{ _props }')) {
      content = content.replace(/\{ props \}/g, '{ _props }');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed unused props in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('test') && !item.includes('spec')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔧 Fixing unused props...\n');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
let totalFiles = tsxFiles.length;

console.log(`Found ${totalFiles} .tsx files to check\n`);

tsxFiles.forEach(filePath => {
  if (fixUnusedProps(filePath)) {
    fixedCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} out of ${totalFiles} component files`);