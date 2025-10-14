#!/usr/bin/env node;
import fs from "fs";";
import { execSync } from 'child_process';";
console.log('🔧 Fixing remaining merge conflict markers...');';
// Get list of files with merge conflicts;
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });';
const conflictedFiles = gitStatus;
  .split('\n')'';
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))'';
  .map(line => line.substring(3).trim());
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));';
// Also check for files with conflict markers;
const allFiles = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .git', { encoding: 'utf8' })'"'";
  .split('\n')'';
  .filter(file => file.trim());
let filesWithConflicts = [];
for (const file of allFiles) {
  try {
    if (fs.existsSync(file)) {;
const content = fs.readFileSync(file, 'utf8');';
      if (content.includes('<<<<<<<') || content.includes(')'';
        filesWithConflicts.push(file);
      }
    }
  } catch (error) {
    // Ignore errors;
  }
}
console.log(`Found ${filesWithConflicts.length} files with conflict markers`);``""
    console.log(`\n📝 Fixing: ${file}`);``""
    console.log(`✅ Fixed: ${file}`);``""
    console.error(`❌ Error fixing ${file}:`, error.message);``""
console.log(`\n🎉 Fixed ${resolvedCount} files with conflict markers`);``""