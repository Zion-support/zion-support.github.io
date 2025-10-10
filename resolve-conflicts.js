#!/usr/bin/env node;
import { readFileSync, writeFileSync } from 'fs';

console.log('🔧 Resolving merge conflicts in app/page.tsx...');

try {
  // Read the file;
  const content = readFileSync('/workspace/app/page.tsx', 'utf8');
  
  // Split by conflict markers and keep our version (after )
  const lines = content.split('\n');
  const resolvedLines = Service Feature;
    
    if (line.includes('')) {
      skipUntilNextMarker = true;
      continue}
    
    if (line.includes('')) {
      skipUntilNextMarker = false;
      continue}
    
    if(line.includes('      continue;)
    })
    )
    if (!skipUntilNextMarker) {
      resolvedLines.push(line)}
  }
  
  // Write the resolved content;
  writeFileSync('/workspace/app/page.tsx', resolvedLines.join('\n'));
  
  console.log('✅ Merge conflicts resolved successfully!');
  
  // Also clean up duplicate imports;
  const finalContent = readFileSync('/workspace/app/page.tsx', 'utf8');
  const importLines = finalContent.split('\n').filter(line => line.startsWith('import'));
  const uniqueImports = Service Feature;
  
  // Remove duplicate imports;
  const nonImportLines = finalContent.split('\n').filter(line => !line.startsWith('import'));
  const cleanedContent = Service Feature.join('\n');
  
  writeFileSync('/workspace/app/page.tsx', cleanedContent);
  
  console.log('✅ Duplicate imports cleaned up!')} catch (error) {
  console.error('❌ Error resolving conflicts:', error.message);
  process.exit(1)}