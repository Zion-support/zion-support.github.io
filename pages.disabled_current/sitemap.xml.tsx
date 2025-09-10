import { GetServerSideProps } from 'next';

function generateSiteMap() {
  const baseUrl = 'https://ziontechgroup.com';
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/solutions',
    '/industries',
    '/contact',
    '/team',
    '/careers',
    '/blog',
    '/press',
    '/partners',
    '/docs',
    '/help',
    '/community',
    '/tutorials',
    '/case-studies',
    '/white-papers',
    '/privacy',
    '/terms',
    '/cookies',
    '/gdpr',
    '/security',
    '/accessibility',
    '/faq',
    '/pricing',
    '/support',
    '/resources',
    '/news',
    '/events',
    '/webinars',
    '/training',
    '/talent',
    '/compliance',
    '/status',
    '/search',
    '/newsletter',
    '/register',
    '/forgot-password',
    '/services/cloud-devops',
    '/services/cybersecurity',
    '/services/data-analytics',
    '/services/quantum-computing',
    '/solutions/enterprise',
    '/solutions/healthcare',
    '/solutions/finance',
    '/solutions/retail',
    '/solutions/education',
    '/solutions/government',
    '/solutions/digital-transformation',
    '/solutions/smb',
    '/industries/healthcare',
    '/industries/finance',
    '/industries/education',
    '/industries/government',
    '/industries/manufacturing',
    '/industries/retail',
    '/docs/api'
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map((page) => {
         return `
       <url>
           <loc>${baseUrl}${page}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>${page === '' ? '1.0' : '0.8'}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;