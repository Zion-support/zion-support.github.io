#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Configuration
const BASE_URL = 'https://ziontechgroup.com';
const APP_DIR = './app';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Extract all links from a file
function extractLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const links = [];
  
  // Match href="..." or to="..." patterns
  const hrefRegex = /(?:href|to)=["']([^"']+)["']/g;
  let match;
  
  while ((match = hrefRegex.exec(content)) !== null) {
    const link = match[1];
    if (link && !link.startsWith('#') && !link.startsWith('mailto:') && !link.startsWith('tel:')) {
      links.push({
        url: link,
        file: filePath,
        line: content.substring(0, match.index).split('\n').length
      });
    }
  }
  
  return links;
}

// Check if a page exists
function pageExists(link) {
  // Remove query parameters and hash
  const cleanLink = link.split('?')[0].split('#')[0];
  
  // Convert URL path to file path
  let filePath;
  if (cleanLink === '/' || cleanLink === '') {
    filePath = path.join(APP_DIR, 'page.tsx');
  } else {
    filePath = path.join(APP_DIR, cleanLink, 'page.tsx');
  }
  
  return fs.existsSync(filePath);
}

// Get all existing pages
function getAllExistingPages() {
  const pages = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item === 'page.tsx') {
        const relativePath = path.relative(APP_DIR, fullPath);
        const urlPath = relativePath === 'page.tsx' ? '/' : '/' + relativePath.replace('/page.tsx', '');
        pages.push(urlPath);
      }
    }
  }
  
  scanDirectory(APP_DIR);
  return pages;
}

// Find all React/TSX files
function getAllTsxFiles() {
  const files = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(APP_DIR);
  return files;
}

// Main analysis function
function analyzeLinks() {
  log('🔍 Zion Tech Group - Comprehensive Link Analysis', 'bright');
  log('=' * 60, 'cyan');
  
  // Get all existing pages
  log('\n📄 Scanning existing pages...', 'blue');
  const existingPages = getAllExistingPages();
  log(`Found ${existingPages.length} existing pages`, 'green');
  
  // Get all TSX files
  log('\n📁 Scanning TSX files for links...', 'blue');
  const tsxFiles = getAllTsxFiles();
  log(`Found ${tsxFiles.length} TSX files`, 'green');
  
  // Extract all links
  log('\n🔗 Extracting links from files...', 'blue');
  const allLinks = [];
  
  for (const file of tsxFiles) {
    try {
      const links = extractLinks(file);
      allLinks.push(...links);
    } catch (error) {
      log(`Error reading ${file}: ${error.message}`, 'red');
    }
  }
  
  log(`Found ${allLinks.length} total links`, 'green');
  
  // Analyze links
  log('\n🔍 Analyzing link validity...', 'blue');
  const brokenLinks = [];
  const workingLinks = [];
  const externalLinks = [];
  
  for (const link of allLinks) {
    const url = link.url;
    
    if (url.startsWith('http') || url.startsWith('//')) {
      externalLinks.push(link);
    } else {
      if (pageExists(url)) {
        workingLinks.push(link);
      } else {
        brokenLinks.push(link);
      }
    }
  }
  
  // Generate report
  log('\n📊 ANALYSIS RESULTS', 'bright');
  log('=' * 40, 'cyan');
  
  log(`\n✅ Working Links: ${workingLinks.length}`, 'green');
  log(`❌ Broken Links: ${brokenLinks.length}`, 'red');
  log(`🌐 External Links: ${externalLinks.length}`, 'yellow');
  
  if (brokenLinks.length > 0) {
    log('\n❌ BROKEN LINKS FOUND:', 'red');
    log('-' * 30, 'red');
    
    const brokenByPage = {};
    for (const link of brokenLinks) {
      if (!brokenByPage[link.url]) {
        brokenByPage[link.url] = [];
      }
      brokenByPage[link.url].push(link);
    }
    
    for (const [url, occurrences] of Object.entries(brokenByPage)) {
      log(`\n🔗 ${url}`, 'red');
      for (const occurrence of occurrences) {
        log(`   📄 ${occurrence.file}:${occurrence.line}`, 'yellow');
      }
    }
  }
  
  // Missing pages that should exist based on navigation
  log('\n📋 MISSING PAGES (Referenced in Navigation):', 'yellow');
  log('-' * 40, 'yellow');
  
  const expectedPages = [
    '/solutions',
    '/resources',
    '/about',
    '/portfolio',
    '/contact',
    '/blog',
    '/case-studies',
    '/guides',
    '/content-hub',
    '/enterprise',
    '/pricing',
    '/support',
    '/privacy',
    '/terms',
    '/security',
    '/team',
    '/partners',
    '/news',
    '/press',
    '/careers',
    '/marketplace'
  ];
  
  const missingPages = expectedPages.filter(page => !existingPages.includes(page));
  
  if (missingPages.length > 0) {
    for (const page of missingPages) {
      log(`❌ ${page}`, 'red');
    }
  } else {
    log('✅ All expected pages exist!', 'green');
  }
  
  // Generate detailed report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalLinks: allLinks.length,
      workingLinks: workingLinks.length,
      brokenLinks: brokenLinks.length,
      externalLinks: externalLinks.length,
      existingPages: existingPages.length,
      missingPages: missingPages.length
    },
    existingPages,
    missingPages,
    brokenLinks: brokenLinks.map(link => ({
      url: link.url,
      file: link.file,
      line: link.line
    })),
    externalLinks: externalLinks.map(link => ({
      url: link.url,
      file: link.file,
      line: link.line
    }))
  };
  
  // Save report
  fs.writeFileSync('./link-analysis-report.json', JSON.stringify(report, null, 2));
  log('\n💾 Detailed report saved to: link-analysis-report.json', 'green');
  
  // Generate recommendations
  log('\n💡 RECOMMENDATIONS:', 'bright');
  log('=' * 20, 'cyan');
  
  if (brokenLinks.length > 0) {
    log('1. Create missing pages for broken internal links', 'yellow');
    log('2. Update navigation to remove or fix broken links', 'yellow');
    log('3. Add 404 handling for missing pages', 'yellow');
  }
  
  if (missingPages.length > 0) {
    log('4. Create missing navigation pages', 'yellow');
    log('5. Update header and footer navigation', 'yellow');
  }
  
  log('6. Test all navigation paths after fixes', 'yellow');
  log('7. Implement automated link checking in CI/CD', 'yellow');
  
  log('\n🎯 Next Steps:', 'bright');
  log('1. Create missing pages identified above', 'cyan');
  log('2. Fix broken links in navigation components', 'cyan');
  log('3. Test the website thoroughly', 'cyan');
  log('4. Deploy changes to production', 'cyan');
  
  return report;
}

// Run the analysis
try {
  const report = analyzeLinks();
  process.exit(report.summary.brokenLinks > 0 ? 1 : 0);
} catch (error) {
  log(`❌ Analysis failed: ${error.message}`, 'red');
  process.exit(1);
}

export { analyzeLinks };