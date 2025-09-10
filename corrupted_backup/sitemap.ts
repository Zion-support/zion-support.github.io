>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
import { GetServerSideProps } from 'next'; const Sitemap = () => { return null}; export const getServerSideProps: GetServerSideProps = async ({ res }) => { const baseUrl = 'https: const staticPages = [ '','/about','/services','/services-catalog','/micro-saas','/ai-services','/it-services','/cloud-devops','/cybersecurity','/quantum-computing','/docs','/pricing','/contact','/faq','/privacy','/terms' ]; const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${staticPages .map((page) => { return ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url> `}) .join('')} </urlset> `; res.setHeader('Content-Type','text/xml'); res.write(sitemap); res.end(); return { props: {},}}; export default Sitemap;
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
 const complianceServices = [ '/soc2-compliance-automation'] const allRoutes = [ ...routes, ...aiServices, ...quantumServices, ...networkServices, ...complianceServices] return allRoutes.map ( (route) => ({
  url: `$ {
  baseUrl 
}$ {
  route 
}`;
lastModified: new Date ();
changeFrequency: 'weekly';
priority: route === '' ? 1 : 0.8 
}) ) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/sitemap.ts
