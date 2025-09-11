<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
     `;
       });
       .join("")}
   </urlset>;
 `;
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // We generate the XML sitemap with the posts data;
  const sitemap = generateSiteMap();
  res && res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser;
  res && res.write(sitemap);
  res && res.end();
  return {;
    props: {},;
  };
};
export default SiteMap;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
;