import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Article' | 'BreadcrumbList';
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
          name: data.name || 'Zion Tech Group',
          description: data.description || 'Leading provider of cutting-edge AI, quantum computing, and neural interface technologies',
          url: data.url || 'https://ziontechgroup.com',
          logo: data.logo || 'https://ziontechgroup.com/logo.png',
          sameAs: data.sameAs || [
            'https://twitter.com/ziontechgroup',
            'https://linkedin.com/company/ziontechgroup',
            'https://github.com/ziontechgroup'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-ZION-TECH',
            contactType: 'customer service',
            availableLanguage: 'English'
          }
        };

      case 'WebSite':
        return {
          ...baseData,
          name: data.name || 'Zion Tech Group',
          url: data.url || 'https://ziontechgroup.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://ziontechgroup.com/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        };

      case 'WebPage':
        return {
          ...baseData,
          name: data.name || 'Zion Tech Group - Revolutionary AI & Technology Solutions',
          description: data.description || 'Leading provider of cutting-edge AI, quantum computing, and neural interface technologies',
          url: data.url || window.location.href,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com'
          },
          breadcrumb: data.breadcrumb || {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://ziontechgroup.com'
              }
            ]
          }
        };

      case 'Article':
        return {
          ...baseData,
          headline: data.headline || 'Revolutionary AI & Technology Solutions',
          description: data.description || 'Leading provider of cutting-edge AI, quantum computing, and neural interface technologies',
          author: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            logo: {
              '@type': 'ImageObject',
              url: 'https://ziontechgroup.com/logo.png'
            }
          },
          datePublished: data.datePublished || new Date().toISOString(),
          dateModified: data.dateModified || new Date().toISOString()
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

// Predefined structured data components
export const OrganizationStructuredData: React.FC = () => (
  <StructuredData
    type="Organization"
    data={{
      name: 'Zion Tech Group',
      description: 'Leading provider of cutting-edge AI, quantum computing, and neural interface technologies',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup'
      ]
    }}
  />
);

export const WebSiteStructuredData: React.FC = () => (
  <StructuredData
    type="WebSite"
    data={{
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com'
    }}
  />
);

export const WebPageStructuredData: React.FC<{ 
  name?: string; 
  description?: string; 
  url?: string; 
}> = ({ name, description, url }) => (
  <StructuredData
    type="WebPage"
    data={{
      name: name || 'Zion Tech Group - Revolutionary AI & Technology Solutions',
      description: description || 'Leading provider of cutting-edge AI, quantum computing, and neural interface technologies',
      url: url || window.location.href
    }}
  />
);

export default StructuredData;