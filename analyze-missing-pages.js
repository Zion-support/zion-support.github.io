import fs from 'fs';''
import { execSync } from 'child_process';'
// Read sitemap.xml;'
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');'
// Extract URLs from sitemap;
const urlMatches = sitemapContent.match()
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g;
</loc>'
  .map(match => match.replace('<loc>https://ziontechgroup.com/', '').replace('</loc>', ''))''