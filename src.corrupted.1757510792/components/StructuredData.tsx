
import Script from 'next/script';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'Article';
  data: any;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    return JSON.stringify(baseData);
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getStructuredData() }}
    />
  );
};

export const OrganizationSchema = () => (
  <StructuredData
    type="Organization"
    data={{
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading technology solutions provider',
      address: {
        '@type': 'PostalAddress',
        'streetAddress': '123 Tech Street',
        'addressLocality': 'San Francisco',
        'addressRegion': 'CA',
        'postalCode': '94105',
        'addressCountry': 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        'telephone': '+1-555-0123',
        'contactType': 'customer service',
      },
    }}
  />
);

export const WebSiteSchema = () => (
  <StructuredData
    type="WebSite"
    data={{
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      potentialAction: {
        '@type': 'SearchAction',
        'target': 'https://ziontechgroup.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    }}
  />
);
