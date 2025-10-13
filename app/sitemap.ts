import React from 'react';

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
