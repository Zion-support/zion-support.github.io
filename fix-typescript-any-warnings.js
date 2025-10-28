#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixTypeScriptWarnings() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  let fixedCount = 0;
  let totalWarnings = 0;

  console.log(`🔍 Found ${files.length} TypeScript files to check...`);

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix props: any -> props: Record<string, any>
      if (content.includes('props: any')) {
        const newContent = content.replace(/props: any/g, 'props: Record<string, any>');
        if (newContent !== content) {
          fs.writeFileSync(file, newContent, 'utf8');
          modified = true;
          fixedCount++;
          console.log(`✅ Fixed props: any in ${file}`);
        }
      }
      
      // Count remaining any types
      const anyMatches = content.match(/\bany\b/g);
      if (anyMatches) {
        totalWarnings += anyMatches.length;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`✅ Fixed ${fixedCount} files with props: any`);
  console.log(`⚠️  Total remaining 'any' types: ${totalWarnings}`);

  if (fixedCount > 0) {
    console.log(`\n🎉 TypeScript warnings fixed! Run 'npm run lint' to verify.`);
  } else {
    console.log(`\n✨ No props: any issues found.`);
  }
}

fixTypeScriptWarnings().catch(console.error);