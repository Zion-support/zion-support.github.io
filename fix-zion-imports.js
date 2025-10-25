#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting zion imports fix...');

// Function to find all zion-ai files
function findZionFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && item.startsWith('zion-')) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        files.push(pageFile);
      }
    }
  }
  
  return files;
}

// Function to fix import paths
function fixImportPaths(content) {
  // Fix zion-ai pages - they should use ../components/ not ../../components/
  content = content.replace(/import Navigation from '\.\.\/\.\.\/components\/Navigation';/g, "import Navigation from '../components/Navigation';");
  content = content.replace(/import Footer from '\.\.\/\.\.\/components\/Footer';/g, "import Footer from '../components/Footer';");
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixImportPaths(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all zion files to process
const appDir = path.join(__dirname, 'app');
const files = findZionFiles(appDir);

console.log(`📁 Found ${files.length} zion files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed ${fixedCount} files`);

// Try to build after fixes
console.log('🔨 Attempting build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('⚠️ Build still has issues, continuing with fixes...');
}