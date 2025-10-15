const fs = require('fs');
const path = require('path');

// Enhanced sitemap generator
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  const pages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.9', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/ai-services', priority: '0.8', changefreq: 'weekly' },
    { path: '/ai-solutions', priority: '0.8', changefreq: 'weekly' },
    { path: '/it-services', priority: '0.8', changefreq: 'weekly' },
    { path: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
    { path: '/digital-transformation', priority: '0.8', changefreq: 'weekly' },
    { path: '/5g-solutions', priority: '0.7', changefreq: 'monthly' },
    { path: '/micro-saas-solutions', priority: '0.7', changefreq: 'monthly' },
    { path: '/ai-content-generator', priority: '0.7', changefreq: 'monthly' },
    { path: '/data-analytics', priority: '0.7', changefreq: 'monthly' },
    { path: '/web-development', priority: '0.7', changefreq: 'monthly' },
    { path: '/mobile-development', priority: '0.7', changefreq: 'monthly' },
    { path: '/database-management', priority: '0.7', changefreq: 'monthly' },
    { path: '/network-infrastructure', priority: '0.7', changefreq: 'monthly' },
    { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { path: '/case-studies', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog', priority: '0.6', changefreq: 'weekly' },
    { path: '/team', priority: '0.5', changefreq: 'monthly' },
    { path: '/careers', priority: '0.6', changefreq: 'weekly' },
    { path: '/partnerships', priority: '0.5', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/help', priority: '0.6', changefreq: 'monthly' },
    { path: '/api-docs', priority: '0.7', changefreq: 'weekly' },
    { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms', priority: '0.3', changefreq: 'yearly' },
    { path: '/cookies', priority: '0.3', changefreq: 'yearly' },
    { path: '/accessibility', priority: '0.4', changefreq: 'yearly' }
  ];

  // Add AI Tools pages
  const aiTools = [
    'zion-ai-content-moderator',
    'zion-ai-customer-churn-predictor',
    'zion-ai-customer-churn-predictor-pro',
    'zion-ai-customer-sentiment-tracker',
    'zion-ai-customer-support-pro',
    'zion-ai-document-analyzer',
    'zion-ai-email-marketing-pro',
    'zion-ai-financial-forecaster',
    'zion-ai-inventory-optimizer-pro',
    'zion-ai-meeting-transcriber',
    'zion-ai-sales-predictor',
    'zion-ai-social-scheduler-pro',
    'zion-ai-task-scheduler',
    'zion-ai-workflow-automator',
    'zion-ai-workflow-automator-pro',
    'zion-customer-satisfaction-monitor',
    'zion-smart-expense-tracker',
    'zion-ai-chatbot-builder',
    'zion-ai-form-builder',
    'zion-ai-document-processor',
    'zion-ai-scheduling-assistant',
    'zion-ai-social-media-manager',
    'zion-ai-crm-optimizer',
    'zion-ai-email-optimizer',
    'zion-ai-website-analyzer',
    'zion-ai-data-visualizer'
  ];

  aiTools.forEach(tool => {
    pages.push({ path: `/${tool}`, priority: '0.6', changefreq: 'monthly' });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
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
  console.log('Sitemap generated successfully');
};

generateSitemap();