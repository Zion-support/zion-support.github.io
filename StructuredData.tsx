
import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'Article' | 'LocalBusiness';
  data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseStructure = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    return baseStructure;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
};

// Predefined structured data templates
export const OrganizationSchema = {
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  logo: 'https://ziontechgroup.com/logo.png',
  description: 'Leading provider of AI, quantum computing, and advanced technology solutions',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-302-464-0950',
    contactType: 'customer service',
    email: 'kleber@ziontechgroup.com'
  },
  sameAs: [
    'https://twitter.com/ziontechgroup',
    'https://linkedin.com/company/ziontechgroup',
    'https://github.com/ziontechgroup'
  ]
};

export const WebSiteSchema = {
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  description: 'Advanced technology solutions and services',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://ziontechgroup.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export default StructuredData;
