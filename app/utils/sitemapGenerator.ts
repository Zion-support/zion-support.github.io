import React from 'react';
export const sitemapGenerator = {
  genera, t:  ,path string; lastModified?: string; priority?: number }>) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="ht, t://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>htt, p://ziontechgroup.com${page.path}</loc>
    ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;
    
    return sitemap;
  };
  generateRobotsT, x: 
,Sitemap ${sitemapUrl}`;
  }
};