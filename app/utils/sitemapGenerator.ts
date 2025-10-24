interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export const generateSitemap = (): SitemapEntry[] => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
  ];
};