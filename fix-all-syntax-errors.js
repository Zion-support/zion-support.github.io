#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with syntax errors
const result = execSync('find app -name "*.tsx" -o -name "*.ts" | head -50', { encoding: 'utf8' });
const files = result.trim().split('\n').filter(f => f && f.length > 0);

console.log(`Checking ${files.length} files for syntax errors`);

const corruptedFiles = [];

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for common syntax issues
    const hasUnterminatedString = content.includes('"') && (content.split('"').length - 1) % 2 !== 0;
    const hasUnterminatedJSX = content.includes('<') && !content.includes('>');
    const hasUnclosedBraces = (content.split('{').length - 1) !== (content.split('}').length - 1);
    const hasUnclosedParens = (content.split('(').length - 1) !== (content.split(')').length - 1);
    const hasUnclosedBrackets = (content.split('[').length - 1) !== (content.split(']').length - 1);
    const hasUnclosedJSX = (content.split('<').length - 1) !== (content.split('>').length - 1);
    const hasIncompleteFunction = content.includes('function') && !content.includes('}');
    const hasIncompleteComponent = content.includes('const') && content.includes('=') && !content.includes(';');
    const hasIncompleteReturn = content.includes('return') && !content.includes(';') && !content.includes('}');
    
    if (hasUnterminatedString || hasUnterminatedJSX || hasUnclosedBraces || 
        hasUnclosedParens || hasUnclosedBrackets || hasUnclosedJSX || 
        hasIncompleteFunction || hasIncompleteComponent || hasIncompleteReturn) {
      corruptedFiles.push(file);
      console.log(`Corrupted: ${file}`);
    }
  } catch (error) {
    console.error(`Error checking ${file}:`, error.message);
  }
});

// Delete corrupted files
corruptedFiles.forEach(file => {
  try {
    fs.unlinkSync(file);
    console.log(`Deleted corrupted file: ${file}`);
  } catch (error) {
    console.error(`Error deleting ${file}:`, error.message);
  }
});

console.log(`Deleted ${corruptedFiles.length} corrupted files`);