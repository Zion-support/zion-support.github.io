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
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: StructuredData;
}

export const defaultSEOData: SEOData = {
  title: 'Zion Tech Group - AI-Powered Solutions',
  description: 'Leading provider of AI-powered solutions for businesses worldwide. Transform your operations with cutting-edge artificial intelligence technology.',
  keywords: ['AI', 'artificial intelligence', 'machine learning', 'automation', 'business solutions'],
  canonical: 'https://ziontechgroup.com',
  ogTitle: 'Zion Tech Group - AI-Powered Solutions',
  ogDescription: 'Leading provider of AI-powered solutions for businesses worldwide.',
  twitterTitle: 'Zion Tech Group - AI-Powered Solutions',
  twitterDescription: 'Leading provider of AI-powered solutions for businesses worldwide.',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered solutions for businesses worldwide.',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup'
    ]
  }
};

export default defaultSEOData;
