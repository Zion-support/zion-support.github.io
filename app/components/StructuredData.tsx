import React from 'react';

const StructuredData: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ziontechgroup.com/#organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ziontechgroup.com/logo.png",
          "width": "200",
          "height": "60"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://x.com/ziontechgroup",
          "https://www.linkedin.com/company/zion-tech-group",
          "https://github.com/Zion-Holdings/zion.app"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ziontechgroup.com/#website",
        "url": "https://ziontechgroup.com",
        "name": "Zion Tech Group - AI & Technology Solutions",
        "description": "Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.",
        "publisher": {
          "@id": "https://ziontechgroup.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://ziontechgroup.com/#webpage",
        "url": "https://ziontechgroup.com",
        "name": "Zion Tech Group - AI & Technology Solutions",
        "isPartOf": {
          "@id": "https://ziontechgroup.com/#website"
        },
        "about": {
          "@id": "https://ziontechgroup.com/#organization"
        },
        "description": "Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.",
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://ziontechgroup.com"]
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;