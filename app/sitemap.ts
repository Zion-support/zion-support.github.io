export const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/ai-services',
    '/ai-solutions',
    '/it-services',
    '/cloud-infrastructure',
    '/5g-solutions',
    '/digital-transformation',
    '/micro-saas-solutions',
    '/ai-content-generator',
    '/data-analytics',
    '/web-development',
    '/mobile-development',
    '/database-management',
    '/network-infrastructure',
    '/contact',
    '/pricing',
    '/privacy',
    '/terms',
    '/cookies',
    '/help',
    '/blog',
    '/careers',
    '/partnerships',
    '/api-docs',
    '/accessibility',
    '/team',
    '/case-studies',
    // Zion AI Products
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};