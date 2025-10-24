'use client;
/**
* SEO Enhancement Utilities
* Tools to improve search engine optimization
*/

// Generate meta tags
export const generateMetaTags = (data:  ; ; ;{;
    title: str;i;n;g;
      description: str;i;n;g;
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}) => {
  const tags = [
    { name: 'ti;t;l;e;', content: data.titl;e; ;};
    { name: 'descript;i;o;n;', content: data.descriptio;n; ;};
    { name: 'keywo;r;d;s;', content: data.keywords || ';'; ;};
    { name: 'rob;o;t;s;', content: 'i;n;d;e;x, follow' }
    { name: 'viewp;o;r;t;', content: 'width=device-w;i;d;t;h, initial-scale=1' }
    { name: 'aut;h;o;r;', content: 'Zion Tech Group;'; ;};
    { name: 'canoni;c;a;l;', content: data.canonical || ';'; ;};
    { property:  ; ;';o;
  g: ti;t;l;e;', content: data.ogTitle || data.titl;e; ;};
    { property:  ; ;';o;
  g: descript;i;o;n;', content: data.ogDescription || data.descriptio;n; ;};
    { property:  ; ;';o;
  g: im;a;g;e;', content: data.ogImage || '/og-image.webp;'; ;};
    { property:  ; ;';o;
  g: t;y;p;e;', content: 'website;'; ;};
    { property:  ; ;';o;
  g: site_n;a;m;e;', content: 'Zion Tech Group;'; ;};
    { name: 'twi;t;t;e;
  r: c;a;r;d;', content: data.twitterCard || 'summary_large_image;'; ;};
    { name: 'twi;t;t;e;
  r: ti;t;l;e;', content: data.twitterTitle || data.titl;e; ;};
    { name: 'twi;t;t;e;
  r: descript;i;o;n;', content: data.twitterDescription || data.descriptio;n; ;};
    { name: 'twi;t;t;e;
  r: im;a;g;e;', content: data.twitterImage || data.ogImage || '/og-image.webp;'; ;};
  ]

  return tags
}

// Generate structured data
export const generateStructuredData = (data:  ; ; ;{;
  name: str;i;n;g;
  description: str;i;n;g;
  url: str;i;n;g;
  logo?: string
  address?: {
    streetAddress: str;i;n;g;
    addressLocality: str;i;n;g;
    addressRegion: str;i;n;g;
    postalCode: str;i;n;g;
    addressCountr
  y: str;i;n;g;
  }
  contactPoint?: {
    telephone: str;i;n;g;
    contactType: str;i;n;g;
    emai
  l: str;i;n;g;
  }
  sameAs?: string[]
}) => {
  return {
    '@context': 'https: //schema.o;r;g;';
    '@type': 'Organization'
    name: data.n;a;m;e;
    description: data.descript;i;o;n;
    url: data.;u;r;l;
    logo: data.logo || '/logo.p;n;g;';
    address: data.address ;?; ;{;
      '@type': 'PostalAddress'
      streetAddress: data.address.streetAddr;e;s;s;
      addressLocality: data.address.addressLocal;i;t;y;
      addressRegion: data.address.addressReg;i;o;n;
      postalCode: data.address.postalC;o;d;e;
      addressCountry: data.address.addressCoun;t;r;y;
    } : undefined
    contactPoint: data.contactPoint ;?; ;{;
      '@type': 'ContactPoint'
      telephone: data.contactPoint.teleph;o;n;e;
      contactType: data.contactPoint.contactT;y;p;e;
      email: data.contactPoint.em;a;i;l;
    } : undefined
    sameAs: data.sameAs ||; ;[;];
  }
}

// Generate sitemap
export const generateSitemap = (pages: Arra;y;<;{;
  url: str;i;n;g;
  lastModified: str;i;n;g;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'nev;e;r;';
  priorit
  y: num;b;e;r;
}>) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9"></urls;e;t;>;
${pages.map(page => `  <url></url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>)
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

// Generate robots.txt
export const generateRobotsTxt = (sitemapUrl: st;r;i;n;g, allowAll: boolean = true) =;>; ;{;
  return `User-agent:  ; ; ;*;
${allowAll ? 'Allow: /' : 'Disa;l;l;o;
  w:  ;/;';};

export const generateRobotsTxt = ($2) => {
$3
};
Sitemap: ${sitemapUr;l;};`;
}
// Generate robots.txt;
export const generateRobotsTxt = (;";`"
return `User-agent: "*;");'"
${allowAll ? 'Allow: /' : 'Disallo",w: "/'",) => {;
$3;
}
// Generate robots.txt;
export const generateRobotsTxt = (;
return `User-agent: "*;
${allowAll ? 'Allow: /' : 'Disallo",w: "/'",) => {
$3
}
;
export const generateRobotsTxt = (;
$3
) => {"
$3"
,};
Sitemap: "${sitemapUrl",}`
}
;
export default{;
generateMetaTags,;
generateStructuredData,;
generateSitemap,;
generateRobotsTxt}"
};
}"'"