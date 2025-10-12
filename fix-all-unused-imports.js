import fs from 'fs';
import path from 'path';

// Get all Type Script/T SX files
const get Files = (dir, extensions = ['.ts', '.tsx']) => {
  let files = [];
  const items = fs.readdir Sync(dir);
  
  for (const item of items) {
    const full Path = path.join(dir, item);
    const stat = fs.stat Sync(full Path);
    
    if (stat.is Directory() && !item.starts With('.') && item !== 'node_modules') {
      files = files.concat(get Files(full Path, extensions));
    } else if (extensions.some(ext => item.ends With(ext))) {
      files.push(full Path);
    }
  }
  
  return files;
};

// Fix unused imports in a file
const fix Unused Imports = (file Path) => {
  try {
    let content = fs.read File Sync(file Path, 'utf8');
    let modified = false;
    
    // Find all import statements
    const import Regex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g;
    const imports = [];
    let match;
    
    while ((match = import Regex.exec(content)) !== null) {
      const import Statement = match[0];
      const imported Items = match[1].split(',').map(item => item.trim());
      const source = match[2];
      
      imports.push({
        full Match: match[0],
        start: match.index,
        end: match.index + match[0].length,
        imported Items,
        source
      });
    }
    
    // Check which imports are actually used
    for (const import Info of imports) {
      const used Items = [];
      
      for (const item of import Info.imported Items) {
        // Check if the item is used in the file (excluding the import statement itself)
        const before Import = content.substring(0, import Info.start);
        const after Import = content.substring(import Info.end);
        const content Without Import = before Import + after Import;
        
        // Simple check - look for the item name in J SX or as a variable
        const item Name = item.replace(/\s+as\s+\w+/, '').trim();
        const usage Regex = new Reg Exp(`\\b${item Name}\\b`, 'g');
        
        if (usage Regex.test(content Without Import)) {
          used Items.push(item);
        }
      }
      
      // If some items are used but not all, replace the import
      if (used Items.length > 0 && used Items.length < i mport Info.imported Items.length) {
        const new Import = `import { ${used Items.join(', ')} } from '${import Info.source}'`;
        content = content.replace(import Info.full Match, new Import);
        modified = true;
      } else if (used Items.length === 0) {
        // If no items are used, remove the entire import
        content = content.replace(import Info.full Match + '\n', '');
        modified = true;
      }
    }
    
    // Remove unused Helmet imports specifically
    if (content.includes("import { Helmet } from 'react-helmet-async'") && !content.includes('<Helmet>')) {
      content = content.replace(/import { Helmet } from 'react-helmet-async'\n?/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.write File Sync(file Path, content);
      console.log(`Fixed unused imports in: ${file Path}`);
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error(`Error processing ${file Path}:`, error.message);
    return false;
  }
};

// Main execution
const app Dir = path.join(process.cwd(), 'app');
const files = get Files(app Dir);

console.log(`Found ${files.length} Type Script files to process`);

let fixed Count = 0;
for (const file of files) {
  try {
    if (fix Unused Imports(file)) {
      fixed Count++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed unused imports in ${fixed Count} files`);