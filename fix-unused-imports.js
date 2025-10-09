import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/React files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Run ESLint with --fix to remove unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
      // Re-read the file after ESLint fix
      content = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
      // ESLint might fail, but that's okay, we'll continue with manual fixes
    }
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting to fix unused imports...');

const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');

const allFiles = [
  ...getAllFiles(srcDir),
  ...getAllFiles(appDir)
];

console.log(`Found ${allFiles.length} files to process`);

allFiles.forEach(file => {
  removeUnusedImports(file);
});

console.log('Finished fixing unused imports');