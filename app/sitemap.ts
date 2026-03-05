import type { MetadataRoute } from 'next'
import { AI_SERVICE_LINKS } from './constants/navigation'
import { BLOG_SLUGS } from './lib/blog-data'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  const lastModified = new Date()
  type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

  const blogRoutes = BLOG_SLUGS.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const coreRoutes: Array<{
    path: string
    changeFrequency: ChangeFrequency
    priority: number
  }> = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/solutions', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/ai-services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/pricing', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.75 },
    { path: '/case-studies', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/community', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/industries', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/careers', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/consultation', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/search', changeFrequency: 'monthly', priority: 0.65 },
    { path: '/micro-saas-services', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/automation', changeFrequency: 'monthly', priority: 0.65 },
  ]

  const featuredCatalogPaths = [
    '/zion-ai-marketing-automation',
    '/zion-ai-social-media-manager',
    '/zion-ai-sales-predictor',
    '/zion-performance-monitor',
    '/zion-data-sync',
    '/zion-ai-translation-service',
    '/zion-ai-video-generator',
    '/zion-ai-onboarding-pro',
    '/zion-ai-pricing-optimizer',
    '/zion-ai-accessibility-checker',
    '/zion-ai-notification-hub',
    '/zion-ai-talent-analytics',
    '/zion-ai-sentiment-analyzer',
  ] as const
  const featuredAppPaths = Array.from(
    new Set([...AI_SERVICE_LINKS.map((service) => service.href), ...featuredCatalogPaths]),
  )

  return [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route.path === '/' ? '' : route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogRoutes,
    ...featuredAppPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}