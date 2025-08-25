import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOConfigs {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

interface SEOHeadProps {
  config: SEOConfigs;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({ config, children }) => {
  const {
    title,
    description,
    keywords,
    author = 'Zion Tech Group',
    image = '/images/zion-tech-group-og.jpg',
    url,
    type = 'website',
    structuredData
  } = config;

  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.",
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
      "https://www.linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup",
      "https://www.youtube.com/@ziontechgroup"
    ],
    "foundingDate": "2015",
    "numberOfEmployees": "50-100",
    "serviceArea": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Autonomous Systems",
            "description": "Advanced artificial intelligence and autonomous system solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Technology Solutions",
            "description": "Cutting-edge quantum computing and technology services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Services",
            "description": "Comprehensive cybersecurity and compliance solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Micro SaaS Solutions",
            "description": "Scalable software-as-a-service applications"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || 'AI marketplace, tech services, artificial intelligence, IT services, AI developers, technology marketplace, AI solutions, machine learning, digital transformation, micro SaaS, quantum computing, blockchain, cybersecurity, edge computing, metaverse'} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url || 'https://ziontechgroup.com'} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Scripts */}
      {children}
    </Helmet>
  );
};

export default SEOHead;