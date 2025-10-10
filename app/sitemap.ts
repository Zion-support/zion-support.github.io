import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/ai-consulting',
    '/machine-learning',
    '/data-analytics',
    '/process-automation',
    '/cloud-solutions',
    '/cybersecurity',
    '/ai-ops',
    '/edge-computing',
    '/financial-it',
    '/healthcare-it',
    '/iot-platform',
    '/web-development',
    '/contact',
    '/blog',
    '/case-studies',
    '/careers',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const blogRoutes = [
    '/blog/ai-trends-2024',
    '/blog/machine-learning-basics',
    '/blog/cloud-migration-guide',
    '/blog/cybersecurity-best-practices',
    '/blog/iot-implementation',
    '/blog/edge-computing-benefits',
    '/blog/financial-technology',
    '/blog/healthcare-digital-transformation',
  ];

  const sitemap: MetadataRoute.Sitemap = [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })),
    ...blogRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];

  return sitemap;
}