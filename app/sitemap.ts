import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  
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
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts
  const blogPosts = [
    'ai-2025-neural-interface-revolution-enterprise-breakthrough',
    'ai-2025-autonomous-ai-agents-enterprise-revolution',
    'ai-2025-edge-computing-revolution-ultimate-guide',
    'ai-2025-enterprise-transformation-complete-guide',
    'ai-2025-quantum-computing-breakthrough-enterprise',
    'ai-2026-future-predictions-revolutionary',
    'quantum-ai-breakthrough-2025-next-generation-autonomy',
  ]

  // Case studies
  const caseStudies = [
    'fortune-500-neural-interface-transformation-2025-ultimate-success',
    'retail-autonomous-ai-transformation-2025-ultimate-success',
    'fortune-500-ai-transformation-2025-ultimate-success',
    'ai-2025-advanced-analytics-900-roi-success-story',
    'ai-2025-healthcare-transformation-1200-roi-success',
    'ai-2025-manufacturing-transformation-ultimate-success-story',
  ]

  // Resources
  const resources = [
    'neural-interface-implementation-master-guide-2025',
    'ai-2025-implementation-master-guide-ultimate-success',
    'ai-implementation-checklist-2025',
    'quantum-computing-implementation-guide-2025',
    'ai-2025-advanced-analytics-implementation-master-guide',
  ]

  // Tools
  const tools = [
    'ai-2025-readiness-assessment-ultimate',
    'ai-2030-readiness-assessment',
    'ai-2026-roi-calculator',
    'ai-transformation-readiness-assessment',
    'quantum-ai-readiness-assessment-2026',
  ]

  // Generate dynamic pages
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const caseStudyPages = caseStudies.map(study => ({
    url: `${baseUrl}/case-studies/${study}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const resourcePages = resources.map(resource => ({
    url: `${baseUrl}/resources/${resource}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const toolPages = tools.map(tool => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...blogPages,
    ...caseStudyPages,
    ...resourcePages,
    ...toolPages,
  ]
}