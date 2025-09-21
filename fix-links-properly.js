#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixLinksInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix broken Link components where href is concatenated with Link
    const brokenLinkPattern = /<Linkhref=/g;
    if (brokenLinkPattern.test(content)) {
      content = content.replace(brokenLinkPattern, '<Link href=');
      modified = true;
    }
    
    // Fix any other broken Link patterns
    const otherBrokenPattern = /<Link\s*>/g;
    if (otherBrokenPattern.test(content)) {
      content = content.replace(otherBrokenPattern, '<Link>');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed broken links in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithBrokenLinks(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<Linkhref=') || content.includes('<Link >')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Scanning for files with broken Link components...');

const brokenLinkFiles = findFilesWithBrokenLinks(workspaceDir);
console.log(`Found ${brokenLinkFiles.length} files with broken Link components`);

let fixedCount = 0;
for (const file of brokenLinkFiles) {
  if (fixLinksInFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed broken Link components in ${fixedCount} files`);
console.log('Broken Link component fixes complete!');