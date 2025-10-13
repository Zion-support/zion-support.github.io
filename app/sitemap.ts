<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    '/services',
    '/ai-services',
    '/cloud-services',
    '/data-analytics',
    '/cybersecurity',
    '/consultation',
    '/contact',
    '/blog',
    '/case-studies',
    '/partners',
    '/support',
    '/demo',
    '/ai-3d-generation',
    '/edge-computing',
    '/financial-it',
    '/web-development',
  ];
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
import {MetadataRoute}}from 'next';
=======
import { MetadataRoute } from 'next';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
export default function sitemap(): MetadataRoute.Sitemap {return [;}
=======
export default function sitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
=======

export default function sitemap() {
  const baseUrl = 'https://ziontechgroup.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
<<<<<<< HEAD
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
=======
      lastModified: new Date(),
      changeFrequency: 'monthly',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
<<<<<<< HEAD
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-marketing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-automation`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-healthcare`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-fintech`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quantum-computing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/autonomous-systems`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/enterprise`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Add blog posts (mock data - in real app, this would come from a CMS)
  const blogPosts = [
    'ai-enterprise-transformation-2025',
    'ai-2025-2026-mega-trends-breakthrough',
    'ai-2026-autonomous-enterprise-architecture',
    'ai-2026-autonomous-agent-factories',
    'ai-2026-consensus-intelligence-breakthrough',
    'ai-cost-optimization-breakthrough-2026',
  ];

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
=======
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/enterprise`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
