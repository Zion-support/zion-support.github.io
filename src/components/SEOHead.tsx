import React from 'react';
import Head from 'next/head';
import { SEOProps } from '../types';


}) => {
  const siteUrl = 'https://ziontechgroup.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Leading-edge technology solutions and autonomous innovation platform",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "https://github.com/Zion-Holdings",
      "https://linkedin.com/company/zion-tech-group"
    ]
  };

  return (

      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />

  );
};

export default SEOHead;
