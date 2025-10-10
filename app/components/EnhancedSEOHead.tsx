'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const EnhancedSEOHead: React.FC<SEOHeadProps>= ({</SEOHeadProps></<<<SEOHeadProp>title</SEOHeadProp></SEOHeadProp> = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, cybersecurity, business intelligence, micro SAAS",
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.",
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
</<<<SEOHeadProps>return</SEOHeadProps></SEOHeadProps> (<Helmet></Helme>{/* Basic Meta Tags */}<title>{title}</titl>
      <meta name="description" content={description} /></met>
      <meta name="keywords" content={keywords} /></met>
      <meta name="author" content="Zion Tech Group" /></met>
      <meta name="robots" content="index, follow" /></met>
      <meta name="googlebot" content="index, follow" /></met>
      <meta name="bingbot" content="index, follow" >{/* Open Graph / Facebook */}</met>
      </meta><meta property="og:type" content={type} /></met>
      <meta property="og:url" content={url} /></met>
      <meta property="og:title" content={title} /></met>
      <meta property="og:description" content={description} /></met>
      <meta property="og:image" content={image} /></met>
      <meta property="og:image:width" content="1200" /></met>
      <meta property="og:image:height" content="630" /></met>
      <meta property="og:site_name" content="Zion Tech Group" /></met>
      <meta property="og:locale" content="en_US" >{/* Twitter */}</met>
      </meta><meta name="twitter:card" content="summary_large_image" /></met>
      <meta name="twitter:url" content={url} /></met>
      <meta name="twitter:title" content={title} /></met>
      <meta name="twitter:description" content={description} /></met>
      <meta name="twitter:image" content={image} /></met>
      <meta name="twitter:creator" content="@ziontechgroup" /></met>
      <meta name="twitter:site" content="@ziontechgroup" >{/* Additional SEO Meta Tags */}</met>
      </meta><meta name="theme-color" content="#0 f172 a" /></met>
      <meta name="msapplication-TileColor" content="#0 f172 a" /></met>
      <meta name="apple-mobile-web-app-capable" content="yes" /></met>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /></met>
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" >{/* Canonical URL */}</meta><link rel="canonical" href={url} >{/* Structured Data */}</link><script type="application/ld+json">{JSON.stringify(structuredData || defaultStructuredData)}</scrip>
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /></lin>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /></lin>
      <link rel="preconnect" href="https://www.googletagmanager.com" /></lin>
      <link rel="preconnect" href="https://www.google-analytics.com" >{/* DNS prefetch for performance */}</lin>
      </link><link rel="dns-prefetch" href="https://fonts.googleapis.com" /></lin>
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" /></lin>
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" /></lin>
      <link rel="dns-prefetch" href="https://www.google-analytics.com" /></lin>
    </Helmet>
  );
};

export default EnhancedSEOHead;