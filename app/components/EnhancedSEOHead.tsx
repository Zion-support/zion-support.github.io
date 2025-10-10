'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedSEOHead: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "kleber@ziontechgroup.com",
      "telephone": "+1-302-464-0950"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "description": "AI and IT solutions for businesses",
      "category": "Technology Services"
    }
  };

  return (
    <Helmet>
      <title>Zion Tech Group - AI & IT Solutions | Technology Services</title>
      <meta name="description" content="Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services." />
      <meta name="keywords" content="AI solutions, IT services, technology consulting, digital transformation, cybersecurity, cloud computing, Zion Tech Group" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com/" />
      <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
      <meta property="og:description" content="Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services." />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.png" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ziontechgroup.com/" />
      <meta property="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
      <meta property="twitter:description" content="Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services." />
      <meta property="twitter:image" content="https://ziontechgroup.com/og-image.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ziontechgroup.com/" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEOHead;