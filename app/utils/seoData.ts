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
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: StructuredData;
}

export const defaultSEOData: SEOData = {
  title: 'Zion Tech Group - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, cloud services, and technology consulting. Transform your business with our cutting-edge technology services.',
  keywords: ['AI solutions', 'cloud services', 'technology consulting', 'artificial intelligence', 'machine learning'],
  canonicalUrl: 'https://ziontechgroup.com',
  ogImage: '/og-image.jpg',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI solutions and technology services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup'
    ]
  }
};

export const getPageSEO = (pageData: Partial<SEOData>): SEOData => {
  return {
    ...defaultSEOData,
    ...pageData,
    structuredData: {
      ...defaultSEOData.structuredData,
      ...pageData.structuredData
    }
  };
};
