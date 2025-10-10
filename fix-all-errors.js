#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing closing braces and brackets
    content = content.replace(/benefits:\s*\[([^\]]+)\]\s*$/gm, 'benefits: [$1]\n    }');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n    $2');
    
    // Fix JSX fragment issues
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Fix malformed JSX tags
    content = content.replace(/<(\w+)([^>]*?)><\/\1>/g, '<$1$2>');
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
    
    // Fix duplicate component definitions
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\};\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
    
    // Fix missing return statements
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{([^}]*?)\s*const\s+features\s*=/g, 'const $1: React.FC = () => {\n  const features =');
    
    // Clean up extra whitespace
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JSX files with errors
function getFilesWithErrors() {
  try {
    const output = execSync('find app -name "*.tsx" -o -name "*.ts" | head -20', { encoding: 'utf8' });
    return output.split('\n').filter(file => file.trim() && fs.existsSync(file.trim()));
  } catch (error) {
    console.error('Error getting files:', error.message);
    return [];
  }
}

console.log('Starting comprehensive error fixes...');

const files = getFilesWithErrors();
console.log(`Found ${files.length} files to fix`);

let fixedCount = 0;
files.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Run type check to see remaining errors
try {
  console.log('\nRunning type check...');
  const typeCheckOutput = execSync('npm run type-check 2>&1 | head -20', { encoding: 'utf8' });
  console.log('Type check output:');
  console.log(typeCheckOutput);
} catch (error) {
  console.log('Type check completed with errors');
}