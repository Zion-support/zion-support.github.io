interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const generateSitemap = (entries: SitemapEntry[]): string => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod || currentDate}</lastmod>
    <changefreq>${entry.changefreq || 'monthly'}</changefreq>
    <priority>${entry.priority || 0.5}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const sitemapEntries: SitemapEntry[] = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/ai-solutions', priority: 0.9, changefreq: 'weekly' },
  { url: '/it-services', priority: 0.8, changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: 0.8, changefreq: 'weekly' },
  { url: '/5g-solutions', priority: 0.7, changefreq: 'monthly' },
  { url: '/digital-transformation', priority: 0.8, changefreq: 'weekly' },
  { url: '/micro-saas-solutions', priority: 0.7, changefreq: 'monthly' },
  { url: '/ai-content-generator', priority: 0.7, changefreq: 'monthly' },
  { url: '/data-analytics', priority: 0.7, changefreq: 'monthly' },
  { url: '/web-development', priority: 0.7, changefreq: 'monthly' },
  { url: '/mobile-development', priority: 0.7, changefreq: 'monthly' },
  { url: '/database-management', priority: 0.6, changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: 0.6, changefreq: 'monthly' },
  { url: '/team', priority: 0.6, changefreq: 'monthly' },
  { url: '/careers', priority: 0.6, changefreq: 'weekly' },
  { url: '/help', priority: 0.5, changefreq: 'monthly' },
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  { url: '/cookies', priority: 0.3, changefreq: 'yearly' },
  { url: '/pricing', priority: 0.8, changefreq: 'weekly' },
  { url: '/blog', priority: 0.7, changefreq: 'weekly' },
  { url: '/case-studies', priority: 0.6, changefreq: 'monthly' },
  { url: '/partnerships', priority: 0.5, changefreq: 'monthly' },
  { url: '/api-docs', priority: 0.6, changefreq: 'weekly' },
  { url: '/accessibility', priority: 0.4, changefreq: 'yearly' },
  // AI Tools
  { url: '/zion-ai-content-moderator', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-customer-churn-predictor', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-customer-churn-predictor-pro', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-customer-sentiment-tracker', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-customer-support-pro', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-document-analyzer', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-email-marketing-pro', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-financial-forecaster', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-inventory-optimizer-pro', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-meeting-transcriber', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-sales-predictor', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-social-scheduler-pro', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-task-scheduler', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-workflow-automator', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-ai-workflow-automator-pro', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-customer-satisfaction-monitor', priority: 0.6, changefreq: 'monthly' },
  { url: '/zion-smart-expense-tracker', priority: 0.6, changefreq: 'monthly' }
];

export { generateSitemap };