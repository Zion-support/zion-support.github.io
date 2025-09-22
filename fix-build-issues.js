#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Find all blog page files
const blogDir = '/workspace/app/blog';
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
}

findTsxFiles(blogDir);

console.log(`Found ${files.length} blog page files to check`);

let fixedCount = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in ${filePath}`);
      // Keep only the content before the first conflict marker
      const lines = content.split('\n');
      const cleanLines = [];
      let inConflict = false;
      
      for (const line of lines) {
        if (line.includes('<<<<<<<') || line.includes('=======') || line.includes('>>>>>>>')) {
          inConflict = true;
          continue;
        }
        if (!inConflict) {
          cleanLines.push(line);
        }
      }
      
      content = cleanLines.join('\n');
      modified = true;
    }

    // Remove duplicate imports at the end of files
    const lines = content.split('\n');
    const cleanLines = [];
    let foundDuplicateImports = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is a duplicate import section at the end
      if (line.includes('import') && i > 20) { // Imports should be at the top
        // Look ahead to see if this is a duplicate section
        let isDuplicate = false;
        for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {
          if (lines[j].includes('export default') || lines[j].includes('export const metadata')) {
            isDuplicate = true;
            break;
          }
        }
        
        if (isDuplicate) {
          foundDuplicateImports = true;
          // Skip this duplicate section
          while (i < lines.length && !lines[i].includes('export default') && !lines[i].includes('export const metadata')) {
            i++;
          }
          i--; // Adjust for the loop increment
          continue;
        }
      }
      
      cleanLines.push(line);
    }
    
    if (foundDuplicateImports) {
      content = cleanLines.join('\n');
      modified = true;
    }

    // Remove duplicate export default statements
    const exportDefaultMatches = content.match(/export default/g);
    if (exportDefaultMatches && exportDefaultMatches.length > 1) {
      console.log(`Fixing duplicate export default in ${filePath}`);
      // Keep only the first export default
      const lines = content.split('\n');
      const cleanLines = [];
      let foundFirstExport = false;
      
      for (const line of lines) {
        if (line.includes('export default') && !foundFirstExport) {
          cleanLines.push(line);
          foundFirstExport = true;
        } else if (line.includes('export default') && foundFirstExport) {
          // Skip duplicate export default
          continue;
        } else {
          cleanLines.push(line);
        }
      }
      
      content = cleanLines.join('\n');
      modified = true;
    }

    // Remove duplicate metadata exports
    const metadataMatches = content.match(/export const metadata/g);
    if (metadataMatches && metadataMatches.length > 1) {
      console.log(`Fixing duplicate metadata in ${filePath}`);
      // Keep only the first metadata export
      const lines = content.split('\n');
      const cleanLines = [];
      let foundFirstMetadata = false;
      
      for (const line of lines) {
        if (line.includes('export const metadata') && !foundFirstMetadata) {
          cleanLines.push(line);
          foundFirstMetadata = true;
        } else if (line.includes('export const metadata') && foundFirstMetadata) {
          // Skip duplicate metadata
          continue;
        } else {
          cleanLines.push(line);
        }
      }
      
      content = cleanLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      fixedCount++;
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);