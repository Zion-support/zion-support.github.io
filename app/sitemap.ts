import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  const currentDate = new Date().toISOString()

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
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
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
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
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
  ]

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
    'ai-customer-support',
    'ai-sales-automation',
    'ai-data-visualization',
    'ai-lead-generation',
    'ai-document-processing',
    'ai-mobile-app-development',
    'ai-ecommerce-solutions',
    'ai-writing-assistant',
    'ai-email-assistant',
    'ai-scheduler',
    'ai-chatbot-builder',
    'ai-video-generation',
    'ai-voice-cloning',
    'ai-music-composition',
    'ai-fashion-design',
    'ai-fitness-coach',
    'ai-3d-generation',
    'ai-mobile-builder',
    'ai-crm',
    'ai-analytics-dashboard',
    'ai-content-studio',
    'ai-predictive-analytics',
    'ai-email-marketing',
    'ai-scheduler',
    'ai-voice-cloning',
    'ai-workflow-automation',
    'ai-writing-assistant'
  ]

  // IT Services pages
  const itServices = [
    'it-services',
    'it-infrastructure',
    'cybersecurity',
    'devops',
    'database',
    'cloud-services',
    'networking',
    'managed-it',
    'business-intelligence',
    'analytics-tools',
    'developer-tools',
    'compliance',
    'security'
  ]

  // Micro SAAS pages
  const microSaasServices = [
    'micro-saas',
    'expense-tracker',
    'productivity',
    'marketing-tools',
    'smart-analytics'
  ]

  // Emerging Technology pages
  const emergingTech = [
    'quantum-computing',
    'blockchain-web3',
    'autonomous-systems',
    'iot-edge-computing',
    'robotics'
  ]

  // Generate service pages
  const servicePages = [
    ...aiServices,
    ...itServices,
    ...microSaasServices,
    ...emergingTech
  ].map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages]
}