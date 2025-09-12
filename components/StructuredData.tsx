import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'Article' | 'BlogPosting' | 'WebSite' | 'BreadcrumbList';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "logo": data.logo,
          "sameAs": data.sameAs || [],
          "contactPoint": data.contactPoint || {},
          "address": data.address || {},
          "foundingDate": data.foundingDate,
          "numberOfEmployees": data.numberOfEmployees,
          "industry": data.industry
        };
      
      case 'Article':
      case 'BlogPosting':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.headline,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Person",
            "name": data.author?.name || "Zion Tech Group"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ziontechgroup.com/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          },
          "keywords": data.keywords || [],
          "articleSection": data.articleSection,
          "wordCount": data.wordCount,
          "timeRequired": data.timeRequired
        };
      
      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${data.url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };
      
      case 'BreadcrumbList':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };
      
      default:
        return {};
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