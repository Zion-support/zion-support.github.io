const fs = require('fs');
const path = require('path');
// Get all .tsx files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}
function fixSEOHeadImports(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    // Calculate the correct relative path to SEOHead
    const pathParts = filePath.split('/');
    const depth = pathParts.length - 2; // -2 because we have app/.../file.tsx
    let correctPath;
    if (depth === 1) {
      // Files directly in app/ directory
      correctPath = './components/SEOHead';
    } else if (depth === 2) {
      // Files in app/something/ directory
      correctPath = '../components/SEOHead';
    } else if (depth === 3) {
      // Files in app/something/something/ directory
      correctPath = '../../components/SEOHead';
    } else {
      // For deeper nesting, calculate the path
      correctPath = '../'.repeat(depth - 1) + 'components/SEOHead';
    }
    // Replace any existing SEOHead import with the correct path
    content = content.replace(
      /from ['"](\.\.?\/)*components\/SEOHead['"]/g,
      `from '${correctPath}'`
    );
    fs.writeFileSync(filePath, content);
    console.log(`Fixed SEOHead import in: ${filePath} -> ${correctPath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}
// Get all .tsx files
const allTsxFiles = getAllTsxFiles('./app');
console.log(`Found ${allTsxFiles.length} .tsx files`);
// Fix all files
allTsxFiles.forEach(fixSEOHeadImports);
console.log('All SEOHead import paths have been fixed.');