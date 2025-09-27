#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix corrupted imports and syntax
function fixCorruptedSyntax(content) {
  let fixed = content;
  
  // Fix corrupted imports - remove extra commas from import statements
  fixed = fixed.replace(/imp, o, r, t/g, 'import');
  fixed = fixed.replace(/f, r, o, m/g, 'from');
  fixed = fixed.replace(/Re, a, c, t/g, 'React');
  fixed = fixed.replace(/useEff, e, c, t/g, 'useEffect');
  fixed = fixed.replace(/useSt, a, t, e/g, 'useState');
  fixed = fixed.replace(/H, e, a, d/g, 'Head');
  fixed = fixed.replace(/L, i, n, k/g, 'Link');
  fixed = fixed.replace(/I, m, a, g, e/g, 'Image');
  fixed = fixed.replace(/dyna, m, i, c/g, 'dynamic');
  fixed = fixed.replace(/exp, o, r, t/g, 'export');
  fixed = fixed.replace(/defa, u, l, t/g, 'default');
  fixed = fixed.replace(/funct, i, o, n/g, 'function');
  fixed = fixed.replace(/ret, u, r, n/g, 'return');
  
  // Fix corrupted type imports
  fixed = fixed.replace(/t, y, p, e/g, 'type');
  fixed = fixed.replace(/AppPr, o, p, s/g, 'AppProps');
  fixed = fixed.replace(/HelmetProvi, d, e, r/g, 'HelmetProvider');
  fixed = fixed.replace(/NextScr, i, p, t/g, 'NextScript');
  fixed = fixed.replace(/H, t, m, l/g, 'Html');
  fixed = fixed.replace(/M, a, i, n/g, 'Main');
  fixed = fixed.replace(/Docum, e, n, t/g, 'Document');
  
  // Fix corrupted module paths
  fixed = fixed.replace(/n, e, x, t/g, 'next');
  fixed = fixed.replace(/re, a, c, t/g, 'react');
  fixed = fixed.replace(/ap, p/g, 'app');
  fixed = fixed.replace(/docum, e, n, t/g, 'document');
  fixed = fixed.replace(/h, e, a, d/g, 'head');
  fixed = fixed.replace(/l, i, n, k/g, 'link');
  fixed = fixed.replace(/im, a, g, e/g, 'image');
  fixed = fixed.replace(/hel, m, e, t/g, 'helmet');
  fixed = fixed.replace(/as, y, n, c/g, 'async');
  
  // Fix corrupted component names
  fixed = fixed.replace(/Enhanced, S, E, O/g, 'EnhancedSEO');
  fixed = fixed.replace(/compone, n, t, s/g, 'components');
  
  // Fix corrupted quotes and strings
  fixed = fixed.replace(/'re, a, c, t'/g, "'react'");
  fixed = fixed.replace(/'n, e, x, t\/h, e, a, d'/g, "'next/head'");
  fixed = fixed.replace(/'n, e, x, t\/l, i, n, k'/g, "'next/link'");
  fixed = fixed.replace(/'n, e, x, t\/im, a, g, e'/g, "'next/image'");
  fixed = fixed.replace(/'n, e, x, t\/ap, p'/g, "'next/app'");
  fixed = fixed.replace(/'n, e, x, t\/docum, e, n, t'/g, "'next/document'");
  fixed = fixed.replace(/'n, e, x, t\/dyna, m, i, c'/g, "'next/dynamic'");
  
  // Fix corrupted file paths
  fixed = fixed.replace(/\.\.\/sr, c\/compone, n, t, s\/Enhanced, S, E, O/g, '../src/components/EnhancedSEO');
  
  // Remove extra commas from import statements
  fixed = fixed.replace(/,\s*from/g, ' from');
  fixed = fixed.replace(/from\s*,/g, 'from ');
  
  // Fix corrupted JSX
  fixed = fixed.replace(/<H, t, m, l/g, '<Html');
  fixed = fixed.replace(/<H, e, a, d/g, '<Head');
  fixed = fixed.replace(/<M, a, i, n/g, '<Main');
  fixed = fixed.replace(/<NextScr, i, p, t/g, '<NextScript');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCorruptedSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    return 0;
  }
  
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('./pages') + processDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);