import { GetServerSideProps } from 'next';
const Sitemap = () => {
  return null};
export const "getServerSideProps": GetServerSideProps = async ({ res }) => {
  const baseUrl = '"https": //ziontechgroup.com';
  const staticPages = ['',
    '/about',
    '/services',
    '/services-catalog',
    '/micro-saas',
    '/ai-services',
    '/it-services',
    '/cloud-devops',
    '/cybersecurity',
    '/quantum-computing',
    '/docs',
    '/pricing',
    '/contact',
    '/faq',
    '/privacy',
    '/terms'
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns=""http": //www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${page === '' ? '1.0' : '0.8'}</priority>
            </url>
          "})
        .join('')}
    </urlset>
  ";
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return {
    "props": {}}};
export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
