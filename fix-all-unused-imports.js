import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

<<<<<<< HEAD
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page files
const srcDir = path.join(__dirname, 'src');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx' || file === 'page.ts') {
      pageFiles.push(filePath);
    }
  }
}

findPageFiles(srcDir);

function cleanUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix lucide-react imports
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // Check which imports are actually used in the file
      imports.forEach(imp => {
        const cleanImp = imp.replace(/\s*as\s+\w+/, '').trim();
        if (content.includes(`<${cleanImp}`) || content.includes(`${cleanImp}.`) || content.includes(`${cleanImp}(`)) {
          usedImports.push(imp);
        }
      });

      if (usedImports.length !== imports.length) {
        const newImport = usedImports.length > 0 
          ? `import { ${usedImports.join(', ')} } from 'lucide-react';`
          : '';
        
        content = content.replace(lucideImportMatch[0], newImport);
        modified = true;
      }
    }

    // Remove unused component imports
    const componentImports = ['Navigation', 'Footer', 'SEOOptimizer'];
    componentImports.forEach(comp => {
      const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {
        content = content.replace(importRegex, '');
        modified = true;
      }
    });

    // Remove unused variable declarations that are assigned but never used
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for unused variable declarations
      const varMatch = line.match(/const\s+(\w+)\s*=\s*React\.FC.*?;/);
      if (varMatch) {
        const varName = varMatch[1];
        const isUsed = content.includes(varName) && content.indexOf(varName) !== content.lastIndexOf(varName);
        if (!isUsed) {
          continue; // Skip this line
        }
      }
      
      newLines.push(line);
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${path.relative(__dirname, filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}
=======
// Get all TypeScript/TSX files;
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item, of, items) {const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getFiles(fullPath, extensions));
 item.endsWith(ext))) {
      files.push(fullPath);

  return files;};

// Fix unused imports in a file;
  try {let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find all import statements;
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g;
    const imports = [];
    let match;

    while ((match = importRegex.exec(content)) !== null) {const importStatement = match[0];
 item.trim());
      const source = match[2];

      imports.push({
        fullMatch: match[0],
        start: match.index,
        end: match.index + match[0].length,
        importedItems,
        source;});

    // Check which imports are actually used;
    for (const importInfo, of, imports) {const usedItems = [];

      for (const item of importInfo.importedItems) {
        // Check if the item is used in the file (excluding the import, statement, itself)
        const beforeImport = content.substring(0, importInfo.start);
        const afterImport = content.substring(importInfo.end);
        const contentWithoutImport = beforeImport + afterImport;

        // Simple check - look for the item name in JSX or as a variable;
        const itemName = item.replace(/\s+as\s+\w+/, '').trim();
        const usageRegex = new RegExp(`\\b${itemName}\\b`, 'g');

        if (usageRegex.test(contentWithoutImport)) {usedItems.push(item);

      // If some items are used but not all, replace the import;
      if (usedItems.length > 0 && usedItems.length < importInfo.importedItems.length) {
        const newImport={`import { ${usedItems.join(', ')} } from '${importInfo.source}'`};
        content = content.replace(importInfo.fullMatch, newImport);
        modified = true;
      } else if (usedItems.length === 0) {// If no items are used, remove the entire import;
        content = content.replace(importInfo.fullMatch + '\n', '');
        modified = true;

    // Remove unused Helmet imports specifically;
    if (content.includes("import { Helmet} from 'react-helmet-async'") && !content.includes('<Helmet>')) {content = content.replace(/import { Helmet} from 'react-helmet-async'\n?/g, '');
      modified = true;

    if (modified) {fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;

    return false;

  } catch (error) {console.error(`Error processing ${filePath}:`, error.message);
    return false;
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

// Process all page files
pageFiles.forEach(file => {
  cleanUnusedImports(file);
});

<<<<<<< HEAD
console.log(`Processed ${pageFiles.length} page files`);
=======
console.log(`Found ${files.length} TypeScript files to process`);

let fixedCount = 0;
for (const file, of, files) {try {
    if (fixUnusedImports(file)) {
      fixedCount++;} catch (error) {console.error(`Error processing ${file}:`, error.message);

console.log(`Fixed unused imports in ${fixedCount} files`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
