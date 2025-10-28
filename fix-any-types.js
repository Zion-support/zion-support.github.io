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

// Fix any types in a file
function fixAnyTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace props: any with props: Record<string, unknown>
    const originalContent = content;
    content = content.replace(/props:\s*any/g, 'props: Record<string, unknown>');
    
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
  console.log('Starting to fix any types in page files...');
  
  const appDir = path.join(process.cwd(), 'app');
  const pageFiles = findPageFiles(appDir);
  
  console.log(`Found ${pageFiles.length} page files`);
  
  let fixedCount = 0;
  
  for (const filePath of pageFiles) {
    if (fixAnyTypes(filePath)) {
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