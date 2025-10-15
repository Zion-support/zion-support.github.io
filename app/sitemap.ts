export const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/ai-services',
    '/micro-saas-solutions',
    '/it-services',
    '/contact',
    '/pricing',
    '/privacy-policy',
    '/terms-of-service',
    '/help',
    '/blog',
    '/careers',
    '/partnerships',
    '/api-docs'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};