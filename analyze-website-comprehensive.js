#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website analysis script for Zion Tech Group
console.log('🔍 Starting comprehensive website analysis...\n');

// Base URL for the website
const BASE_URL = 'https://ziontechgroup.com';

// Track all found links and their status
const linkAnalysis = {
  internalLinks: new Set(),
  externalLinks: new Set(),
  brokenLinks: [],
  missingPages: [],
  existingPages: [],
  navigationLinks: [],
  footerLinks: [],
  servicePages: [],
  blogPages: [],
  otherPages: []
};

// Function to extract links from file content
function extractLinksFromContent(content, filePath) {
  const linkRegex = /href=["']([^"']+)["']/g;
  const toRegex = /to=["']([^"']+)["']/g;
  const links = [];
  
  let match;
  
  // Extract href links
  while ((match = linkRegex.exec(content)) !== null) {
    links.push({
      url: match[1],
      type: 'href',
      file: filePath
    });
  }
  
  // Extract to links (React Router)
  while ((match = toRegex.exec(content)) !== null) {
    links.push({
      url: match[1],
      type: 'to',
      file: filePath
    });
  }
  
  return links;
}

// Function to scan directory for pages
function scanDirectory(dirPath, relativePath = '') {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const relativeItemPath = path.join(relativePath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', '.next', 'dist', 'build', '__tests__', 'components-disabled', 'api-disabled', 'backup', 'automation_backup'].includes(item)) {
        scanDirectory(fullPath, relativeItemPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      // Skip certain files
      if (!item.includes('test') && !item.includes('spec') && !item.includes('disabled') && !item.includes('backup')) {
        analyzeFile(fullPath, relativeItemPath);
      }
    }
  }
}

// Function to analyze individual file
function analyzeFile(filePath, relativePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = extractLinksFromContent(content, relativePath);
    
    // Categorize the file
    if (relativePath.includes('app/') && relativePath.endsWith('page.tsx')) {
      const route = relativePath.replace('app/', '').replace('/page.tsx', '');
      if (route === 'page') {
        linkAnalysis.existingPages.push('/');
      } else {
        linkAnalysis.existingPages.push(`/${route}`);
      }
    }
    
    // Analyze links
    links.forEach(link => {
      const url = link.url;
      
      // Skip external links for now
      if (url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('tel:')) {
        linkAnalysis.externalLinks.add(url);
        return;
      }
      
      // Internal links
      if (url.startsWith('/')) {
        linkAnalysis.internalLinks.add(url);
        
        // Categorize links
        if (filePath.includes('Navigation.tsx')) {
          linkAnalysis.navigationLinks.push(url);
        } else if (filePath.includes('Footer.tsx')) {
          linkAnalysis.footerLinks.push(url);
        } else if (url.includes('/ai-') || url.includes('/services') || url.includes('/quantum') || url.includes('/autonomous')) {
          linkAnalysis.servicePages.push(url);
        } else if (url.includes('/blog')) {
          linkAnalysis.blogPages.push(url);
        } else {
          linkAnalysis.otherPages.push(url);
        }
      }
    });
    
  } catch (error) {
    console.error(`Error analyzing file ${filePath}:`, error.message);
  }
}

// Function to check if page exists
function checkPageExists(route) {
  if (route === '/') {
    return fs.existsSync('app/page.tsx');
  }
  
  const pagePath = `app${route}/page.tsx`;
  return fs.existsSync(pagePath);
}

// Function to generate comprehensive report
function generateReport() {
  console.log('📊 WEBSITE ANALYSIS REPORT');
  console.log('=' .repeat(50));
  
  console.log('\n📄 EXISTING PAGES:');
  linkAnalysis.existingPages.forEach(page => {
    console.log(`  ✅ ${page}`);
  });
  
  console.log('\n🔗 INTERNAL LINKS FOUND:');
  linkAnalysis.internalLinks.forEach(link => {
    const exists = checkPageExists(link);
    if (exists) {
      console.log(`  ✅ ${link}`);
    } else {
      console.log(`  ❌ ${link} (MISSING PAGE)`);
      linkAnalysis.brokenLinks.push(link);
      linkAnalysis.missingPages.push(link);
    }
  });
  
  console.log('\n🧭 NAVIGATION LINKS:');
  linkAnalysis.navigationLinks.forEach(link => {
    const exists = checkPageExists(link);
    console.log(`  ${exists ? '✅' : '❌'} ${link}`);
  });
  
  console.log('\n🦶 FOOTER LINKS:');
  linkAnalysis.footerLinks.forEach(link => {
    const exists = checkPageExists(link);
    console.log(`  ${exists ? '✅' : '❌'} ${link}`);
  });
  
  console.log('\n🛠️ SERVICE PAGES:');
  linkAnalysis.servicePages.forEach(link => {
    const exists = checkPageExists(link);
    console.log(`  ${exists ? '✅' : '❌'} ${link}`);
  });
  
  console.log('\n📝 BLOG PAGES:');
  linkAnalysis.blogPages.forEach(link => {
    const exists = checkPageExists(link);
    console.log(`  ${exists ? '✅' : '❌'} ${link}`);
  });
  
  console.log('\n🌐 EXTERNAL LINKS:');
  linkAnalysis.externalLinks.forEach(link => {
    console.log(`  🔗 ${link}`);
  });
  
  console.log('\n❌ BROKEN/MISSING PAGES:');
  linkAnalysis.missingPages.forEach(page => {
    console.log(`  ❌ ${page}`);
  });
  
  console.log('\n📈 SUMMARY:');
  console.log(`  Total existing pages: ${linkAnalysis.existingPages.length}`);
  console.log(`  Total internal links: ${linkAnalysis.internalLinks.size}`);
  console.log(`  Total external links: ${linkAnalysis.externalLinks.size}`);
  console.log(`  Broken/missing pages: ${linkAnalysis.missingPages.length}`);
  console.log(`  Navigation links: ${linkAnalysis.navigationLinks.length}`);
  console.log(`  Footer links: ${linkAnalysis.footerLinks.length}`);
  console.log(`  Service pages: ${linkAnalysis.servicePages.length}`);
  console.log(`  Blog pages: ${linkAnalysis.blogPages.length}`);
  
  return {
    existingPages: linkAnalysis.existingPages,
    missingPages: linkAnalysis.missingPages,
    brokenLinks: linkAnalysis.brokenLinks,
    navigationLinks: linkAnalysis.navigationLinks,
    footerLinks: linkAnalysis.footerLinks,
    servicePages: linkAnalysis.servicePages,
    blogPages: linkAnalysis.blogPages,
    externalLinks: Array.from(linkAnalysis.externalLinks)
  };
}

// Main execution
console.log('🔍 Scanning app directory...\n');
scanDirectory('app');

console.log('🔍 Scanning components...\n');
if (fs.existsSync('components')) {
  scanDirectory('components');
}

console.log('🔍 Analyzing links and generating report...\n');
const report = generateReport();

// Save report to file
const reportData = {
  timestamp: new Date().toISOString(),
  baseUrl: BASE_URL,
  ...report
};

fs.writeFileSync('website-analysis-report.json', JSON.stringify(reportData, null, 2));
console.log('\n💾 Report saved to website-analysis-report.json');

// Generate missing pages list
const missingPagesList = report.missingPages.map(page => ({
  route: page,
  filePath: page === '/' ? 'app/page.tsx' : `app${page}/page.tsx`,
  status: 'missing'
}));

fs.writeFileSync('missing-pages-list.json', JSON.stringify(missingPagesList, null, 2));
console.log('💾 Missing pages list saved to missing-pages-list.json');

console.log('\n✅ Analysis complete!');