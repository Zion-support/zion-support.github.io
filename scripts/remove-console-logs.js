<<<<<<< HEAD
import React from 'react';

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
=======
import fs from 'fs';
import { glob } from 'glob';
// #!/usr/bin/env node


// Function to remove console.log statements from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log, console.warn, console.error, console.info, console.debug
    const consoleRegex = /console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?\s*/g;
    const originalContent = content;
    content = content.replace(consoleRegex, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
      console.log(`Cleaned console statements from: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
}
