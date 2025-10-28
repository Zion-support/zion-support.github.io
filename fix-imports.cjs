const fs = require('fs');
const path = require('path');

// Function to fix missing imports in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file uses Navigation or Footer but doesn't import them
    if (content.includes('<Navigation') && !content.includes('import Navigation')) {
      // Add Navigation import
      const importMatch = content.match(/^import.*from.*$/m);
      if (importMatch) {
        const importLine = importMatch[0];
        const newImport = importLine.replace(/^import.*from.*$/, `import Navigation from "../components/Navigation";\n${importLine}`);
        content = content.replace(importLine, newImport);
        modified = true;
      } else {
        // Add import at the beginning
        content = `import Navigation from "../components/Navigation";\n${content}`;
        modified = true;
      }
    }
    
    if (content.includes('<Footer') && !content.includes('import Footer')) {
      // Add Footer import
      const importMatch = content.match(/^import.*from.*$/m);
      if (importMatch) {
        const importLine = importMatch[0];
        const newImport = importLine.replace(/^import.*from.*$/, `import Footer from "../components/Footer";\n${importLine}`);
        content = content.replace(importLine, newImport);
        modified = true;
      } else {
        // Add import at the beginning
        content = `import Footer from "../components/Footer";\n${content}`;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files with import issues`);
