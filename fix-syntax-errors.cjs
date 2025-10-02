#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix import statements with extra semicolons
  content = content.replace(/import\s+([^;]+);";/g, 'import $1;');
  content = content.replace(/import\s+([^;]+);"/g, 'import $1;');
  
  // Fix function declarations with extra commas
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*,\s*,\s*,/g, 'const $1: React.FC = () => {');
  content = content.replace(/const\s+(\w+):\s*\(\)\s*=>\s*\{\s*,\s*,\s*,/g, 'const $1: () => {');
  
  // Fix JSX attributes with extra semicolons and commas
  content = content.replace(/className:\s*"([^"]+)";\s*,\s*,\s*/g, 'className="$1"');
  content = content.replace(/name:\s*"([^"]+)";\s*,\s*,\s*/g, 'name="$1"');
  content = content.replace(/content:\s*"([^"]+)";\s*,\s*,\s*/g, 'content="$1"');
  
  // Fix JSX closing tags with extra semicolons
  content = content.replace(/<\/\w+>";\s*,\s*,\s*/g, '</$1>');
  content = content.replace(/<\/\w+>";\s*,\s*/g, '</$1>');
  content = content.replace(/<\/\w+>";/g, '</$1>');
  
  // Fix JSX opening tags with extra semicolons
  content = content.replace(/<(\w+)\s+([^>]+)>";\s*,\s*,\s*/g, '<$1 $2>');
  content = content.replace(/<(\w+)\s+([^>]+)>";\s*,\s*/g, '<$1 $2>');
  content = content.replace(/<(\w+)\s+([^>]+)>";/g, '<$1 $2>');
  
  // Fix Helmet tags
  content = content.replace(/<Helmet\s*>/g, '<Helmet>');
  content = content.replace(/<title\s*>/g, '<title>');
  
  // Fix duplicate imports
  const lines = content.split('\n');
  const seenImports = new Set();
  const filteredLines = [];
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      if (!seenImports.has(line.trim())) {
        seenImports.add(line.trim());
        filteredLines.push(line);
      }
    } else {
      filteredLines.push(line);
    }
  }
  
  return filteredLines.join('\n');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript/TSX files
function findTsFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = findTsFiles(srcDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${files.length} total files.`);