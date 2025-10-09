export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): SitemapEntry[] => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];

  return [
    // Main pages
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/case-studies`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8
    },
    {
      url: `${baseUrl}/team`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/enterprise`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    
    // AI Services
    {
      url: `${baseUrl}/ai-services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/ai-marketing`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-automation`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-healthcare`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-fintech`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-content-generation`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-data-analytics`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-cybersecurity`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-workflow-automation`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-ecommerce-solutions`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-mobile-app-development`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-cloud-infrastructure`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    
    // IT Services
    {
      url: `${baseUrl}/it-services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/it-infrastructure`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/cybersecurity`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    
    // Specialized Services
    {
      url: `${baseUrl}/quantum-computing`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/autonomous-systems`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/blockchain-web3`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/iot-edge-computing`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/business-intelligence`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/micro-saas`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    
    // Robotics
    {
      url: `${baseUrl}/robotics`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    }
  ];
};

export const generateSitemapXML = (): string => {
  const sitemap = generateSitemap();
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const xmlFooter = '</urlset>';
  
  const xmlBody = sitemap.map(entry => 
    `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  ).join('\n');
  
  return xmlHeader + xmlBody + '\n' + xmlFooter;
};
