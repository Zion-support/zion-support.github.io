const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix component names
    if (content.includes('const PagePage: React.FC = () => {')) {
      const pageName = path.basename(path.dirname(filePath));
      const componentName = pageName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      
      content = content.replace('const PagePage: React.FC = () => {', `const ${componentName}: React.FC = () => {`);
      content = content.replace(`export default PagePage;`, `export default ${componentName};`);
      modified = true;
    }

    // Remove react-helmet-async imports and usage
    if (content.includes("import { Helmet } from 'react-helmet-async';")) {
      content = content.replace("import { Helmet } from 'react-helmet-async';\n", '');
      modified = true;
    }

    if (content.includes('<Helmet>')) {
      // Remove Helmet blocks
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
      modified = true;
    }

    // Fix empty lines in JSX
    if (content.includes('<>      \n      <Navigation />')) {
      content = content.replace('<>      \n      <Navigation />', '<>\n      <Navigation />');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix all page files
function fixAllPages(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Check if this is a page directory (contains page.tsx)
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        if (fixPageFile(pagePath)) {
          fixedCount++;
        }
      }
      // Recursively check subdirectories
      fixedCount += fixAllPages(fullPath);
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix pages...');
const totalFixed = fixAllPages(appDir);
console.log(`Fixed ${totalFixed} page files.`);