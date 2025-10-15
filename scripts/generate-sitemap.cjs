const fs = require('fs');
const path = require('path');

// Enhanced sitemap generator
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily', lastmod: currentDate },
    { url: '/about', priority: '0.9', changefreq: 'monthly', lastmod: currentDate },
    { url: '/services', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { url: '/ai-services', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/ai-solutions', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/it-services', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/digital-transformation', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/5g-solutions', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/micro-saas-solutions', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/ai-content-generator', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/data-analytics', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/web-development', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/mobile-development', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/database-management', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/network-infrastructure', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/pricing', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { url: '/case-studies', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/blog', priority: '0.6', changefreq: 'weekly', lastmod: currentDate },
    { url: '/team', priority: '0.5', changefreq: 'monthly', lastmod: currentDate },
    { url: '/careers', priority: '0.7', changefreq: 'weekly', lastmod: currentDate },
    { url: '/partnerships', priority: '0.5', changefreq: 'monthly', lastmod: currentDate },
    { url: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/help', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/api-docs', priority: '0.6', changefreq: 'weekly', lastmod: currentDate },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
    { url: '/terms', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
    { url: '/cookies', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
    { url: '/accessibility', priority: '0.4', changefreq: 'yearly', lastmod: currentDate }
  ];

  // AI Tools pages
  const aiTools = [
    '/zion-ai-content-moderator',
    '/zion-ai-customer-churn-predictor',
    '/zion-ai-customer-churn-predictor-pro',
    '/zion-ai-customer-sentiment-tracker',
    '/zion-ai-customer-support-pro',
    '/zion-ai-document-analyzer',
    '/zion-ai-email-marketing-pro',
    '/zion-ai-financial-forecaster',
    '/zion-ai-inventory-optimizer-pro',
    '/zion-ai-meeting-transcriber',
    '/zion-ai-sales-predictor',
    '/zion-ai-social-scheduler-pro',
    '/zion-ai-task-scheduler',
    '/zion-ai-workflow-automator',
    '/zion-ai-workflow-automator-pro',
    '/zion-customer-satisfaction-monitor',
    '/zion-smart-expense-tracker'
  ];

  // Add AI tools to pages
  aiTools.forEach(tool => {
    pages.push({
      url: tool,
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: currentDate
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Ensure public directory exists
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully with', pages.length, 'pages');
};

generateSitemap();