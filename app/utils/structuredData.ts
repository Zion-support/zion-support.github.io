/**
 * Enhanced Structured Data (JSON-LD) utilities for improved SEO
 */

export interface StructuredDataConfig {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

/**
 * Generate comprehensive organization schema
 */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  alternateName: 'Zion Holdings',
  description: 'Leading provider of AI-powered enterprise solutions and digital transformation services',
  url: 'https://ziontechgroup.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://ziontechgroup.com/logo.png',
    width: '600',
    height: '60',
  },
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Kleber Santos',
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '50-100',
  },
  slogan: 'Transform Your Enterprise with AI - 300% ROI Guaranteed',
  contactPoint: [{
    '@type': 'ContactPoint',
    telephone: '+1-302-464-0950',
    contactType: 'customer service',
    email: 'kleber@ziontechgroup.com',
    areaServed: 'US',
    availableLanguage: ['English'],
    contactOption: 'TollFree',
  }],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Wilmington',
    addressRegion: 'DE',
    postalCode: '19801',
    addressCountry: 'US',
  },
  sameAs: [
    'https://linkedin.com/company/ziontechgroup',
    'https://twitter.com/ziontechgroup',
    'https://github.com/zion-holdings',
    'https://facebook.com/ziontechgroup',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
});

/**
 * Generate website schema for search action
 */
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zion Tech Group',
  alternateName: 'Zion Holdings',
  url: 'https://ziontechgroup.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://ziontechgroup.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

/**
 * Generate service catalog schema
 */
export const getServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI & IT Solutions',
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI & IT Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise AI Solutions',
          description: 'Custom AI automation solutions designed to transform enterprise operations with 300% ROI',
          category: 'Artificial Intelligence',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Transformation',
          description: 'Complete digital transformation consulting and implementation services',
          category: 'Technology Consulting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Services',
          description: 'Cloud infrastructure design, migration, and managed services',
          category: 'Cloud Computing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Intelligence',
          description: 'Advanced analytics and business intelligence solutions',
          category: 'Data Analytics',
        },
      },
    ],
  },
});

/**
 * Generate local business schema
 */
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Zion Tech Group',
  image: 'https://ziontechgroup.com/logo.png',
  '@id': 'https://ziontechgroup.com',
  url: 'https://ziontechgroup.com',
  telephone: '+1-302-464-0950',
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wilmington',
    addressRegion: 'DE',
    postalCode: '19801',
    addressCountry: 'US',
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  }],
});

/**
 * Generate breadcrumb list schema
 */
export const getBreadcrumbSchema = (items: Array<{name: string; url: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Generate all schemas for homepage
 */
export const getHomepageSchemas = () => [
  getOrganizationSchema(),
  getWebsiteSchema(),
  getServiceSchema(),
  getLocalBusinessSchema(),
];

/**
 * Render structured data scripts
 */
export const renderStructuredData = (schemas: unknown[]) => {
  return schemas.map((schema, _index) => (
    <script
      key={_index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  ));
};