import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  
  const routes = [
    '',
    '/about',
<<<<<<< HEAD
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
=======
    '/ai-services',
    '/ai-marketing',
    '/ai-automation',
    '/ai-healthcare',
    '/ai-fintech',
    '/ai-content-generation',
    '/ai-data-analytics',
    '/ai-cybersecurity',
    '/ai-cloud-infrastructure',
    '/ai-ecommerce-solutions',
    '/ai-mobile-app-development',
    '/ai-sales-automation',
    '/ai-workflow-automation',
    '/it-services',
    '/it-infrastructure',
    '/micro-saas',
    '/quantum-computing',
    '/autonomous-systems',
    '/blockchain-web3',
    '/iot-edge-computing',
    '/business-intelligence',
    '/cybersecurity',
    '/cloud-services',
    '/devops',
    '/database',
    '/networking',
    '/robotics',
    '/contact',
    '/blog',
    '/case-studies',
    '/team',
    '/careers',
    '/news',
    '/docs',
    '/api-docs',
    '/support',
    '/status',
    '/privacy',
    '/terms',
    '/cookies',
    '/gdpr',
    '/security',
  ]
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c5f

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
<<<<<<< HEAD
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
import {MetadataRoute}}from 'next';
export default function sitemap(): MetadataRoute.Sitemap {return [;}
=======
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c5f
