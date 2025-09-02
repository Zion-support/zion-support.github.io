import React from 'react';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const SitemapGenerator: React.FC = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls: SitemapUrl[] = [
    {
      loc: '/',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: '/services',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: '/services/ai',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: '/services/cloud',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: '/services/cybersecurity',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: '/services/infrastructure',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: '/services/transformation',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: '/services/consulting',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: '/solutions',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: '/careers',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    },
    {
      loc: '/pricing',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: '/blog',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.6
    },
    {
      loc: '/case-studies',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: '/research-development',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      loc: '/privacy',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: '/terms',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sitemap</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-lg font-semibold mb-2">XML Sitemap</h2>
        <pre className="text-sm overflow-auto max-h-96">
          {generateSitemap()}
        </pre>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {urls.map((url, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-blue-600">
              <a href={url.loc} className="hover:underline">
                {url.loc === '/' ? 'Home' : url.loc.replace('/', '').replace('-', ' ')}
              </a>
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Priority: {url.priority} | Updated: {url.lastmod}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Change frequency: {url.changefreq}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SitemapGenerator;