import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the pages/routes in your application
const pages = [
  {
    url: 'https://ziontechgroup.com/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    url: 'https://ziontechgroup.com/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: 'https://ziontechgroup.com/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://ziontechgroup.com/ai-services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: 'https://ziontechgroup.com/it-services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: 'https://ziontechgroup.com/pricing',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: 'https://ziontechgroup.com/blog',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '0.7'
  },
  {
    url: 'https://ziontechgroup.com/case-studies',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: 'https://ziontechgroup.com/careers',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.6'
  },
  {
    url: 'https://ziontechgroup.com/privacy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    url: 'https://ziontechgroup.com/terms',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.3'
  }
];

// Add AI service pages
const aiServices = [
  'machine-learning', 'natural-language-processing', 'computer-vision', 'ai-automation',
  'quantum-ai', 'ai-cybersecurity', 'ai-healthcare', 'ai-fintech', 'ai-mobile-app-development',
  'ai-crm', 'ai-email-assistant', 'ai-scheduler', 'ai-project-manager', 'ai-social-media-manager',
  'ai-analytics-dashboard', 'ai-email-marketing', 'ai-customer-support-bot', 'ai-content-generation',
  'ai-lead-generation', 'ai-document-processing', 'ai-seo-optimizer', 'ai-ecommerce-solutions',
  'ai-financial-analyzer', 'ai-video-generation', 'ai-voice-cloning', 'ai-music-composition',
  'ai-fashion-design', 'ai-fitness-coach', 'ai-workflow-automation', 'ai-sales-automation',
  'ai-data-visualization', 'ai-3d-generation'
];

aiServices.forEach(service => {
  pages.push({
    url: `https://ziontechgroup.com/${service}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  });
});

// Add IT service pages
const itServices = [
  'cloud-services', 'cybersecurity', 'devops', 'database-services', 'network-infrastructure',
  'it-support', 'it-consulting', 'cloud-migration', 'compliance', 'developer-tools',
  'marketing-tools', 'productivity', 'it-infrastructure', 'data-center-solutions',
  'network-security', 'managed-it-services', 'cloud-security', 'it-asset-management',
  'backup-disaster-recovery', 'it-training', 'it-performance-optimization'
];

itServices.forEach(service => {
  pages.push({
    url: `https://ziontechgroup.com/${service}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  });
});

// Add specialized service pages
const specializedServices = [
  'quantum-computing', 'autonomous-systems', 'blockchain', 'iot-edge', 'business-intelligence',
  'robotics', 'enterprise', 'analytics-tools', 'business-apps', 'expense-tracker',
  'task-manager-pro', 'smart-analytics'
];

specializedServices.forEach(service => {
  pages.push({
    url: `https://ziontechgroup.com/${service}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  });
});

// Generate XML sitemap
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Sitemap generated successfully at ${sitemapPath}`);
console.log(`Total pages: ${pages.length}`);

// Also generate a robots.txt with sitemap reference
const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /private/

# Allow important pages
Allow: /ai-services/
Allow: /it-services/
Allow: /contact/
Allow: /about/
Allow: /blog/
Allow: /case-studies/
Allow: /pricing/

# Block common bot traps
Disallow: /*?*
Disallow: /*#
Disallow: /*.json$
Disallow: /*.xml$

# Allow specific file types
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.ico$`;

const robotsPath = path.join(publicDir, 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log(`Robots.txt updated at ${robotsPath}`);