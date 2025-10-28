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
function fixComprehensive(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all duplicate metadata declarations
    const metadataRegex = /export const metadata = \{[\s\S]*?\};/g;
    const matches = content.match(metadataRegex);
    if (matches && matches.length > 0) {
      // Keep only the first metadata declaration
      const firstMetadata = matches[0];
      content = content.replace(metadataRegex, '');
      
      // Add the first metadata back at the top after imports
      const importEnd = content.indexOf(';', content.indexOf('import')) + 1;
      if (importEnd > 0) {
        content = content.slice(0, importEnd) + '\n\n' + firstMetadata + '\n' + content.slice(importEnd);
      } else {
        content = firstMetadata + '\n\n' + content;
      }
    }
    
    // Fix 'use client' directive placement - move to top
    if (content.includes("'use client'")) {
      content = content.replace(/'use client';/g, '');
      content = "'use client';\n\n" + content;
    }
    
    // Fix ErrorBoundary import paths
    content = content.replace(/import ErrorBoundary from '@\/components\/ErrorBoundary';/g, "import ErrorBoundary from '@/components/ErrorBoundary';");
    content = content.replace(/import ErrorBoundary from '\.\.\/components\/ErrorBoundary';/g, "import ErrorBoundary from '@/components/ErrorBoundary';");
    
    // Fix component references
    content = content.replace(/<PageComponent \{\.\.\.props\} \/>/g, '<PageComponent {...props} />');
    content = content.replace(/function Page\(\)/g, 'function PageComponent()');
    content = content.replace(/const pageComponent =/g, 'const PageComponent =');
    content = content.replace(/pageComponent/g, 'PageComponent');
    
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
  console.log('Starting comprehensive fix...');
  
  const appDir = path.join(process.cwd(), 'app');
  const pageFiles = findPageFiles(appDir);
  
  console.log(`Found ${pageFiles.length} page files`);
  
  let fixedCount = 0;
  
  for (const filePath of pageFiles) {
    if (fixComprehensive(filePath)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run build to verify
  try {
    console.log('Running build...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('Build passed!');
  } catch (error) {
    console.error('Build failed:', error.message);
  }
}

main();