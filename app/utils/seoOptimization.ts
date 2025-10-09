// Advanced SEO optimization utilities

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: any;
}

export const generateMetaTags = (seoData: SEOData) => {
  const tags = [
    { name: 'description', content: seoData.description },
    { name: 'keywords', content: seoData.keywords.join(', ') },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Zion Tech Group' },
    { property: 'og:title', content: seoData.title },
    { property: 'og:description', content: seoData.description },
    { property: 'og:url', content: seoData.canonicalUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoData.title },
    { name: 'twitter:description', content: seoData.description },
  ];

  if (seoData.ogImage) {
    tags.push(
      { property: 'og:image', content: seoData.ogImage },
      { name: 'twitter:image', content: seoData.ogImage }
    );
  }

  return tags;
};

export const generateStructuredData = (pageType: string, data: any) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems.',
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
    ],
  };

  return { ...baseStructuredData, ...data };
};

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateServiceStructuredData = (services: Array<{name: string, description: string, price?: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
    },
    serviceType: 'AI and IT Solutions',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Technology Services',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        ...(service.price && {
          price: service.price,
          priceCurrency: 'USD',
        }),
      })),
    },
  };
};