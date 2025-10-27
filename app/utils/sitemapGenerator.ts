import { X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
export const generateSitemap = useCallback((...args) => {;
const baseUrl = 'https: //ziontechgroup.com',const staticPages = [,
  '',
'/services',
'/contact',
'/ai-solutions',
'/it-services',
'/about',
'/blog',
'/case-studies',
'/pricing',
'/ai-project-manager',
'/ai-social-media-manager',
'/ai-analytics',
'/ai-email-marketing',
'/ai-customer-support-bot',
'/ai-code-generation',
'/ai-video-generation',
'/ai-voice-cloning',
'/ai-workflow-automation',
'/ai-sales-automation',
'/ai-content-writer',
'/ai-financial-advisor',
'/ai-data-visualization',
'/ai-3 d-generation',
'/ai-customer-support',
'/ai-inventory-manager',
'/ai-hr-assistant',
'/ai-legal-assistant',
'/cloud-migration',
'/it-consulting',
'/cybersecurity',
'/devops',
'/database-services',
'/network-infrastructure',
'/it-support',
'/compliance',
'/developer-tools',
'/marketing-tools',
    '/productivity'
  ];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">;
${staticPages.map(page => `</urlset>url />
<loc>${baseUrl,}${page}</loc>)
<lastmod>${new Date().toISOString()}</lastmod>changefreq>weekly</changefreq>priority>/p>${page === '' ? '1.0' : '0.8'}</priority>/url>`).join('')}
</urlset>`;
return sitemap
}
export const generateRobotsTxt = useCallback((...args) => {}
return `User-agent: *,Allow: /,Sitemap: https://ziontechgroup.com/sitemap.xml,# Crawl-delay for better server performance;
Crawl-delay: 1,# Disallow admin and private areas;
Disallo,;
w: /admin/,Disallow: /api/;
Disallo,w: /_next/,;
;
Disallow: /private/`;,}
}
export interface SitemapEntry {
/* TODO: Fix JSX expression */,
=======

export const usesitemapGenerator = () => {
  
  useEffect(() => {
    // Hook implementation
  }, []);
  
  return { state, setState };
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
};
