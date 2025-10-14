export const sitemap Generator = {
  generate: (pages: Array<{ path: string; last Modified?: string; priority?: number }>) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlsetxmlns="http://www.sitemaps.org/schemas/sitemap/0.9">;
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page.path}</loc>
    <loc>${page.path}</loc>
    ${page.last Modified ? `<lastmod>${page.last Modified}</lastmod>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`
    
    return sitemap
  },
  
  generateRobotsTxt: (sitemapUrl: string = 'https://ziontechgroup.com/sitemap.xml') => {
    return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
  }
}