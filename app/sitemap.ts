import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zion.app'
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/research',
    '/services',
    '/solutions',
  ]

  // Service routes
  const serviceRoutes = [
    '/services/ai-analytics-platform',
    '/services/ai-chatbot-builder',
    '/services/ai-code-reviewer',
    '/services/ai-content-generator',
    '/services/ai-customer-support',
    '/services/ai-customer-support-automation',
    '/services/ai-data-analytics',
    '/services/ai-email-optimizer',
    '/services/ai-financial-analytics',
    '/services/ai-invoice-generator',
    '/services/ai-marketing-automation',
    '/services/ai-meeting-assistant',
    '/services/ai-powered-crm',
    '/services/ai-project-management-suite',
    '/services/ai-services',
    '/services/ai-social-media-scheduler',
    '/services/ai-social-scheduler',
    '/services/blockchain',
    '/services/blockchain-solutions',
    '/services/cybersecurity',
    '/services/cybersecurity-suite',
    '/services/data-analytics',
    '/services/devops-automation',
    '/services/e-commerce-solutions',
    '/services/erp-solutions',
    '/services/fintech-solutions',
    '/services/healthcare-solutions',
    '/services/iot-solutions',
    '/services/it-services',
    '/services/micro-saas',
    '/services/mobile-app-development',
    '/services/qa-testing',
    '/services/smart-invoice-generator',
    '/services/software-development',
    '/services/web-development',
  ]

  const allRoutes = [...staticRoutes, ...serviceRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.8 : 0.9,
  }))
}