import fs from 'fs';
import path from 'path';

// Read App.tsx to extract all imports
const appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Extract all import paths
const importMatches = appContent.match(/import.*from '\.\/app\/([^']+)'/g);
const importPaths = importMatches.map(match => {
  const pathMatch = match.match(/import.*from '\.\/app\/([^']+)'/);
  return pathMatch ? pathMatch[1] : null;
}).filter(Boolean);

// Get all existing page files
function getAllPageFiles(dir, basePath = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllPageFiles(filePath, path.join(basePath, file)));
    } else if (file === 'page.tsx') {
      results.push(basePath);
    }
  });
  
  return results;
}

const existingPages = getAllPageFiles('/workspace/app');

// Convert import paths to expected file paths
const expectedPages = importPaths.map(importPath => {
  // Remove '/page' from the end if it exists
  return importPath.replace(/\/page$/, '');
});

// Find missing pages
const missingPages = expectedPages.filter(expected => {
  return !existingPages.includes(expected);
});

// Find extra pages (pages that exist but aren't imported)
const extraPages = existingPages.filter(existing => {
  return !expectedPages.includes(existing);
});

console.log('=== MISSING PAGES ===');
missingPages.forEach(page => {
  console.log(`Missing: ${page}`);
});

console.log('\n=== EXTRA PAGES (not imported) ===');
extraPages.forEach(page => {
  console.log(`Extra: ${page}`);
});

console.log(`\nTotal expected pages: ${expectedPages.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Extra pages: ${extraPages.length}`);

// Write results to file
const results = {
  missingPages,
  extraPages,
  totalExpected: expectedPages.length,
  totalExisting: existingPages.length,
  missingCount: missingPages.length,
  extraCount: extraPages.length
};

fs.writeFileSync('/workspace/missing-pages-analysis.json', JSON.stringify(results, null, 2));