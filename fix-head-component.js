#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all page.tsx files
const files = await glob('app/**/page.tsx', { ignore: ['node_modules/**', '.next/**'] });

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Remove Head import and usage
    if (content.includes("import Head from 'next/head'")) {
      content = content.replace(/import Head from 'next\/head'\n?/g, '');
      modified = true;
    }
    
    // Remove Head component usage
    if (content.includes('<Head>')) {
      content = content.replace(/<Head>[\s\S]*?<\/Head>/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed Head component in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Head component fixes completed!');