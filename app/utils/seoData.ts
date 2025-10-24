interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: StructuredData;
}

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
};

export const getPageSEO = (page: string): SEOData => {
  const pageSEOData: Record<string, SEOData> = {
    home: {
      ...defaultSEOData,
      title: 'Home - Zion Tech Group',
      description: 'Welcome to Zion Tech Group - Your trusted partner for AI and technology solutions.'
    },
    about: {
      ...defaultSEOData,
      title: 'About Us - Zion Tech Group',
      description: 'Learn about our mission to revolutionize technology and provide cutting-edge AI solutions.'
    },
    services: {
      ...defaultSEOData,
      title: 'Services - Zion Tech Group',
      description: 'Explore our comprehensive range of AI and technology services designed to accelerate your business growth.'
    },
    contact: {
      ...defaultSEOData,
      title: 'Contact Us - Zion Tech Group',
      description: 'Get in touch with our team to discuss your AI and technology needs.'
    }
  };

  return pageSEOData[page] || defaultSEOData;
};