import { NextApiRequest, NextApiResponse } from
  'next';

const baseUrl = 'https://ziontechgroup.com';

const staticPages = [
  '/',
  '/services',
  '/services-catalog',
  '/micro-saas',
  '/ai-services',
  '/it-services',
  '/pricing',
  '/contact',
  '/about',
  '/privacy',
  '/terms',
  '/faq'
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `<url><loc>${baseUrl}${page}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>weekly</changefreq><priority>${page === '/' ? '1.0' : '0.8'}</priority></url>`
    )
    .join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  res.status(200).send(sitemap);
}