export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  structuredData?: object;
}

export const defaultSEOData: SEOData = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.',
  keywords: 'AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence, Zion Tech Group',
  canonicalUrl: 'https://ziontechgroup.com',
  ogImage: 'https://ziontechgroup.com/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
};

export const generateStructuredData = (type: 'Organization' | 'WebSite' | 'WebPage' | 'Service', data: any) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
        name: data.name || 'Zion Tech Group',
        url: data.url || 'https://ziontechgroup.com',
        logo: data.logo || 'https://ziontechgroup.com/logo.png',
        description: data.description || defaultSEOData.description,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: data.telephone || '+1-555-ZION-TECH',
          contactType: 'customer service',
          email: data.email || 'contact@ziontechgroup.com',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.streetAddress || '123 Tech Street',
          addressLocality: data.addressLocality || 'Innovation City',
          addressRegion: data.addressRegion || 'IC',
          postalCode: data.postalCode || '12345',
          addressCountry: data.addressCountry || 'US',
        },
        sameAs: data.sameAs || [
          'https://linkedin.com/company/zion-tech-group',
          'https://twitter.com/ziontechgroup'
        ],
      };

    case 'WebSite':
      return {
        ...baseData,
        name: data.name || 'Zion Tech Group',
        url: data.url || 'https://ziontechgroup.com',
        description: data.description || defaultSEOData.description,
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://ziontechgroup.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      };

    case 'WebPage':
      return {
        ...baseData,
        name: data.name || defaultSEOData.title,
        description: data.description || defaultSEOData.description,
        url: data.url || defaultSEOData.canonicalUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
        },
        breadcrumb: data.breadcrumb || {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ziontechgroup.com',
            },
          ],
        },
      };

    case 'Service':
      return {
        ...baseData,
        name: data.name || 'AI and IT Services',
        description: data.description || 'Comprehensive AI and IT solutions for modern businesses',
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
        },
        areaServed: data.areaServed || 'Worldwide',
        serviceType: data.serviceType || 'Technology Services',
        offers: data.offers || {
          '@type': 'Offer',
          price: 'Contact for pricing',
          priceCurrency: 'USD',
        },
      };

    default:
      return baseData;
  }
};

export const getPageSEOData = (page: string, customData?: Partial<SEOData>): SEOData => {
  const pageData: Record<string, SEOData> = {
    home: {
      ...defaultSEOData,
      title: 'Zion Tech Group - Advanced AI and IT Solutions',
      description: 'Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.',
      canonicalUrl: 'https://ziontechgroup.com',
    },
    about: {
      ...defaultSEOData,
      title: 'About Us - Zion Tech Group',
      description: 'Learn about Zion Tech Group\'s mission to provide innovative AI and IT solutions for businesses worldwide.',
      keywords: 'about us, company mission, AI company, IT solutions company, technology leadership',
      canonicalUrl: 'https://ziontechgroup.com/about',
    },
    services: {
      ...defaultSEOData,
      title: 'Services - Zion Tech Group',
      description: 'Explore our comprehensive range of AI and IT services designed to accelerate your business growth.',
      keywords: 'AI services, IT services, cloud solutions, digital transformation, business automation, technology consulting',
      canonicalUrl: 'https://ziontechgroup.com/services',
    },
    contact: {
      ...defaultSEOData,
      title: 'Contact Us - Zion Tech Group',
      description: 'Get in touch with Zion Tech Group for your AI and IT solution needs. We\'re here to help.',
      keywords: 'contact us, get in touch, AI consultation, IT support, customer service',
      canonicalUrl: 'https://ziontechgroup.com/contact',
    },
  };

  return {
    ...pageData[page] || defaultSEOData,
    ...customData,
  };
};
