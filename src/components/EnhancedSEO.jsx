import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedSEO = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/images/zion-tech-group-og.jpg',
  url = '',
  type = 'website',
  publishedTime = '',
  modifiedTime = '',
  author = 'Zion Tech Group',
  section = '',
  tags = [],
  structuredData = null,
  canonical = '',
  noindex = false,
  nofollow = false,
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
  themeColor = '#22ddd2',
  manifest = '/manifest.json',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  msTileColor = '#22ddd2'
}) => {
  // Default structured data if none provided
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions, IT services, and innovative technology consulting for modern enterprises.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Technology Services",
      "description": "AI-powered business solutions, IT consulting, and digital transformation services"
    }
  };

  // Page-specific structured data
  const pageStructuredData = structuredData || {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `https://ziontechgroup.com${url}`,
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    }
  };

  // Generate meta keywords string
  const metaKeywords = keywords.length > 0 ? keywords.join(', ') : 
    'AI solutions, IT services, business technology, digital transformation, cloud computing, cybersecurity, data analytics, machine learning, artificial intelligence, Zion Tech Group';

  // Generate meta tags string
  const metaTags = tags.length > 0 ? tags.join(', ') : '';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msTileColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://ziontechgroup.com${image}`} />
      <meta property="og:url" content={`https://ziontechgroup.com${url}`} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {metaTags && <meta property="article:tag" content={metaTags} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://ziontechgroup.com${image}`} />
      <meta name="twitter:image:alt" content={`${title} - Zion Tech Group`} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Favicons and Icons */}
      <link rel="icon" type="image/x-icon" href={favicon} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="manifest" href={manifest} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(pageStructuredData)}
      </script>
      
      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
      
      {/* Additional Meta Tags for SEO */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Additional Open Graph Tags for Business */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={`${title} - Zion Tech Group`} />
      
      {/* Business Information */}
      <meta property="business:contact_data:street_address" content="Your Street Address" />
      <meta property="business:contact_data:locality" content="Your City" />
      <meta property="business:contact_data:region" content="Your State" />
      <meta property="business:contact_data:postal_code" content="Your ZIP Code" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:phone_number" content="+1-XXX-XXX-XXXX" />
      
      {/* Additional Twitter Tags */}
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="3 minutes" />
      
      {/* Language and Region */}
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="de_DE" />
      
      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Search Engine Optimization */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Performance and Caching */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Expires" content="31536000" />
      
      {/* Accessibility */}
      <meta name="accessibility-control" content="full" />
      <meta name="accessibility-feature" content="high-contrast, large-text, reduced-motion" />
      
      {/* Content Security Policy */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;" />
    </Helmet>
  );
};

export default EnhancedSEO;
