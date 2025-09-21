#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixLinksInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match Link components with className
    const linkPattern = /<Link\s+([^>]*?)className=(["'])([^"']*?)\2([^>]*?)>([^<]*?)<\/Link>/g;
    
    const newContent = content.replace(linkPattern, (match, beforeClass, quote, className, afterClass, children) => {
      modified = true;
      return `<Link${beforeClass}${afterClass}>
              <span className=${quote}${className}${quote}>
                ${children.trim()}
              </span>
            </Link>`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed links in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithLinks(dir) {
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
        if (content.includes('<Link') && content.includes('className=')) {
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
console.log('Scanning for files with Link components...');

const linkFiles = findFilesWithLinks(workspaceDir);
console.log(`Found ${linkFiles.length} files with Link components`);

let fixedCount = 0;
for (const file of linkFiles) {
  if (fixLinksInFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed Link components in ${fixedCount} files`);
console.log('Link component fixes complete!');