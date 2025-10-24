<<<<<<< HEAD
// SEO data utilities
export const seoData = {
  // Add SEO data functions here
};
=======
export interface StructuredData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: StructuredData;
}

export const defaultSEOData: SEOData = {
  title: 'Zion Tech Group - AI Solutions & Technology Services',
  description: 'Leading provider of AI-powered solutions and cutting-edge technology services for businesses worldwide.',
  keywords: ['AI', 'artificial intelligence', 'technology', 'software', 'automation', 'machine learning'],
  canonical: 'https://ziontechgroup.com',
  ogImage: '/og-image.jpg',
  ogTitle: 'Zion Tech Group - AI Solutions & Technology Services',
  ogDescription: 'Leading provider of AI-powered solutions and cutting-edge technology services for businesses worldwide.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Zion Tech Group - AI Solutions & Technology Services',
  twitterDescription: 'Leading provider of AI-powered solutions and cutting-edge technology services for businesses worldwide.',
  twitterImage: '/twitter-image.jpg',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered solutions and cutting-edge technology services for businesses worldwide.',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  }
};

export const generateSEOData = (customData: Partial<SEOData> = {}): SEOData => {
  return {
    ...defaultSEOData,
    ...customData,
    structuredData: {
      ...defaultSEOData.structuredData,
      ...customData.structuredData
    }
  };
};

export default defaultSEOData;
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
