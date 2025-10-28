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

// Fix client directive and metadata conflicts
function fixClientMetadata(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Check if file has 'use client' directive
    const hasUseClient = content.includes("'use client'");
    
    if (hasUseClient) {
      // Remove metadata export if 'use client' is present
      content = content.replace(/export const metadata = \{[\s\S]*?\};/g, '');
      
      // Clean up extra semicolons and empty lines
      content = content.replace(/;\s*;/g, ';');
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    }
    
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
  console.log('Starting to fix client directive and metadata conflicts...');
  
  const appDir = path.join(process.cwd(), 'app');
  const pageFiles = findPageFiles(appDir);
  
  console.log(`Found ${pageFiles.length} page files`);
  
  let fixedCount = 0;
  
  for (const filePath of pageFiles) {
    if (fixClientMetadata(filePath)) {
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