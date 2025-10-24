'use client';

<<<<<<< HEAD:app/utils/seoEnhancer.ts
/**
* SEO Enhancement Utilities
* Tools to improve search engine optimization
*/

// Generate meta tags
export const generateMetaTags = (data: {,
    title: string,
      description: string
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
    { name: 'title', content: data.title },
    { name: 'description', content: data.description },
    { name: 'keywords', content: data.keywords || '' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Zion Tech Group' },
    { name: 'canonical', content: data.canonical || '' },
    { property: 'og:title', content: data.ogTitle || data.title },
    { property: 'og:description', content: data.ogDescription || data.description },
    { property: 'og:image', content: data.ogImage || '/og-image.webp' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { name: 'twitter:card', content: data.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: data.twitterTitle || data.title },
    { name: 'twitter:description', content: data.twitterDescription || data.description },
    { name: 'twitter:image', content: data.twitterImage || data.ogImage || '/og-image.webp' }
  ]

  return tags
}

// Generate structured data
export const generateStructuredData = (data: {
  name: string
  description: string
  url: string
  logo?: string
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
  sameAs?: string[]
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    description: data.description,
    url: data.url,
    logo: data.logo || '/logo.png',
    address: data.address ? {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry
    } : undefined,
    contactPoint: data.contactPoint ? {
      '@type': 'ContactPoint',
      telephone: data.contactPoint.telephone,
      contactType: data.contactPoint.contactType,
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
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

// Generate robots.txt
export const generateRobotsTxt = (sitemapUrl: string, allowAll: boolean = true) => {
  return `User-agent: *
${allowAll ? 'Allow: /' : 'Disallow: /'}

Sitemap: ${sitemapUrl}`
}

export default {
  generateMetaTags,
  generateStructuredData,
  generateSitemap,
  generateRobotsTxt
}
=======
'use client'
    { "name": 'title',
    { "name": 'description',
    { "name": 'keywords', "content": data.keywords || ',
    { "name": 'robots', "content": 'index, follow'
    { "name": 'viewport', "content": 'width=device-width, initial-scale=1'
    { "name": 'author', "content": 'Zion Tech Group',
    { "name": 'canonical', "content": data.canonical || ',
    { "property": 'og:title',
    { "property": 'og:description',
    { "property": 'og:image', "content": data.ogImage || '/og-image.webp',
    { "property": 'og:type', "content": 'website',
    { "property": 'og:site_name', "content": 'Zion Tech Group',
    { "name": 'twitter:card', "content": data.twitterCard || 'summary_large_image',
    { "name": 'twitter:title',
    { "name": 'twitter:description',
    { "name": 'twitter:image', "content": data.twitterImage || data.ogImage || '/og-image.webp',
    '@context': '"https": //schema.org',
    '@type': 'Organization'
    "logo": data.logo || '/logo.png',
      '@type': 'PostalAddress'
      '@type': 'ContactPoint'
  "changeFrequency": 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
>>>>>>> origin/main:app-backup/utils/seoEnhancer.ts
