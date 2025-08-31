import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: Record<string, any>;
  noIndex?: boolean;
  noFollow?: boolean;
}

interface EnhancedSEOProps {
  data: SEOData;
  pageType?: 'home' | 'service' | 'about' | 'contact' | 'blog' | 'case-study';
  organization?: {
    name: string;
    logo: string;
    url: string;
    description: string;
  };
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ 
  data, 
  pageType = 'website',
  organization = {
    name: 'Zion Tech Group',
    logo: '/logo.png',
    url: 'https://ziontechgroup.com',
    description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud computing, and digital transformation.'
  }
}) => {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = '/og-image.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData,
    noIndex = false,
    noFollow = false
  } = data;

  // Enhanced meta description
  const enhancedDescription = useMemo(() => {
    const baseDescription = description;
    const companySuffix = ' | Zion Tech Group - AI-Powered Technology Solutions';
    
    if (baseDescription.length > 150) {
      return baseDescription.substring(0, 147) + '...' + companySuffix;
    }
    
    return baseDescription + companySuffix;
  }, [description]);

  // Enhanced title
  const enhancedTitle = useMemo(() => {
    const baseTitle = title;
    const companySuffix = ' | Zion Tech Group';
    
    if (baseTitle.length > 50) {
      return baseTitle.substring(0, 47) + '...' + companySuffix;
    }
    
    return baseTitle + companySuffix;
  }, [title]);

  // Default structured data
  const defaultStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": organization.name,
    "url": organization.url,
    "logo": organization.logo,
    "description": organization.description,
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "100-500",
    "industry": "Technology",
    "serviceType": [
      "Artificial Intelligence",
      "Cybersecurity",
      "Cloud Computing",
      "Digital Transformation",
      "Edge Computing",
      "Micro SaaS Solutions"
    ]
  }), [organization]);

  // Page-specific structured data
  const pageStructuredData = useMemo(() => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": enhancedTitle,
      "description": enhancedDescription,
      "url": canonical || window.location.href,
      "mainEntity": {
        "@type": "Organization",
        "name": organization.name
      }
    };

    switch (pageType) {
      case 'home':
        return {
          ...baseData,
          "@type": "WebSite",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        };
      
      case 'service':
        return {
          ...baseData,
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": organization.name
          },
          "serviceType": "Technology Solutions",
          "areaServed": "Worldwide"
        };
      
      case 'blog':
        return {
          ...baseData,
          "@type": "BlogPosting",
          "author": {
            "@type": "Organization",
            "name": organization.name
          },
          "publisher": {
            "@type": "Organization",
            "name": organization.name,
            "logo": {
              "@type": "ImageObject",
              "url": organization.logo
            }
          }
        };
      
      default:
        return baseData;
    }
  }, [pageType, enhancedTitle, enhancedDescription, canonical, organization]);

  // Enhanced keywords
  const enhancedKeywords = useMemo(() => {
    const baseKeywords = [
      'Zion Tech Group',
      'AI Solutions',
      'Cybersecurity',
      'Cloud Computing',
      'Digital Transformation',
      'Technology Solutions',
      'Machine Learning',
      'Edge Computing',
      'Micro SaaS',
      'Quantum Computing'
    ];
    
    return [...new Set([...keywords, ...baseKeywords])].join(', ');
  }, [keywords]);

  // Meta robots
  const robotsMeta = useMemo(() => {
    const directives = [];
    
    if (noIndex) directives.push('noindex');
    if (noFollow) directives.push('nofollow');
    
    if (directives.length === 0) {
      directives.push('index', 'follow');
    }
    
    return directives.join(', ');
  }, [noIndex, noFollow]);

  // Enhanced Open Graph data
  const ogData = useMemo(() => ({
    title: enhancedTitle,
    description: enhancedDescription,
    type: ogType,
    url: canonical || window.location.href,
    image: ogImage,
    siteName: organization.name,
    locale: 'en_US'
  }), [enhancedTitle, enhancedDescription, ogType, canonical, ogImage, organization.name]);

  // Enhanced Twitter data
  const twitterData = useMemo(() => ({
    card: twitterCard,
    site: '@ziontechgroup',
    creator: '@ziontechgroup',
    title: enhancedTitle,
    description: enhancedDescription,
    image: ogImage
  }), [twitterCard, enhancedTitle, enhancedDescription, ogImage]);

  // Inject structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      ...defaultStructuredData,
      ...pageStructuredData,
      ...structuredData
    });
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [defaultStructuredData, pageStructuredData, structuredData]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{enhancedTitle}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="robots" content={robotsMeta} />
      <meta name="author" content={organization.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:type" content={ogData.type} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta property="og:locale" content={ogData.locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterData.card} />
      <meta name="twitter:site" content={twitterData.site} />
      <meta name="twitter:creator" content={twitterData.creator} />
      <meta name="twitter:title" content={twitterData.title} />
      <meta name="twitter:description" content={twitterData.description} />
      <meta name="twitter:image" content={twitterData.image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={organization.name} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional SEO */}
      <meta name="application-name" content={organization.name} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};