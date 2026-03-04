import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  const lastModified = new Date()
  type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

  const coreRoutes: Array<{
    path: string
    changeFrequency: ChangeFrequency
    priority: number
  }> = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/solutions', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/pricing', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.75 },
    { path: '/case-studies', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/search', changeFrequency: 'monthly', priority: 0.65 },
  ]

  const featuredAppPaths = [
    '/zion-ai-chatbot-builder',
    '/zion-ai-customer-support-pro',
    '/zion-ai-email-assistant',
    '/zion-ai-marketing-automation',
    '/zion-ai-social-media-manager',
    '/zion-ai-sales-predictor',
    '/zion-ai-predictive-analytics',
    '/zion-ai-code-assistant',
    '/zion-ai-code-reviewer',
    '/zion-ai-api-tester',
    '/zion-ai-database-optimizer',
    '/zion-devops-automation',
    '/zion-performance-monitor',
    '/zion-security-shield',
    '/zion-cybersecurity-audit',
    '/zion-cloud-vault',
    '/zion-data-sync',
    '/zion-ai-translation-service',
    '/zion-ai-video-generator',
  ] as const

  return [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route.path === '/' ? '' : route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...featuredAppPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}