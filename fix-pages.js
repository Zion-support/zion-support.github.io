
<<<<<<< HEAD
// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix component names
    if (content.includes('const PagePage: React.FC = () => {')) {
      const pageName = path.basename(path.dirname(filePath))
      const componentName = pageName.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page'
      content = content.replace('const PagePage: React.FC = () => {', `const ${componentName}: React.FC = () => {`)
      content = content.replace(`export default PagePage;`, `export default ${componentName}`)
      modified = true
    }
    // Remove react-helmet-async imports and usage
    if (content.includes("import { Helmet } from 'react-helmet-async';")) {
      content = content.replace("import { Helmet } from 'react-helmet-async';\n", '')
      modified = true
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
      fs.writeFileSync(filePath, content)
      // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
      return true
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
  }
  return false
}
// Function to recursively find and fix all page files
function fixAllPages(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      // Check if this is a page directory (contains page.tsx)
      const pagePath = path.join(fullPath, 'page.tsx')
      if (fs.existsSync(pagePath)) {
        if (fixPageFile(pagePath)) {
          fixedCount++;
        }
      }
      // Recursively check subdirectories
      fixedCount += fixAllPages(fullPath)
    }
  }
  return fixedCount
}
// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix pages...');
const totalFixed = fixAllPages(appDir);
console.log(`Fixed ${totalFixed} page files.`);
#!/usr/bin/env node
import fs from 'fs';'
import { execSync } from 'child_process';'
const files  = execSync('find ./app -name "page.tsx" -o -name "*.tsx" | grep -v components', { encoding: 'utf8'
  .split('\n'
    let: content = fs.readFileSync(file, 'utf8'
    // Fix all malformed quote patterns: content = content.replace(/'/g, '
    content = content.replace(/"/g, '
    content = content.replace(/"/g, '
    content = content.replace(/"/g, '
    content = content.replace(/'
    content = content.replace(/import\s+([^']*?)"/g, "import $1'
    content = content.replace(/import\s+([^"]*?)"/g, '
    content = content.replace(/from\s+'([^']*?)"/g, "from '
    content = content.replace(/from\s+"([^"]*?)"/g, '
    // Clean up any remaining malformed patterns: content = content.replace(/"/g, '
    content = content.replace(/"/g, '
    content = content.replace(/"/g, '
    // Fix unterminated strings: content = content.replace(/'([^']*?)\n/g, "$1'
    content = content.replace(/"([^"]*?)\n/g, "$1"\n'
    // Clean up extra whitespace: content = content.replace(/\n\s*\n\s*\n/g, '\n\n'
    content = content.replace(/\s+\n/g, '\n'
=======
const fs = require('fs''
const path = require('path''
    let content = fs.readFileSync(filePath, 'utf8''
    if (content.includes('const "PagePage": React.FC = () => {'',}
      const componentName = pageName.split('-''
      ).join('') + 'Page''
      content = content.replace('const "PagePage": React.FC = () => {'',
    if (content.includes("import { Helmet } from 'react-helmet-async'';
      content = content.replace("import { Helmet } from 'react-helmet-async''
>>>>>>> origin/main
