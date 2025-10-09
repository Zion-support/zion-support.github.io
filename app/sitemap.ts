import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
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
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
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

  // AI Services pages
  const aiServices = [
    'ai-services',
    'ai-marketing',
    'ai-automation',
    'ai-healthcare',
    'ai-fintech',
    'ai-content-generation',
    'ai-data-analytics',
    'ai-cybersecurity',
    'ai-workflow-automation',
    'ai-cloud-infrastructure',
    'ai-ecommerce-solutions',
    'ai-mobile-app-development',
    'ai-sales-automation',
    'ai-data-visualization',
    'ai-customer-support',
  ];

  const aiServicePages = aiServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // IT Services pages
  const itServices = [
    'it-services',
    'it-infrastructure',
    'cybersecurity',
    'micro-saas',
  ];

  const itServicePages = itServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Specialized services
  const specializedServices = [
    'quantum-computing',
    'autonomous-systems',
    'blockchain-web3',
    'iot-edge-computing',
    'business-intelligence',
    'robotics',
    'enterprise',
  ];

  const specializedServicePages = specializedServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Blog posts (example - in real app, this would be dynamic)
  const blogPosts = [
    'ai-enterprise-transformation-2025',
    'ai-2025-2026-mega-trends-breakthrough',
    'ai-2026-autonomous-enterprise-architecture',
    'ai-2026-autonomous-agent-factories',
    'ai-cost-optimization-breakthrough-2026',
    'ai-2026-consensus-intelligence-breakthrough',
  ];

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...aiServicePages,
    ...itServicePages,
    ...specializedServicePages,
    ...blogPages,
  ];
}