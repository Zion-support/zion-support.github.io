#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const files = execSync('find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules', { encoding: 'utf8' })
  .split('\n')
  .filter(file => file.trim() && file.includes('/app/'));

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Skip if file has merge conflicts
