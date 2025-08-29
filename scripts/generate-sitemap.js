#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Define the base URL for your website
const BASE_URL = 'https://ziontechgroup.com';
// Define all the routes/pages on your website
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/contact',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/innovative-services-2025',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/advanced-services-2025',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/advanced-services-showcase-2025',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/comprehensive-pricing-2025',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/blog',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];
// Generate the sitemap XML content
function generateSitemapXML() {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urls = routes.map(route => {
    return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');
  
  return `${xmlHeader}
${urlsetOpen}
${urls}
${urlsetClose}`;
}
// Generate robots.txt content
function generateRobotsTxt() {
  return `User-agent: *
Allow: /
# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml
# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
# Allow important files
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /favicon.ico
Allow: /manifest.json
# Crawl delay (optional)
Crawl-delay: 1`;
}
// Generate the sitemap
function generateSitemap() {
  try {
    // Create the public directory if it doesn't exist
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Generate and write sitemap.xml
    const sitemapContent = generateSitemapXML();
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    
    // Generate and write robots.txt
    const robotsContent = generateRobotsTxt();
    const robotsPath = path.join(publicDir, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    console.log('✅ Robots.txt generated successfully at:', robotsPath);
    
    // Generate a JSON version for programmatic use
    const sitemapJson = {
      baseUrl: BASE_URL,
      generatedAt: new Date().toISOString(),
      routes: routes.map(route => ({
        ...route,
        fullUrl: `${BASE_URL}${route.path}`
      }))
    };
    
    const sitemapJsonPath = path.join(publicDir, 'sitemap.json');
    fs.writeFileSync(sitemapJsonPath, JSON.stringify(sitemapJson, null, 2), 'utf8');
    console.log('✅ Sitemap JSON generated successfully at:', sitemapJsonPath);
    
    // Generate a text sitemap for simple crawlers
    const textSitemap = routes.map(route => `${BASE_URL}${route.path}`).join('\n');
    const textSitemapPath = path.join(publicDir, 'sitemap.txt');
    fs.writeFileSync(textSitemapPath, textSitemap, 'utf8');
    console.log('✅ Text sitemap generated successfully at:', textSitemapPath);
    
    console.log('\n🎉 All sitemap files generated successfully!');
    console.log(`📊 Total routes: ${routes.length}`);
    console.log(`🌐 Base URL: ${BASE_URL}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}
// Run the sitemap generation
generateSitemap();
