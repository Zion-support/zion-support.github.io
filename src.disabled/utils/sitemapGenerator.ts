// Sitemap generator utility
export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://zion.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages: SitemapEntry[] = [
    {
      url: '/',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      url: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/team',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/enterprise',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/privacy',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: '/terms',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

Sitemap: https://zion.app/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;
};