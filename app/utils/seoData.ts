<<<<<<< HEAD
export interface StructuredData {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  logo?: string
  sameAs?: string[]

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  structuredData?: StructuredData

export const defaultSEOData: SEOData = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Leading provider of AI-powered solutions, 5G technology, and innovative software development services.',
  keywords: ['AI', 'Artificial Intelligence', '5G', 'Technology', 'Software Development', 'Machine Learning'],
  canonical: 'https://ziontechgroup.com',
  ogTitle: 'Zion Tech Group - AI & Technology Solutions',
  ogDescription: 'Leading provider of AI-powered solutions, 5G technology, and innovative software development services.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://ziontechgroup.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Zion Tech Group - AI & Technology Solutions',
  twitterDescription: 'Leading provider of AI-powered solutions, 5G technology, and innovative software development services.',
  twitterImage: '/twitter-image.jpg',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered solutions and technology services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup'
  ]
  
}

export const generateSEOData = (customData: Partial<SEOData> = {}): SEOData => {
  return {
    ...defaultSEOData,
    ...customData,
    structuredData: {
      ...defaultSEOData.structuredData,
      ...customData.structuredData
<<<<<<< HEAD
    }
  }};
=======
export const seoData = {
  home: {
    title: 'Home - Zion Tech Group';
    description: 'Leading technology solutions provider';
    keywords: 'technology, solutions, innovation'
  };
  about: {
    title: 'About - Zion Tech Group';
    description: 'Learn about our company and mission';
    keywords: 'about, company, mission'
  };
  contact: {
    title: 'Contact - Zion Tech Group';
    description: 'Get in touch with us';
    keywords: 'contact, get in touch'
  };
  getPageData: (page: string) => {
    return seoData[page as keyof typeof seoData] || seoData.home
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
=======
    
  }};}
>>>>>>> 1c3bcb5bf864
