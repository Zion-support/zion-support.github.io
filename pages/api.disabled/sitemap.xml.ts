import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://ziontechgroup.com';
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/solutions',
    '/industries',
    '/resources',
    '/careers',
    '/news',
    '/case-studies',
    '/white-papers',
    '/webinars',
    '/partners',
    '/team',
    '/pricing',
    '/faq',
    '/help',
    '/docs',
    '/status',
    '/support',
    '/privacy',
    '/terms',
    '/cookies',
    '/compliance',
    '/accessibility',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/solutions/digital-transformation',
    '/solutions/cloud-migration',
    '/industries/healthcare',
    '/industries/finance',
    '/industries/manufacturing',
    '/industries/retail',
    '/industries/education',
    '/industries/government'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${page === '' ? '1.0' : '0.8'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}