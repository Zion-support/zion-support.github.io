import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  readingTime?: number;
  wordCount?: number;
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({
  title,
  description,
  keywords = '',
  canonical = '',
  ogImage = '/api/placeholder/1200/630',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = [],
  readingTime,
  wordCount
}) => {
  const siteUrl = 'https://ziontechgroup.com';
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const currentTime = new Date().toISOString();

  // Enhanced structured data
  const enhancedStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logo.svg`,
      "width": 200,
      "height": 200
    },
    "description": "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.",
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
      "email": "kleber@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Solutions",
      "IT Services", 
      "Micro SAAS",
      "5G Solutions",
      "Digital Transformation"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services",
        "category": "Technology Services"
      },
      {
        "@type": "Offer",
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity solutions and protection",
        "category": "Security Services"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure",
        "description": "Cloud computing and infrastructure services",
        "category": "Cloud Services"
      }
    ],
    ...structuredData
  };

  // Article structured data if it's an article
  const articleStructuredData = ogType === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullOgImage,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.svg`
      }
    },
    "datePublished": publishedTime || currentTime,
    "dateModified": modifiedTime || currentTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonical
    },
    "articleSection": section,
    "keywords": tags.join(', '),
    "wordCount": wordCount,
    "timeRequired": readingTime ? `PT${readingTime}M` : undefined
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph */}
      {ogType === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="author" content={author} />
      <meta name="generator" content="React + Vite" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(enhancedStructuredData)}
      </script>
      
      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}
      
      {/* Additional Performance Optimizations */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="color-scheme" content="dark light" />
    </Helmet>
  );
};

export default EnhancedSEOOptimizer;