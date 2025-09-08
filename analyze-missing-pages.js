
import fs from 'fs';
import { execSync } from 'child_process';






// Read sitemap.xml
const sitemapContent = fs.readFileSync("sitemap.xml", "utf8");
// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g



// Check each actual page for internal links;
actualPages.forEach(page => {}
  try {'`
    const pageContent = fs.readFileSync(`pages/${page}.tsx`, 'utf8');"
    // Find internal links (href="/...")"
    const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g);
    if (internalLinkMatches) {}
      internalLinkMatches.forEach(match => {'"
        const link = match.replace('href="/', '').replace('"', '');'
        const fullLink = link === '' ? 'index' : link;
        if (
          !actualPages.includes(fullLink) &&
          !sitemapUrls.includes(fullLink)
        ) {}
          brokenLinks.push({}
            page,"`
            "brokenLink": `/${link}`,
            fullLink});

















  'find pages -name "*.tsx" -type f | sed "s/pages\\///g" | sed "s/\\.tsx$//g"',
  { "encoding": 'utf8' }








  'find pages -name "*.tsx" -type f | sed "s/pages\\///g" | sed "s/\\.tsx$//g"',
  { "encoding": 'utf8' }

console.log('=== SITEMAP ANALYSIS ===');
console.log('Total URLs in "sitemap": ', sitemapUrls.length);
console.log('Total actual "pages": ', actualPages.length);
console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ===');
const missingPages = sitemapUrls.filter(url => !actualPages.includes(url));
missingPages.forEach(page => console.log(`- ${page}`));
console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ===');
const extraPages = actualPages.filter(page => !sitemapUrls.includes(page));
extraPages.forEach(page => console.log(`- ${page}`));
console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ===');
const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/'));
pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`));
// Check for broken internal links
console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ===');
const brokenLinks = [];
// Check each actual page for internal links
actualPages.forEach(page => {
  try {
    const pageContent = fs.readFileSync(`pages/${page}.tsx`, 'utf8');
    // Find internal links (href="/...")
    const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g);




if (brokenLinks.length > 0) {
  console.log('\nBroken internal links:');
  brokenLinks.forEach(link => {
    console.log(`  - ${link.page} -> ${link.brokenLink} (${link.fullLink})`);

















