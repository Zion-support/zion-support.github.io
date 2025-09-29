interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
  outputPath?: string;
}

export const generateSitemap = (config: SitemapConfig): string => {
  const { baseUrl, urls } = config;
  
  const sitemapUrls = urls.map(url => {
    const fullUrl = url.url.startsWith('http') ? url.url : `${baseUrl}${url.url}`;
    const lastmod = url.lastmod || new Date().toISOString().split('T')[0];
    const changefreq = url.changefreq || 'weekly';
    const priority = url.priority || 0.5;
    
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;
};

export const defaultSitemapConfig: SitemapConfig = {
  baseUrl: 'https://ziontechgroup.com',
  urls: [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/sitemap', priority: 0.6, changefreq: 'weekly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/micro-saas', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-solutions', priority: 0.8, changefreq: 'weekly' },
    { url: '/blog', priority: 0.6, changefreq: 'weekly' },
    { url: '/careers', priority: 0.6, changefreq: 'weekly' },
    { url: '/partners', priority: 0.5, changefreq: 'monthly' },
    { url: '/news', priority: 0.5, changefreq: 'weekly' },
    { url: '/case-studies', priority: 0.6, changefreq: 'monthly' },
    { url: '/help-center', priority: 0.5, changefreq: 'monthly' },
    { url: '/faq', priority: 0.5, changefreq: 'monthly' },
    { url: '/pricing', priority: 0.6, changefreq: 'monthly' },
    { url: '/marketplace', priority: 0.7, changefreq: 'weekly' }
  ]
};
