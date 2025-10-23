/**
 * Sitemap Generator
 * Generates XML sitemaps for SEO
 */

export interface SitemapPage {
  url: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export const generateSitemap = (pages: SitemapPage[]): string => {
  const baseUrl = 'https://ziontechgroup.com'
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  return sitemap
}

export const generateStaticSitemap = (): string => {
  const staticPages: SitemapPage[] = [
    { url: '', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
    { url: '/services', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/contact', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { url: '/ai-solutions', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/it-services', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/about', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
    { url: '/blog', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 0.8 },
    { url: '/case-studies', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    { url: '/pricing', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 }
  ]

  return generateSitemap(staticPages)
}

export const generateRobotsTxt = (sitemapUrl: string, disallowPaths: string[] = []): string => {
  const disallowRules = disallowPaths.map(path => `Disallow: ${path}`).join('\n')
  return `User-agent: *
${disallowRules}
Sitemap: ${sitemapUrl}`
}

export default generateSitemap