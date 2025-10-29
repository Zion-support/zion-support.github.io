const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix ErrorBoundary import path
    content = content.replace(/from '\.\/components\/ErrorBoundary'/g, "from '@/components/ErrorBoundary'");
    
    // Fix duplicate metadata declarations - keep only the first one
    const metadataRegex = /export const metadata = \{[\s\S]*?\};/g;
    const matches = content.match(metadataRegex);
    if (matches && matches.length > 1) {
      // Remove all metadata declarations
      content = content.replace(metadataRegex, '');
      // Add back only the first one
      content = matches[0] + '\n' + content;
    }
    
    // Fix WrappedComponent references
    content = content.replace(/PageComponent/g, 'PageComponent');
    
    // Fix unused variables
    content = content.replace(/const Page = /g, 'const PageComponent = ');
    content = content.replace(/const pagePage = /g, 'const PageComponent = ');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript files in the app directory
const appDir = './app';
const files = [];

function walkDir(dir) {
  const filesList = fs.readdirSync(dir);
  filesList.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      files.push(filePath);
    }
  });
}

walkDir(appDir);

files.forEach(fixFile);
console.log(`Processed ${files.length} files`);
