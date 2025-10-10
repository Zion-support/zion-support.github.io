#!/usr/bin/env node

const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); // Get list of files with merge conflicts
const filesWithConflicts = execSync('grep -l "^<<<<<<<\\|^=======\\|^>>>>>>>" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git')); console.log(`Found ${filesWithConflicts.length} files with merge conflicts`); let fixedFiles = 0; let errorFiles = 0; for (const filePath of filesWithConflicts) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`); continue; }

    let content = fs.readFileSync(filePath, 'utf8'); const originalContent = content; // Remove merge conflict markers and keep the latest version (after =======)
    content = content.replace(/^<<<<<<<.*?\n=======\n(.*?)\n>>>>>>>.*$/gms, '$1'); // Also handle cases where there might be multiple conflicts in one file
    content = content.replace(/^<<<<<<<.*?\n(.*?)\n=======\n(.*?)\n>>>>>>>.*$/gms, '$2'); // Clean up any remaining conflict markers
    content = content.replace(/^<<<<<<<.*$/gm, ''); content = content.replace(/^=======.*$/gm, ''); content = content.replace(/^>>>>>>>.*$/gm, ''); // Clean up extra newlines
    content = content.replace(/\n{3,}/g, '\n\n'); if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8'); console.log(`Fixed: ${filePath}`); fixedFiles++; } else {
      console.log(`No changes needed: ${filePath}`); }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message); errorFiles++; }
}

console.log(`\nSummary:`); console.log(`- Files processed: ${filesWithConflicts.length}`); console.log(`- Files fixed: ${fixedFiles}`); console.log(`- Files with errors: ${errorFiles}`);