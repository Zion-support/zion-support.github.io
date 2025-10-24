/**
 * Sitemap Generator
 * Generates sitemap and robots.txt for SEO optimization
 */
export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}
export const generateSitemap = (): SitemapEntry[] => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  return [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/ai-services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/it-services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/quantum-computing`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/pricing`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8
    }
  ];
};
export const generateRobotsTxt = (): string => {
  const baseUrl = 'https://ziontechgroup.com';
  return `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-pages.xml
Sitemap: ${baseUrl}/sitemap-blog.xml
# Crawl-delay for better server performance
Crawl-delay: 1
# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`;
};
export const generateSitemapXml = (entries: SitemapEntry[]): string => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return xml;
};