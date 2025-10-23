/**
 * SEO Component
 * Provides comprehensive SEO meta tags and structured data
 */
}
const defaultSEO= {title: 'Zion Tech Group - AI & IT Solutions',
  description:
    'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve300% ROI with cutting-edge AI technology.',
  keywords: [
    'AI',
    'artificial intelligence',
    'enterprise solutions',
    'digital transformation',
    'IT services',
  ],
  image: 'https:// ziontechgroup.com/og-image.jpg',
  url: 'https:// ziontechgroup.com',
  type: 'website' as const,
  locale: 'en_US',
  description,
  keywords,
  image,
  url,
  type= default SEO.type,
  author,
  publishDate,
  modifiedDate,
  canonical,
  noIndex= false,
  structuredData,
  twitterCard= default SEO.twitterCard,
  locale= default SEO.locale,
  alternateLocales= []}) => {constseo= {
    title: title ?`${title} | Zion TechGroup` : default SEO.title,
    description: description || default SEO.description,
    keywords: keywords || default SEO.keywords,
    image: image || default SEO.image,
    url: url || default SEO.url,
    type,
    twitterCard,
    locale
