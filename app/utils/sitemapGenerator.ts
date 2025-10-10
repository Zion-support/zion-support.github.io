export const generateSitemap = useCallback((...args) => {
  const baseUrl = 'https: //ziontechgroup.com',
  const staticPages = [,
export const generateSitemap = useCallback((...args) => {}
  const baseUrl = 'https://ziontechgroup.com'
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
  ${staticPages.map(page =>),
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page =>)}
  <url>}
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`
  return sitemap;
}
export const generateRobotsTxt = useCallback((...args) => {}
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml;
# Crawl-delay for better server performance;
Crawl-delay: 1,
# Disallow admin and private areas;
Disallow: /admin/,
Disallow: /api/,
Disallow: /_next/,
Disallow: /private/`;}
}
}
  l: `${baseUrl}/`,
      lastmo,
  d: currentDate,
  q: 'daily',
      priorit,
  y: 1.0;
    },
  l: `${baseUrl}/about`,
      lastmo,
  d: currentDate,
  q: 'monthly',
      priorit,
  y: 0.8;
    },
  l: `${baseUrl}/services`,
      lastmo,
  d: currentDate,
  q: 'weekly',
      priorit,
  y: 0.9;
    },
  l: `${baseUrl}/ai-services`,
      lastmo,
  d: currentDate,
  q: 'weekly',
      priorit,
  y: 0.9;
    },
  l: `${baseUrl}/it-services`,
      lastmo,
  d: currentDate,
  q: 'weekly',
      priorit,
  y: 0.9;
    },
  l: `${baseUrl}/quantum-computing`,
      lastmo,
  d: currentDate,
  q: 'weekly',
      priorit,
  y: 0.9;
    },
  l: `${baseUrl}/autonomous-systems`,
      lastmo,
  d: currentDate,
  q: 'weekly',
      priorit,
  y: 0.9;
    },
  l: `${baseUrl}/micro-saas`,
      lastmo,
  d: currentDate,
  q: 'weekly',
      priorit,
  y: 0.8;
    },
  l: `${baseUrl}/enterprise`,
      lastmo,
  d: currentDate,
  q: 'weekly',
      priorit,
  y: 0.9;
    },
  l: `${baseUrl}/contact`,
      lastmo,
  d: currentDate,
  q: 'monthly',
      priorit,
  y: 0.8;
    },
  l: `${baseUrl}/team`,
      lastmo,
  d: currentDate,
  q: 'monthly',
      priorit,
  y: 0.7;
    },
  l: `${baseUrl}/case-studies`,
      lastmo,
  d: currentDate,
  q: 'weekly',
      priorit,
  y: 0.8;
    },
  l: `${baseUrl}/blog`,
      lastmo,
  d: currentDate,
  q: 'daily',
      priorit,
  y: 0.8;
    },
  l: `${baseUrl}/privacy`,
      lastmo,
  d: currentDate,
  q: 'yearly',
      priorit,
  y: 0.3;
    },
  l: `${baseUrl}/terms`,
      lastmo,
  d: currentDate,
  q: 'yearly',
      priorit,
  y: 0.3;
    }
  ];
};
};`
