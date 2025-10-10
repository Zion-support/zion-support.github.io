import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the routes in your application
const routes = [
  {
    url: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/pricing',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/enterprise',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/blog',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/case-studies',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Add AI service pages
const aiServices = [
  'machine-learning', 'ai-business-intelligence', 'ai-supply-chain', 'ai-quality-assurance',
  'ai-hr', 'ai-legal', 'ai-real-estate', 'ai-manufacturing', 'ai-transportation',
  'ai-education', 'ai-energy', 'ai-insurance', 'nlp', 'computer-vision',
  'ai-automation', 'quantum-ai', 'ai-cybersecurity', 'ai-healthcare', 'ai-fintech',
  'ai-mobile-app-development', 'ai-crm', 'ai-email-assistant', 'ai-scheduler'
];

aiServices.forEach(service => {
  routes.push({
    url: `/${service}`,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  });
});

// Add IT service pages
const itServices = [
  'cloud-services', 'enterprise-security', 'it-infrastructure', 'data-center',
  'network-security', 'it-consulting', 'managed-it', 'cloud-security',
  'it-asset-management', 'backup-recovery', 'it-training', 'it-performance',
  'cybersecurity', 'devops', 'database-services', 'network-infrastructure',
  'it-support', 'cloud-migration', 'compliance', 'developer-tools',
  'marketing-tools', 'productivity'
];

itServices.forEach(service => {
  routes.push({
    url: `/${service}`,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  });
});

// Add specialized service pages
const specializedServices = [
  'quantum-computing', 'autonomous-systems', 'blockchain', 'iot-edge',
  'business-intelligence', 'robotics', 'enterprise', 'analytics-tools',
  'business-apps', 'expense-tracker', 'task-manager-pro', 'smart-analytics'
];

specializedServices.forEach(service => {
  routes.push({
    url: `/${service}`,
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  });
});

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://ziontechgroup.com${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /services/
Allow: /about/
Allow: /contact/
Allow: /pricing/
Allow: /blog/
Allow: /case-studies/`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
console.log('Robots.txt generated successfully!');