#!/usr/bin/env node;
import { readFileSync, writeFileSync } from 'fs';
<<<<<<< HEAD

console.log('🔧 Resolving merge conflicts in app/page.tsx...');

=======
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
try {
    // Read the file;
  const content = readFileSync('/workspace/app/page.tsx', 'utf8');
<<<<<<< HEAD
  
  // Split by conflict markers and keep our version (after )
  const lines = content.split('\n');
  const resolvedLines = [];
  let skipUntilNextMarker = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('')) {
      skipUntilNextMarker = true;
      continue
  }
    
    if (line.includes('')) {
    skipUntilNextMarker = false;
      continue
  }
    
=======
  // Split by conflict markers and keep our version (after );
const lines = content.split('\n');
  const resolvedLines = [];
  let skipUntilNextMarker = false;
  for (let i = 0; i < lines.length; i++) {;
const line = lines[i];
    if (line.includes('')) {
      skipUntilNextMarker = true;
      continue};
    if (line.includes('')) {
      skipUntilNextMarker = false;
      continue};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if(line.includes('      continue;)
    })
    )
    if (!skipUntilNextMarker) {
<<<<<<< HEAD
    resolvedLines.push(line)
  }
  }
  
  // Write the resolved content;
  writeFileSync('/workspace/app/page.tsx', resolvedLines.join('\n'));
  
  console.log('✅ Merge conflicts resolved successfully!');
  
  // Also clean up duplicate imports;
=======
      resolvedLines.push(line)};
  };
  // Write the resolved content;
  writeFileSync('/workspace/app/page.tsx', resolvedLines.join('\n'));
  // console.log removed for production
// Also clean up duplicate imports;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const finalContent = readFileSync('/workspace/app/page.tsx', 'utf8');
  const importLines = finalContent.split('\n').filter(line => line.startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  // Remove duplicate imports;
  const nonImportLines = finalContent.split('\n').filter(line => !line.startsWith('import'));
  const cleanedContent = [...uniqueImports, ...nonImportLines].join('\n');
  writeFileSync('/workspace/app/page.tsx', cleanedContent);
<<<<<<< HEAD
  
  console.log('✅ Duplicate imports cleaned up!');
  
} catch (error) {
    console.error('❌ Error resolving conflicts:', error.message);
  process.exit(1)
  }
=======
  // console.log removed for production
} catch (error) {
  // console.error removed for production
process.exit(1)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
