#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix duplicate metadata exports
function fixMetadataDuplicates(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has duplicate metadata exports
    const metadataMatches = content.match(/export const metadata/g);
    if (!metadataMatches || metadataMatches.length <= 1) {
      return false; // No duplicates found
    }
    
    console.log(`Fixing ${filePath}...`);
    
    // Remove all metadata exports first
    content = content.replace(/export const metadata = \{[^}]*\};/g, '');
    
    // Remove extra semicolons and clean up
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/;\s*'use client';/g, "'use client';");
    
    // Add proper imports at the top
    const lines = content.split('\n');
    let newLines = [];
    let hasUseClient = false;
    let hasImports = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line === "'use client';") {
        if (!hasUseClient) {
          newLines.push("'use client';");
          hasUseClient = true;
        }
        continue;
      }
      
      if (line.startsWith('import ')) {
        if (!hasImports) {
          newLines.push('');
          hasImports = true;
        }
        newLines.push(line);
        continue;
      }
      
      if (line.startsWith('export const metadata')) {
        continue; // Skip duplicate metadata
      }
      
      newLines.push(lines[i]);
    }
    
    // Add a single metadata export after imports
    if (hasImports) {
      const insertIndex = newLines.findIndex(line => line.trim().startsWith('import '));
      if (insertIndex !== -1) {
        const lastImportIndex = newLines.findLastIndex(line => line.trim().startsWith('import '));
        newLines.splice(lastImportIndex + 1, 0, '');
        newLines.splice(lastImportIndex + 2, 0, 'export const metadata = {');
        newLines.splice(lastImportIndex + 3, 0, "  title: 'Page | Zion Tech Group',");
        newLines.splice(lastImportIndex + 4, 0, "  description: 'Professional services by Zion Tech Group',");
        newLines.splice(lastImportIndex + 5, 0, "  keywords: 'technology, services',");
        newLines.splice(lastImportIndex + 6, 0, "  openGraph: {");
        newLines.splice(lastImportIndex + 7, 0, "    title: 'Page | Zion Tech Group',");
        newLines.splice(lastImportIndex + 8, 0, "    description: 'Professional services by Zion Tech Group',");
        newLines.splice(lastImportIndex + 9, 0, "    type: 'website',");
        newLines.splice(lastImportIndex + 10, 0, "  },");
        newLines.splice(lastImportIndex + 11, 0, '};');
        newLines.splice(lastImportIndex + 12, 0, '');
      }
    }
    
    // Fix export default function syntax errors
    content = newLines.join('\n');
    content = content.replace(/export default function Wrapped\s*\n\s*\(/g, 'export default function Wrapped(');
    content = content.replace(/<\s*\n\s*\{\.\.\.props\}/g, '<Page {...props}');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript files with metadata exports
function findFilesWithMetadata(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('export const metadata')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFilesWithMetadata(appDir);

console.log(`Found ${files.length} files with metadata exports`);

let fixedCount = 0;
for (const file of files) {
  if (fixMetadataDuplicates(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);