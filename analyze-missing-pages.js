import fs from 'fs';
import { execSync } from 'child_process';

// Read sitemap.xml
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');

// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g
);

const sitemapUrls = urlMatches
  ? urlMatches.map(match => {
      const url = match
        .replace('<loc>https://ziontechgroup.com/', '')
        .replace('</loc>', '');
      return url === '' ? 'index' : url;
    })
  : [];

// Get actual pages
const actualPages = execSync(
  'find pages -name "*.tsx" -type f | sed "s/pages\\///" | sed "s/\\.tsx$//"',
  { encoding: 'utf8' }
)
  .trim()
  .split('\n')
  .filter(page => page !== '_app');

// Find missing pages
const missingPages = sitemapUrls.filter(url => !actualPages.includes(url));
console.log('Missing pages:');
missingPages.forEach(page => {
  console.log(`  - ${page}`);
});

// Find extra pages
const extraPages = actualPages.filter(page => !sitemapUrls.includes(page));
console.log('\nExtra pages:');
extraPages.forEach(page => {
  console.log(`  - ${page}`);
});

// Check for pages needing subdirectories
const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/'));
console.log('\nPages needing subdirectories:');
pagesNeedingSubdirs.forEach(page => {
  console.log(`  - ${page}`);
});

// Check for broken internal links
const brokenLinks = [];
actualPages.forEach(page => {
  try {
    const pageContent = fs.readFileSync(`pages/${page}.tsx`, 'utf8');
    const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g);
    
    if (internalLinkMatches) {
      internalLinkMatches.forEach(match => {
        const link = match.replace('href="/', '').replace('"', '');
        const fullLink = link === '' ? 'index' : link;
        
        if (
          !actualPages.includes(fullLink) &&
          !sitemapUrls.includes(fullLink)
        ) {
          brokenLinks.push({
            page,
            brokenLink: `/${link}`,
            fullLink,
          });
        }
      });
    }
  } catch {
    // Ignore errors for individual pages
  }
});

if (brokenLinks.length > 0) {
  console.log('\nBroken internal links:');
  brokenLinks.forEach(link => {
    console.log(`  - ${link.page} -> ${link.brokenLink} (${link.fullLink})`);
  });
} else {
  console.log('\nNo broken internal links found.');
}