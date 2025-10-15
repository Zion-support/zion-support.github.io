import fs from 'fs';
import path from 'path';

const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' },
    // AI Services
    { url: '/ai-analytics-dashboard-pro', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-code-assistant-pro', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-chatbot-enterprise', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-automation-platform', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-business-intelligence-pro', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-content-generation-pro', priority: 0.8, changefreq: 'weekly' },
    // 5G Solutions
    { url: '/5g-implementation', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-network-infrastructure', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-iot-solutions', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-smart-city-solutions', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-edge-computing', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-private-networks', priority: 0.8, changefreq: 'weekly' },
    // IT Services
    { url: '/ai-cloud-infrastructure', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-api-management', priority: 0.8, changefreq: 'weekly' },
    { url: '/advanced-security-suite', priority: 0.8, changefreq: 'weekly' },
    { url: '/performance-monitoring', priority: 0.8, changefreq: 'weekly' },
    { url: '/devops-solutions', priority: 0.8, changefreq: 'weekly' },
    // Micro SAAS
    { url: '/ai-accounting-assistant', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-content-moderation-pro', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-climate-solutions-pro', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-agricultural-intelligence-pro', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-3d-generation', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-blockchain-solutions', priority: 0.7, changefreq: 'weekly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  if (process.env.NODE_ENV === 'development') {
     
    console.log('✅ Sitemap generated successfully');
  }
};

export default generateSitemap;
