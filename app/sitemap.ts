<<<<<<< HEAD
import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  return [
=======
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/ai-services',
    '/cloud-services',
    '/data-analytics',
    '/cybersecurity',
    '/consultation',
    '/contact',
    '/blog',
    '/case-studies',
    '/partners',
    '/support',
    '/demo',
    '/ai-3d-generation',
    '/edge-computing',
    '/financial-it',
    '/web-development',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
import {MetadataRoute}}from 'next';
export default function sitemap(): MetadataRoute.Sitemap {return [;}
>>>>>>> cursor/delete-records-30ea
    {
      url: 'https://ziontechgroup.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ziontechgroup.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ziontechgroup.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ziontechgroup.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/delete-records-30ea
