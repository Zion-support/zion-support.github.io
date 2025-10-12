import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'breadcrumb';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          logo: 'https://ziontechgroup.com/logo.png',
          description: 'Advanced AI and IT solutions for modern businesses',
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
            'https://linkedin.com/company/ziontechgroup'
          ],
          ...data
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Advanced AI and IT solutions for modern businesses',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://ziontechgroup.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          },
          ...data
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com'
          },
          ...data
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      default:
        return data;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData(), null, 2)}
      </script>
    </Helmet>
  );
};

export default StructuredData;