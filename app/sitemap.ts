import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/ai-ops',
    '/edge-computing',
    '/financial-it',
    '/healthcare-it',
    '/iot-platform',
    '/web-development',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemap;
}