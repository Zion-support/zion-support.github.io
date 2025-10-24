'use client'
/**
 * SEO Enhancement Utilities
 * Tools to improve search engine optimization
 */

// Generate meta tags
export const generateMetaTags = (data: {
  title: string
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
  type: string
  name: string
  description: string
  url?: string
  image?: string
  logo?: string
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  contactPoint?: {
    telephone?: string
    email?: string
    contactType?: string
  }
  sameAs?: string[]
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": data.type,
    "name": data.name,
    "description": data.description,
    "url": data.url || (typeof window !== 'undefined' ? window.location.href : ''),
    "image": data.image || '/og-image.webp',
    "logo": data.logo || '/logo.png'
  }

  if (data.address) {
    structuredData.address = {
      "@type": "PostalAddress",
      ...data.address
    }
  }

  if (data.contactPoint) {
    structuredData.contactPoint = {
      "@type": "ContactPoint",
      ...data.contactPoint
    }
  }

  if (data.sameAs) {
    structuredData.sameAs = data.sameAs
  }

  return structuredData
}

// Generate sitemap data
export const generateSitemapData = (pages: Array<{
  url: string
  lastModified: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}>) => {
  return pages.map(page => ({
    loc: page.url,
    lastmod: page.lastModified,
    changefreq: page.changeFrequency,
    priority: page.priority
  }))
}

// Generate robots.txt content
export const generateRobotsTxt = (sitemapUrl?: string, disallowPaths: string[] = []) => {
  let robots = 'User-agent: *\n'
  
  disallowPaths.forEach(path => {
    robots += `Disallow: ${path}\n`
  })
  
  if (sitemapUrl) {
    robots += `Sitemap: ${sitemapUrl}\n`
  }
  
  return robots
}

// SEO score calculator
export const calculateSEOScore = (data: {
  title: string
  description: string
  keywords: string
  hasH1: boolean
  hasImages: boolean
  hasInternalLinks: boolean
  hasExternalLinks: boolean
  wordCount: number
}) => {
  let score = 0
  let maxScore = 100

  // Title optimization (20 points)
  if (data.title.length >= 30 && data.title.length <= 60) {
    score += 20
  } else if (data.title.length > 0) {
    score += 10
  }

  // Description optimization (20 points)
  if (data.description.length >= 120 && data.description.length <= 160) {
    score += 20
  } else if (data.description.length > 0) {
    score += 10
  }

  // Keywords presence (10 points)
  if (data.keywords.length > 0) {
    score += 10
  }

  // H1 tag (10 points)
  if (data.hasH1) {
    score += 10
  }

  // Images (10 points)
  if (data.hasImages) {
    score += 10
  }

  // Internal links (10 points)
  if (data.hasInternalLinks) {
    score += 10
  }

  // External links (5 points)
  if (data.hasExternalLinks) {
    score += 5
  }

  // Content length (15 points)
  if (data.wordCount >= 300) {
    score += 15
  } else if (data.wordCount >= 150) {
    score += 10
  } else if (data.wordCount > 0) {
    score += 5
  }

  return {
    score,
    maxScore,
    percentage: Math.round((score / maxScore) * 100)
  }
}

// Meta tag validator
export const validateMetaTags = (tags: Array<{ name?: string; property?: string; content: string }>) => {
  const errors: string[] = []
  const warnings: string[] = []

  tags.forEach(tag => {
    if (!tag.content || tag.content.trim() === '') {
      errors.push(`Empty content for ${tag.name || tag.property}`)
    }

    if (tag.name === 'title' && tag.content.length > 60) {
      warnings.push('Title is too long (recommended: 50-60 characters)')
    }

    if (tag.name === 'description' && tag.content.length > 160) {
      warnings.push('Description is too long (recommended: 120-160 characters)')
    }
  })

  return { errors, warnings }
}