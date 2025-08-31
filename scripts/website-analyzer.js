#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Analyze the website structure and identify issues
function analyzeWebsite() {
  console.log('🔍 Analyzing Zion Tech Group Website...\n');

  const srcDir = path.join(__dirname, '..', 'src');
  const pagesDir = path.join(srcDir, 'pages');
  const componentsDir = path.join(srcDir, 'components');
  
  // Read App.tsx to extract all routes
  const appTsxPath = path.join(srcDir, 'App.tsx');
  const appContent = fs.readFileSync(appTsxPath, 'utf8');
  
  // Extract route paths from App.tsx
  const routeRegex = /path="([^"]+)"/g;
  const routes = [];
  let match;
  
  while ((match = routeRegex.exec(appContent)) !== null) {
    routes.push(match[1]);
  }
  
  console.log(`📊 Found ${routes.length} routes in App.tsx:`);
  routes.forEach(route => console.log(`  - ${route}`));
  
  // Check which pages exist
  const existingPages = [];
  const missingPages = [];
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, path.join(basePath, item));
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        const pagePath = path.join(basePath, item.replace(/\.(tsx|jsx)$/, ''));
        existingPages.push(pagePath);
      }
    });
  }
  
  scanDirectory(pagesDir);
  
  console.log(`\n📁 Found ${existingPages.length} existing page files:`);
  existingPages.forEach(page => console.log(`  - ${page}`));
  
  // Check for missing pages
  routes.forEach(route => {
    if (route === '*') return; // Skip 404 route
    
    const routePath = route.replace(/^\//, '').replace(/\//g, '-');
    const hasPage = existingPages.some(page => 
      page.includes(routePath) || 
      page.includes(route.replace(/\//g, '-')) ||
      page.includes(route.replace(/\//g, ''))
    );
    
    if (!hasPage) {
      missingPages.push(route);
    }
  });
  
  console.log(`\n❌ Found ${missingPages.length} missing pages:`);
  missingPages.forEach(page => console.log(`  - ${page}`));
  
  // Check for placeholder pages (files with minimal content)
  const placeholderPages = [];
  existingPages.forEach(pagePath => {
    const fullPath = path.join(pagesDir, pagePath + '.tsx');
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.length < 5000) { // Less than 5KB is considered placeholder
        placeholderPages.push(pagePath);
      }
    }
  });
  
  console.log(`\n⚠️  Found ${placeholderPages.length} placeholder pages (minimal content):`);
  placeholderPages.forEach(page => console.log(`  - ${page}`));
  
  // Generate analysis report
  const report = {
    timestamp: new Date().toISOString(),
    totalRoutes: routes.length,
    existingPages: existingPages.length,
    missingPages: missingPages.length,
    placeholderPages: placeholderPages.length,
    routes: routes,
    missing: missingPages,
    placeholders: placeholderPages
  };
  
  fs.writeFileSync(
    path.join(__dirname, '..', 'website-analysis-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log(`\n📝 Analysis report saved to website-analysis-report.json`);
  
  return report;
}

// Run the analysis
try {
  analyzeWebsite();
} catch (error) {
  console.error('❌ Error analyzing website:', error.message);
  process.exit(1);
}