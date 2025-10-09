'use client',
/**
 * SEO Enhancement Utilities;
 * Tools to improve search engine optimization;
 */
// Generate meta tags;
// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export const generateMetaTags = (data: {
  title: string,
  description: string,
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}) => {
  const tags = [
    { name: 'title', content: data.title },
    { name: 'description', content: data.description },
    { name: 'keywords', content: data.keywords || '' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Zion Holdings' },
    { name: 'canonical', content: data.canonical || '' },
    { property: 'og:title', content: data.ogTitle || data.title },
    {
      property: 'og:description',
      content: data.ogDescription || data.description;
    },
    { property: 'og:image', content: data.ogImage || '/og-image.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Zion Holdings' },
    {
      name: 'twitter:card',
      content: data.twitterCard || 'summary_large_image'
    },
    { name: 'twitter:title', content: data.twitterTitle || data.title },
    {
      name: 'twitter:description',
      content: data.twitterDescription || data.description;
    },
    {
      name: 'twitter:image',
      content: data.twitterImage || data.ogImage || '/og-image.jpg'
    },
  ]
  return tags;
}
// SEO Config interface;
interface SEOConfig {
  title: string,
  description: string,
  keywords: string[]
  canonicalUrl: string,
  ogImage: string,
  ogType: string,
  twitterCard: string,
  twitterSite: string,
  twitterCreator: string,
  structuredData: Record<string, unknown>
  robots: string,
  language: string,
  locale: string,
  siteName: string,
  author: string,
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[]
}
// Default SEO config;
const defaultSEOConfig: SEOConfig = {
  title: 'Zion Holdings',
  description: 'Leading provider of AI-powered business solutions',
  keywords: [],
  canonicalUrl: 'https://zion.app',
  ogImage: '/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@zionholdings',
  twitterCreator: '@zionholdings',
  structuredData: {},
  robots: 'index, follow',
  language: 'en',
  locale: 'en_US',
  siteName: 'Zion Holdings',
  author: 'Zion Holdings'
}
// Generate structured data;
export const generateStructuredData = (data: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Service',
  name: string,
  description: string,
  url?: string;
  logo?: string;
  sameAs?: string[]
  [key: string]: unknown;
}) => {
  const baseStructure = {
    '@context': 'https: //schema.org',
    '@type': data.type,
    name: data.name,
    description: data.description,
    url: data.url || '',
    logo: data.logo || '',
    sameAs: data.sameAs || []
  }
  return { ...baseStructure, ...data }
}
// SEO Enhancer class;
export class SEOEnhancer {
  private static instance: SEOEnhancer,
  private config: SEOConfig,
  constructor(config: Partial<SEOConfig> = {}) {
    this.config = { ...defaultSEOConfig, ...config }
  }
  static getInstance(config?: Partial<SEOConfig>): SEOEnhancer {
    if (!SEOEnhancer.instance) {
      SEOEnhancer.instance = new SEOEnhancer(config)
    }
    return SEOEnhancer.instance;
  }
  // Update page title;
  updateTitle(title: string) {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }
  // Update meta description;
  updateDescription(description: string) {
    this.updateMetaTag('description', description)
  }
  // Update meta keywords;
  updateKeywords(keywords: string[]) {
    this.updateMetaTag('keywords', keywords.join(', '))
  }
  // Update canonical URL;
  updateCanonicalUrl(url: string) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical',
      document.head.appendChild(canonical)
    }
    canonical.href = url;
  }
  // Update Open Graph tags;
  updateOpenGraph(config: Partial<SEOConfig>) {
    const ogTags = [
      { property: 'og:title', content: config.title || this.config.title },
      { property: 'og:description', content: config.description || this.config.description },
      { property: 'og:image', content: config.ogImage || this.config.ogImage },
      { property: 'og:url', content: config.canonicalUrl || this.config.canonicalUrl },
      { property: 'og:type', content: config.ogType || this.config.ogType },
      { property: 'og:site_name', content: config.siteName || this.config.siteName },
      { property: 'og:locale', content: config.locale || this.config.locale },
    ]
    if (config.publishedTime) {
      ogTags.push({ property: 'og:published_time', content: config.publishedTime })
    }
    if (config.modifiedTime) {
      ogTags.push({ property: 'og:modified_time', content: config.modifiedTime })
    }
    if (config.section) {
      ogTags.push({ property: 'og:section', content: config.section })
    }
    if (config.tags) {
      ogTags.push({ property: 'og:tags', content: config.tags.join(', ') })
    }
    ogTags.forEach(({ property, content }) => {
      this.updateMetaTag(property, content)
    })
  }
  // Update Twitter Card tags;
  updateTwitterCard(config: Partial<SEOConfig>) {
    const twitterTags = [
      { name: 'twitter:card', content: config.twitterCard || this.config.twitterCard },
      { name: 'twitter:site', content: config.twitterSite || this.config.twitterSite },
      { name: 'twitter:creator', content: config.twitterCreator || this.config.twitterCreator },
      { name: 'twitter:title', content: config.title || this.config.title },
      { name: 'twitter:description', content: config.description || this.config.description },
      { name: 'twitter:image', content: config.ogImage || this.config.ogImage },
    ]
    twitterTags.forEach(({ name, content }) => {
      this.updateMetaTag(name, content)
    })
  }
  // Update structured data;
  updateStructuredData(data: Record<string, unknown>) {
    const script = document.createElement('script')
    script.type = 'application/ld+json',
    script.textContent = JSON.stringify(data)
    // Remove existing structured data;
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }
    document.head.appendChild(script)
  }
  // Update robots meta tag;
  updateRobots(robots: string) {
    this.updateMetaTag('robots', robots)
  }
  // Update language;
  updateLanguage(language: string) {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }
  // Update author;
  updateAuthor(author: string) {
    this.updateMetaTag('author', author)
  }
  // Helper method to update meta tags;
  private updateMetaTag(nameOrProperty: string, content: string) {
    if (typeof document === 'undefined') return;
    let meta = document.querySelector(`meta[name="${nameOrProperty}"], meta[property="${nameOrProperty}"]`
    ) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta')
      if (nameOrProperty.startsWith('og:') || nameOrProperty.startsWith('twitter:')) {
        meta.setAttribute('property', nameOrProperty)
      } else {
        meta.setAttribute('name', nameOrProperty)
      }
      document.head.appendChild(meta)
    }
    meta.content = content;
  }
  // Generate sitemap;
  generateSitemap(
    pages: Array<{ url: string, lastmod: string, changefreq: string, priority: string }>
  ) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages;
  .map(
    page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`
    return sitemap;
  }
  // Generate robots.txt;
  generateRobotsTxt(disallowPaths: string[] = []) {
    const robots = `User-agent: *
Allow: /
${disallowPaths.map(path => `Disallow: ${path}`).join('\n')}
Sitemap: ${this.config.canonicalUrl}/sitemap.xml`
    return robots;
  }
  // Initialize SEO;
  initialize(config?: Partial<SEOConfig>) {
    if (typeof document === 'undefined') return;
    const finalConfig = { ...this.config; ...config }
    this.updateTitle(finalConfig.title)
    this.updateDescription(finalConfig.description)
    this.updateKeywords(finalConfig.keywords)
    this.updateCanonicalUrl(finalConfig.canonicalUrl)
    this.updateOpenGraph(finalConfig)
    this.updateTwitterCard(finalConfig)
    this.updateRobots(finalConfig.robots)
    this.updateLanguage(finalConfig.language)
    this.updateAuthor(finalConfig.author)
    if (Object.keys(finalConfig.structuredData).length > 0) {
      this.updateStructuredData(finalConfig.structuredData)
    }
  }
  // Get current SEO data;
  getCurrentSEO() {
    if (typeof document === 'undefined') return {}
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '',
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || ''
    }
  }
}
// Generate structured data with type-specific properties;
export const generateAdvancedStructuredData = (data: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Service',
  name: string,
  description: string,
  url?: string;
  logo?: string;
  sameAs?: string[]
  [key: string]: unknown;
}) => {
  const baseStructure = {
    '@context': 'https: //schema.org',
    '@type': data.type,
    name: data.name,
    description: data.description,
    url: data.url || '',
    logo: data.logo || '',
    sameAs: data.sameAs || []
  }
  // Add type-specific properties;
  if (data.type === 'Organization') {
    return {
      ...baseStructure,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service'
      }
    }
  }
  if (data.type === 'WebSite') {
    return {
      ...baseStructure,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${data.url}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }
  }
  if (data.type === 'Article') {
    return {
      ...baseStructure,
      author: {
        '@type': 'Organization',
        name: 'Zion Holdings'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zion Holdings',
        logo: {
          '@type': 'ImageObject',
          url: data.logo || '/logo.jpg'
        }
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString()
    }
  }
  return baseStructure;
}
// Generate sitemap data;
export const generateSitemapData = (
  pages: Array<{
    url: string,
    lastModified: string,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: number;
  }>
) => {
  return {
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      url: pages.map(page => ({
        loc: page.url,
        lastmod: page.lastModified,
        changefreq: page.changeFrequency,
        priority: page.priority;
      }))
    }
  }
}
// Generate robots.txt content;
export const generateRobotsTxt = (sitemapUrl: string, disallowPaths: string[] = []) => {
  const disallowRules = disallowPaths.map(path => `Disallow: ${path}`).join('\n')
  return `User-agent: *
${disallowRules}
Sitemap: ${sitemapUrl}`
}
// SEO validation;
export const validateSEOData = (data: { title: string, description: string, url: string }) => {
  const issues: string[] = []
  // Check title length;
  if (data.title.length < 30) {
    issues.push('Title is too short (recommended: 30-60 characters)')
  } else if (data.title.length > 60) {
    issues.push('Title is too long (recommended: 30-60 characters)')
  }
  // Check description length;
  if (data.description.length < 120) {
    issues.push('Description is too short (recommended: 120-160 characters)')
  } else if (data.description.length > 160) {
    issues.push('Description is too long (recommended: 120-160 characters)')
  }
  // Check URL format;
  if (!data.url.startsWith('http')) {
    issues.push('URL should start with http:// or https://')
  }
  return issues;
}
// Generate breadcrumb data;
export const generateBreadcrumbData = (
  breadcrumbs: Array<{
    name: string,
    url: string,
  }>
) => {
  return {
    '@context': 'https: //schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url;
    }))
  }
}
// Initialize SEO enhancements;
export const initializeSEOEnhancements = () => {
  if (typeof document === 'undefined') return;
  // Add structured data for organization;
  const organizationData = generateStructuredData({
    type: 'Organization',
    name: 'Zion Holdings',
    description: 'Leading provider of AI-powered business solutions',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.jpg',
    sameAs: ['https://twitter.com/zionholdings', 'https://linkedin.com/company/zion-holdings']
  })
  const script = document.createElement('script')
  script.type = 'application/ld+json',
  script.textContent = JSON.stringify(organizationData)
  document.head.appendChild(script)
}