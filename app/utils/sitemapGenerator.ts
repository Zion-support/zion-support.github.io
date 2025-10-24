/**
 * Sitemap Generator
 * Generates sitemap and robots.txt for SEO optimization
 */

export interface SitemapEntry {
  loc: string
  lastmod: string
  changefreq: string
  priorit,
  y: number
}

export const generateSitemap = $2;
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallo,
  w: /private/`
}