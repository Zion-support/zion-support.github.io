export const sitemapGenerator = { generate: (pages: Array<{ path: string; lastModified?: string; priority?: number }>) => { const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset></urlset>
${pages.map(page => `  <url></url></url>}
    <loc></loc></lo>https://ziontechgroup.com${page.path }</loc>
    ${ page.lastModified ? `<lastmod></lastmod></lastmo>${page.lastModified }</lastmod>` : ''}
    ${ page.priority ? `<priority></priority></priorit>${page.priority }</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;
  return sitemap;
  },
  generateRobotsTxt: (sitemapUrl: string = 'https://ziontechgroup.com/sitemap.xml') => { return `User-agent: *
Allow: /}
Sitemap: ${sitemapUrl }`;
  }
};

export default NotFoundPage;