import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'BreadcrumbList';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    return baseData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
};

// Predefined structured data components
export const OrganizationStructuredData: React.FC = () => (
  <StructuredData
    type="Organization"
    data={{
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.',
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
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      sameAs: [
        'https://linkedin.com/company/ziontechgroup',
        'https://twitter.com/ziontechgroup',
        'https://github.com/ziontechgroup',
      ],
      foundingDate: '2020',
      numberOfEmployees: '10-50',
      industry: 'Information Technology',
      services: [
        'AI Solutions',
        'Cybersecurity',
        'Cloud Infrastructure',
        'Digital Transformation',
        'Micro SaaS',
        '5G Solutions',
      ],
    }}
  />
);

export const WebSiteStructuredData: React.FC = () => (
  <StructuredData
    type="WebSite"
    data={{
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      description: 'Advanced AI and IT Solutions for Modern Businesses',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ziontechgroup.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    }}
  />
);

export const ServiceStructuredData: React.FC<{ service: any }> = ({ service }) => (
  <StructuredData
    type="Service"
    data={{
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
      },
      areaServed: 'Worldwide',
      serviceType: service.category,
      offers: service.price ? {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      } : undefined,
    }}
  />
);

export const BreadcrumbStructuredData: React.FC<{ items: Array<{ name: string; url: string }> }> = ({ items }) => (
  <StructuredData
    type="BreadcrumbList"
    data={{
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }}
  />
);

export default StructuredData;