<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    
    // Clean up any remaining conflict markers
=======
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          const content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  const newLines = [];
  let inConflict = false;
  let keepContent = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
      keepContent = true;
      continue;
    }
    
      inConflict = false;
      keepContent = false;
      continue;
    }
    
    if (!inConflict || keepContent) {
      newLines.push(line);
    }
  }
  
  if (fixed) {
    fs.writeFileSync(filePath, newLines.join('\n'));
    console.log(`✓ Fixed merge conflicts in: ${filePath}`);
  }
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts('/workspace');

console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
filesWithConflicts.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing merge conflicts...');
filesWithConflicts.forEach(fixMergeConflicts);

console.log('\n✅ Merge conflict fixing completed!');

// Also clean up any remaining syntax issues
console.log('\n🧹 Cleaning up additional syntax issues...');

// Fix common syntax issues
const additionalFiles = [
  '/workspace/api/error-report.js',
  '/workspace/api/newsletter/subscribe.js',
  '/workspace/api/onsite-request.js',
  '/workspace/api/quotes.js',
  '/workspace/api/shipping-rates.js',
  '/workspace/api/subscribe.js',
  '/workspace/api/wallet.js'
];

additionalFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax issues
    content = content.replace(/\}\s*$/, '');
    content = content.replace(/,\s*$/, '');
    
    // Ensure proper export structure
    if (!content.includes('export') && !content.includes('module.exports')) {
      content += '\n\nexport default handler;';
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ Fixed syntax in: ${filePath}`);
  }
});

console.log('\n🎉 All fixes completed!');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
