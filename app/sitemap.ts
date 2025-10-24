import React from 'react'
import { MetadataRoute } from 'next'
// Import services data safely
let servicesData: any = null
try { servicesData = require('./data/servicesData').servicesData }
} catch (error) { console.warn('Could not load services data for sitemap:', error) }
}

export default function sitemap(): MetadataRoute.Sitemap { const baseUrl = 'https://zion.app'
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/contact',
    '/careers',
    '/blog',
    '/case-studies',
    '/privacy-policy',
    '/terms-of-service',
  ]
  // Generate sitemap entries for static pages
  const staticSitemap: MetadataRoute.Sitemap = staticPages.map((page) => ({ }
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1.0 : 0.8,
  }))
  // If services data is not available, return only static pages
  if (!servicesData) { return staticSitemap }
  }

  // Generate sitemap entries for AI services
  const aiServicesSitemap: MetadataRoute.Sitemap = (servicesData.aiServices || []).map((service: any) => ({`
    url: `${baseUrl}/ai-${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  // Generate sitemap entries for IT services
  const itServicesSitemap: MetadataRoute.Sitemap = (servicesData.itServices || []).map((service: any) => ({`
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  // Generate sitemap entries for 5G services
  const g5ServicesSitemap: MetadataRoute.Sitemap = (servicesData.g5Services || []).map((service: any) => ({`
    url: `${baseUrl}/5g-${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  // Generate sitemap entries for AI services subcategories
  const aiServicesSubSitemap: MetadataRoute.Sitemap = (servicesData.aiServicesSubcategories || []).map((service: any) => ({`
    url: `${baseUrl}/ai-services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  return [
    ...staticSitemap,
    ...aiServicesSitemap,
    ...itServicesSitemap,
    ...g5ServicesSitemap,
    ...aiServicesSubSitemap,
  ]
}`;