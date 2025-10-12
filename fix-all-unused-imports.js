import fs from 'fs';
import path from 'path';

// Get all TypeScript/TSX files
getFiles = (dir, extensions = ['.ts', '.tsx']) => {
  let files = [];
  items = fs.readdirSync(dir);
  
  for (const item of items) {
    fullPath = path.join(dir, item);
    stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused imports in a file
fixUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find all import statements
    importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g;
    imports = [];
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      importStatement = match[0];
      importedItems = match[1].split(',').map(item => item.trim());
      source = match[2];
      
      imports.push({
        fullMatch: match[0],
        start: match.index,
        end: match.index + match[0].length,
        importedItems,
        source
      });
    }
    
    // Check which imports are actually used
    for (const importInfo of imports) {
      usedItems = [];
      
      for (const item of importInfo.importedItems) {
        // Check if the item is used in the file (excluding the import statement itself)
        beforeImport = content.substring(0, importInfo.start);
        afterImport = content.substring(importInfo.end);
        contentWithoutImport = beforeImport + afterImport;
        
        // Simple check - look for the item name in JSX or as a variable
        itemName = item.replace(/\s+as\s+\w+/, '').trim();
        usageRegex = new RegExp(`\\b${itemName}\\b`, 'g');
        
        if (usageRegex.test(contentWithoutImport)) {
          usedItems.push(item);
        }
      }
      
      // If some items are used but not all, replace the import
      if (usedItems.length > 0 && usedItems.length < importInfo.importedItems.length) {
        newImport = `import { ${usedItems.join(', ')} } from '${importInfo.source}'`;
        content = content.replace(importInfo.fullMatch, newImport);
        modified = true;
      } else if (usedItems.length === 0) {
        // If no items are used, remove the entire import
        content = content.replace(importInfo.fullMatch + '\n', '');
        modified = true;
      }
    }
    
    // Remove unused Helmet imports specifically
    if (content.includes("import { Helmet } from 'react-helmet-async'") && !content.includes('<Helmet>')) {
      content = content.replace(/import { Helmet } from 'react-helmet-async'\n?/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
appDir = path.join(process.cwd(), 'app');
files = getFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process`);

let fixedCount = 0;
for (const file of files) {
  try {
    if (fixUnusedImports(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed unused imports in ${fixedCount} files`);