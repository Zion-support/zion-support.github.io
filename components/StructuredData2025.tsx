'use client';

import React from 'react';

const StructuredData2025 = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Transform your business with cutting-edge AIcloud infrastructureand micro SaaS solutions. Expert consulting and implementation services.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Innovation Solutions",
        "description": "Cutting-edge AI technologies and automation solutions",
        "url": "https://ziontechgroup.com/ai-innovation-showcase-2025"
      },
      {
        "@type": "Offer",
        "name": "Interactive Tech Demos",
        "description": "Hands-on demonstrations of our latest technologies",
        "url": "https://ziontechgroup.com/interactive-tech-demo-2025"
      },
      {
        "@type": "Offer",
        "name": "Ultimate Content Showcase",
        "description": "Revolutionary AI content and digital transformation strategies",
        "url": "https://ziontechgroup.com/ultimate-content-showcase-2025"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "AI & Technology Solutions for Modern Businesses",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Technology Solutions",
    "description": "Comprehensive AIautomationand cloud infrastructure solutions for businesses",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "serviceType": "Technology Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Innovation Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automation Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Infrastructure"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  );
};

export default StructuredData2025;