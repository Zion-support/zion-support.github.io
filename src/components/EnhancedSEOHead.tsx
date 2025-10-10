import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;

  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",

    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Information Technology",
    "services": [
      "AI Solutions",
      "Machine Learning",
      "Quantum Computing",
      "Digital Transformation",
      "IT Services",
      "Cybersecurity",
      "Cloud Computing",
      "Automation"
    ]
  };


  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      

    </Helmet>
  );
};


export default EnhancedSEOHead;

