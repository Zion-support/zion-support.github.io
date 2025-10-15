interface SitemapPage {
  url: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

export const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages: SitemapPage[] = [
    // Main pages
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
    { url: '/team', priority: '0.7', changefreq: 'monthly' },
    { url: '/careers', priority: '0.7', changefreq: 'weekly' },
    { url: '/partnerships', priority: '0.6', changefreq: 'monthly' },
    { url: '/case-studies', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog', priority: '0.6', changefreq: 'daily' },
    { url: '/api-docs', priority: '0.6', changefreq: 'weekly' },
    { url: '/help', priority: '0.5', changefreq: 'monthly' },
    { url: '/accessibility', priority: '0.5', changefreq: 'monthly' },
    
    // Legal pages
    { url: '/privacy', priority: '0.4', changefreq: 'yearly' },
    { url: '/terms', priority: '0.4', changefreq: 'yearly' },
    { url: '/cookies', priority: '0.4', changefreq: 'yearly' },
    
    // AI & ML Services
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/ai-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-content-generator', priority: '0.7', changefreq: 'weekly' },
    { url: '/data-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/data-engineering', priority: '0.7', changefreq: 'weekly' },
    
    // IT Services
    { url: '/it-services', priority: '0.8', changefreq: 'weekly' },
    { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
    { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
    { url: '/database-management', priority: '0.7', changefreq: 'weekly' },
    { url: '/network-infrastructure', priority: '0.7', changefreq: 'weekly' },
    { url: '/api-development', priority: '0.7', changefreq: 'weekly' },
    { url: '/devops-automation', priority: '0.7', changefreq: 'weekly' },
    { url: '/security-audit', priority: '0.7', changefreq: 'weekly' },
    
    // Infrastructure
    { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.7', changefreq: 'weekly' },
    { url: '/blockchain-solutions', priority: '0.6', changefreq: 'weekly' },
    { url: '/iot-solutions', priority: '0.6', changefreq: 'weekly' },
    
    // Business Solutions
    { url: '/digital-transformation', priority: '0.8', changefreq: 'weekly' },
    { url: '/micro-saas-solutions', priority: '0.7', changefreq: 'weekly' },
    
    // AI Tools - High priority
    { url: '/zion-ai-content-moderator', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-customer-churn-predictor', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-customer-churn-predictor-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-customer-sentiment-tracker', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-customer-support-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-document-analyzer', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-email-marketing-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-financial-forecaster', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-inventory-optimizer-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-meeting-transcriber', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-sales-predictor', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-social-scheduler-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-task-scheduler', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-workflow-automator', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-workflow-automator-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-customer-satisfaction-monitor', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-smart-expense-tracker', priority: '0.8', changefreq: 'weekly' },
    
    // Additional AI Tools
    { url: '/zion-ai-chatbot-builder', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-form-builder', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-document-processor', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-scheduling-assistant', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-social-media-manager', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-crm-optimizer', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-email-optimizer', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-website-analyzer', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-data-visualizer', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-code-assistant', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-image-generator', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-predictive-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-translation-service', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-voice-synthesis', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-smart-analytics-dashboard', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-smart-crm-automation', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-smart-inventory-manager', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-cybersecurity-audit', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-devops-automation', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-blockchain-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-iot-solutions', priority: '0.8', changefreq: 'weekly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};