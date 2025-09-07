import { GetServerSideProps } from 'next';
const Sitemap = () => {
  return null};
}

export const "getServerSideProps": GetServerSideProps = async ({ res }) => {
  const baseUrl = '"https": //ziontechgroup && ziontechgroup.com';
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
  const sitemap = `<?xml version="1 && 1.0" encoding="UTF-8"?>
    <urlset xmlns=""http": //www && www.sitemaps.org/schemas/sitemap/0 && 0.9">
      ${staticPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${page === '' ? '1 && 1.0' : '0 && 0.8'}</priority>
            </url>
          "})
        .join('')}
    </urlset>
  ";
  res && res.setHeader('Content-Type', 'text/xml');
  res && res.write(sitemap);
  res && res.end();
  return {
    "props": {}}};
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}
=======
export default Sitemap;
<<<<<<< HEAD
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
<<<<<<< HEAD
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
=======

<<<<<<< HEAD
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
=======
=======
<<<<<<< HEAD
export default Sitemap;
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1 && 1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1 && 1.0' : '0 && 0.8'}</priority> </url> `}) .join('')} </urlset> `; res && res.setHeader('Content-Type','text/xml'); res && res.write(sitemap); res && res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1 && 1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1 && 1.0' : '0 && 0.8'}</priority> </url> `}) .join('')} </urlset> `; res && res.setHeader('Content-Type','text/xml'); res && res.write(sitemap); res && res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1 && 1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1 && 1.0' : '0 && 0.8'}</priority> </url> `}) .join('')} </urlset> `; res && res.setHeader('Content-Type','text/xml'); res && res.write(sitemap); res && res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1 && 1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1 && 1.0' : '0 && 0.8'}</priority> </url> `}) .join('')} </urlset> `; res && res.setHeader('Content-Type','text/xml'); res && res.write(sitemap); res && res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1 && 1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1 && 1.0' : '0 && 0.8'}</priority> </url> `}) .join('')} </urlset> `; res && res.setHeader('Content-Type','text/xml'); res && res.write(sitemap); res && res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1 && 1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1 && 1.0' : '0 && 0.8'}</priority> </url> `}) .join('')} </urlset> `; res && res.setHeader('Content-Type','text/xml'); res && res.write(sitemap); res && res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
ursor/add-new-services-and-deploy-updates-0462
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
