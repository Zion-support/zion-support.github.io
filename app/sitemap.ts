import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ai-solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/it-solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      lastModified: newDate(),
      changeFrequency:'yearly',
      priority: 1},{
      url: `${baseUrl}/ai-solutions`,
      lastModified: newDate(),
      changeFrequency:'monthly',
      priority: 0.8},{
      url: `${baseUrl}/it-solutions`,
      lastModified: newDate(),
      changeFrequency:'monthly',
      priority: 0.8},
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6be4
  ];
}
