import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/research',
    '/services',
    '/solutions',
  ]

  // AI Services routes
  const aiServices = [
    'ai-analytics-dashboard',
    'ai-analytics-platform',
    'ai-chatbot',
    'ai-chatbot-builder',
    'ai-chatbot-platform',
    'ai-code-assistant',
    'ai-code-reviewer',
    'ai-content-generation',
    'ai-content-generator',
    'ai-content-optimizer',
    'ai-content-writer',
    'ai-copilots',
    'ai-customer-insights',
    'ai-customer-support',
    'ai-customer-support-automation',
    'ai-data-analysis',
    'ai-data-analytics',
    'ai-documentation-generator',
    'ai-email-optimizer',
    'ai-expense-tracker',
    'ai-finance-analyzer',
    'ai-financial-analytics',
    'ai-financial-analyzer',
    'ai-fintech-solutions',
    'ai-healthcare-analytics',
    'ai-healthcare-assistant',
    'ai-hr-management',
    'ai-inventory-management',
    'ai-invoice-generator',
    'ai-marketing-automation',
    'ai-meeting-assistant',
    'ai-meeting-transcriber',
    'ai-powered-crm',
    'ai-powered-tools',
    'ai-predictive-analytics',
    'ai-project-management',
    'ai-project-management-suite',
    'ai-project-manager',
    'ai-services',
    'ai-social-media-scheduler',
    'ai-social-scheduler',
    'ai-testing-automation',
    'ai-video-generator',
  ]

  // Other services routes
  const otherServices = [
    'analytics-dashboard',
    'api-development',
    'api-testing-suite',
    'automated-workflow-builder',
    'automation-solutions',
    'automation-tools',
    'blockchain',
    'blockchain-development',
    'blockchain-solutions',
    'business-automation',
    'chatbot-development',
    'ci-cd-pipeline-builder',
    'cloud-migration',
    'cloud-optimization',
    'cloud-security-audit',
    'cloud-services',
    'computer-vision-solutions',
    'crm-platform',
    'crm-solution',
    'customer-feedback-analyzer',
    'customer-support-automation',
    'cybersecurity',
    'cybersecurity-consulting',
    'cybersecurity-suite',
    'data-analytics',
    'database-optimization',
    'devops-automation',
    'digital-transformation',
    'document-processing-automation',
    'e-commerce-solutions',
    'ecommerce-platform',
    'edtech',
    'email-automation',
    'email-automation-suite',
    'email-campaign-manager',
    'email-marketing-automation',
    'erp-solutions',
    'expense-tracker',
    'fintech',
    'fintech-solutions',
    'healthcare-solutions',
    'healthtech',
    'helpdesk-platform',
    'industry-solutions',
    'industry-solutions/finance',
    'industry-solutions/healthcare',
    'invoice-automation',
    'iot-solutions',
    'it-services',
    'lead-generation-tool',
    'micro-saas',
    'mobile-app-development',
    'mobile-development',
    'natural-language-processing',
    'predictive-analytics',
    'project-management',
    'project-management-suite',
    'qa-testing',
    'real-time-data-processing',
    'seo-analyzer',
    'smart-invoice-generator',
    'social-media-automation',
    'social-media-management',
    'social-media-scheduler',
    'software-development',
    'team-collaboration-hub',
    'voice-recognition',
    'vulnerability-scanner',
    'web-application-development',
    'web-development',
    'website-analyzer',
  ]

  // Generate sitemap entries
  const routes: MetadataRoute.Sitemap = []

  // Add static routes
  staticRoutes.forEach(route => {
    routes.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : 0.8,
    })
  })

  // Add AI services
  aiServices.forEach(service => {
    routes.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add other services
  otherServices.forEach(service => {
    routes.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  return routes
}