import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to extract all links from navigation and footer components
function extractLinksFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = [];
    
    // Extract href="/..." patterns
    const hrefMatches = content.match(/href="([^"]+)"/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.match(/href="([^"]+)"/)[1];
        if (href.startsWith('/')) {
          links.push(href);
        }
      });
    }
    
    // Extract to="/..." patterns (React Router)
    const toMatches = content.match(/to="([^"]+)"/g);
    if (toMatches) {
      toMatches.forEach(match => {
        const to = match.match(/to="([^"]+)"/)[1];
        if (to.startsWith('/')) {
          links.push(to);
        }
      });
    }
    
    return links;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return [];
  }
}

// Function to check if a page exists
function pageExists(link) {
  const pagePath = path.join('/workspace/app', link, 'page.tsx');
  return fs.existsSync(pagePath);
}

// Function to get all existing pages
function getAllExistingPages() {
  const pages = [];
  const appDir = '/workspace/app';
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        const pageFile = path.join(itemPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          const relativePath = path.relative(appDir, itemPath);
          pages.push('/' + relativePath);
        } else {
          scanDirectory(itemPath);
        }
      }
    });
  }
  
  scanDirectory(appDir);
  return pages;
}

// Main analysis function
function analyzeWebsite() {
  console.log('🔍 Analyzing Zion Tech Group Website Links...\n');
  
  // Extract links from navigation and footer
  const navLinks = extractLinksFromFile('/workspace/app/components/Navigation.tsx');
  const footerLinks = extractLinksFromFile('/workspace/app/components/Footer.tsx');
  
  // Combine and deduplicate links
  const allLinks = [...new Set([...navLinks, ...footerLinks])];
  
  console.log(`📊 Found ${allLinks.length} unique links in navigation and footer`);
  
  // Get all existing pages
  const existingPages = getAllExistingPages();
  console.log(`📁 Found ${existingPages.length} existing pages in the app directory\n`);
  
  // Check each link
  const brokenLinks = [];
  const workingLinks = [];
  const missingPages = [];
  
  allLinks.forEach(link => {
    if (pageExists(link)) {
      workingLinks.push(link);
    } else {
      brokenLinks.push(link);
      missingPages.push(link);
    }
  });
  
  // Find pages that exist but aren't linked
  const unlinkedPages = existingPages.filter(page => !allLinks.includes(page));
  
  // Generate report
  console.log('📋 ANALYSIS REPORT');
  console.log('==================\n');
  
  console.log(`✅ Working Links: ${workingLinks.length}`);
  console.log(`❌ Broken Links: ${brokenLinks.length}`);
  console.log(`📄 Unlinked Pages: ${unlinkedPages.length}\n`);
  
  if (brokenLinks.length > 0) {
    console.log('🚨 BROKEN LINKS (Missing Pages):');
    console.log('================================');
    brokenLinks.forEach(link => {
      console.log(`❌ ${link}`);
    });
    console.log('');
  }
  
  if (unlinkedPages.length > 0) {
    console.log('📄 EXISTING PAGES NOT LINKED:');
    console.log('=============================');
    unlinkedPages.slice(0, 20).forEach(page => {
      console.log(`📄 ${page}`);
    });
    if (unlinkedPages.length > 20) {
      console.log(`... and ${unlinkedPages.length - 20} more`);
    }
    console.log('');
  }
  
  // Check for common missing pages
  const commonPages = [
    '/about', '/contact', '/services', '/pricing', '/blog', '/case-studies',
    '/careers', '/partners', '/support', '/faq', '/demo', '/consultation',
    '/micro-saas', '/ai-services', '/it-services', '/privacy', '/terms',
    '/cookies', '/docs', '/community', '/api', '/tutorials', '/sitemap'
  ];
  
  const missingCommonPages = commonPages.filter(page => !pageExists(page));
  
  if (missingCommonPages.length > 0) {
    console.log('🎯 MISSING COMMON PAGES:');
    console.log('========================');
    missingCommonPages.forEach(page => {
      console.log(`❌ ${page}`);
    });
    console.log('');
  }
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalLinks: allLinks.length,
      workingLinks: workingLinks.length,
      brokenLinks: brokenLinks.length,
      existingPages: existingPages.length,
      unlinkedPages: unlinkedPages.length
    },
    brokenLinks,
    workingLinks,
    missingPages,
    unlinkedPages,
    missingCommonPages
  };
  
  fs.writeFileSync('/workspace/website-link-analysis.json', JSON.stringify(report, null, 2));
  console.log('💾 Detailed report saved to: website-link-analysis.json');
  
  return report;
}

// Run the analysis
const report = analyzeWebsite();