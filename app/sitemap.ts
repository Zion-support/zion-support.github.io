import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl= 'https://ziontechgroup.com';
  
  return [
    {
      url: base Url,
      last Modified: new Date(),
      change Frequency: 'yearly',
      priority: 1,
    },
    {
      url: `${base Url}/ai-solutions`,
      last Modified: new Date(),
      change Frequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base Url}/it-solutions`,
      last Modified: new Date(),
      change Frequency: 'monthly',
      priority: 0.8,
    },
  ];
}