// Sitemap generator utilities

export function sitemapGenerator() {
  return {
    generateSitemap: (routes: string[]) => {
      const baseUrl = 'https://ziontechgroup.com';
      return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;
    }
  };
}
