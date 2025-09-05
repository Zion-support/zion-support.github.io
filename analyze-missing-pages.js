import fs from 'fs';
import { execSync } from 'child_process';

// Read sitemap.xml;
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');

// Extract URLs from sitemap;
const urlMatches = sitemapContent.match()
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g;
);

if (urlMatches) {}
  const urls = urlMatches;
    .map(match => match.replace('<loc>https://ziontechgroup.com/', '').replace('</loc>', ''));
  
  console.log('Found URLs:', urls);
} else {}
  console.log('No URLs found in sitemap');
};