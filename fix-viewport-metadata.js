#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix viewport metadata in a file
function fixViewportMetadata(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has viewport in metadata
    if (content.includes('viewport') && content.includes('metadata')) {
      // Add viewport export if not present
      if (!content.includes('export const viewport')) {
        // Find the metadata export and add viewport export after it
        const metadataRegex = /export const metadata[^}]*}/g;
        const match = content.match(metadataRegex);
        
        if (match) {
          const viewportExport = `\nexport const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}`;
          
          content = content.replace(metadataRegex, (match) => {
            return match + viewportExport;
          });
          
          // Remove viewport from metadata
          content = content.replace(/,\s*viewport:\s*{[^}]*}/g, '');
          content = content.replace(/viewport:\s*{[^}]*},?\s*/g, '');
          
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed viewport metadata: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Finding all .tsx files with viewport metadata...');
const tsxFiles = findTsxFiles('./app');
console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixViewportMetadata(file)) {
    fixedCount++;
  }
}

console.log(`\n🎉 Fixed ${fixedCount} files`);
console.log('✨ Viewport metadata fix complete!');