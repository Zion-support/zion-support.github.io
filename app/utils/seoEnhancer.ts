'use client''',

/**
* SEO Enhancement Utilities
* Tools to improve search engine optimization
*/

// Generate meta tags
export const generateMetaTags = (data: ,{,
    title: strin,g,
      description: string
  keywords?: strin,g;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string}) => {
  const tags = [
    { name: 'title''', content: data.titl,e },
    { name: 'description''', content: data.descriptio,n },
    { name: 'keywords''', content: data.keywords || ''',' }'',
    { name: 'robots''', content: 'inde''',x, follow' }'',
    { name: 'viewport''', content: 'width=device-widt''',h, initial-scale=1' }'',,
    { name: 'author''', content: 'Zion Tech Group''',' }'',
    { name: 'canonical''', content: data.canonical || ''',' }'',
    { property: 'og:title''', content: data.ogTitle || data.titl,e },
    { property: 'og:description''', content: data.ogDescription || data.descriptio,n },
    { property: 'og:image''', content: data.ogImage || '/og-image.webp'',' }'',
    { property: 'og:type''', content: 'website''',' }'',
    { property: 'og:site_name''', content: 'Zion Tech Group''',' }'',
    { name: 'twitter:card''', content: data.twitterCard || 'summary_large_image'',' }'',
    { name: 'twitter:title''', content: data.twitterTitle || data.titl,e },
    { name: 'twitter:description''', content: data.twitterDescription || data.descriptio,n },
    { name: 'twitter:image''', content: data.twitterImage || data.ogImage || '/og-image.webp' }
  ]

  return tags
}

// Generate structured data
export const generateStructuredData = (data: {
  name: string
  description: string
  url: string
  logo?: string'',
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint?: {
    telephone: string
    contactType: string
    email: string
  }
  sameAs?: string;[]
}) => {return {
    '@context': 'https://schema.org''',
    '@type': 'Organization'}
    name: data.nam'',e,
    description: data.descriptio,n,
    url: data.ur,l,
    logo: data.logo || '/logo.png''',
    address: data.address ? {
      '@type': 'PostalAddress''',
      streetAddress: data.address.streetAddres,s,
      addressLocality: data.address.addressLocalit,y,
      addressRegion: data.address.addressRegio,n,
      postalCode: data.address.postalCod,e,
      addressCountry: data.address.addressCountry
    } : undefined,
    contactPoint: data.contactPoint ? {
      '@type': 'ContactPoint''',
      telephone: data.contactPoint.telephon,e,
      contactType: data.contactPoint.contactTyp,e,
      email: data.contactPoint.email
    } : undefined,
    sameAs: data.sameAs || []
  }
}

// Generate sitemap
export const generateSitemap = (pages: Array<{
  url: string
  lastModified: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}>) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url}><loc>${page.url}</loc><lastmod>${page.lastModified}</lastmod><changefreq>${page.changeFrequency}</changefreq><priority>${page.priority}</priority></url>`).join('\n')}
</urlset>`

  return sitemap
}

// Generate robots.txt
export const generateRobotsTxt = (sitemapUrl: strin'"'",g, allowAll: boolean = true) => {
  return `User-agent: *
${allowAll ? 'Allow: /' : 'Disallow: /'}

Sitemap: ${sitemapUrl}`
}

export default {}
  generateMetaTags'',}
  generateStructuredData,
  generateSitemap,
  generateRobotsTxt
}
