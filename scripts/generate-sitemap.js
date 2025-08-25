#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
// Define all the routes based on the App.tsx routing structure
const routes = [
  // Main Routes
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/services-showcase', priority: '0.8', changefreq: 'weekly' },
  { path: '/ai-matcher', priority: '0.8', changefreq: 'weekly' },
  { path: '/talent-directory', priority: '0.8', changefreq: 'weekly' },
  { path: '/talents', priority: '0.8', changefreq: 'weekly' },
  { path: '/emerging-tech', priority: '0.8', changefreq: 'weekly' },
  
  // Service Routes
  { path: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { path: '/cloud-devops', priority: '0.8', changefreq: 'weekly' },
  { path: '/enterprise-solutions', priority: '0.8', changefreq: 'weekly' },
  { path: '/digital-transformation', priority: '0.8', changefreq: 'weekly' },
  
  // Missing pages from analysis
  { path: '/quantum-neural-network-platform', priority: '0.7', changefreq: 'monthly' },
  { path: '/autonomous-business-operations-platform', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-powered-it-asset-management', priority: '0.7', changefreq: 'monthly' },
  { path: '/soc2-compliance-automation', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-research-assistant', priority: '0.7', changefreq: 'monthly' },
  { path: '/5g-enterprise-solutions', priority: '0.7', changefreq: 'monthly' },
  { path: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { path: '/help', priority: '0.6', changefreq: 'monthly' },
  
  // Company Routes
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/mission', priority: '0.7', changefreq: 'monthly' },
  { path: '/team', priority: '0.7', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.7', changefreq: 'monthly' },
  { path: '/careers', priority: '0.7', changefreq: 'monthly' },
  { path: '/partners', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.6', changefreq: 'weekly' },
  { path: '/news', priority: '0.6', changefreq: 'weekly' },
  
  // Service Detail Routes
  { path: '/services-overview', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-autonomous-systems', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/quantum-technology', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/cybersecurity', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/it-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/micro-saas-solutions', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/industry-solutions', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/innovative-new-services', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/specialized-it-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { path: '/innovative-micro-saas-services', priority: '0.7', changefreq: 'monthly' },
  { path: '/comprehensive-innovative-services', priority: '0.7', changefreq: 'monthly' },
  
  // Solutions Routes
  { path: '/services/enterprise', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/healthcare', priority: '0.7', changefreq: 'monthly' },
  
  // Legacy route redirects for SEO
  { path: '/comprehensive-services', priority: '0.6', changefreq: 'monthly' },
  { path: '/services-comparison', priority: '0.6', changefreq: 'monthly' },
  { path: '/it-onsite-services', priority: '0.6', changefreq: 'monthly' }
];

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += '</urlset>';

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  
  // Also write robots.txt
  const robotsTxt = `User-agent: *
Allow: /

=======
// Define all valid routes for the Zion Tech Group website
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/enterprise-solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/mission', priority: '0.7', changefreq: 'monthly' },
  { path: '/team', priority: '0.7', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/careers', priority: '0.6', changefreq: 'weekly' },
  { path: '/partners', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/news', priority: '0.7', changefreq: 'weekly' },
  
  // Service detail routes
  { path: '/services-overview', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-autonomous-systems', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/quantum-technology', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/it-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/industry-solutions', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/innovative-new-services', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/specialized-it-infrastructure', priority: '0.8', changefreq: 'weekly' },
  
  // Solutions routes
  { path: '/solutions/enterprise', priority: '0.8', changefreq: 'weekly' },
  { path: '/solutions/healthcare', priority: '0.8', changefreq: 'weekly' },
  
  // Additional service routes
  { path: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { path: '/cloud-devops', priority: '0.8', changefreq: 'weekly' },
  { path: '/digital-transformation', priority: '0.8', changefreq: 'weekly' },
  { path: '/emerging-tech', priority: '0.7', changefreq: 'weekly' },
  { path: '/services-showcase', priority: '0.7', changefreq: 'weekly' },
  { path: '/match', priority: '0.6', changefreq: 'weekly' },
  { path: '/talent', priority: '0.6', changefreq: 'weekly' },
  { path: '/talents', priority: '0.6', changefreq: 'weekly' }
];

const baseUrl = 'https://ziontechgroup.com';

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  
  // Also write to root directory for build
  fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), sitemap);
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📊 Total routes: ${routes.length}`);
  console.log(`🌐 Base URL: ${baseUrl}`);
  console.log(`📁 Saved to: public/sitemap.xml and sitemap.xml`);
}

// Generate robots.txt as well
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-678c
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
<<<<<<< HEAD
Allow: /
Allow: /services/
Allow: /ai-solutions/
=======
Allow: /services/
Allow: /solutions/
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-678c
Allow: /about/
Allow: /contact/
Allow: /blog/
Allow: /news/
<<<<<<< HEAD
`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  
  console.log('✅ Sitemap generated successfully!');
  console.log('📁 Files created:');
  console.log('   - public/sitemap.xml');
  console.log('   - public/robots.txt');
  console.log(`🌐 Total URLs: ${routes.length}`);
}

generateSitemap();
=======

# Crawl delay (optional)
Crawl-delay: 1`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  fs.writeFileSync(path.join(__dirname, '../robots.txt'), robotsTxt);
  
  console.log('✅ Robots.txt generated successfully!');
}

// Generate both files
generateSitemap();
generateRobotsTxt();
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-678c
