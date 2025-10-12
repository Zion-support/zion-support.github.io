'use client';
import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Product' | 'BreadcrumbList' | 'FAQPage';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          logo: 'https://ziontechgroup.com/logo.png',
          description: 'Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.',
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
          ]
        };

      case 'WebSite':
        return {
          ...baseData,
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Advanced AI and IT Solutions Website',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://ziontechgroup.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        };

      case 'Service':
        return {
          ...baseData,
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com'
          },
          areaServed: 'Worldwide',
          availableLanguage: 'English'
        };

      case 'Product':
        return {
          ...baseData,
          brand: {
            '@type': 'Brand',
            name: 'Zion Tech Group'
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          }
        };

      case 'BreadcrumbList':
        return {
          ...baseData,
          itemListElement: data.itemListElement?.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      case 'FAQPage':
        return {
          ...baseData,
          mainEntity: data.mainEntity?.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        };

      default:
        return baseData;
    }
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

export default StructuredData;