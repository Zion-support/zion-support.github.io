export const sitemapGenerator ={
  generate: (pages: Array<{ path: string; lastModified?: string; priority?: number }>) => {
    const sitemap = `<?xml version ="1.0" encodin g ="UTF-8"?>
<urlsetxmln s ="http://www.sitemaps.org/schemas/sitemap/0.9">;
${pages.map(pag e => `  <url>
    <loc>https://ziontechgroup.com${page.path}</loc>
    <loc>${page.path}</loc>
    ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` :''}
    ${page.priority ? `<priority>${page.priority}</priority>` :''}
  </url>`).join('\n')}
</urlset>`
    
    return sitemap
  },
  
  generateRobotsTxt: (sitemapUrl: strin g ='https://ziontechgroup.com/sitemap.xml') => {
    return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
  }
}