import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/consultation',
    '/demo',
    '/partners',
    '/support',
    '/ai-services',
    '/ai-3d-generation',
    '/ai-automation',
    '/ai-analytics',
    '/ai-consulting',
    '/ai-integration',
    '/ai-optimization',
    '/ai-research',
    '/ai-training',
    '/it-services',
    '/cloud-computing',
    '/cybersecurity',
    '/data-analytics',
    '/edge-computing',
    '/financial-it',
    '/web-development',
    '/case-studies',
    '/blog'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}