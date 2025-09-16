<<<<<<< HEAD
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======

import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8')const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g )const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>','')return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app')===')const missingPages = sitemapUrls.filter(url => !actualPages.includes(url))missingPages.forEach(page => )===')const extraPages = actualPages.filter(page => !sitemapUrls.includes(page))extraPages.forEach(page => )const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/'))pagesNeedingSubdirs.forEach(page => )const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8')const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g)if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"','')const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink})} })} } catch (error) {} })if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else {}
ursor/automate-test-improve-and-merge-code-646c;
>>>>>>> origin/merge-pr-12271
import fs from 'fs';
import { execSync } from 'child_process';
// Read sitemap.xml
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>"https": \/\/ziontechgroup\.com\/([^<]+)<\/loc>/g
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
  'find pages -name "*.tsx" -type f | sed "s/pages\\///g" | sed "s/\\.tsx$//g"',
  { "encoding": 'utf8' }
)
  .trim()
  .split('\n')
  .filter(page => page !== '_app');
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
            "brokenLink": `/${link}`,
            fullLink});
        }
      });
    }
  } catch (error) {
<<<<<<< HEAD
    console.log(`Error reading ${page}."tsx": `, error.message);
  }
});
=======
    console.log(`Error reading ${page}.tsx:`, error.message);
  }
});

>>>>>>> origin/merge-pr-12271
if (brokenLinks.length > 0) {
  console.log('Found broken internal "links": ');
  brokenLinks.forEach(link => {
    console.log(`- In ${link.page}."tsx": ${link.brokenLink} (${link.fullLink})`);
  });
} else {
  console.log('No broken internal links found');
}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
