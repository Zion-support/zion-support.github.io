import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://ziontechgroup.com';
const pages = [
  // Main pages
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' },
  { url: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { url: '/case-studies', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog', priority: 0.6, changefreq: 'weekly' },
  
  // AI Services
  { url: '/ai-analytics', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-automation', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-healthcare', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-fintech', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-quantum-computing', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-workflow-automation', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-customer-support', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-project-manager', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-social-media-manager', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-content-writer', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-email-marketing', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-crm', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-financial-analyzer', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-code-assistant', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-cybersecurity-monitor', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-password-manager', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-3d-generation', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-mobile-app-builder', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-logo-designer', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-quantum-financial-oracle', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-neural-memory-assistant', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-holographic-workspace', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-climate-solutions-pro', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-drug-discovery-pro', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-fashion-design', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-music-composition', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-energy', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-blockchain-solutions', priority: 0.8, changefreq: 'weekly' },
  { url: '/ai-autonomous-systems', priority: 0.8, changefreq: 'weekly' },
  
  // Legal pages
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  { url: '/cookies', priority: 0.3, changefreq: 'yearly' },
  { url: '/gdpr', priority: 0.3, changefreq: 'yearly' },
  { url: '/security', priority: 0.3, changefreq: 'yearly' },
  { url: '/compliance', priority: 0.3, changefreq: 'yearly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at:', sitemapPath);
};

generateSitemap();