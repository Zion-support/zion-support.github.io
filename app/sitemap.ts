import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/team',
    '/careers',
    '/privacy',
    '/terms',
    '/cookies',
    '/gdpr',
    '/compliance',
    '/support',
    '/docs',
    '/api-docs',
    '/status',
    '/system-status',
    '/news',
    '/case-studies',
    '/consultation',
    '/demo',
    '/pricing',
    '/offline',
  ]

  // AI Services pages
  const aiServices = [
    '/ai-services',
    '/ai-marketing',
    '/ai-automation',
    '/ai-healthcare',
    '/ai-fintech',
    '/ai-content-generation',
    '/ai-data-analytics',
    '/ai-cybersecurity',
    '/ai-lead-generation',
    '/ai-document-processing',
    '/ai-mobile-app-development',
    '/ai-ecommerce-solutions',
    '/ai-chatbot-builder',
    '/ai-voice-cloning',
    '/ai-writing-assistant',
    '/ai-scheduler',
    '/ai-email-assistant',
    '/ai-3d-generation',
    '/ai-analytics-dashboard',
    '/ai-crm',
  ]

  // IT Services pages
  const itServices = [
    '/it-services',
    '/cloud-services',
    '/cybersecurity',
    '/devops',
    '/database',
    '/networking',
    '/it-infrastructure',
    '/security',
  ]

  // Micro SAAS pages
  const microSaas = [
    '/micro-saas',
    '/business-apps',
    '/productivity',
    '/marketing-tools',
    '/developer-tools',
    '/expense-tracker',
    '/task-manager-pro',
  ]

  // Emerging Tech pages
  const emergingTech = [
    '/quantum-computing',
    '/robotics',
    '/iot-edge-computing',
    '/blockchain-web3',
    '/business-intelligence',
    '/autonomous-systems',
    '/blockchain',
    '/iot-edge',
  ]

  // Other pages
  const otherPages = [
    '/analytics-tools',
    '/business-intelligence',
    '/smart-analytics',
  ]

  // Blog pages (assuming they exist)
  const blogPages = Array.from({ length: 29 }, (_, i) => `/blog/post-${i + 1}`)

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...aiServices,
    ...itServices,
    ...microSaas,
    ...emergingTech,
    ...otherPages,
    ...blogPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page.includes('/blog/') ? 'weekly' : 'monthly',
    priority: page === '' ? 1.0 : 
             page.includes('/ai-services') || page.includes('/it-services') ? 0.9 :
             page.includes('/about') || page.includes('/contact') ? 0.8 :
             page.includes('/blog/') ? 0.7 : 0.6,
  }))
}