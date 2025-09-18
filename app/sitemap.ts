import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zion.app'
  
<<<<<<< HEAD
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ai-automation-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cybersecurity-solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // New 2026 content
    {
      url: `${baseUrl}/blog/ai-2026-ultimate-business-transformation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/ai-automation-success-stories-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-automation-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/ai-2026-hyperautomation-business-playbook`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/quantum-ai-2026-business-transformation-ultimate-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // New comprehensive content pages
    {
      url: `${baseUrl}/ai-2026-ultimate-comprehensive-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quantum-computing-breakthroughs-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/neural-interface-revolution-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }
=======
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/contact',
    '/blog',
    '/case-studies',
    '/resources',
    '/tools',
    '/ai-2025',
    '/ai-2026',
    '/quantum-ai-2026',
    '/neural-interface-2026',
    '/autonomous-systems-2026',
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  ]

  // Blog posts (you can expand this with dynamic data)
  const blogPosts = [
    '/blog/ai-2026-operational-reliability-blueprint',
    '/blog/ai-2026-real-world-eval-gates-case-studies',
    '/blog/ai-2026-release-scorecards',
    '/blog/ai-2026-enterprise-ai-security-blueprint',
    '/blog/ai-2025-enterprise-agents-vs-autonomous-copilots',
    '/blog/ai-2026-production-evidence-hub-blueprint',
    '/blog/ai-2026-trustworthy-autonomous-agents-blueprint',
  ]

  const allPages = [...staticPages, ...blogPosts]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page.includes('/blog/') ? 'weekly' : 'monthly',
    priority: page === '' ? 1.0 : page.includes('/blog/') ? 0.8 : 0.6,
  }))
}