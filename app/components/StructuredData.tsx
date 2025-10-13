import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    return JSON.stringify(baseData);
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {getStructuredData()}
      </script>
    </Helmet>
  );
}

// Predefined structured data templates
export const organizationSchema = {
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  logo: 'https://ziontechgroup.com/logo.png',
  description: 'Leading provider of AI-powered solutions, software development, and IT services.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tech Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://twitter.com/ziontechgroup',
    'https://linkedin.com/company/ziontechgroup',
    'https://github.com/ziontechgroup'
  ]
};

export const websiteSchema = {
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  description: 'Advanced AI and IT Solutions',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ziontechgroup.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export const serviceSchema = (serviceName: string, description: string) => ({
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group'
  },
  areaServed: 'Worldwide',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://ziontechgroup.com/contact'
  }
});