<<<<<<< HEAD
<<<<<<< HEAD
=======


function generateSiteMap() {;
  const baseUrl = "https://ziontechgroup && ziontechgroup.com";
  // Static pages;
  const staticPages = [;
    "",;
    "/about",;
    "/services",;
    "/solutions",;
    "/contact",;
    "/careers",;
    "/blog",;
    "/faq",;
    "/privacy",;
    "/terms",;
    "/accessibility",;
    "/compliance",;
    "/ai-services",;
    "/it-services",;
    "/micro-saas",;
    "/cybersecurity",;
    "/cloud-solutions",;
    "/blockchain-services",;
    "/iot-solutions",;
    "/digital-transformation",;
    "/enterprise-solutions",;
    "/startup-solutions",;
    "/custom-development",;
    "/consulting",;
    "/support",;
    "/partners",;
    "/news",;
    "/press",;
    "/events",;
    "/webinars",;
    "/training",;
    "/tutorials",;
    "/case-studies",;
    "/pricing",;
    "/quote",;
    "/demo",;
    "/login",;
    "/register",;
    "/search",;
    "/sitemap",;
    "/status",;
    "/help",;
    "/guides",;
    "/resources",;
    "/api-docs",;
    "/talent",;
    "/team",;
    "/community",;
    "/automation",;
    "/rpa-automation",;
    "/data-analytics",;
    "/database-solutions",;
    "/ecommerce",;
    "/quantum-computing",;
    "/ai-development",;
    "/ai-chatbot-development",;
    "/ai-model-development-chat",;
    "/blockchain",;
    "/iot",;
    "/iot-edge-services",;
    "/cloud-devops",;
    "/cybersecurity-advanced",;
    "/services-extended",;
    "/industries",;
    "/industries/education",;
    "/industries/finance",;
    "/industries/government",;
    "/industries/healthcare",;
    "/industries/manufacturing",;
    "/industries/retail",;
    "/industries/real-estate",;
    "/industries/transportation",;
    "/industries/energy",;
    "/solutions/cloud-migration",;
    "/solutions/custom",;
    "/solutions/digital-transformation",;
    "/solutions/enterprise",;
    "/solutions/industry",;
    "/solutions/startup",;
    "/services/ai-chatbot-development",;
    "/services/ai-model-development-chat",;
  ];
  return `<?xml version="1 && 1.0" encoding="UTF-8"?>;
   <urlset xmlns="http://www && www.sitemaps.org/schemas/sitemap/0 && 0.9">;
     ${staticPages;
       .map((page) => {;
         return `;
       <url>;
         <loc>${baseUrl}${page}</loc>;
         <lastmod>${new Date().toISOString()}</lastmod>;
         <changefreq>weekly</changefreq>;
         <priority>${page === "" ? "1 && 1.0" : "0 && 0.8"}</priority>;
       </url>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
     `;
       });
       .join("")}
   </urlset>;
 `;
}
<<<<<<< HEAD
=======

import { GetServerSideProps  } from './next';
;
/**
 * generateSiteMap - Function description
 */
function generateSiteMap() {
  const base_url = "https://ziontechgroup.com";
;
  // Static pages;
  const static_pages = [;
    "",
    "/about",
    "/services",
    "/solutions",
    "/contact",
    "/careers",
    "/blog",
    "/faq",
    "/privacy",
    "/terms",
    "/accessibility",
    "/compliance",
    "/ai - services",
    "/it - services",
    "/micro - saas",
    "/cybersecurity",
    "/cloud - solutions",
    "/blockchain - services",
    "/iot - solutions",
    "/digital - transformation",
    "/enterprise - solutions",
    "/startup - solutions",
    "/custom - development",
    "/consulting",
    "/support",
    "/partners",
    "/news",
    "/press",
    "/events",
    "/webinars",
    "/training",
    "/tutorials",
    "/case - studies",
    "/pricing",
    "/quote",
    "/demo",
    "/login",
    "/register",
    "/search",
    "/sitemap",
    "/status",
    "/help",
    "/guides",
    "/resources",
    "/api - docs",
    "/talent",
    "/team",
    "/community",
    "/automation",
    "/rpa - automation",
    "/data - analytics",
    "/database - solutions",
    "/ecommerce",
    "/quantum - computing",
    "/ai - development",
    "/ai - chatbot - development",
    "/ai - model - development - chat",
    "/blockchain",
    "/iot",
    "/iot - edge - services",
    "/cloud - devops",
    "/cybersecurity - advanced",
    "/services - extended",
    "/industries",
    "/industries / education",
    "/industries / finance",
    "/industries / government",
    "/industries / healthcare",
    "/industries / manufacturing",
    "/industries / retail",
    "/industries / real - estate",
    "/industries / transportation",
    "/industries / energy",
    "/solutions / cloud - migration",
    "/solutions / custom",
    "/solutions / digital - transformation",
    "/solutions / enterprise",
    "/solutions / industry",
    "/solutions / startup",
    "/services / ai - chatbot - development",
    "/services / ai - model - development - chat",
  ];
;
  return `<?xml version="1.0" encoding="UTF - 8"?>;
  <urlset xmlns="http://www.sitemaps.org / schemas / sitemap / 0.9">;
    ${static_pages;
      .map ((page) => {
        return `;
      <url>;
        <loc>${base_url}${page}</loc>;
        <lastmod>${new Date ().toISOString ()}</lastmod>;
        <changefreq > weekly</changefreq>;
        <priority>${page === "" ? "1.0" : "0.8"}</priority>;
      </url>;
    `;
      });
      .join ("")}
    </urlset>;
`;
}
/**
 * SiteMap - Function description
 */

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
function SiteMap() {
  // getServerSideProps will do the heavy lifting;
}
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
<<<<<<< HEAD
=======


function SiteMap() {;
  // getServerSideProps will do the heavy lifting;
}
export const getServerSideProps: GetServerSideProps = async ({ res }) => {;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  // We generate the XML sitemap with the posts data;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======
import { GetServerSideProps } from 'next';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  // Define all pages with their metadata
  const staticPages: SitemapUrl[] = [
    {
      loc: '/',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      loc: '/services',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: '/ai-services',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: '/it-services',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: '/micro-saas',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: '/careers',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7,
    },
    {
      loc: '/case-studies',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: '/pricing',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: '/resources',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6,
    },
    {
      loc: '/guides',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6,
    },
    {
      loc: '/blog',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: '/api-docs',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5,
    },
    {
      loc: '/privacy',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      loc: '/terms',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3,
    },
  ];

  // Service pages
  const servicePages = [
    'ai-development',
    'ai-implementation',
    'ai-solutions',
    'cloud-migration',
    'cloud-solutions',
    'cybersecurity',
    'cybersecurity-advanced',
    'data-analytics',
    'database-solutions',
    'mobile-development',
    'web-development',
    'security-solutions',
    'blockchain-services',
    'iot-solutions',
    'iot-edge-services',
    'quantum-computing',
    'rpa-automation',
    'startup-solutions',
    'enterprise-solutions',
    'custom-development',
    'consulting',
  ];

  // Add service pages
  servicePages.forEach(service => {
    staticPages.push({
      loc: `/${service}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });

  // Industry pages
  const industryPages = [
    'ecommerce',
    'education',
    'energy',
    'finance',
    'government',
    'healthcare',
    'manufacturing',
    'real-estate',
    'retail',
    'transportation',
  ];

  industryPages.forEach(industry => {
    staticPages.push({
      loc: `/industries/${industry}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5,
    });
  });

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
>>>>>>> main
