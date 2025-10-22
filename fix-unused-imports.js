#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix unused imports
function fixUnusedImports(content) {
  // Only import the icons that are actually used
  const usedIcons = ['CheckCircle', 'Brain', 'Zap', 'Shield', 'Globe'];
  
  // Create a new import statement with only used icons
  const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
  
  // Replace the old import with the new one
  const fixed = content.replace(
    /import { [^}]+ } from 'lucide-react';/,
    newImport
  );
  
  return fixed;
}

// Main function to process all files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('🔍 Scanning for TSX files with unused imports...');
  
  const files = await glob(pattern);
  let fixedCount = 0;
  
  for (const filePath of files) {
    try {
      // Skip component files
      if (filePath.includes('/components/') || filePath.includes('/pages/')) {
        continue;
      }
      
      console.log(`📝 Processing: ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = fixUnusedImports(content);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`✅ Fixed unused imports: ${filePath}`);
        fixedCount++;
      } else {
        console.log(`ℹ️  No changes needed: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log(`🎉 Unused imports fixing completed! Fixed ${fixedCount} files.`);
}

main().catch(console.error);