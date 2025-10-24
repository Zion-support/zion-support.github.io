
      }

    // Add lucide imports if any were found
    if (hasLucideImports.size > 0) {
      const lucideIcons = Array.from(hasLucideImports).sort();
      newLines.splice(1, 0, `import { ${lucideIcons.join(', ')} } from 'lucide-react';`);

    // Fix duplicate exports
    const finalContent = newLines.join('\n')
      .replace(/\nexport default [^;]+;\nexport default [^;]+;/g, '\nexport default Page;')
      .replace(/\nexport default [^;]+;\nexport default [^;]+;\nexport default [^;]+;/g, '\nexport default Page;')
      .replace(/\nexport default [^;]+;\nexport default [^;]+;\nexport default [^;]+;\nexport default [^;]+;/g, '\nexport default Page;')
      .replace(/\n  \)\n  \);/g, '\n  );')
      .replace(/\n  \)\n  \);/g, '\n  );');

    if (modified || finalContent !== content) {
      fs.writeFileSync(filePath, finalContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item !== 'layout.tsx') {
      files.push(fullPath);
  
  return files;

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;

console.log(`Fixed ${fixedCount} files`);