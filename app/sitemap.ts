<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import {MetadataRoute}}from 'next';
export default function sitemap(): MetadataRoute.Sitemap {return [;}
=======
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
    return [
>>>>>>> origin/main
    {
      url: 'https://ziontechgroup.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,},
    {url: 'https://ziontechgroup.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,},
    {url: 'https://ziontechgroup.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,},
    {url: 'https://ziontechgroup.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,},
    {url: 'https://ziontechgroup.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,},
    {url: 'https://ziontechgroup.com/ai-3d-generation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,},
    {url: 'https://ziontechgroup.com/edge-computing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,},
    {url: 'https://ziontechgroup.com/financial-it',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,},
    {url: 'https://ziontechgroup.com/consultation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,},
    {url: 'https://ziontechgroup.com/partners',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,},
    {url: 'https://ziontechgroup.com/support',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,},
  ]
}
>>>>>>> origin/main
