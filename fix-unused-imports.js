import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Run ESLint with --fix to automatically remove unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
      console.log(`Fixed unused imports in: ${filePath}`);
    } catch (error) {
      // If ESLint fails, try to manually remove obvious unused imports
      console.log(`ESLint couldn't auto-fix: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
const appDir = path.join(__dirname, 'app');
const files = getAllFiles(appDir);

console.log(`Found ${files.length} files to process`);

files.forEach(fixUnusedImports);

console.log('Unused imports fix completed');