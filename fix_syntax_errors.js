const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix corrupted object syntax - missing opening brace
  fixed = fixed.replace(/export const metadata: Metadata = {}\n\s*title:/g, 'export const metadata: Metadata = {\n  title:');
  fixed = fixed.replace(/const features = \[\]\n\s*\{\}\n\s*,/g, 'const features = [\n    {');
  fixed = fixed.replace(/import \{\}\n\s*ArrowRight,/g, 'import {\n  ArrowRight,');
  
  // Fix missing opening braces in objects
  fixed = fixed.replace(/= \{\}\n\s*title:/g, '= {\n  title:');
  fixed = fixed.replace(/= \{\}\n\s*icon:/g, '= {\n  icon:');
  fixed = fixed.replace(/= \[\]\n\s*\{\}\n\s*icon:/g, '= [\n    {\n      icon:');
  
  // Fix missing opening braces in arrays
  fixed = fixed.replace(/= \[\]\n\s*\{\}/g, '= [\n    {');
  
  // Fix missing opening braces in imports
  fixed = fixed.replace(/import \{\}\n\s*[A-Z]/g, (match) => {
    return match.replace('import {}', 'import {');
  });
  
  // Fix missing semicolons
  fixed = fixed.replace(/export const metadata: Metadata = \{\n\s*title:/g, 'export const metadata: Metadata = {\n  title:');
  
  // Fix corrupted function declarations
  fixed = fixed.replace(/const \w+: React\.FC = \(\) => \{\}\n\s*const/g, 'const $1: React.FC = () => {\n  const');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed syntax: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

// Process the app directory
console.log('Fixing syntax errors...');
processDirectory('/workspace/app');
processDirectory('/workspace/src');
console.log('Syntax error fixing complete!');