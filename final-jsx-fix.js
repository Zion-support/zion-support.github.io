#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting final JSX fix...');

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

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  // Fix broken JSX structure - ensure proper opening and closing tags
  content = content.replace(/return\s*\(\s*<div className="([^"]+)"><\/div>\s*<Navigation \/>/g, 
    'return (\n    <div className="$1">\n      <Navigation />');
  
  content = content.replace(/<div className="([^"]+)"><\/div>\s*<Head>/g, 
    '<div className="$1">\n      <Head>');
  
  content = content.replace(/<Head>\s*<title>([^<]+)<\/title>\s*<meta name="description" content="([^"]+)" \/>\s*<\/Head>\s*<div className="([^"]+)">/g, 
    '<Head>\n        <title>$1</title>\n        <meta name="description" content="$2" />\n      </Head>\n      <div className="$3">');
  
  // Fix missing opening tags
  content = content.replace(/<div className="([^"]+)">\s*<div className="([^"]+)">/g, 
    '<div className="$1">\n        <div className="$2">');
  
  // Fix missing closing tags
  content = content.replace(/<button className="([^"]+)">\s*([^<]+)\s*<\/button><\/div>/g, 
    '<button className="$1">\n              $2\n            </button>\n          </div>');
  
  // Fix section structure
  content = content.replace(/<section className="([^"]+)"><\/section>\s*<div className="([^"]+)"><\/div>,/g, 
    '<section className="$1">\n        <div className="$2">');
  
  // Fix CSS class syntax
  content = content.replace(/md:\s*text-6xl/g, 'md:text-6xl');
  content = content.replace(/sm:\s*px-6/g, 'sm:px-6');
  content = content.replace(/hover:\s*bg-white/g, 'hover:bg-white');
  
  // Fix object syntax
  content = content.replace(/,;/g, ',');
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/{\s*,/g, '{');
  
  // Fix array syntax
  content = content.replace(/{\s*;/g, '{');
  content = content.replace(/,\s*;/g, ',');
  content = content.replace(/;\s*}/g, '}');
  
  // Fix function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{\s*$/gm, 'const $1 = () => {\n');
  
  // Fix return statements
  content = content.replace(/return\s*\(\s*$/gm, 'return (\n    ');
  
  // Fix JSX fragments
  content = content.replace(/<>\s*<div([^>]*)>\s*<\/div>\s*<\/>/g, '<div$1></div>');
  
  // Fix missing semicolons
  content = content.replace(/([^;}])\n(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*[=:])/g, '$1;\n$2');
  
  // Fix destructuring
  content = content.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*([^;]+);/g, 'const { $1 } = $2;');
  
  // Fix empty interfaces
  content = content.replace(/interface\s+(\w+)\s*{\s*}\s*/g, 'interface $1 {\n  [key: string]: any;\n}');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixJSXStructure(content);
    
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