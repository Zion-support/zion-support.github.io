import { GetServerSideProps } from 'next';

interface SitemapUrl {}
  loc: string;
  lastmod: string;'
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const Sitemap = () => {}
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {';
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  // Define all pages with their metadata;
  const staticPages: SitemapUrl[] = []
    {'
      loc: '/',
      lastmod: currentDate,'
      changefreq: 'daily',
      priority: 1.0,
    },
    {'
      loc: '/about',
      lastmod: currentDate,'
      changefreq: 'monthly',
      priority: 0.9,
    },
    {'
      loc: '/services',
      lastmod: currentDate,'
      changefreq: 'weekly',
      priority: 0.9,
    },
    {'
      loc: '/ai-services',
      lastmod: currentDate,'
      changefreq: 'weekly',
      priority: 0.9,
    },
    {'
      loc: '/it-services',
      lastmod: currentDate,'
      changefreq: 'weekly',
      priority: 0.9,
    },
    {'
      loc: '/micro-saas',
      lastmod: currentDate,'
      changefreq: 'weekly',
      priority: 0.8,
    },
    {'
      loc: '/contact',
      lastmod: currentDate,'
      changefreq: 'monthly',
      priority: 0.8,
    },
    {'
      loc: '/careers',
      lastmod: currentDate,'
      changefreq: 'weekly',
      priority: 0.7,
    },
    {'
      loc: '/case-studies',
      lastmod: currentDate,'
      changefreq: 'monthly',
      priority: 0.7,
    },
    {'
      loc: '/pricing',
      lastmod: currentDate,'
      changefreq: 'monthly',
      priority: 0.8,
    },
    {'
      loc: '/resources',
      lastmod: currentDate,'
      changefreq: 'weekly',
      priority: 0.6,
    },
    {'
      loc: '/guides',
      lastmod: currentDate,'
      changefreq: 'weekly',
      priority: 0.6,
    },
    {'
      loc: '/blog',
      lastmod: currentDate,'
      changefreq: 'daily',
      priority: 0.7,
    },
    {'
      loc: '/api-docs',
      lastmod: currentDate,'
      changefreq: 'monthly',
      priority: 0.5,
    },
    {'
      loc: '/privacy',
      lastmod: currentDate,'
      changefreq: 'yearly',
      priority: 0.3,
    },
    {'
      loc: '/terms',
      lastmod: currentDate,'
      changefreq: 'yearly',
      priority: 0.3,
    },
  ];

  // Service pages;
  const servicePages = ['
    'ai-development','
    'ai-implementation','
    'ai-solutions','
    'cloud-migration','
    'cloud-solutions','
    'cybersecurity','
    'cybersecurity-advanced','
    'data-analytics','
    'database-solutions','
    'mobile-development','
    'web-development','
    'security-solutions','
    'blockchain-services','
    'iot-solutions','
    'iot-edge-services','
    'quantum-computing','
    'rpa-automation','
    'startup-solutions','
    'enterprise-solutions','
    'custom-development','
    'consulting',
  ];

  // Add service pages;
  servicePages.forEach(service => {}
    staticPages.push({}`
      loc: `/${service}`,
      lastmod: currentDate,'
      changefreq: 'monthly',
      priority: 0.6,
    });
  });

  // Industry pages;
  const industryPages = ['
    'ecommerce','
    'education','
    'energy','
    'finance','
    'government','
    'healthcare','
    'manufacturing','
    'real-estate','
    'retail','
    'transportation',
  ];

  industryPages.forEach(industry => {}
    staticPages.push({}`
      loc: `/industries/${industry}`,
      lastmod: currentDate,'
      changefreq: 'monthly',
      priority: 0.5,
    });
  });

  // Generate sitemap XML"`
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>"
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages;
  .map(`
    page => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`
  </url>`
  )'
  .join('\n')}`
</urlset>`;
'
  res.setHeader('Content-Type', 'text/xml');'
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {}
    props: {},
  };
};

     `;
       });
       .join("")}
   </urlset>;
 `;
}
function SiteMap() {
  // getServerSideProps will do the heavy lifting;
}
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();
  return {
    props: {}
  }
}
export default SiteMap;
  // We generate the XML sitemap with the posts data;
  const sitemap = generateSiteMap ();
;
  res.set_header ("Content - Type", "text / xml");
  // we send the XML to the browser;
  res.write (sitemap);
  res.end ();
;
  return {
    props: {},
  }
}
;
export default SiteMap;