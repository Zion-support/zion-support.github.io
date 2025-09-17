import React from 'react';

interface StructuredDataProps {
  data: any;
};
export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }};
    />
  );
  };
export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion App",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Revolutionary AI solutions and technology innovations",
  "foundingDate": "2024",
  "sameAs": [
    "https://twitter.com/zionapp",
    "https://linkedin.com/company/zionapp",
    "https://github.com/zion-holdings"
  ];
  };
export const WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zion App",
  "url": "https://ziontechgroup.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ziontechgroup.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  };
  };
export default StructuredData;
