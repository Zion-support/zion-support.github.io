#!/usr/bin/env node

import fs from 'fs';

function fixSEOHead() {
  const seoHeadContent = `'use client';
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
      "contactType": "sales",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Solutions",
        "description": "Comprehensive artificial intelligence solutions for business transformation"
      },
      {
        "@type": "Service", 
        "name": "Cloud Infrastructure",
        "description": "Scalable and secure cloud solutions for modern businesses"
      },
      {
        "@type": "Service",
        "name": "Cybersecurity",
        "description": "Advanced security solutions to protect digital assets"
      },
      {
        "@type": "Service",
        "name": "IT Consulting",
        "description": "Strategic IT consulting to optimize business operations"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Zion Tech Group - AI & IT Solutions | Digital Transformation Experts</title>
      <meta name="title" content="Zion Tech Group - AI & IT Solutions | Digital Transformation Experts" />
      <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology, cloud infrastructure, cybersecurity, and digital transformation services." />
      <meta name="keywords" content="AI solutions, IT services, cloud computing, cybersecurity, digital transformation, business automation, machine learning, data analytics, software development" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com/" />
      <meta property="og:title" content="Zion Tech Group - AI & IT Solutions | Digital Transformation Experts" />
      <meta property="og:description" content="Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology, cloud infrastructure, cybersecurity, and digital transformation services." />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ziontechgroup.com/" />
      <meta property="twitter:title" content="Zion Tech Group - AI & IT Solutions | Digital Transformation Experts" />
      <meta property="twitter:description" content="Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology, cloud infrastructure, cybersecurity, and digital transformation services." />
      <meta property="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ziontechgroup.com/" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEOHead;`;

  fs.writeFileSync('/workspace/app/components/EnhancedSEOHead.tsx', seoHeadContent);
  console.log('Fixed EnhancedSEOHead component');
}

fixSEOHead();