import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://ziontechgroup.com';
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/solutions',
    '/blog',
    '/talent',
    '/auth',
    '/auth/callback',
    '/auth/forgot-password',
    '/auth/reset-password',
    '/auth/verify'
  ];

  const blogPages = [
    '/blog/5g-technology-and-its-impact-on-iot',
    '/blog/ai-powered-marketplaces-the-future-of-digital-commerce',
    '/blog/api-first-development-building-scalable-systems',
    '/blog/augmented-reality-in-enterprise-applications',
    '/blog/blockchain-technology-in-modern-business-solutions',
    '/blog/cloud-native-architecture-best-practices'
  ];

  const servicePages = [
    '/services/ai-autonomous-business-operations-platform',
    '/services/ai-cybersecurity-threat-intelligence',
    '/services/ai-financial-trading-platform',
    '/services/ai-healthcare-diagnostics',
    '/services/ai-supply-chain-optimization',
    '/services/blockchain-solutions',
    '/services/cloud-infrastructure',
    '/services/iot-platforms'
  ];

  const allPages = [...staticPages, ...blogPages, ...servicePages];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => {
  const url = `${baseUrl}${page}`;
  const priority = page === '' ? '1.0' : page.startsWith('/blog') ? '0.8' : '0.9';
  const changefreq = page === '' ? 'daily' : page.startsWith('/blog') ? 'weekly' : 'monthly';
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(sitemap);
}