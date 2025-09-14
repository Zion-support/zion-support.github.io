import { MetadataRoute } from 'next'

<<<<<<< HEAD
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  
=======
const baseUrl = 'https://zion.app'

export default function sitemap(): MetadataRoute.Sitemap {
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
<<<<<<< HEAD
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
=======
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'daily',
=======
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
<<<<<<< HEAD
    // New blog posts
    {
      url: `${baseUrl}/blog/ai-2025-ultimate-business-transformation-revolution`,
=======
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // New 2025 Content
    {
      url: `${baseUrl}/blog/ai-2025-ultimate-automation-revolution-enterprise-breakthrough`,
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
<<<<<<< HEAD
      url: `${baseUrl}/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // New resources
    {
      url: `${baseUrl}/resources/ai-implementation-ultimate-roadmap-2025-comprehensive`,
=======
      url: `${baseUrl}/case-studies/fortune-500-ai-transformation-2500-roi-success-story`,
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
<<<<<<< HEAD
      url: `${baseUrl}/case-studies/global-manufacturing-ai-transformation`,
=======
      url: `${baseUrl}/resources/ai-2025-implementation-ultimate-roadmap-comprehensive-guide`,
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
<<<<<<< HEAD
    {
      url: `${baseUrl}/case-studies/financial-services-ai-revolution`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/ai-implementation-guide-2025`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
=======
    // Additional blog posts
    {
      url: `${baseUrl}/blog/ai-2025-enterprise-transformation-complete-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ai-2025-quantum-computing-breakthrough`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ai-2025-edge-computing-revolution-ultimate-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Case studies
    {
      url: `${baseUrl}/case-studies/fortune-500-ai-transformation-2025-ultimate-success`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Resources
    {
      url: `${baseUrl}/resources/ai-implementation-checklist-2025`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Tools
    {
      url: `${baseUrl}/tools/ai-readiness-assessment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
    }
  ]
}