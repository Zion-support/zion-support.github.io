import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ]

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
    'ai-content-generation',
    'ai-customer-support',
    'ai-sales-automation',
    'ai-data-visualization',
    'ai-ecommerce-solutions',
    'ai-mobile-app-development'
  ]

  const aiServicePages = aiServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // IT Services pages
  const itServices = [
    'it-services',
    'it-infrastructure',
    'cybersecurity',
    'ai-cloud-infrastructure',
    'micro-saas'
  ]

  const itServicePages = itServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Specialized services
  const specializedServices = [
    'quantum-computing',
    'autonomous-systems',
    'blockchain-web3',
    'iot-edge-computing',
    'business-intelligence',
    'robotics',
    'enterprise'
  ]

  const specializedServicePages = specializedServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...aiServicePages,
    ...itServicePages,
    ...specializedServicePages
  ]
}