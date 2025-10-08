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
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
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
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
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
    'ai-data-analytics',
    'ai-cybersecurity',
    'ai-workflow-automation',
    'ai-cloud-infrastructure',
    'ai-ecommerce-solutions',
    'ai-mobile-app-development',
  ];

  const aiServicePages = aiServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // IT Services pages
  const itServices = [
    'it-services',
    'cybersecurity',
    'cloud-services',
    'devops',
    'database-services',
    'network-services',
  ];

  const itServicePages = itServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Specialized services
  const specializedServices = [
    'quantum-computing',
    'autonomous-systems',
    'blockchain-web3',
    'iot-edge-computing',
    'business-intelligence',
    'micro-saas',
  ];

  const specializedServicePages = specializedServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog posts (mock data - in production, this would come from a CMS)
  const blogPosts = [
    'ai-enterprise-transformation-2025',
    'ai-2025-2026-mega-trends-breakthrough',
    'ai-2026-autonomous-enterprise-architecture',
    'ai-2026-autonomous-agent-factories',
    'ai-2026-consensus-intelligence-breakthrough',
    'ai-cost-optimization-breakthrough-2026',
  ];

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Guides pages
  const guides = [
    'ai-implementation-guide',
    'digital-transformation-roadmap',
    'enterprise-ai-strategy',
    'cloud-migration-checklist',
  ];

  const guidePages = guides.map(guide => ({
    url: `${baseUrl}/guides/${guide}`,
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
    ...guidePages,
  ];
}