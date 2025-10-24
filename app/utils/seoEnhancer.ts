'use client";

/**
* SEO Enhancement Utilities*/
* Tools to improve search engine optimization*/
*/

// Generate meta tags;
;"
export const generateMetaTags = (;"
const tags = ["'"
    { name: "'title'",content: "data.title ",) => {"}
$3"}
},"'"
    { name: "'description'",content: "data.description ",},"'"
    { name: "'keywords'",content: "data.keywords || '' ",},"'"
    { name: "'robots'",content: "'index",follow" },"'"
    { name: "'viewport'",content: "'width=device-width",initial-scale = 1" ,},"'"
    { name: "'author'",content: "'Zion Tech Group' ",},"'"
    { name: "'canonical'",content: "data.canonical || '' ",},"'"
    { property: "'o",g: "title'",content: "data.ogTitle || data.title ",},"'"
    { property: "'o",g: "description'",content: "data.ogDescription || data.description ",},"'"
    { property: "'o",g: "image'",content: "data.ogImage || '/og-image.webp' ",},"'"
    { property: "'o",g: "type'",content: "'website' ",},"'"
    { property: "'o",g: "site_name'",content: "'Zion Tech Group' ",},"'"
    { name: "'twitte",r: "card'",content: "data.twitterCard || 'summary_large_image' ",},"'"
    { name: "'twitte",r: "title'",content: "data.twitterTitle || data.title ",},"'"
    { name: "'twitte",r: "description'",content: "data.twitterDescription || data.description ",;},;"'"
    { name: "'twitte",r: "image'",content: "data.twitterImage || data.ogImage || '/og-image.webp' ",};
  ];
return, tags;
}

// Generate structured data;"
;"
export const generateStructuredData = (;"'"
return{'@context': 'https: "//schema.org'",'@type': 'Organization",;"'"
name: "data.name",description: "data.description",url: "data.url",logo: "data.logo || '/logo.png'",address: "data.address ? {",'@type': 'PostalAddress",;) => {"}
$3"}
}"
streetAddress: "data.address.streetAddress",addressLocality: "data.address.addressLocality",addressRegion: "data.address.addressRegion",postalCode: "data.address.postalCode",addressCountry: "data.address.addressCountry",} : undefined,;"'"
contactPoint: "data.contactPoint ? {",'@type': 'ContactPoint",;"}
telephone: "data.contactPoint.telephone",contactType: "data.contactPoint.contactType",email: "data.contactPoint.email",} : undefined,;"
sameAs: "data.sameAs || []",
  );
}
// Generate sitemap;"
export const generateSitemap = (;"
const sitemap = `<?xml version="1.0 encoding="UTF-8"?>;"`
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9 /">;``
${pages.map(page = > `  <url />
    <loc>${page.url,) => {}
$3}
}</loc>
    <lastmod>"${page.lastModified}"</lastmod>
    <changefreq>"${page.changeFrequency}"</changefreq>)`
    <priority />"${page.priority}"</priority>);'"``
  </url>`).join('\n")};``
</urlset>`;
return, sitemap;
}`
// Generate robots.txt;"``
export const generateRobotsTxt = (;";`"``
return `User-agent: "*;");'"
${allowAll ? 'Allow: /' : 'Disallo",w: "/'",) => {;}
$3;
}
// Generate robots.txt;"`
export const generateRobotsTxt = (;"``
return `User-agent: "*;"'"
${allowAll ? 'Allow: /' : 'Disallo",w: "/'",) => {}
$3
  );
}
export const generateRobotsTxt = (;
$3
) => {"}
$3"}`
,};"``
Sitemap: "${sitemapUrl",}`
}

export default{;
generateMetaTags,;
generateStructuredData,;}
generateSitemap,;}
generateRobotsTxt}"
};"
}"'"`
``