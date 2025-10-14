export const sitemapGenerator = {
  generateSitemap: (pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;
    
    return sitemap;
  },
  
  generateRobotsTxt: (sitemapUrl: string, disallowPaths: string[] = []) => {
    const robots = `User-agent: *
${disallowPaths.map(path => `Disallow: ${path}`).join('\n')}
Sitemap: ${sitemapUrl}`;
    
    return robots;
  }
};
