import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const staticPages = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/pricing',
    '/solutions',
    '/careers',
    '/blog',
    '/case-studies',
    '/privacy',
    '/terms'
  ];
  const allPages = [
    ...staticPages, ...blogPages,
    ...servicePages, ...categoryPages,
    ...chatContentPages,  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      const priority = page === '/' ? '1.0' : '0.8';
      const changefreq = page === '/' ? 'daily' : 'weekly';
            return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`
    })
    .join('')}
</urlset>`;

  res.status(200).send(sitemap);}