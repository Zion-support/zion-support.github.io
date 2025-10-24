<<<<<<< HEAD
/**
 * Sitemap Generator
 * Generates sitemap and robots.txt for SEO optimization
 */

export interface SitemapEntry {
  loc: string
  lastmod: string
  changefreq: string
  priority: number
=======
export const generateSitemap = useCallback((...args) => {const baseUrl = 'https://ziontechgroup.com'
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
'/ai-3 d-generation',
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"? />
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9"></urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticPages.map(page =</ `
<url />
<loc>${baseUrl}${page}</loc />
<lastmod>${new Date().toISOString()}</lastmod />
<changefreq>weekly</changefreq />
<priority>${page === '' ? '1.0' : '0.8'}</priority />
</url>`).join('')}
</urlset>`];
return sitemap;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
}

export const generateSitemap = (): SitemapEntry[] => {
  const baseUrl = 'https://ziontechgroup.com'
  const currentDate = new Date().toISOString()

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
      loc: `${baseUrl}/autonomous-systems`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/micro-saas`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/enterprise`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/team`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/case-studies`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ]
}

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /
<<<<<<< HEAD
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`
}
=======
Sitemap: https://ziontechgroup.com/sitemap.xml;
# Crawl-delay for better server performance;
Crawl-delay: 1,
# Disallow admin and private areas;
Disallow: /admin/,
Disallow: /api/,
Disallow: /_next/,
Disallow: /private/`;, }
}
export interface SitemapEntry {/* TODO: Fix JSX expression  */
}
export const generateSitemap = (): SitemapEntry[] => {/* TODO: Fix JSX expression  */
l: `${baseUrl}/`,
lastmo,
d: currentDate,
changefre,
q: 'daily',
priorit,
y: 1.0;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/about`,
lastmo,
d: currentDate,
changefre,
q: 'monthly',
priorit,
y: 0.8;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/services`,
lastmo,
d: currentDate,
changefre,
q: 'weekly',
priorit,
y: 0.9;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/ai-services`,
lastmo,
d: currentDate,
changefre,
q: 'weekly',
priorit,
y: 0.9;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/it-services`,
lastmo,
d: currentDate,
changefre,
q: 'weekly',
priorit,
y: 0.9;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/quantum-computing`,
lastmo,
d: currentDate,
changefre,
q: 'weekly',
priorit,
y: 0.9;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/autonomous-systems`,
lastmo,
d: currentDate,
changefre,
q: 'weekly',
priorit,
y: 0.9;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/micro-saas`,
lastmo,
d: currentDate,
changefre,
q: 'weekly',
priorit,
y: 0.8;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/enterprise`,
lastmo,
d: currentDate,
changefre,
q: 'weekly',
priorit,
y: 0.9;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/contact`,
lastmo,
d: currentDate,
changefre,
q: 'monthly',
priorit,
y: 0.8;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/team`,
lastmo,
d: currentDate,
changefre,
q: 'monthly',
priorit,
y: 0.7;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/case-studies`,
lastmo,
d: currentDate,
changefre,
q: 'weekly',
priorit,
y: 0.8;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/blog`,
lastmo,
d: currentDate,
changefre,
q: 'daily',
priorit,
y: 0.8;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/privacy`,
lastmo,
d: currentDate,
changefre,
q: 'yearly',
priorit,
y: 0.3;
, },
{/* TODO: Fix JSX expression  */`
l: `${baseUrl}/terms`,
lastmo,
d: currentDate,
changefre,
q: 'yearly',
priorit,
y: 0.3;
, }
]
}
export const generateRobotsTxt = (): string => {/* TODO: Fix JSX expression */}
};`
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
