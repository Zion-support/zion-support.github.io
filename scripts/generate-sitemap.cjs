const fs = require('fs');
const path = require('path');

// Simple sitemap generator
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/pricing',
    '/blog',
    '/ai-services',
    '/micro-saas',
    '/5g-solutions',
    '/privacy',
    '/terms',
    '/cookies',
    '/sitemap',
    '/ai-analytics',
    '/ai-content-generation',
    '/ai-cybersecurity',
    '/ai-customer-service',
    '/ai-data-analytics',
    '/web-development',
    '/zion-ai-code-reviewer',
    '/zion-ai-content-moderator',
    '/zion-ai-contract-analyzer',
    '/zion-ai-customer-churn-predictor',
    '/zion-ai-customer-sentiment-tracker',
    '/zion-ai-customer-support-pro',
    '/zion-ai-data-cleaner',
    '/zion-ai-document-analyzer',
    '/zion-ai-email-analyzer',
    '/zion-ai-financial-forecaster',
    '/zion-ai-meeting-transcriber',
    '/zion-ai-performance-optimizer',
    '/zion-ai-sales-predictor',
    '/zion-ai-social-media-manager',
    '/zion-ai-supply-chain-optimizer',
    '/zion-ai-task-scheduler',
    '/zion-ai-translator-pro',
    '/zion-ai-voice-assistant-pro',
    '/zion-ai-workflow-automator',
    '/zion-customer-satisfaction-monitor',
    '/zion-smart-expense-categorizer',
    '/zion-smart-expense-tracker',
    '/zion-smart-inventory-optimizer'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();