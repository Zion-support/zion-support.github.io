import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with CheckCircleIcon imports
const files = execSync('grep -l "CheckCircleIcon" app/**/*.tsx', { encoding: 'utf8' }).trim().split('\n');

files.forEach(file => {
  if (!file) return;
  
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove CheckCircleIcon from imports
    content = content.replace(/,\s*CheckCircleIcon\s*,?/g, ',');
    content = content.replace(/CheckCircleIcon\s*,?\s*/g, '');
    
    // Clean up any double commas or trailing commas
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/{\s*,/g, '{');
    
    // Clean up any empty import lines
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?\s*\n/g, '');
    
    fs.writeFileSync(file, content);
    console.log(`Fixed unused imports in ${file}`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Fixed all CheckCircleIcon unused imports');