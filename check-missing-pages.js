#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Read the App.tsx file to extract routes
const appTsxContent = fs.readFileSync('src/App.tsx', 'utf8');

// Extract route paths using regex
const routeMatches = appTsxContent.match(/path="([^"]+)"/g);
const routes = routeMatches ? routeMatches.map(match => match.replace('path="', '').replace('"', '')) : [];

// Get existing pages
const existingPages = [];
function findPages(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPages(filePath);
    } else if (file === 'page.tsx') {
      const relativePath = path.relative('src', filePath).replace('/page.tsx', '');
      existingPages.push(relativePath);
    }
  }
}

findPages('src');

// Find missing pages
const missingPages = routes.filter(route => {
  // Skip root route and wildcard
  if (route === '/' || route === '*') return false;
  
  // Remove leading slash
  const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
  
  // Check if page exists
  return !existingPages.includes(cleanRoute);
});

console.log('Missing pages:');
missingPages.forEach(page => console.log(`- ${page}`));

console.log(`\nTotal missing pages: ${missingPages.length}`);
console.log(`Total routes: ${routes.length}`);
console.log(`Total existing pages: ${existingPages.length}`);