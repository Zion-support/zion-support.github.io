ursor/automate-test-improve-and-merge-code-646c;
import { GetServerSideProps  } from 'next';
const Sitemap = () => {return null;
}export const getServerSideProps: GetServerSideProps = async ({ res }) => {const baseUrl  = 'https://ziontechgroup.com';const staticPages = [;
    '','/about','/contact','/services','/ai-services','/it-services','/micro-saas','/quantum-services','/space-technology','/innovations','/faq','/docs','/governance/trust','/governance/global-outreach','/zion-stack/api';
  ];const sitemap = `<?xml version="1.0" encoding="UTF-8"?>;
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">;
${staticPages;
  .map((page) => {return `;
  <url>;
    <loc>${baseUrl}${page}</loc>;
    <lastmod>${new Date().toISOString()}</lastmod>;
    <changefreq>weekly</changefreq>;
    <priority>${page === '' ? '1.0' : '0.8'}</priority>;
  </url>`;
  }).join('')}
</urlset>`;res.setHeader('Content-Type', 'text/xml')res.write(sitemap)res.end()return {props: {}
  }}export default Sitemap;
export default Sitemap;
     `;
       }).join("")}
   </urlset>;
 `;
}
function SiteMap() {// getServerSideProps will do the heavy lifting;
}
export const getServerSideProps: GetServerSideProps = async ({ res }) => {const sitemap = generateSiteMap()res.setHeader("Content-Type", "text/xml")// we send the XML to the browser;
  res.write(sitemap)res.end()return {props: {}
  }
}
export default SiteMap;
  // We generate the XML sitemap with the posts data;
  const sitemap  = generateSiteMap ()res.set_header ("Content - Type", "text / xml")// we send the XML to the browser;
  res.write (sitemap)res.end ()return {props: {}
  }
}export default SiteMap;
ursor/automate-test-improve-and-merge-code-646c;