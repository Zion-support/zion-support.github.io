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
function fixImportPaths(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    // Fix SEOHead import paths
    if (content.includes("from '../components/SEOHead'")) {
      content = content.replace(/from '\.\.\/components\/SEOHead'/g, "from '../../components/SEOHead'");
    }
    if (content.includes("from './components/SEOHead'")) {
      content = content.replace(/from '\.\/components\/SEOHead'/g, "from '../components/SEOHead'");
    }
    // Fix other common import issues
    if (content.includes("from '../components/")) {
      content = content.replace(/from '\.\.\/components\//g, "from '../../components/");
    }
    if (content.includes("from './components/")) {
      content = content.replace(/from '\.\/components\//g, "from '../components/");
    }
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}
// Get all .tsx files
const allTsxFiles = getAllTsxFiles('./app');
console.log(`Found ${allTsxFiles.length} .tsx files`);
// Fix all files
allTsxFiles.forEach(fixImportPaths);
console.log('All import paths have been fixed.');