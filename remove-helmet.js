#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
// import { execSync } from 'child_process';

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

// Function to remove Helmet usage from a file
function removeHelmetFromFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove Helmet imports
    const helmetImportRegex = /import\s*{\s*Helmet[^}]*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g;
    const helmetProviderImportRegex = /import\s*{\s*HelmetProvider[^}]*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g;
    const helmetDefaultImportRegex = /import\s+Helmet\s+from\s*['"]react-helmet-async['"];?\s*\n?/g;
    
    if (helmetImportRegex.test(content) || helmetProviderImportRegex.test(content) || helmetDefaultImportRegex.test(content)) {
      content = content.replace(helmetImportRegex, '');
      content = content.replace(helmetProviderImportRegex, '');
      content = content.replace(helmetDefaultImportRegex, '');
      modified = true;
    }
    
    // Remove Helmet JSX usage
    const helmetJsxRegex = /<Helmet[^>]*>[\s\S]*?<\/Helmet>/g;
    if (helmetJsxRegex.test(content)) {
      content = content.replace(helmetJsxRegex, '      {/* SEO handled by layout.tsx */}');
      modified = true;
    }
    
    // Remove HelmetProvider usage
    const helmetProviderRegex = /<HelmetProvider[^>]*>([\s\S]*?)<\/HelmetProvider>/g;
    if (helmetProviderRegex.test(content)) {
      content = content.replace(helmetProviderRegex, '$1');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Finding all .tsx files in app directory...');
const tsxFiles = findTsxFiles('./app');
console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (removeHelmetFromFile(file)) {
    fixedCount++;
  }
}

console.log(`\n🎉 Fixed ${fixedCount} files`);
console.log('✨ Helmet usage removal complete!');