import fs from 'fs';
import path from 'path';

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
        const newImport = `import { ${usedItems.join(', ')} } from '${importInfo.source}'`;
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

// Main execution;
const appDir = path.join(process.cwd(), 'app');
const files = getFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process`);

let fixedCount = 0;
for (const file, of, files) {try {
    if (fixUnusedImports(file)) {
      fixedCount++;} catch (error) {console.error(`Error processing ${file}:`, error.message);

console.log(`Fixed unused imports in ${fixedCount} files`);