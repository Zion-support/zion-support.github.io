import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/careers',
    '/privacy',
    '/terms',
    '/cookies',
    '/gdpr',
    '/compliance',
    '/support',
    '/status',
    '/system-status',
    '/docs',
    '/api-docs',
    '/news',
    '/sitemap'
  ]

  // Service pages
  const servicePages = [
    '/ai-services',
    '/ai-marketing',
    '/ai-automation',
    '/ai-healthcare',
    '/ai-fintech',
    '/ai-content-generation',
    '/ai-data-analytics',
    '/ai-data-visualization',
    '/ai-ecommerce-solutions',
    '/ai-sales-automation',
    '/ai-workflow-automation',
    '/ai-customer-support',
    '/ai-cybersecurity',
    '/ai-cloud-infrastructure',
    '/quantum-computing',
    '/autonomous-systems',
    '/blockchain',
    '/blockchain-web3',
    '/business-intelligence',
    '/business-apps',
    '/cloud-services',
    '/cybersecurity',
    '/devops',
    '/it-infrastructure',
    '/it-services',
    '/micro-saas',
    '/marketing-tools',
    '/developer-tools',
    '/productivity',
    '/networking',
    '/database',
    '/robotics',
    '/iot-edge',
    '/iot-edge-computing',
    '/case-studies',
    '/team'
  ]

  // Generate sitemap entries
  const sitemap: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Static pages
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    })),
    // Service pages
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]

  return sitemap
}