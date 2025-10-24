import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  const currentDate = new Date()
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 1},
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8},
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
<<<<<<< HEAD
      url: `${baseUrl}/accessibility`,
      lastModified: currentDate,
=======
      url: 'https://ziontechgroup.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ziontechgroup.com/contact',
      lastModified: new Date(),
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ai-accounting-assistant`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-agricultural-intelligence-pro`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://ziontechgroup.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://ziontechgroup.com/ai-3d-generation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://ziontechgroup.com/edge-computing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://ziontechgroup.com/financial-it',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://ziontechgroup.com/consultation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://ziontechgroup.com/partners',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://ziontechgroup.com/support',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}