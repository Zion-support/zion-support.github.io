<<<<<<< HEAD
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zion.app';
  const currentDate = new Date();
  
  return [
    {
<<<<<<< HEAD
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
=======
      url: 'https://ziontechgroup.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/it-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-cybersecurity`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/test-page`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
=======


export default function sitemap(): MetadataRoute.Sitemap {const _baseUrl = 'https://ziontechgroup.com'}
  const _routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/ai-services',
    '/ai-marketing',
    '/ai-automation',
    '/ai-healthcare',
    '/ai-fintech',
    '/quantum-computing',
    '/micro-saas',
    '/ai-content-generation',
    '/it-infrastructure',
    '/ai-cybersecurity',
    '/ai-data-analytics',
    '/ai-ecommerce-solutions',
    '/ai-customer-support',
    '/ai-sales-automation',
    '/ai-workflow-automation',
    '/ai-data-visualization',
    '/ai-lead-generation',
    '/ai-document-processing',
    '/robotics',
    '/iot-edge-computing',
    '/blockchain-web3',
    '/business-intelligence',
    '/devops',
    '/ai-mobile-app-development',
    '/database',
    '/enterprise',
    '/careers',
    '/privacy',
    '/terms',
    '/support'];
  return routes.map((route) => ({// TODO: Add content;}
};
  url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8}))
}


>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
