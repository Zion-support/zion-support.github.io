// SEO constants and default values
export const DEFAULT_SEO = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.',
  keywords: ['AI', 'IT solutions', 'automation', 'digital transformation', 'Zion Tech Group'],
  image: '/images/og-image.jpg',
  type: 'website'
} as const;

export const DEFAULT_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "description": "Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://twitter.com/ziontechgroup",
    "https://linkedin.com/company/ziontechgroup",
    "https://github.com/ziontechgroup"
  ]
} as const;