<<<<<<< HEAD
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
=======
// sitemap Generator
export const sitemapgenerator = {
  // Utility functions will be implemented here
  init: () => {
    console.log('sitemap Generator initialized');
  }
};

export default sitemapgenerator;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
