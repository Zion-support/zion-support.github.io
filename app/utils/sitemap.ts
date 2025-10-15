// Sitemap generation utility
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod || currentDate}</lastmod>
    <changefreq>${url.changefreq || 'weekly'}</changefreq>
    <priority>${url.priority || 0.8}</priority>
  </url>`).join('')}
</urlset>`;

  return sitemap;
};

// Default sitemap URLs
export const defaultSitemapUrls: SitemapUrl[] = [
  { loc: '/', priority: 1.0, changefreq: 'daily' },
  { loc: '/about', priority: 0.9, changefreq: 'monthly' },
  { loc: '/services', priority: 0.9, changefreq: 'weekly' },
  { loc: '/solutions', priority: 0.9, changefreq: 'weekly' },
  { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
  { loc: '/blog', priority: 0.7, changefreq: 'weekly' },
  { loc: '/tutorials', priority: 0.7, changefreq: 'weekly' },
  { loc: '/demo', priority: 0.8, changefreq: 'monthly' },
  { loc: '/support', priority: 0.6, changefreq: 'weekly' },
  { loc: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { loc: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { loc: '/terms', priority: 0.3, changefreq: 'yearly' },
];

// Generate robots.txt content
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;
};