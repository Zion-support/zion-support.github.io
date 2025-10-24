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
  keywords: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: StructuredData;
}

// Default SEO data
export const defaultSEOData: SEOData = {
  title: "Zion Tech Group - AI Solutions & Technology Services",
  description: "Leading provider of AI-powered solutions, custom software development, and technology consulting services. Transform your business with cutting-edge technology.",
  keywords: "AI solutions, software development, technology consulting, artificial intelligence, machine learning, custom software, tech services",
  canonicalUrl: "https://ziontechgroup.com",
  ogTitle: "Zion Tech Group - AI Solutions & Technology Services",
  ogDescription: "Leading provider of AI-powered solutions, custom software development, and technology consulting services.",
  ogImage: "https://ziontechgroup.com/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Zion Tech Group - AI Solutions & Technology Services",
  twitterDescription: "Leading provider of AI-powered solutions, custom software development, and technology consulting services.",
  twitterImage: "https://ziontechgroup.com/twitter-image.jpg",
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered solutions, custom software development, and technology consulting services.',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  }
};

// Generate SEO data for specific pages
export const generateSEOData = (pageData: Partial<SEOData>): SEOData => {
  return {
    ...defaultSEOData,
    ...pageData
  };
};
