#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read App.tsx
const appPath = path.join(__dirname, 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Get all existing zion directories
const appDir = path.join(__dirname, 'app');
const existingZionDirs = fs.readdirSync(appDir)
  .filter(dir => dir.startsWith('zion-') && fs.statSync(path.join(appDir, dir)).isDirectory())
  .map(dir => dir);

console.log('Existing zion directories:', existingZionDirs);

// Find all zion page imports in App.tsx
const importRegex = /const\s+(\w+Page)\s*=\s*React\.lazy\(\(\)\s*=>\s*import\("\.\/app\/([^"]+)\/page"\)\);/g;
const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{<(\w+Page)\s*\/>\}\s*\/>/g;

// Find all imports and routes
const imports = [];
const routes = [];

let match;
while ((match = importRegex.exec(appContent)) !== null) {
  imports.push({
    componentName: match[1],
    pagePath: match[2],
    fullMatch: match[0]
  });
}

while ((match = routeRegex.exec(appContent)) !== null) {
  routes.push({
    path: match[1],
    componentName: match[2],
    fullMatch: match[0]
  });
}

console.log('Found imports:', imports.length);
console.log('Found routes:', routes.length);

// Check which pages exist
const validImports = [];
const validRoutes = [];

for (const imp of imports) {
  if (existingZionDirs.includes(imp.pagePath)) {
    validImports.push(imp);
    console.log('✓ Valid import:', imp.pagePath);
  } else {
    console.log('✗ Missing page:', imp.pagePath);
  }
}

for (const route of routes) {
  const correspondingImport = imports.find(imp => imp.componentName === route.componentName);
  if (correspondingImport && existingZionDirs.includes(correspondingImport.pagePath)) {
    validRoutes.push(route);
    console.log('✓ Valid route:', route.path);
  } else {
    console.log('✗ Missing route:', route.path, 'for component:', route.componentName);
  }
}

// Create new App.tsx content with only valid imports and routes
let newContent = appContent;

// Remove invalid imports
for (const imp of imports) {
  if (!existingZionDirs.includes(imp.pagePath)) {
    newContent = newContent.replace(imp.fullMatch + '\n', '');
  }
}

// Remove invalid routes
for (const route of routes) {
  const correspondingImport = imports.find(imp => imp.componentName === route.componentName);
  if (!correspondingImport || !existingZionDirs.includes(correspondingImport.pagePath)) {
    newContent = newContent.replace(route.fullMatch + '\n', '');
  }
}

// Write the fixed content
fs.writeFileSync(appPath, newContent);
console.log('Fixed App.tsx - removed invalid imports and routes');