#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    
    // Clean up any remaining conflict markers
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
    // Check if file has merge conflict markers
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Split by conflict markers and keep HEAD version
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let keepCurrent = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith('')) {
          inConflict = true;
          keepCurrent = true;
          continue;
        } else if (line.startsWith('')) {
          keepCurrent = false;
          continue;
        } else if (line.startsWith('>>>>>>>')) {
          inConflict = false;
          keepCurrent = false;
          continue;
        }
        
        if (!inConflict || keepCurrent) {
          resolvedLines.push(line);
        }
      }
      
      const resolvedContent = resolvedLines.join('\n');
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
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
        // Skip node_modules and other build directories
        if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
    totalConflicts++;
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files processed: ${files.length}`);
console.log(`Files with conflicts fixed: ${fixedCount}`);

// Also check for any remaining conflict markers
console.log('\nChecking for remaining conflict markers...');
try {
  const result = execSync('grep -r "\\|\\|>>>>>>>" src/ || true', { encoding: 'utf8' });
  if (result.trim()) {
    console.log('Warning: Some conflict markers may still remain:');
    console.log(result);
  } else {
    console.log('No remaining conflict markers found.');
  }
} catch (error) {
  console.log('No remaining conflict markers found.');
}

console.log('\nDone!');
