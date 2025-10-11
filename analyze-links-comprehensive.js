#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Starting comprehensive link analysis for Zion Tech Group website...\n');

// Get all page files
const appDir = path.join(__dirname, 'app');
const allPages = new Set();
const allLinks = new Set();
const brokenLinks = [];
const missingPages = [];

// Function to recursively find all page files
function findPageFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      findPageFiles(fullPath);
    } else if (file.name === 'page.tsx' || file.name === 'page.ts') {
      const relativePath = fullPath.replace(appDir, '').replace(/\\/g, '/');
      const route = relativePath.replace('/page.tsx', '').replace('/page.ts', '') || '/';
      allPages.add(route);
    }
  }
}

// Function to extract links from file content
function extractLinks(content, filePath) {
  const linkPatterns = [
    // React Router links
    /to=["']([^"']+)["']/g,
    // href attributes
    /href=["']([^"']+)["']/g,
    // Link components
    /<Link[^>]*to=["']([^"']+)["'][^>]*>/g,
    // Route definitions
    /path=["']([^"']+)["']/g,
    // Navigation links
    /href:\s*["']([^"']+)["']/g,
    // URL patterns
    /url:\s*["']([^"']+)["']/g
  ];

  const links = new Set();
  
  linkPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      let link = match[1];
      
      // Skip external links, mailto, tel, etc.
      if (link.startsWith('http') || 
          link.startsWith('mailto:') || 
          link.startsWith('tel:') || 
          link.startsWith('#') ||
          link.startsWith('//')) {
        continue;
      }
      
      // Normalize link
      if (!link.startsWith('/')) {
        link = '/' + link;
      }
      
      // Remove query parameters and fragments
      link = link.split('?')[0].split('#')[0];
      
      if (link && link !== '/') {
        links.add(link);
        allLinks.add(link);
      }
    }
  });
  
  return Array.from(links);
}

// Function to analyze a file
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = extractLinks(content, filePath);
    
    return {
      file: filePath,
      links: links
    };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return { file: filePath, links: [] };
  }
}

// Find all page files
console.log('📁 Scanning for page files...');
findPageFiles(appDir);

console.log(`Found ${allPages.size} page routes:`);
Array.from(allPages).sort().forEach(page => {
  console.log(`  - ${page}`);
});

// Find all component files
console.log('\n🔗 Scanning for links in component files...');
const componentFiles = [];

function findComponentFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      findComponentFiles(fullPath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
      componentFiles.push(fullPath);
    }
  }
}

findComponentFiles(appDir);

console.log(`Found ${componentFiles.length} component files to analyze`);

// Analyze all files
const fileAnalysis = [];
componentFiles.forEach(file => {
  const analysis = analyzeFile(file);
  if (analysis.links.length > 0) {
    fileAnalysis.push(analysis);
  }
});

console.log(`\n📊 Link Analysis Results:`);
console.log(`Total unique links found: ${allLinks.size}`);
console.log(`Files with links: ${fileAnalysis.length}`);

// Check which links are broken (don't have corresponding pages)
console.log('\n❌ Broken Links Analysis:');
const brokenLinksByFile = {};

fileAnalysis.forEach(analysis => {
  const brokenInFile = [];
  
  analysis.links.forEach(link => {
    if (!allPages.has(link)) {
      brokenInFile.push(link);
      if (!brokenLinks.includes(link)) {
        brokenLinks.push(link);
        missingPages.push(link);
      }
    }
  });
  
  if (brokenInFile.length > 0) {
    brokenLinksByFile[analysis.file] = brokenInFile;
  }
});

console.log(`Found ${brokenLinks.length} broken links:`);
brokenLinks.sort().forEach(link => {
  console.log(`  - ${link}`);
});

// Show broken links by file
console.log('\n📄 Broken Links by File:');
Object.entries(brokenLinksByFile).forEach(([file, links]) => {
  console.log(`\n${file}:`);
  links.forEach(link => {
    console.log(`  - ${link}`);
  });
});

// Generate missing pages list
console.log('\n📝 Missing Pages to Create:');
const missingPagesSorted = [...new Set(missingPages)].sort();
missingPagesSorted.forEach(page => {
  console.log(`  - ${page}`);
});

// Check for navigation inconsistencies
console.log('\n🧭 Navigation Analysis:');
const navigationLinks = [
  '/about', '/services', '/pricing', '/case-studies', '/blog', '/tutorials', '/contact',
  '/ai-services', '/it-services', '/micro-saas', '/team', '/partners', '/support', '/status',
  '/faq', '/docs', '/api-docs', '/community', '/demo', '/compliance',
  '/enterprise', '/digital-transformation', '/business-intelligence', '/edge-computing',
  '/consultation', '/privacy', '/terms', '/cookies', '/sitemap'
];

const missingNavLinks = navigationLinks.filter(link => !allPages.has(link));
console.log(`Missing navigation pages: ${missingNavLinks.length}`);
missingNavLinks.forEach(link => {
  console.log(`  - ${link}`);
});

// Generate comprehensive report
const report = {
  timestamp: new Date().toISOString(),
  totalPages: allPages.size,
  totalLinks: allLinks.size,
  brokenLinks: brokenLinks.length,
  missingPages: missingPagesSorted,
  brokenLinksByFile,
  allPages: Array.from(allPages).sort(),
  allLinks: Array.from(allLinks).sort(),
  missingNavLinks
};

fs.writeFileSync('link-analysis-report.json', JSON.stringify(report, null, 2));

console.log('\n✅ Analysis complete!');
console.log(`📄 Report saved to: link-analysis-report.json`);
console.log(`\n📋 Summary:`);
console.log(`  - Total pages: ${allPages.size}`);
console.log(`  - Total links: ${allLinks.size}`);
console.log(`  - Broken links: ${brokenLinks.length}`);
console.log(`  - Missing pages: ${missingPagesSorted.length}`);
console.log(`  - Missing nav links: ${missingNavLinks.length}`);

// Generate fix suggestions
console.log('\n🔧 Fix Suggestions:');
console.log('1. Create missing page components for all broken links');
console.log('2. Update navigation to only include existing pages');
console.log('3. Add proper error handling for missing routes');
console.log('4. Implement 404 page for undefined routes');
console.log('5. Add breadcrumb navigation for better UX');