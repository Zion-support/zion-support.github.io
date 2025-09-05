import fs from 'fs';
import { execSync } from 'child_process';

// Read sitemap.xml
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');

// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g
);

if (!urlMatches) {
  console.log('No URLs found in sitemap');
  process.exit(1);
}

const sitemapUrls = urlMatches
  .map(match => match.replace('<loc>https://ziontechgroup.com/', '').replace('</loc>', ''))
  .filter(url => url && url !== '');

console.log(`Found ${sitemapUrls.length} URLs in sitemap`);

// Get actual pages from pages directory
const pagesOutput = execSync('find pages -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx"', { encoding: 'utf8' });

const actualPages = pagesOutput
  .trim()
  .split('\n')
  .filter(page => page !== '_app')
  .map(page => page.replace('pages/', '').replace(/\.(js|jsx|ts|tsx)$/, ''))
  .filter(page => page !== '');

console.log(`Found ${actualPages.length} actual pages`);

// Find missing pages
const missingPages = sitemapUrls.filter(url => !actualPages.includes(url));
console.log(`\nMissing pages (in sitemap but not in pages directory):`);
missingPages.forEach(page => console.log(`- ${page}`));

// Find extra pages
const extraPages = actualPages.filter(page => !sitemapUrls.includes(page));
console.log(`\nExtra pages (in pages directory but not in sitemap):`);
extraPages.forEach(page => console.log(`- ${page}`));

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  sitemapUrls: sitemapUrls.length,
  actualPages: actualPages.length,
  missingPages: missingPages,
  extraPages: extraPages,
  summary: {
    totalDiscrepancies: missingPages.length + extraPages.length,
    missingCount: missingPages.length,
    extraCount: extraPages.length
  }
};

fs.writeFileSync('missing-pages-report.json', JSON.stringify(report, null, 2));
console.log('\nReport saved to missing-pages-report.json');