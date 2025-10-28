import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix imports and component references in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix ErrorBoundary import path
    content = content.replace(/import ErrorBoundary from '@\/components\/ErrorBoundary';/g, "import ErrorBoundary from '../components/ErrorBoundary';");
    content = content.replace(/import ErrorBoundary from '@\/components\/ErrorBoundary'/g, "import ErrorBoundary from '../components/ErrorBoundary'");
    
    // Fix PageComponent references
    content = content.replace(/<PageComponent \{\.\.\.props\} \/>/g, '<PageComponent {...props} />');
    
    // Fix function name if it's just 'Page'
    content = content.replace(/function Page\(\)/g, 'function PageComponent()');
    
    // Fix unused variable names
    content = content.replace(/const pageComponent =/g, 'const PageComponent =');
    content = content.replace(/pageComponent/g, 'PageComponent');
    
    // If we made changes, write the file back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Starting to fix imports...');
  
  const appDir = path.join(process.cwd(), 'app');
  const pageFiles = findPageFiles(appDir);
  
  console.log(`Found ${pageFiles.length} page files`);
  
  let fixedCount = 0;
  
  for (const filePath of pageFiles) {
    if (fixImports(filePath)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run type check to verify
  try {
    console.log('Running type check...');
    execSync('npm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
  } catch (error) {
    console.error('Type check failed:', error.message);
  }
}

main();