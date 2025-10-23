export const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  const staticPages = [
    '',
    '/services',
    '/contact',
    '/ai-solutions',
    '/it-services',
    '/about',
    '/blog',
    '/case-studies',
    '/pricing',
    '/ai-project-manager',
    '/ai-social-media-manager',
    '/ai-analytics',
    '/ai-email-marketing',
    '/ai-customer-support-bot',
    '/ai-code-generation',
    '/ai-video-generation',
    '/ai-voice-cloning',
    '/ai-workflow-automation',
    '/ai-sales-automation',
    '/ai-content-writer',
    '/ai-financial-advisor',
    '/ai-data-visualization',
    '/ai-3d-generation',
    '/ai-customer-support',
    '/ai-inventory-manager',
    '/ai-hr-assistant',
    '/ai-legal-assistant',
    '/cloud-migration',
    '/it-consulting',
    '/cybersecurity',
    '/devops',
    '/database-services',
    '/network-infrastructure',
    '/it-support',
    '/compliance',
    '/developer-tools',
    '/marketing-tools',
    '/productivity'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `
<url>
<loc>${baseUrl}${page}</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>weekly</changefreq>
<priority>${page === '' ? '1.0' : '0.8'}</priority>
</url>`).join('')}
</urlset>`;
  
  return sitemap;
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Sitemap: https://ziontechgroup.com/sitemap.xml
# Crawl-delay for better server performance
Crawl-delay: 1
# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`;
};

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export const generateSitemapEntries = (): SitemapEntry[] => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/ai-services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/it-services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/quantum-computing`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/autonomous-systems`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/micro-saas`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/enterprise`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/team`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/case-studies`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8
    },
    {
      url: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];
};