export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (entries: SitemapEntry[]): string => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const defaultEntries: SitemapEntry[] = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/micro-saas', priority: 0.8, changefreq: 'weekly' },
    { url: '/services-advertising', priority: 0.7, changefreq: 'monthly' },
    { url: '/case-studies', priority: 0.8, changefreq: 'monthly' },
    { url: '/enterprise', priority: 0.8, changefreq: 'monthly' },
    { url: '/team', priority: 0.6, changefreq: 'monthly' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' },
    { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  ];

  const allEntries = [...defaultEntries, ...entries];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  allEntries.forEach(entry => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${entry.url}</loc>\n`;
    sitemap += `    <lastmod>${entry.lastmod || currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${entry.changefreq || 'monthly'}</changefreq>\n`;
    sitemap += `    <priority>${entry.priority || 0.5}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

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
Disallow: /private/
`;
};