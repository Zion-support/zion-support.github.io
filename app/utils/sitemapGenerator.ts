interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
}

export const generateSitemap = (config: SitemapConfig): string => {
  const { baseUrl, urls } = config;
  
  const sitemapUrls = urls.map(({ url, lastmod, changefreq, priority }) => {
    const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
    const lastmodDate = lastmod || new Date().toISOString().split('T')[0];
    
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmodDate}</lastmod>
    <changefreq>${changefreq || 'weekly'}</changefreq>
    <priority>${priority || 0.5}</priority>
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
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/enterprise', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog', priority: 0.8, changefreq: 'daily' },
    { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms', priority: 0.3, changefreq: 'yearly' },
    // Blog posts
    { url: '/blog/ai-enterprise-transformation-2025', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog/ai-2025-2026-mega-trends-breakthrough', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog/ai-2026-autonomous-enterprise-architecture', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog/ai-2026-autonomous-agent-factories', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog/ai-cost-optimization-breakthrough-2026', priority: 0.8, changefreq: 'monthly' },
  ],
};