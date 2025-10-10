#!/usr/bin/env node

import fs from 'fs';

function fixMergeConflicts() {
  try {
    let content = fs.readFileSync('app/page.tsx', 'utf8');
    let modified = false;
    
    // Remove all merge conflict markers and keep the HEAD version
    const conflictPattern = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    const newContent = content.replace(conflictPattern, '$1');
    
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    // Remove any remaining conflict markers
    const remainingMarkers = /^(<<<<<<<|=======|>>>>>>>).*$/gm;
    const newContent2 = content.replace(remainingMarkers, '');
    
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
    }
    
    // Clean up any extra empty lines
    const cleanedContent = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (cleanedContent !== content) {
      content = cleanedContent;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync('app/page.tsx', content, 'utf8');
      console.log('Fixed merge conflicts in page.tsx');
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error fixing merge conflicts:', error.message);
    return false;
  }
}

fixMergeConflicts();