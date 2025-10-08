#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed object declarations
    if (content.includes('const metadata = { {')) {
      content = content.replace(/const metadata = \{\s*\{/g, 'const metadata = {');
      modified = true;
    }
    
    // Fix other common syntax issues
    if (content.includes('export const metadata: Metadata = {')) {
      content = content.replace(/export const metadata: Metadata = \{/g, 'const metadata = {');
      modified = true;
    }
    
    // Fix malformed JSX fragments
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/<>/g, '<div>');
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }
    
    // Fix missing closing braces in metadata objects
    const metadataMatch = content.match(/const metadata = \{[\s\S]*?\n\};/);
    if (metadataMatch) {
      const metadataContent = metadataMatch[0];
      if (!metadataContent.includes('};')) {
        content = content.replace(metadataContent, metadataContent + '};');
        modified = true;
      }
    }
    
    if (modified) {
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

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);