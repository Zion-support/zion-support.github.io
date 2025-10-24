const fs = require('fs');
const path = require('path');

// Function to fix Footer import path
function fixFooterImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix Footer import path based on directory depth
    const relativePath = path.relative('/workspace/app', filePath);
    const depth = relativePath.split('/').length - 1;
    
    let correctFooterPath;
    if (depth === 1) {
      // Files directly in app directory
      correctFooterPath = './components/Footer';
    } else if (depth === 2) {
      // Files in subdirectories like app/ai-services/
      correctFooterPath = '../components/Footer';
    } else if (depth === 3) {
      // Files in deeper subdirectories
      correctFooterPath = '../../components/Footer';
    } else {
      // For deeper nesting, calculate the correct path
      const upLevels = '../'.repeat(depth - 1);
      correctFooterPath = upLevels + 'components/Footer';
    }
    
    // Replace incorrect Footer import paths
    if (content.includes("import Footer from '../components/Footer'") && depth > 1) {
      content = content.replace("import Footer from '../components/Footer'", `import Footer from '${correctFooterPath}'`);
      modified = true;
    }
    
    if (content.includes("import Footer from '../../components/Footer'") && depth === 1) {
      content = content.replace("import Footer from '../../components/Footer'", `import Footer from '${correctFooterPath}'`);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed Footer import in: ${filePath} (depth: ${depth})`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFooterImport(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);