
import { GetServerSideProps } from 'next';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/quantum-services',
    '/space-technology',
    '/innovations',
    '/faq',
    '/docs',
    '/governance/trust',
    '/governance/global-outreach',
    '/zion-stack/api',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map((page) => {
    return `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
