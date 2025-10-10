'use client';

import React from 'react';
import {Helmet } from 'react-helmet-async';

interface SEOHeadProps {title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const EnhancedSEOHead: React.FC<SEOHeadProps>= ({title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, cybersecurity, business intelligence, micro SAAS",
  image = "https: //ziontechgroup.com/og-image.jpg",
  url = "https: //ziontechgroup.com",
  type = "website",
  structuredData;
}) => {const defaultStructuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {"@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https: //linkedin.com/company/zion-tech-group",
      "https: //twitter.com/ziontechgroup",
      "https: //github.com/zion-tech-group",
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
</SEOHeadProps>
  return (
    <Helmet>{/* Basic Meta Tags */}<title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" >{/* Open Graph / Facebook */}</meta>
      </meta><meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" >{/* Twitter */}</meta>
      </meta><meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:site" content="@ziontechgroup" >{/* Additional SEO Meta Tags */}</meta>
      </meta><meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" >{/* Canonical URL */}<link rel="canonical" href={url} >{/* Structured Data */}<script type="application/ld+json">{JSON.stringify(structuredData || defaultStructuredData)}</script>
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
