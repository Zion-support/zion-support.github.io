import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ziontechgroup.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://ziontechgroup.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://ziontechgroup.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://ziontechgroup.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://ziontechgroup.com/ai-services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: 'https://ziontechgroup.com/it-services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: 'https://ziontechgroup.com/micro-saas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: 'https://ziontechgroup.com/emerging-tech',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: 'https://ziontechgroup.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: 'https://ziontechgroup.com/case-studies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    }
  ]
}