#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all small TSX files that might be corrupted
const result = execSync('find app -name "*.tsx" -size -200c', { encoding: 'utf8' });
const files = result.trim().split('\n').filter(f => f && f.length > 0);

console.log(`Found ${files.length} potentially corrupted files`);

const corruptedFiles = [];

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file is corrupted (has incomplete JSX, missing imports, etc.)
    if (content.length < 200 && (
      content.includes('<Helmet>') && !content.includes('</Helmet>') ||
      content.includes('return (') && !content.includes(');') ||
      content.includes('export default') && !content.includes('function') ||
      content.trim().length < 50
    )) {
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