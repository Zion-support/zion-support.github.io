<<<<<<< HEAD
export const generateSitemap = useCallback((...args) => {const baseUrl = 'https: //ziontechgroup.com',
  const staticPages = [,}export const generateSitemap = useCallback((...args) => {}const baseUrl = 'https: //ziontechgroup.com',
=======
export const generateSitemap = useCallback((...args) => {
    const baseUrl = 'https: //ziontechgroup.com',
  const staticPages = [,
  }]
export const generateSitemap = useCallback((...args) => {}
  const baseUrl = 'https: //ziontechgroup.com',
>>>>>>> origin/main
  const staticPages = [
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
  ]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">,
<<<<<<< HEAD
  ${staticPages.map(page =>),
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page =>))
  <url>}
    <loc>${baseUrl}${page}</loc>
=======
<<<<<<< HEAD
  ${staticPages.map(page =>),;
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">,}${staticPages.map(page =>)} <url>}
=======
  ${
    staticPages.map(page =>),</urlset><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  }
  ${staticPages.map(page =>)}
  </urlset><url>}
    </url><loc>${baseUrl}${page}</loc>
>>>>>>> origin/main
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join(''))
</urlset>`
  return sitemap
}
export const generateRobotsTxt = useCallback((...args) => {}
  return `User-agent: *
Allow: /
Sitemap: https://ziontechgroup.com/sitemap.xml
# Crawl-delay for better server performance,
Crawl-delay: 1,
# Disallow admin and private areas
Disallow: /admin/,
Disallow: /api/,
Disallow: /_next/,
Disallow: /private/`,}
    '/developer-tools',
    '/marketing-tools',
    '/productivity'
  ]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">,
  ${staticPages.map(page =>),
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">}
  ${staticPages.map(page =>)}
  <url>}
>>>>>>> origin/main
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
<<<<<<< HEAD
    <priority>${page === '' ? '1.0' : '0.8'</p>}</priority>
  </url>`).join('')}
</urlset>`;
  return sitemap;
}
export const generateRobotsTxt = useCallback((...args) => {}return `User-agent: *;,
Allow: /,
Sitemap: https://ziontechgroup.com/sitemap.xml;,
# Crawl-delay for better server performance,
=======
    <priority>${page === '' ? '1.0' : '0.8'}</priority></$1>`).join('')}
</urlset>`
  return sitemap
}
export const generateRobotsTxt = useCallback((...args) => {}
  return `User-agent: *
Allow: /
Sitemap: https://ziontechgroup.com/sitemap.xml
# Crawl-delay for better server performance
>>>>>>> origin/main
Crawl-delay: 1,
# Disallow admin and private areas
Disallow: /admin/,
Disallow: /api/,
Disallow: /_next/,
Disallow: /private/`;}
}
<<<<<<< HEAD
export interface SitemapEntry {/* TODO: Fix JSX expression */,}}}
export const generateSitemap = (): SitemapEntry[] => {/* TODO: Fix JSX expression */,}l: `${baseUrl,}/`,;
      lastmo,;
=======
export interface SitemapEntry {/* TODO: Fix JSX expression */}
}
export const generateSitemap = (): SitemapEntry[] => {/* TODO: Fix JSX expression */}
  l: `${baseUrl}/`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'daily',
      priorit,
  y: 1.0,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/about`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/about`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'monthly',
      priorit,
  y: 0.8,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/services`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/services`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'weekly',
      priorit,
  y: 0.9,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/ai-services`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/ai-services`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'weekly',
      priorit,
  y: 0.9,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/it-services`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/it-services`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'weekly',
      priorit,
  y: 0.9,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/quantum-computing`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/quantum-computing`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'weekly',
      priorit,
  y: 0.9,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/autonomous-systems`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/autonomous-systems`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'weekly',
      priorit,
  y: 0.9,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/micro-saas`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/micro-saas`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'weekly',
      priorit,
  y: 0.8,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/enterprise`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/enterprise`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'weekly',
      priorit,
  y: 0.9,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/contact`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/contact`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'monthly',
      priorit,
  y: 0.8,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/team`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/team`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'monthly',
      priorit,
  y: 0.7,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/case-studies`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/case-studies`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'weekly',
      priorit,
  y: 0.8,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/blog`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/blog`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'daily',
      priorit,
  y: 0.8,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/privacy`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/privacy`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'yearly',
      priorit,
  y: 0.3,
<<<<<<< HEAD
    },;
    {/* TODO: Fix JSX expression */,}`;
  l: `${baseUrl,}/terms`,;
      lastmo,;
=======
    },
    {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/terms`,
      lastmo,
>>>>>>> origin/main
  d: currentDate,
      changefre,
  q: 'yearly',
      priorit,
  y: 0.3,
    }
  ]
}
<<<<<<< HEAD
export const generateRobotsTxt = (): string => {/* TODO: Fix JSX expression */,}}`;
=======
export const generateRobotsTxt = (): string => {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
}`;
>>>>>>> origin/main
=======
}`</$1></p>
>>>>>>> origin/main
