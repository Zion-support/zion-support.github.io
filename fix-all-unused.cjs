const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find all import statements
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"][^'"]+['"];?/g;
    const imports = content.match(importRegex);
    
    if (!imports) return false;
    
    imports.forEach(importStatement => {
      // Extract the import path
      const fromMatch = importStatement.match(/from\s+['"]([^'"]+)['"]/);
      if (!fromMatch) return;
      
      const importPath = fromMatch[1];
      
      // Skip if it's not from lucide-react
      if (!importPath.includes('lucide-react')) return;
      
      // Extract the imported items
      const itemsMatch = importStatement.match(/{\s*([^}]+)\s*}/);
      if (!itemsMatch) return;
      
      const items = itemsMatch[1].split(',').map(item => item.trim());
      
      // Check which items are actually used in the file
      const usedItems = items.filter(item => {
        // Remove any type annotations or default imports
        const cleanItem = item.replace(/\s+as\s+\w+/, '').trim();
        if (!cleanItem) return false;
        
        // Check if the item is used in the file (excluding the import statement itself)
        const contentWithoutImport = content.replace(importStatement, '');
        const usageRegex = new RegExp(`\\b${cleanItem}\\b`, 'g');
        return usageRegex.test(contentWithoutImport);
      });
      
      // If some items are unused, update the import
      if (usedItems.length !== items.length) {
        const newImportStatement = usedItems.length > 0 
          ? `import { ${usedItems.join(', ')} } from '${importPath}';`
          : '';
        
        content = content.replace(importStatement, newImportStatement);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Main execution
console.log('🔧 Starting to fix all unused imports...');

const files = getAllFiles('/workspace/app');
let fixedCount = 0;

files.forEach(file => {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`\n🎉 Fixed unused imports in ${fixedCount} files!`);