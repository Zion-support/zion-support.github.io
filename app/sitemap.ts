<<<<<<< HEAD:app/sitemap.ts
// sitemap file;
// This file is under development;
export default function sitemap() {
  return null;
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
    '/support',
  ];
  return routes.map((route) => ({// TODO: Add content;}
};
  url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}


>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174:src/sitemap.ts
