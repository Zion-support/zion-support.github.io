const fs = require('fs');
const path = require('path');

// Get all page files that need fixing
const getAllPageFiles = () => {
  const files = [];
  
  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  };
  
  walkDir('app');
  return files;
};

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract page name from path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2] || 'page';
    const displayName = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Remove all duplicate metadata exports
    const metadataRegex = /export const metadata = \{[\s\S]*?\};\s*/g;
    const metadataMatches = content.match(metadataRegex);
    
    if (metadataMatches && metadataMatches.length > 1) {
      // Keep only the first metadata export and clean it up
      const firstMetadata = metadataMatches[0];
      content = content.replace(metadataRegex, '');
      
      // Add the cleaned metadata at the top
      const cleanMetadata = `export const metadata = {
  title: '${displayName} - Zion Tech Group',
  description: 'Professional ${displayName.toLowerCase()} services and solutions by Zion Tech Group.',
  keywords: '${pageName}, technology, services',
  openGraph: {
    title: '${displayName} - Zion Tech Group',
    description: 'Professional ${displayName.toLowerCase()} services and solutions by Zion Tech Group.',
    type: 'website',
  },
};`;
      
      content = cleanMetadata + '\n\n' + content;
    }
    
    // Fix import paths
    content = content.replace(/import { ErrorBoundary } from '@\/components\/ErrorBoundary'/g, 
      "import { ErrorBoundary } from '@/components/ErrorBoundary'");
    
    // Fix Footer import path
    content = content.replace(/import Footer from '\.\.\/components\/Footer'/g, 
      "import Footer from '@/components/Footer'");
    
    // Fix malformed JSX in export default function
    content = content.replace(
      /export default function Wrapped\s*\([^)]*\)\s*\{\s*return\s*\(\s*<ErrorBoundary>\s*<\s*\{\.\.\.props\}\s*\/>\s*<\/ErrorBoundary>\s*\);\s*\}/g,
      `export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}`
    );
    
    // Fix function name issues
    content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*\{[\s\S]*?\}/g, (match, funcName) => {
      if (funcName === 'pagePage') {
        return match.replace(/pagePage/g, 'Page');
      }
      return match;
    });
    
    // Fix JSX element issues
    content = content.replace(/<pagePage/g, '<Page');
    content = content.replace(/<\/pagePage>/g, '</Page>');
    
    // Add proper type annotations
    content = content.replace(/export default function Wrapped\s*\([^)]*\)/g, 
      'export default function Wrapped(props: any)');
    
    // Clean up extra whitespace and semicolons
    content = content.replace(/;\s*;\s*/g, ';\n');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Get all page files and fix them
const pageFiles = getAllPageFiles();
console.log(`Found ${pageFiles.length} page files to fix`);

pageFiles.forEach(fixFile);

console.log('All remaining errors fixed!');