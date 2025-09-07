/* eslint-env node */
import fs from 'fs';
import { execSync } from 'child_process';

const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
const urlMatches = sitemapContent.match(/<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g);
const sitemapUrls = urlMatches ? urlMatches.map(match => {
  const url = match.replace('<loc>https://ziontechgroup.com/', '').replace('</loc>', '');
  return url === '' ? 'index' : url;
}) : [];

const actualPages = execSync('find pages -name "*.tsx" -type f | sed "s/pages\\///" | sed "s/\\.tsx$//"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(page => page !== '_app');

const missingPages = sitemapUrls.filter(url => !actualPages.includes(url));
missingPages.forEach(page => {
  console.log(`Missing page: ${page}`);
});

const extraPages = actualPages.filter(page => !sitemapUrls.includes(page));
extraPages.forEach(page => {
  console.log(`Extra page: ${page}`);
});

const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/'));
pagesNeedingSubdirs.forEach(page => {
  console.log(`Page needing subdirectory: ${page}`);
});

const brokenLinks = [];
actualPages.forEach(page => {
  try {
    const pageContent = fs.readFileSync(`pages/${page}.tsx`, 'utf8');
    const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g);
    if (internalLinkMatches) {
      internalLinkMatches.forEach(match => {
        const link = match.replace('href="/', '').replace('"', '');
        if (!sitemapUrls.includes(link) && !actualPages.includes(link)) {
          brokenLinks.push({ page, link });
        }
      });
    }
  } catch (error) {
    console.error(`Error reading page ${page}:`, error.message);
  }
});

console.log('\nBroken internal links:');
brokenLinks.forEach(({ page, link }) => {
  console.log(`${page} -> /${link}`);
});

console.log('\nSummary:');
console.log(`Sitemap URLs: ${sitemapUrls.length}`);
console.log(`Actual pages: ${actualPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Extra pages: ${extraPages.length}`);
console.log(`Broken links: ${brokenLinks.length}`);