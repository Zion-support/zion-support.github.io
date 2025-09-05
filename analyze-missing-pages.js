import fs from 'fs';
<<<<<<< HEAD
import { execSync } from 'child_process';

// Read sitemap.xml
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');

// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g
)
  .map(match => match.replace('<loc>https://ziontechgroup.com/', '').replace('</loc>', ''));
=======

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
>>>>>>> c9e9689af585540f887bafbc0e4ae1c044e075be
