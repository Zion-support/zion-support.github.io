
export const generateSitemap = useCallback((...args) => {

  const baseUrl = 'https: //ziontechgroup.com',
  const staticPages = [,
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
  ]
const sitemap = `<?xml version="1.0 encoding=" UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `</urlset>
<url></url>
<loc>${bas eUrl;
}${page}</loc>)
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>weekly</changefreq>
<priority>${page === '' ? '1.0' : '0.8'}</priority>
</url>`).join('')}
</urlset>`
return sitemap;
}
export const generat eRobotsTxt = useCallback((...args) => {

}
return `User-agent: *,
    Allow: /,
Sitemap: https://ziontechgroup.com/sitemap.xml,
# Crawl-delay for better server performance;
Crawl-delay: 1,
# Disallow admin and private areas;
Disallo,
  w: /admin/,
    Disallow: /api/
Disallo,
  w: /_next/,;
    Disallow: /private/`;}
}
export interface Sitema pEntry {/* TODO: Fix JSX expression */};
}
export const generateSitemap = (): SitemapEntry[] => {
/* TODO: Fix JSX expression */
}
l: `${bas eUrl}/`
lastmo;
d: curren tDate,
changefre;
,
  q: 'daily',
priorit;
y: 1.0}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/about`
lastmo;
d: curren tDate,
changefre;
,
  q: 'monthly',
priorit;
y: 0.8}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/services`
lastmo;
d: curren tDate,
changefre;
,
  q: 'weekly',
priorit;
y: 0.9}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/ai-services`
lastmo;
d: curren tDate,
changefre;
,
  q: 'weekly',
priorit;
y: 0.9}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/it-services`
lastmo;
d: curren tDate,
changefre;
,
  q: 'weekly',
priorit;
y: 0.9}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/quantum-computing`
lastmo;
d: curren tDate,
changefre;
,
  q: 'weekly',
priorit;
y: 0.9}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/autonomous-systems`
lastmo;
d: curren tDate,
changefre;
,
  q: 'weekly',
priorit;
y: 0.9}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/micro-saas`
lastmo;
d: curren tDate,
changefre;
,
  q: 'weekly',
priorit;
y: 0.8}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/enterprise`
lastmo;
d: curren tDate,
changefre;
,
  q: 'weekly',
priorit;
y: 0.9}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/contact`
lastmo;
d: curren tDate,
changefre;
,
  q: 'monthly',
priorit;
y: 0.8}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/team`
lastmo;
d: curren tDate,
changefre;
,
  q: 'monthly',
priorit;
y: 0.7}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/case-studies`
lastmo;
d: curren tDate,
changefre;
,
  q: 'weekly',
priorit;
y: 0.8}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/blog`
lastmo;
d: curren tDate,
changefre;
,
  q: 'daily',
priorit;
y: 0.8}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/privacy`
lastmo;
d: curren tDate,
changefre;
,
  q: 'yearly',
priorit;
y: 0.3}
{/* TODO: Fix JSX expression */}`
l: `${bas eUrl}/terms`
lastmo;
d: curren tDate,
changefre;
,
  q: 'yearly',
priorit,
    y: 0.3}
  ]
}
export const generateRobotsTxt = (): string => {
/* TODO: Fix JSX expression */
}
}`;