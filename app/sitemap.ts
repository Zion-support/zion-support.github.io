import { MetadataRoute } from 'next'

// Import services data safely
let servicesData: any = null
try {
  servicesData = require('./data/servicesData').servicesData
} catch (error) {
  console.warn('Could not load services data for sitemap:', error)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zion.app'
  
  // Static pages
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
      url: `${baseUrl}/ai-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/it-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  ]

  // Dynamic pages from services data
  const dynamicPages = servicesData ? servicesData.map((service: any) => ({
    url: `${baseUrl}${service.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  })) : []

  return [...staticPages, ...dynamicPages]
}