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

// Fix all issues in a file
function fixAllIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix ErrorBoundary import path
    content = content.replace(/import { ErrorBoundary } from '@\/components\/ErrorBoundary';/g, "import ErrorBoundary from '@/components/ErrorBoundary';");
    
    // Remove duplicate metadata declarations (keep only the first one)
    const metadataRegex = /export const metadata = \{[\s\S]*?\};/g;
    const matches = content.match(metadataRegex);
    if (matches && matches.length > 1) {
      // Keep only the first metadata declaration
      const firstMetadata = matches[0];
      content = content.replace(metadataRegex, '');
      // Add the first metadata back at the top after imports
      const importEnd = content.indexOf(';', content.indexOf('import')) + 1;
      content = content.slice(0, importEnd) + '\n\n' + firstMetadata + '\n' + content.slice(importEnd);
    }
    
    // Fix Page component reference
    content = content.replace(/<Page \{\.\.\.props\} \/>/g, '<PageComponent {...props} />');
    
    // Fix function name if it's just 'Page'
    content = content.replace(/function Page\(\)/g, 'function PageComponent()');
    
    // Fix unused variable names
    content = content.replace(/const pagePage =/g, 'const pageComponent =');
    content = content.replace(/pagePage/g, 'pageComponent');
    
    // Clean up extra semicolons and empty lines
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
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
  console.log('Starting to fix all issues...');
  
  const appDir = path.join(process.cwd(), 'app');
  const pageFiles = findPageFiles(appDir);
  
  console.log(`Found ${pageFiles.length} page files`);
  
  let fixedCount = 0;
  
  for (const filePath of pageFiles) {
    if (fixAllIssues(filePath)) {
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