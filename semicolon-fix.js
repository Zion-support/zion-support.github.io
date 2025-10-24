#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting semicolon fix...');

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix semicolon issues
function fixSemicolons(content) {
  // Fix metadata object syntax - remove semicolons after properties
  content = content.replace(/export const metadata: Metadata = {;/g, 'export const metadata: Metadata = {');
  content = content.replace(/title: '([^']+)',;/g, "title: '$1',");
  content = content.replace(/description: '([^']+)',;/g, "description: '$1',");
  content = content.replace(/keywords: '([^']+)',;/g, "keywords: '$1',");
  content = content.replace(/openGraph: {;/g, 'openGraph: {');
  content = content.replace(/type: '([^']+)'}};/g, "type: '$1'\n  }\n}");
  
  // Fix object syntax
  content = content.replace(/,;/g, ',');
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/{\s*,/g, '{');
  
  // Fix array syntax
  content = content.replace(/{\s*;/g, '{');
  content = content.replace(/,\s*;/g, ',');
  content = content.replace(/;\s*}/g, '}');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSemicolons(content);
    
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

// Find all files to process
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`📁 Found ${files.length} files to process...`);

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